import z from 'zod';
import { MCPTool } from '../types/mcp.js';
import confluenceService from '../services/confluenceService.js';
import { ConfluenceSpace } from '@/types/index.js';

// Zod 스키마 정의
const allSpacesSchema = z.object({
  type: z
    .enum(['global', 'personal', 'archived'])
    .optional()
    .describe('스페이스 타입 필터 (선택 사항)'),
});

const allSpacesTool: MCPTool<typeof allSpacesSchema.shape> = {
  name: 'allSpaces',
  description: '모든 Confluence 스페이스를 출력합니다.',
  parameters: allSpacesSchema.shape,
  handler: async (params) => {
    try {
      const { type } = params;

      // 한 번에 25개씩 가져오도록 변경
      const limit = 25;
      let start = 0;
      let allSpaces: ConfluenceSpace[] = [];
      let hasMore = true;

      // 페이지네이션을 통해 모든 스페이스 데이터 가져오기
      while (hasMore) {
        const result = await confluenceService.getSpaces({
          limit,
          start,
          type: type ? type : 'global',
        });

        if (result.results.length === 0) {
          hasMore = false;
        } else {
          allSpaces = [...allSpaces, ...result.results];
          start += limit;

          // API에서 더 이상 데이터가 없는지 확인
          if (!result._links.next) {
            hasMore = false;
          }
        }
      }

      const spaces = allSpaces;

      // 결과 포맷팅
      const formattedResults = spaces.map((space) => ({
        id: space.id,
        key: space.key,
        name: space.name,
        type: space.type,
        url: space._links.webui,
      }));

      // 상태 메시지 생성
      let statusMessage = `전체 스페이스 수: ${spaces.length}이(가) 조회되었습니다.`;
      if (type) {
        statusMessage += ` (타입: ${type})`;
      }

      return {
        content: [
          {
            type: 'text',
            text: `${statusMessage}\n\n${JSON.stringify(formattedResults, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('allSpaces tool error:', error);
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

export default allSpacesTool;
