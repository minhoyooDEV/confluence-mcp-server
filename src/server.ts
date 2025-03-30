import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config.js';
import tools from './tools/index.js';

// MCP 서버 생성
const mcpServer = new McpServer(
  {
    name: 'confluence-mcp',
    description:
      'Confluence MCP Server - Personal Access Token을 사용하여 Confluence API에 접근합니다.',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// MCP 함수 등록
Object.values(tools).forEach((tool) => {
  mcpServer.tool(tool.name, tool.description, tool.parameters, tool.handler);
});

// MCP 서버 transport 연결 및 시작
const start = async () => {
  try {
    // 개발 환경에서는 stdio 사용
    const transport = new StdioServerTransport();
    await mcpServer.connect(transport);
    console.log('Confluence MCP Server has started with StdioServerTransport.');

    // 웹 서버 구성 (실제 HTTPS 연결을 위한 추가 설정)
    if (config.env === 'production') {
      const app = express();

      // 보안 미들웨어
      app.use(cors());
      app.use(helmet());
      app.use(express.json());

      // 상태 확인 엔드포인트
      app.get('/health', (req, res) => {
        res.status(200).json({ status: 'ok' });
      });

      // 서버 시작
      app.listen(config.port, () => {
        console.log(`Express server is running on port ${config.port}`);
      });
    }
  } catch (error) {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
  }
};

// 서버 시작
start();
