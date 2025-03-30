import config from '../config.js';
import { HttpException } from '../utils/errorHandler.js';

class ProxyService {
  private readonly baseUrl: string;
  private readonly proxyUrl: string;
  private readonly headers: Record<string, string>;

  constructor() {
    const envBaseUrl = process.env.CONFLUENCE_BASE_URL || '';
    const configBaseUrl = config.confluenceBaseUrl;

    this.baseUrl = (configBaseUrl || envBaseUrl).replace('.ccom', '.com');
    this.proxyUrl = config.proxyUrl || 'http://localhost:33001/api';

    this.headers = {
      ...config.headers,
      'X-Original-Url': this.baseUrl,
    };
  }

  async sendRequest<T>(endpoint: string, method: string = 'GET', body?: object): Promise<T> {
    const url = `${this.proxyUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method,
        headers: this.headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Proxy API Error (${response.status}): ${errorData}`);
        throw new HttpException(
          response.status,
          `Proxy request failed: ${response.statusText}. Details: ${errorData}`,
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error(`Proxy service error: ${error}`);
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        500,
        `Error in proxy request to ${endpoint}: ${(error as Error).message}`,
      );
    }
  }
}

export default new ProxyService();
