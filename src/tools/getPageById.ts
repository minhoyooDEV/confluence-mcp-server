import { MCPTool } from '@/types/mcp.js';
import { z } from 'zod';
import confluenceService from '../services/confluenceService.js';

const getPageByIdTool: MCPTool = {
  name: 'getPageById',
  description: 'ID로 특정 페이지 정보를 가져옵니다.',
  parameters: {
    pageId: z.string().describe('페이지 ID'),
  },
  handler: async ({ pageId }) => {
    try {
      const result = await confluenceService.getPageById(pageId);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('getPageById tool error:', error);
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${(error as Error).message}`,
          },
        ],
      };
    }
  },
};

export default getPageByIdTool;
