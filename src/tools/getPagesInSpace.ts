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

      // 결과 수 확인
      const pagesCount = result.results.length;

      return {
        content: [
          {
            type: 'text',
            text: `'${spaceKey}' 스페이스에서 총 ${pagesCount}개의 페이지가 조회되었습니다.\n\n${JSON.stringify(result, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('getPagesInSpace tool error:', error);
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

export default getPagesInSpaceTool;
