export interface ConfluenceSpace {
  id: string;
  key: string;
  name: string;
  type: string;
  _links: {
    webui: string;
    self: string;
  };
}

export interface ConfluencePageContent {
  id: string;
  type: string;
  status: string;
  title: string;
  space?: {
    key: string;
    name?: string;
  };
  body?: {
    storage: {
      value: string;
      representation: string;
    };
  };
  version: {
    number: number;
  };
  _links: {
    webui: string;
    self: string;
  };
}

export interface CreatePageParams {
  title: string;
  spaceKey: string;
  content: string;
}

export interface UpdatePageParams {
  title?: string;
  content: string;
  version?: number;
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
}

// Export MCP types
export * from './mcp';
