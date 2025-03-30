import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fetch from 'node-fetch';
import { config } from 'dotenv';
import { tools } from '../tools/index.js';

// 환경변수 로드
config();

const PROXY_PORT = process.env.PROXY_PORT || 3001;
const MCP_SERVER_URL = process.env.MCP_SERVER_URL || 'http://localhost:3000';

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

// 상태 확인 엔드포인트
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'mcp-proxy',
    timestamp: new Date().toISOString(),
  });
});

// 사용 가능한 도구 목록 제공 엔드포인트
app.get('/tools', (req, res) => {
  const toolsList = Object.entries(tools).map(([name, tool]) => ({
    name,
    description: tool.description,
    parameters: tool.parameters,
  }));

  res.json(toolsList);
});

// MCP 엔드포인트 - 요청을 MCP 서버로 전달
app.post('/mcp', async (req, res) => {
  try {
    console.log('프록시 서버: MCP 요청 수신', req.body.name);

    // MCP 서버로 요청 전달
    const response = await fetch(`${MCP_SERVER_URL}/mcp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MCP 서버 응답 오류:', response.status, errorText);
      return res.status(response.status).send(errorText);
    }

    const data = await response.json();
    console.log('프록시 서버: MCP 응답 전달');
    res.json(data);
  } catch (error) {
    console.error('프록시 서버 오류:', error);
    res.status(500).json({
      error: `프록시 서버 오류: ${(error as Error).message}`,
    });
  }
});

// API 프록시 엔드포인트
app.all('/api/*', async (req, res) => {
  try {
    console.log(req.path, req.headers);
    const originalUrl = (req.headers['x-original-url'] as string).replace('cc', 'c');

    if (!originalUrl) {
      return res.status(400).json({ error: 'X-Original-Url header is missing' });
    }

    // API 경로 추출 (예: /api/rest/api/space → /rest/api/space)
    const apiPath = req.path.replace('/api', '');

    // 오리지널 URL과 API 경로를 결합
    const targetUrl = new URL(apiPath, originalUrl);

    // Object.entries 사용
    Object.entries(req.query).forEach(([key, value]) => {
      value && targetUrl.searchParams.append(key, value?.toString());
    });

    const targetUrlString = targetUrl.toString();

    console.log(`프록시 요청: ${req.method} ${targetUrlString}`);

    // 헤더 준비 (X-Original-Url은 제외)
    const headers: Record<string, string> = { ...(req.headers as Record<string, string>) };
    delete headers['x-original-url'];
    delete headers['host'];

    // Confluence로 요청 전달
    const response = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: ['POST', 'PUT', 'PATCH'].includes(req.method) ? JSON.stringify(req.body) : undefined,
    });

    // 응답 처리
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return res.status(response.status).json(data);
    } else {
      const text = await response.text();
      return res.status(response.status).send(text);
    }
  } catch (error) {
    console.error('API 프록시 오류:', error);
    res.status(500).json({
      error: `API 프록시 오류: ${(error as Error).message}`,
    });
  }
});

// 서버 시작
const startProxyServer = () => {
  app.listen(PROXY_PORT, () => {
    console.log(`MCP 프록시 서버가 포트 ${PROXY_PORT}에서 실행 중입니다`);
    console.log(`MCP 엔드포인트: http://localhost:${PROXY_PORT}/mcp`);
    console.log(`API 프록시 엔드포인트: http://localhost:${PROXY_PORT}/api/*`);
    console.log(`도구 목록: http://localhost:${PROXY_PORT}/tools`);
    console.log(`MCP 서버 URL: ${MCP_SERVER_URL}`);
  });
};

// 서버 시작 함수 실행
startProxyServer();
