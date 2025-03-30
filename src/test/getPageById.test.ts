import { expect, test, describe, mock, afterEach } from 'bun:test';
import getPageByIdTool from '../tools/getPageById.js';
import confluenceService from '../services/confluenceService.js';

// 원본 함수 저장
const originalGetPageById = confluenceService.getPageById;

describe('getPageById Tool', () => {
  // 각 테스트 후에 실행
  afterEach(() => {
    // 원본 함수 복원
    confluenceService.getPageById = originalGetPageById;
  });

  test('should return page content successfully', async () => {
    // 모의 함수로 대체
    confluenceService.getPageById = mock().mockResolvedValue({
      id: '12345',
      type: 'page',
      status: 'current',
      title: '테스트 페이지',
      space: {
        key: 'DEV',
        name: 'Development',
      },
      body: {
        storage: {
          value: '<p>페이지 내용입니다.</p>',
          representation: 'storage',
        },
      },
      version: {
        number: 1,
      },
      _links: {
        webui: '/spaces/DEV/pages/12345',
        self: 'https://wiki.musinsa.com/rest/api/content/12345',
      },
    });

    // getPageById 도구 호출 (pageId 파라미터 필요)
    const result = await getPageByIdTool.handler({ pageId: '12345' });

    // 반환 결과가 예상된 형식인지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    
    // JSON 문자열이 예상된 데이터를 포함하는지 확인
    const parsedContent = JSON.parse(result.content[0].text);
    expect(parsedContent.id).toBe('12345');
    expect(parsedContent.title).toBe('테스트 페이지');
    expect(parsedContent.body.storage.value).toBe('<p>페이지 내용입니다.</p>');
  });

  test('should handle errors gracefully', async () => {
    // 오류 발생 시나리오 모의
    confluenceService.getPageById = mock().mockRejectedValue(
      new Error('Page not found')
    );

    // getPageById 도구 호출
    const result = await getPageByIdTool.handler({ pageId: 'INVALID' });

    // 오류 처리가 올바르게 되었는지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('Error: Page not found');
  });
});
