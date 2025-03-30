import type { Request, Response, NextFunction } from 'express';
import confluenceService from '../services/confluenceService.js';
import { CreatePageParams, UpdatePageParams } from '../types/index.js';

export const getSpaces = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const spaces = await confluenceService.getSpaces();
    res.json(spaces);
  } catch (error) {
    next(error);
  }
};

export const getPagesInSpace = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { spaceKey } = req.params;
    const pages = await confluenceService.getPagesInSpace(spaceKey);
    res.json(pages);
  } catch (error) {
    next(error);
  }
};

export const getPageById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { pageId } = req.params;
    const page = await confluenceService.getPageById(pageId);
    res.json(page);
  } catch (error) {
    next(error);
  }
};

export const createPage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const params: CreatePageParams = req.body;
    const newPage = await confluenceService.createPage(params);
    res.status(201).json(newPage);
  } catch (error) {
    next(error);
  }
};

export const updatePage = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { pageId } = req.params;
    const params: UpdatePageParams = req.body;
    const updatedPage = await confluenceService.updatePage(pageId, params);
    res.json(updatedPage);
  } catch (error) {
    next(error);
  }
};
