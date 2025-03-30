import type { Request, Response, NextFunction } from 'express';
import type { ErrorResponse } from '../types';

export class HttpException extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'HttpException';
    Object.setPrototypeOf(this, HttpException.prototype); // Ensure instanceof works correctly
  }
}

export const errorHandler = (
  err: Error | HttpException,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode = 'statusCode' in err ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  const errorResponse: ErrorResponse = {
    statusCode,
    message,
    timestamp: new Date().toISOString(),
    path: req.path,
  };

  // Using console.error for server errors is acceptable
  // eslint-disable-next-line no-console
  console.error(`[Error] ${errorResponse.timestamp} - ${statusCode}: ${message}`);

  res.status(statusCode).json(errorResponse);
};
