import { MCPConfig, MCPLog, MCPRequest, MCPResponse, MCPService } from '../types';
import { HttpException } from '../utils/errorHandler.js';

class MCPServiceImpl implements MCPService {
  private config: MCPConfig = {
    targetUrl: process.env.MCP_TARGET_URL || 'https://api.target-service.com',
    proxyHeaders: process.env.MCP_PROXY_HEADERS === 'true',
    logRequests: process.env.MCP_LOG_REQUESTS === 'true',
    allowedMethods: (process.env.MCP_ALLOWED_METHODS || 'GET,POST,PUT,DELETE').split(','),
    timeout: Number(process.env.MCP_TIMEOUT) || 30000, // 30s default
  };

  private logs: MCPLog[] = [];
  private readonly MAX_LOGS = 1000;

  getConfig(): MCPConfig {
    return { ...this.config };
  }

  updateConfig(config: Partial<MCPConfig>): void {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  getLogs(limit = 100): MCPLog[] {
    return this.logs.slice(-Math.min(limit, this.logs.length));
  }

  async forwardRequest(request: MCPRequest): Promise<MCPResponse> {
    const { requestId, method, path, headers, query, body } = request;
    const startTime = Date.now();

    // Validate that the method is allowed
    if (!this.config.allowedMethods.includes(method)) {
      throw new HttpException(405, `Method ${method} not allowed`);
    }

    // Build the URL with query parameters
    let url = `${this.config.targetUrl}${path}`;
    if (query && Object.keys(query).length > 0) {
      const searchParams = new URLSearchParams();
      Object.keys(query).forEach((key) => {
        searchParams.append(key, query[key]);
      });

      url += `?${searchParams.toString()}`;
    }

    // Prepare headers
    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Add proxy headers if enabled
    if (this.config.proxyHeaders) {
      Object.keys(headers).forEach((key) => {
        // Exclude certain headers that shouldn't be proxied
        if (!['host', 'connection', 'content-length', 'cookie'].includes(key.toLowerCase())) {
          requestHeaders[key] = headers[key];
        }
      });
    }

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      // Get response headers
      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      // Create the MCP response
      const responseBody = await this.parseResponseBody(response);
      const mcpResponse: MCPResponse = {
        requestId,
        statusCode: response.status,
        headers: responseHeaders,
        body: responseBody,
      };

      // Log the request if enabled
      if (this.config.logRequests) {
        this.logRequest({
          timestamp: new Date().toISOString(),
          requestId,
          method,
          path,
          statusCode: response.status,
          responseTime: Date.now() - startTime,
        });
      }

      return mcpResponse;
    } catch (error) {
      // Handle timeout or other fetch errors
      console.log(typeof error);

      const statusCode = error.name === 'AbortError' ? 504 : 502;
      const errorMessage =
        error.name === 'AbortError' ? 'Request timeout' : `Gateway error: ${error.message}`;

      // Log the error if enabled
      if (this.config.logRequests) {
        this.logRequest({
          timestamp: new Date().toISOString(),
          requestId,
          method,
          path,
          statusCode,
          responseTime: Date.now() - startTime,
        });
      }

      throw new HttpException(statusCode, errorMessage);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async parseResponseBody(response: Response): Promise<any> {
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      try {
        return await response.json();
      } catch {
        return { message: 'Invalid JSON response' };
      }
    } else if (contentType.includes('text/')) {
      return await response.text();
    } else {
      // For binary data, return a message indicating binary data
      return { message: 'Binary data response', contentType };
    }
  }

  private logRequest(log: MCPLog): void {
    this.logs.push(log);

    // Keep logs under the maximum size
    if (this.logs.length > this.MAX_LOGS) {
      this.logs = this.logs.slice(-this.MAX_LOGS);
    }
  }
}

export default new MCPServiceImpl();
