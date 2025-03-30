import createPageTool from './create-page.js';
import getPageByIdTool from './get-page-by-id.js';
import getPagesInSpaceTool from './get-pages-in-space.js';
import allSpacesTool from './all-spaces.js';
import updatePageTool from './update-page.js';
import searchContentTool from './search-content.js';
import { MCPTool } from '../types/mcp.js';

export const tools = {
  [allSpacesTool.name]: allSpacesTool,
  [getPagesInSpaceTool.name]: getPagesInSpaceTool,
  [getPageByIdTool.name]: getPageByIdTool,
  [createPageTool.name]: createPageTool,
  [updatePageTool.name]: updatePageTool,

  // 검색 툴
  [searchContentTool.name]: searchContentTool,
} as Record<string, MCPTool>;

export default tools;
