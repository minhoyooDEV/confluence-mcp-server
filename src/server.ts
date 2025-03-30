import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
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

// 서버 시작
const start = async () => {
  try {
    const transport = new StdioServerTransport();
    await mcpServer.connect(transport);
    console.log('Stdio 전송 계층이 추가로 활성화되었습니다.');
  } catch (error) {
    console.error('Failed to start MCP server:', error);
    process.exit(1);
  }
};

// 서버 시작
start();
