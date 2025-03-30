import config from '../config.js';
import { HttpException } from '../utils/errorHandler.js';

class ProxyService {
  private readonly baseUrl: string;
  private readonly proxyUrl: string;
  private readonly headers: Record<string, string>;

  constructor() {
    // 환경 변수에서 직접 가져와서 확인
    const envBaseUrl = process.env.CONFLUENCE_BASE_URL || '';
    const configBaseUrl = config.confluenceBaseUrl;

    // 디버깅을 위한 로그 추가
    console.log('Environment CONFLUENCE_BASE_URL:', envBaseUrl);
    console.log('Config confluenceBaseUrl:', configBaseUrl);

    // 수정: .ccom을 .com으로 변경하여 오타 수정
    this.baseUrl = (configBaseUrl || envBaseUrl).replace('.ccom', '.com');
    this.proxyUrl = config.proxyUrl || 'http://localhost:33001/api';

    // 수정된 baseUrl 확인
    console.log('Final baseUrl after correction:', this.baseUrl);

    this.headers = {
      ...config.headers,
      'X-Original-Url': this.baseUrl,
    };

    // 최종 헤더 확인
    console.log('Headers set for proxy:', this.headers);
  }

  async sendRequest<T>(endpoint: string, method: string = 'GET', body?: object): Promise<T> {
    const url = `${this.proxyUrl}${endpoint}`;

    try {
      console.log(`Sending ${method} request to proxy: ${url}`);
      console.log('With headers:', this.headers);

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
