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
            text: `페이지 ID: ${pageId}\n제목: ${result.title}\n스페이스: ${result.space?.key || '알 수 없음'}\n버전: ${result.version.number}\n\n${JSON.stringify(result, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('getPageById tool error:', error);
      return {
        content: [
          {
            type: 'text',
            text: `오류가 발생했습니다: ${(error as Error).message}`,
          },
        ],
      };
    }
  },
};

export default getPageByIdTool;
