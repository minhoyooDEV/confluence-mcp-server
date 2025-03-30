/* eslint-disable @typescript-eslint/ban-ts-comment */
import config from '../config.js';
import {
  ConfluenceSpace,
  ConfluencePageContent,
  CreatePageParams,
  UpdatePageParams,
} from '../types';
import { HttpException } from '../utils/errorHandler.js';

class ConfluenceService {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor() {
    this.baseUrl = config.confluenceBaseUrl;
    this.headers = {
      Authorization: `Bearer ${config.personalAccessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Atlassian-Token': 'no-check',
    };
  }

  async getSpaces(): Promise<{ results: ConfluenceSpace[] }> {
    try {
      console.log(`Fetching spaces from ${this.baseUrl}/rest/api/space`);
      console.log(`Using headers:`, JSON.stringify(this.headers, null, 2));

      const response = await fetch(`${this.baseUrl}/rest/api/space`, {
        headers: this.headers,
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Confluence API Error: ${errorData}`);
        throw new HttpException(
          response.status,
          `Failed to fetch spaces: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as { results: ConfluenceSpace[] };
    } catch (error) {
      console.error(`Detailed error: ${error}`);
      if (error instanceof HttpException) throw error;
      throw new HttpException(500, `Error fetching spaces: ${(error as Error).message}`);
    }
  }

  async getPagesInSpace(spaceKey: string): Promise<{ results: ConfluencePageContent[] }> {
    try {
      const response = await fetch(`${this.baseUrl}/rest/api/space/${spaceKey}/content`, {
        headers: this.headers,
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Confluence API Error: ${errorData}`);
        throw new HttpException(
          response.status,
          `Failed to fetch pages for space ${spaceKey}: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as { results: ConfluencePageContent[] };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        500,
        `Error fetching pages for space ${spaceKey}: ${(error as Error).message}`,
      );
    }
  }

  async getPageById(pageId: string): Promise<ConfluencePageContent> {
    try {
      const response = await fetch(
        `${this.baseUrl}/rest/api/content/${pageId}?expand=body.storage`,
        {
          headers: this.headers,
          method: 'GET',
        },
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Confluence API Error: ${errorData}`);
        throw new HttpException(
          response.status,
          `Failed to fetch page ${pageId}: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as ConfluencePageContent;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(500, `Error fetching page ${pageId}: ${(error as Error).message}`);
    }
  }

  async createPage(params: CreatePageParams): Promise<ConfluencePageContent> {
    const { title, spaceKey, content } = params;

    try {
      const payload = {
        type: 'page',
        title,
        space: { key: spaceKey },
        body: {
          storage: {
            value: content,
            representation: 'storage',
          },
        },
      };

      const response = await fetch(`${this.baseUrl}/rest/api/content`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Confluence API Error: ${errorData}`);
        throw new HttpException(
          response.status,
          `Failed to create page: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as ConfluencePageContent;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(500, `Error creating page: ${(error as Error).message}`);
    }
  }

  async updatePage(pageId: string, params: UpdatePageParams): Promise<ConfluencePageContent> {
    const { title, content, version } = params;

    try {
      // First get the current page to get the version info
      const currentPage = await this.getPageById(pageId);

      const payload = {
        type: 'page',
        title: title || currentPage.title,
        body: {
          storage: {
            value: content,
            representation: 'storage',
          },
        },
        version: {
          number: version || currentPage.version.number + 1,
        },
      };

      const response = await fetch(`${this.baseUrl}/rest/api/content/${pageId}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Confluence API Error: ${errorData}`);
        throw new HttpException(
          response.status,
          `Failed to update page ${pageId}: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as ConfluencePageContent;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(500, `Error updating page ${pageId}: ${(error as Error).message}`);
    }
  }
}

export default new ConfluenceService();
