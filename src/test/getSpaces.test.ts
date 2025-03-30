import { expect, test, describe, mock, beforeEach, afterEach } from 'bun:test';
import getSpacesTool from '../tools/getSpaces.js';
import confluenceService from '../services/confluenceService.js';

// 원본 함수 저장
const originalGetSpaces = confluenceService.getSpaces;

describe('getSpaces Tool', () => {
  // 각 테스트 후에 실행
  afterEach(() => {
    // 원본 함수 복원
    confluenceService.getSpaces = originalGetSpaces;
  });

  test('should return spaces list successfully', async () => {
    // 모의 함수로 대체
    confluenceService.getSpaces = mock().mockResolvedValue({
      results: [
        {
          id: '123',
          key: 'DEV',
          name: 'Development',
          type: 'global',
          _links: {
            webui: '/spaces/DEV',
            self: 'https://wiki.musinsa.com/rest/api/space/DEV',
          },
        },
      ],
    });

    // getSpaces 도구 호출
    const result = await getSpacesTool.handler();

    // 반환 결과가 예상된 형식인지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    
    // JSON 문자열이 예상된 데이터를 포함하는지 확인
    const parsedContent = JSON.parse(result.content[0].text);
    expect(parsedContent.results).toHaveLength(1);
    expect(parsedContent.results[0].key).toBe('DEV');
  });

  test('should handle errors gracefully', async () => {
    // 오류 발생 시나리오 모의
    confluenceService.getSpaces = mock().mockRejectedValue(
      new Error('API connection failed')
    );

    // getSpaces 도구 호출
    const result = await getSpacesTool.handler();

    // 오류 처리가 올바르게 되었는지 확인
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(result.content[0].text).toContain('Error: API connection failed');
  });
});
