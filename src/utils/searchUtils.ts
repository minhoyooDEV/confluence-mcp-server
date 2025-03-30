/**
 * 검색 기능 관련 유틸리티 함수 모음
 * Confluence API 엔드포인트에 대한 검색 기능을 제공합니다.
 */

/**
 * 검색 파라미터 인터페이스
 */
export interface SearchParams {
  query: string;
  limit?: number;
  start?: number;
  [key: string]: any; // 추가 검색 파라미터 허용
}

/**
 * 검색 응답 인터페이스
 * Confluence API에서 공통적으로 사용되는 응답 형식
 */
export interface SearchResponse<T> {
  results: T[];
  start: number;
  limit: number;
  size: number;
  _links: {
    self: string;
    next?: string;
    prev?: string;
  };
}

/**
 * 검색 파라미터를 쿼리 스트링으로 변환
 * @param params 검색 파라미터
 * @returns 쿼리 스트링
 */
export const buildSearchQueryParams = (params: Record<string, unknown>): string => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value.toString());
    }
  });

  return queryParams.toString();
};

/**
 * 검색 결과에서 하이라이트 표시
 * @param text 검색 대상 텍스트
 * @param query 검색어
 * @returns 하이라이트된 텍스트
 */
export const highlightSearchTerm = (text: string, query: string): string => {
  if (!query || !text) return text;

  // 정규 표현식을 사용하여 대소문자 구분 없이 검색어 찾기
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '**$1**');
};

/**
 * 객체 배열에서 특정 필드를 기준으로 검색
 * @param items 검색 대상 배열
 * @param query 검색어
 * @param fields 검색할 필드 배열
 * @returns 검색 결과 배열
 */
export const filterItemsByQuery = <T>(items: T[], query: string, fields: (keyof T)[]): T[] => {
  if (!query) return items;

  const lowercaseQuery = query.toLowerCase();

  return items.filter((item) => {
    return fields.some((field) => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowercaseQuery);
      }
      return false;
    });
  });
};
