import { MCPTool } from '@/types/mcp.js';
import confluenceService from '../services/confluenceService.js';

const getSpacesTool: MCPTool = {
  name: 'getSpaces',
  description: '모든 Confluence 스페이스 목록을 가져옵니다.',
  parameters: {},
  handler: async () => {
    try {
      const result = await confluenceService.getSpaces();

      // 결과 수 확인
      const spacesCount = result.results.length;

      return {
        content: [
          {
            type: 'text',
            text: `전체 스페이스 수: ${spacesCount}이(가) 조회되었습니다.\n\n${JSON.stringify(result, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('getSpaces tool error:', error);
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

export default getSpacesTool;
