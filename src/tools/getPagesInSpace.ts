import { z } from 'zod';
import confluenceService from '../services/confluenceService.js';
import { MCPTool } from '@/types/mcp.js';

const getPagesInSpaceTool: MCPTool = {
  name: 'getPagesInSpace',
  description: '특정 스페이스 내의 모든 페이지를 가져옵니다.',
  parameters: {
    spaceKey: z.string().describe('스페이스 키'),
  },
  handler: async ({ spaceKey }) => {
    try {
      const result = await confluenceService.getPagesInSpace(spaceKey);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('getPagesInSpace tool error:', error);
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

export default getPagesInSpaceTool;
