import { z } from 'zod';
import confluenceService from '../services/confluenceService.js';
import { MCPTool } from '@/types/mcp.js';

const updatePageTool: MCPTool = {
  name: 'updatePage',
  description: '기존 페이지를 업데이트합니다.',
  parameters: {
    pageId: z.string().describe('페이지 ID'),
    title: z.string().optional().describe('페이지 제목(선택사항)'),
    content: z.string().describe('페이지 내용'),
    version: z.number().optional().describe('페이지 버전(선택사항)'),
  },
  handler: async ({ pageId, title, content, version }) => {
    try {
      const result = await confluenceService.updatePage(pageId, { title, content, version });
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('updatePage tool error:', error);
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

export default updatePageTool;
