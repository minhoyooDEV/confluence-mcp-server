import { MCPTool } from '@/types/mcp.js';
import { z } from 'zod';
import confluenceService from '../services/confluenceService.js';

const createPageTool: MCPTool = {
  name: 'createPage',
  description: '새 페이지를 생성합니다.',
  parameters: {
    title: z.string().describe('페이지 제목'),
    spaceKey: z.string().describe('스페이스 키'),
    content: z.string().describe('페이지 내용'),
  },
  handler: async ({ title, spaceKey, content }) => {
    try {
      const result = await confluenceService.createPage({ title, spaceKey, content });
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('createPage tool error:', error);
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

export default createPageTool;
