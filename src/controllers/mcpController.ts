import type { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import mcpService from '../services/mcpService.js';
import { MCPRequest } from '../types';

export const proxyRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    console.log(req.path);
    const requestId = (req.headers['x-request-id'] as string) || uuidv4();

    // Extract path from the request
    // The '/mcp' prefix should be removed from the path
    let path = req.path;
    if (path.startsWith('/mcp')) {
      path = path.substring(4);
    }

    // If path is empty, set it to '/'
    if (!path) {
      path = '/';
    }

    // Convert Express request to MCP request
    const mcpRequest: MCPRequest = {
      requestId,
      method: req.method,
      path,
      headers: req.headers as Record<string, string>,
      query: req.query as Record<string, string>,
      body: req.body,
    };

    // Forward the request through the MCP service
    const mcpResponse = await mcpService.forwardRequest(mcpRequest);

    // Set headers from the response
    Object.entries(mcpResponse.headers).forEach(([key, value]) => {
      if (!['transfer-encoding', 'connection'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    // Set the status code and send the response body
    res.status(mcpResponse.statusCode).send(mcpResponse.body);
  } catch (error) {
    next(error);
  }
};

export const getConfig = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const config = mcpService.getConfig();
    res.json(config);
  } catch (error) {
    next(error);
  }
};

export const updateConfig = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    mcpService.updateConfig(req.body);
    const updatedConfig = mcpService.getConfig();
    res.json(updatedConfig);
  } catch (error) {
    next(error);
  }
};

export const getLogs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 100;
    const logs = mcpService.getLogs(limit);
    res.json(logs);
  } catch (error) {
    next(error);
  }
};
