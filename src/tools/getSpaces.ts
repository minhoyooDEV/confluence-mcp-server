import { MCPTool } from '@/types/mcp.js';
import confluenceService from '../services/confluenceService.js';

const getSpacesTool: MCPTool = {
  name: 'getSpaces',
  description: '모든 Confluence 스페이스 목록을 가져옵니다.',
  parameters: {},
  handler: async () => {
    try {
      const result = await confluenceService.getSpaces();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('getSpaces tool error:', error);
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

export default getSpacesTool;
