import z from 'zod';
import confluenceService from '../services/confluenceService.js';
import { MCPTool } from '../types/mcp.js';
import { filterItemsByQuery, highlightSearchTerm } from '../utils/searchUtils.js';

// Zod 스키마 정의
const getPagesInSpaceSchema = z.object({
  spaceKey: z.string().describe('스페이스 키'),
  query: z.string().optional().describe('검색어 (선택 사항)'),
  limit: z.number().optional().describe('결과 개수 제한 (기본값: 25)'),
  start: z.number().optional().describe('검색 결과 시작 인덱스 (기본값: 0)'),
});

const getPagesInSpaceTool: MCPTool<typeof getPagesInSpaceSchema.shape> = {
  name: 'getPagesInSpace',
  description:
    '특정 스페이스 내의 모든 페이지를 가져옵니다. 검색어가 제공되면 페이지 제목과 내용으로 필터링합니다.',
  parameters: getPagesInSpaceSchema.shape,
  handler: async (params) => {
    try {
      const { spaceKey, query, limit = 25, start = 0 } = params;

      // 검색 파라미터 구성
      const searchParams = query
        ? { query, limit, start, expand: 'body.storage' }
        : { limit, start };

      // Confluence API 호출
      const result = await confluenceService.getPagesInSpace(spaceKey, searchParams);

      let pages = result.results;

      // 검색어가 있으면 필터링 수행 (클라이언트 측 추가 필터링)
      if (query) {
        pages = filterItemsByQuery(pages, query, ['title']);

        // 본문 내용이 있는 경우에는 본문에서도 검색
        if (pages.length === 0 && result.results.some((p) => p.body?.storage?.value)) {
          pages = result.results.filter((page) => {
            if (page.body?.storage?.value) {
              const content = page.body.storage.value.replace(/<[^>]*>/g, ' ');
              return content.toLowerCase().includes(query.toLowerCase());
            }
            return false;
          });
        }
      }

      // 결과 포맷팅
      const formattedResults = pages.map((page) => {
        // 검색어가 있는 경우 하이라이트 적용
        let bodyPreview = '';
        if (page.body?.storage?.value && query) {
          // HTML 태그 제거 후 미리보기 생성
          const contentText = page.body.storage.value.replace(/<[^>]*>/g, ' ');
          bodyPreview =
            contentText.length > 200 ? contentText.substring(0, 200) + '...' : contentText;

          // 본문에 검색어 하이라이트 적용
          bodyPreview = highlightSearchTerm(bodyPreview, query);
        }

        const formattedPage = {
          id: page.id,
          title: query ? highlightSearchTerm(page.title, query) : page.title,
          type: page.type,
          url: page._links.webui,
        };

        // 경제된 미리보기가 있는 경우만 추가
        if (bodyPreview) {
          formattedPage['preview'] = bodyPreview;
        }

        return formattedPage;
      });

      // 검색 상태 메시지 생성
      let statusMessage = `'${spaceKey}' 스페이스의 페이지 수: ${pages.length}이(가) 조회되었습니다.`;
      if (query) {
        statusMessage = `'${spaceKey}' 스페이스 내 검색 결과: ${pages.length}개를 찾았습니다. (검색어: "${query}")`;
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
