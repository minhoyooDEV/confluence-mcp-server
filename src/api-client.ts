import { getConfig } from './config';

export class ConfluenceClient {
  private baseUrl: string;
  private auth: string;

  constructor() {
    const config = getConfig();
    this.baseUrl = config.CONFLUENCE_BASE_URL;
    this.auth = Buffer.from(`${config.CONFLUENCE_EMAIL}:${config.CONFLUENCE_API_TOKEN}`).toString('base64');
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Basic ${this.auth}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Confluence API error: ${response.status} ${response.statusText} - ${error}`);
      }

      return await response.json() as T;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      throw error;
    }
  }

  async searchContent(query: string, limit: number = 25, start: number = 0, spaceKey?: string) {
    const params = new URLSearchParams({ 
      cql: query,
      limit: limit.toString(),
      start: start.toString()
    });
    
    if (spaceKey) {
      params.append('cqlcontext', JSON.stringify({ spaceKey }));
    }
    
    return this.request(`/wiki/rest/api/search?${params.toString()}`);
  }

  async getAllSpaces(type?: 'global' | 'personal' | 'archived') {
    const params = new URLSearchParams();
    if (type) {
      params.append('type', type);
    }
    
    return this.request(`/wiki/rest/api/space?${params.toString()}`);
  }

  async getPagesInSpace(spaceKey: string, limit: number = 25, start: number = 0, query?: string) {
    const params = new URLSearchParams({
      spaceKey,
      limit: limit.toString(),
      start: start.toString(),
    });
    
    if (query) {
      params.append('query', query);
    }
    
    return this.request(`/wiki/rest/api/space/${spaceKey}/content?${params.toString()}`);
  }

  async getPageById(pageId: string) {
    return this.request(`/wiki/rest/api/content/${pageId}`);
  }

  async createPage(title: string, spaceKey: string, content: string) {
    return this.request('/wiki/rest/api/content', {
      method: 'POST',
      body: JSON.stringify({
        type: 'page',
        title,
        space: { key: spaceKey },
        body: {
          storage: {
            value: content,
            representation: 'storage'
          }
        }
      })
    });
  }

  async updatePage(pageId: string, content: string, title?: string, version?: number) {
    // First, get the current page to get the version number if not provided
    let currentVersion = version;
    if (!currentVersion) {
      const page = await this.getPageById(pageId);
      currentVersion = page.version.number;
    }

    const body: any = {
      type: 'page',
      body: {
        storage: {
          value: content,
          representation: 'storage'
        }
      },
      version: {
        number: currentVersion + 1
      }
    };

    if (title) {
      body.title = title;
    }

    return this.request(`/wiki/rest/api/content/${pageId}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }
}

// Create a singleton instance
export const confluenceClient = new ConfluenceClient();
