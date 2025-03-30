export interface ConfluenceSpace {
  id: string;
  key: string;
  name: string;
  type: string;
  start: number;
  limit: number;
  size: number;
  _links: {
    webui: string;
    self: string;
  };
  _expandable: {
    metadata: string;
    icon: string;
    description: string;
    retentionPolicy: string;
    homepage: string;
  };
}
export interface ConfluenceSpaceList {
  results: ConfluenceSpace[];
  _links: {
    webui: string;
    self: string;
    next: string;
    prev: string;
    base: string;
    context: string;
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

export interface SearchResult<T> {
  query: string;
  results: T[];
  totalSize: number;
  start: number;
  limit: number;
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
}

// Export MCP types
export * from './mcp';
