import { expect, test, describe, mock, afterEach } from 'bun:test';
import updatePageTool from '../tools/updatePage.js';
import confluenceService from '../services/confluenceService.js';

// 원본 함수 저장
const originalUpdatePage = confluenceService.updatePage;
const originalGetPageById = confluenceService.getPageById;

describe('updatePage Tool', () => {
  // 각 테스트 후에 실행
  afterEach(() => {
    // 원본 함수 복원
    confluenceService.updatePage = originalUpdatePage;
    confluenceService.getPageById = originalGetPageById;
  });

  test('should update page successfully', async () => {
    // 모의 함수로 대체
    confluenceService.updatePage = mock().mockResolvedValue({
      id: '12345',
      type: 'page',
      status: 'current',
      title: '업데이트된 페이지',
      space: {
        key: 'DEV',
        name: 'Development',
      },
      version: {
        number: 2,
      },
      _links: {
        webui: '/spaces/DEV/pages/12345',
        self: 'https://wiki.musinsa.com/rest/api/content/12345',
      },
    });

    // updatePage 도구 호출
    const result = await updatePageTool.handler({
      pageId: '12345',
      title: '업데이트된 페이지',
      content: '<p>수정된 페이지 내용입니다.</p>',
    });

    // 반환 결과가 예상된 형식인지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    
    // JSON 문자열이 예상된 데이터를 포함하는지 확인
    const parsedContent = JSON.parse(result.content[0].text);
    expect(parsedContent.id).toBe('12345');
    expect(parsedContent.title).toBe('업데이트된 페이지');
    expect(parsedContent.version.number).toBe(2);
  });

  test('should handle errors gracefully', async () => {
    // 오류 발생 시나리오 모의
    confluenceService.updatePage = mock().mockRejectedValue(
      new Error('Page not found')
    );

    // updatePage 도구 호출
    const result = await updatePageTool.handler({
      pageId: 'INVALID',
      content: '<p>수정된 페이지 내용입니다.</p>',
    });

    // 오류 처리가 올바르게 되었는지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('Error: Page not found');
  });
});
