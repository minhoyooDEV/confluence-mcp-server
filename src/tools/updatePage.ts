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
            text: `페이지가 성공적으로 업데이트되었습니다!\n\n페이지 ID: ${result.id}\n제목: ${result.title}\n스페이스: ${result.space?.key || '알 수 없음'}\n새 버전: ${result.version.number}\n문서 링크: ${result._links.webui}\n\n${JSON.stringify(result, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('updatePage tool error:', error);
      return {
        content: [
          {
            type: 'text',
            text: `페이지 업데이트 중 오류가 발생했습니다: ${(error as Error).message}`,
          },
        ],
      };
    }
  },
};

export default updatePageTool;
