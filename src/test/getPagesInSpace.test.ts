import { expect, test, describe, mock, afterEach } from 'bun:test';
import getPagesInSpaceTool from '../tools/getPagesInSpace.js';
import confluenceService from '../services/confluenceService.js';

// 원본 함수 저장
const originalGetPagesInSpace = confluenceService.getPagesInSpace;

describe('getPagesInSpace Tool', () => {
  // 각 테스트 후에 실행
  afterEach(() => {
    // 원본 함수 복원
    confluenceService.getPagesInSpace = originalGetPagesInSpace;
  });

  test('should return pages list successfully', async () => {
    // 모의 함수로 대체
    confluenceService.getPagesInSpace = mock().mockResolvedValue({
      results: [
        {
          id: '12345',
          type: 'page',
          status: 'current',
          title: '테스트 페이지',
          space: {
            key: 'DEV',
            name: 'Development',
          },
          version: {
            number: 1,
          },
          _links: {
            webui: '/spaces/DEV/pages/12345',
            self: 'https://wiki.musinsa.com/rest/api/content/12345',
          },
        },
      ],
    });

    // getPagesInSpace 도구 호출 (spaceKey 파라미터 필요)
    const result = await getPagesInSpaceTool.handler({ spaceKey: 'DEV' });

    // 반환 결과가 예상된 형식인지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    
    // JSON 문자열이 예상된 데이터를 포함하는지 확인
    const parsedContent = JSON.parse(result.content[0].text);
    expect(parsedContent.results).toHaveLength(1);
    expect(parsedContent.results[0].title).toBe('테스트 페이지');
    expect(parsedContent.results[0].space.key).toBe('DEV');
  });

  test('should handle errors gracefully', async () => {
    // 오류 발생 시나리오 모의
    confluenceService.getPagesInSpace = mock().mockRejectedValue(
      new Error('Space not found')
    );

    // getPagesInSpace 도구 호출
    const result = await getPagesInSpaceTool.handler({ spaceKey: 'INVALID' });

    // 오류 처리가 올바르게 되었는지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('Error: Space not found');
  });
});
