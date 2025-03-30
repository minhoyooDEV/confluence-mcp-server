import z from 'zod';
import { MCPTool } from '../types/mcp.js';
import confluenceService from '../services/confluenceService.js';
import { highlightSearchTerm } from '../utils/searchUtils.js';

// 검색 파라미터용 Zod 스키마 정의
const searchContentSchema = z.object({
  query: z.string().describe('검색어'),
  spaceKey: z.string().optional().describe('특정 스페이스 키 (선택 사항)'),
  limit: z.number().optional().describe('결과 개수 제한 (기본값: 10)'),
  start: z.number().optional().describe('검색 결과 시작 인덱스 (기본값: 0)'),
});

// 글로벌 검색 툴 정의
const searchContentTool: MCPTool<typeof searchContentSchema.shape> = {
  name: 'searchContent',
  description: 'Confluence 콘텐츠를 전역적으로 검색합니다. 제목, 내용 등을 검색할 수 있습니다.',
  parameters: searchContentSchema.shape,
  handler: async (params) => {
    try {
      const { query, spaceKey, limit = 10, start = 0 } = params;

      // 검색 실행
      const result = await confluenceService.searchContent(query, spaceKey, {
        limit,
        start,
        expand: 'body.storage', // 검색 결과에서 본문 내용도 가져오기
      });

      // 검색 결과 정리
      const { results, size } = result;

      // 검색 결과가 없는 경우
      if (size === 0 || results.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `검색 결과가 없습니다. (검색어: "${query}")`,
            },
          ],
        };
      }

      // 검색 결과 포맷팅
      const formattedResults = results.map((page) => {
        // 제목에 검색어 하이라이트 적용
        const highlightedTitle = highlightSearchTerm(page.title, query);

        // 본문 일부 추출 (최대 200자)
        let bodyPreview = '';
        if (page.body?.storage?.value) {
          // HTML 태그 제거 후 미리보기 생성
          const contentText = page.body.storage.value.replace(/<[^>]*>/g, ' ');
          bodyPreview =
            contentText.length > 200 ? contentText.substring(0, 200) + '...' : contentText;

          // 본문에 검색어 하이라이트 적용
          bodyPreview = highlightSearchTerm(bodyPreview, query);
        }

        return {
          id: page.id,
          title: highlightedTitle,
          space: page.space?.key || '알 수 없음',
          preview: bodyPreview,
          url: page._links.webui,
        };
      });

      // 검색 범위 메시지 생성
      let scopeMessage = '전체 콘텐츠';
      if (spaceKey) {
        scopeMessage = `'${spaceKey}' 스페이스`;
      }

      // 결과 반환
      return {
        content: [
          {
            type: 'text',
            text: `${scopeMessage}에서 검색 결과: ${size}개 중 ${results.length}개를 표시합니다. (검색어: "${query}")\n\n${JSON.stringify(formattedResults, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error('searchContent tool error:', error);
      return {
        content: [
          {
            type: 'text',
            text: `검색 중 오류가 발생했습니다: ${(error as Error).message}`,
          },
        ],
      };
    }
  },
};

export default searchContentTool;
