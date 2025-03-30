import createPageTool from './createPage.js';
import getPageByIdTool from './getPageById.js';
import getPagesInSpaceTool from './getPagesInSpace.js';
import getSpacesTool from './getSpaces.js';
import updatePageTool from './updatePage.js';
import { MCPTool } from '@/types/mcp.js';

export const tools = {
  [getSpacesTool.name]: getSpacesTool,
  [getPagesInSpaceTool.name]: getPagesInSpaceTool,
  [getPageByIdTool.name]: getPageByIdTool,
  [createPageTool.name]: createPageTool,
  [updatePageTool.name]: updatePageTool,
} as Record<string, MCPTool>;

export default tools;
