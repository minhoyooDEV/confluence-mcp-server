import { expect, test, describe, mock, afterEach } from 'bun:test';
import createPageTool from '../tools/createPage.js';
import confluenceService from '../services/confluenceService.js';

// 원본 함수 저장
const originalCreatePage = confluenceService.createPage;

describe('createPage Tool', () => {
  // 각 테스트 후에 실행
  afterEach(() => {
    // 원본 함수 복원
    confluenceService.createPage = originalCreatePage;
  });

  test('should create page successfully', async () => {
    // 모의 함수로 대체
    confluenceService.createPage = mock().mockResolvedValue({
      id: '12345',
      type: 'page',
      status: 'current',
      title: '새 페이지',
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
    });

    // createPage 도구 호출
    const result = await createPageTool.handler({
      title: '새 페이지',
      spaceKey: 'DEV',
      content: '<p>페이지 내용입니다.</p>',
    });

    // 반환 결과가 예상된 형식인지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    
    // JSON 문자열이 예상된 데이터를 포함하는지 확인
    const parsedContent = JSON.parse(result.content[0].text);
    expect(parsedContent.id).toBe('12345');
    expect(parsedContent.title).toBe('새 페이지');
    expect(parsedContent.space.key).toBe('DEV');
  });

  test('should handle errors gracefully', async () => {
    // 오류 발생 시나리오 모의
    confluenceService.createPage = mock().mockRejectedValue(
      new Error('Space not found')
    );

    // createPage 도구 호출
    const result = await createPageTool.handler({
      title: '새 페이지',
      spaceKey: 'INVALID',
      content: '<p>페이지 내용입니다.</p>',
    });

    // 오류 처리가 올바르게 되었는지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('Error: Space not found');
  });
});
