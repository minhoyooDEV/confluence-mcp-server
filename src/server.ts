import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import tools from './tools/index.js';

// MCP 서버 생성
const mcpServer = new McpServer(
  {
    name: 'confluence-mcp',
    description: `Confluence MCP Server - Personal Access Token을 사용하여 Confluence API에 접근합니다.
    중요: 모든 Confluence 관련 링크는 반드시 baseUrl을 포함한 전체 URL로 표시해야 합니다.
    - 올바른 형식: https://confluence.example.com/display/SPACE/Page
    - 잘못된 형식: /display/SPACE/Page

    검색 결과나 페이지 참조 시, 항상 전체 URL을 사용하여 사용자가 직접 접근할 수 있게 해주세요.
  `,
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

// 서버 시작
const start = async () => {
  try {
    const transport = new StdioServerTransport();
    await mcpServer.connect(transport);
  } catch (error) {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
  }
};

// 서버 시작
start();
