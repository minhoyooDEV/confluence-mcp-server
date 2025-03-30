import { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { ZodRawShape } from 'zod';

// MCP 관련 타입 정의
export interface MCPRequest {
  requestId: string;
  method: string;
  path: string;
  headers: Record<string, string>;
  query?: Record<string, string>;
  body?: any;
}

export interface MCPResponse {
  requestId: string;
  statusCode: number;
  headers: Record<string, string>;
  body: any;
}

export interface MCPLog {
  timestamp: string;
  requestId: string;
  method: string;
  path: string;
  statusCode: number;
  responseTime: number;
}

export interface MCPConfig {
  targetUrl: string;
  proxyHeaders: boolean;
  logRequests: boolean;
  allowedMethods: string[];
  timeout: number;
}

export interface MCPService {
  forwardRequest: (request: MCPRequest) => Promise<MCPResponse>;
  getConfig: () => MCPConfig;
  updateConfig: (config: Partial<MCPConfig>) => void;
  getLogs: (limit?: number) => MCPLog[];
}

export type MCPTool<Schema = ZodRawShape> = {
  name: string;
  description: string;
  parameters: Schema;
  handler: ToolCallback<Schema extends ZodRawShape ? Schema : undefined>;
};
