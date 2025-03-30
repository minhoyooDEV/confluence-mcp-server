/* eslint-disable @typescript-eslint/ban-ts-comment */
import proxyService from './proxyService.js';
import { SearchParams, buildSearchQueryParams } from '../utils/searchUtils.js';
import {
  ConfluencePageContent,
  CreatePageParams,
  UpdatePageParams,
  ConfluenceSpaceList,
} from '../types';
import { HttpException } from '../utils/errorHandler.js';

class ConfluenceService {
  /**
   * 공통 요청 핸들러 - 프록시를 통한 Confluence API 호출 및 예외 처리를 담당
   * @param endpoint API 엔드포인트
   * @param method HTTP 메서드
   * @param payload 요청 본문 (선택 사항)
   * @param errorMessage 오류 메시지
   * @returns API 응답
   */
  private async handleRequest<T>(
    endpoint: string,
    method: string = 'GET',
    payload?: object,
    errorMessage: string = '요청 처리 중 오류가 발생했습니다',
  ): Promise<T> {
    try {
      return await proxyService.sendRequest<T>(endpoint, method, payload);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(500, `${errorMessage}: ${(error as Error).message}`);
    }
  }

  async getSpaces(searchParams?: {
    limit: number;
    start: number;
    type?: string;
  }): Promise<ConfluenceSpaceList> {
    const queryString = searchParams ? `?${buildSearchQueryParams(searchParams)}` : '';
    return this.handleRequest<ConfluenceSpaceList>(
      `/rest/api/space${queryString}`,

      'GET',
      undefined,
      '스페이스 목록 조회 중 오류가 발생했습니다',
    );
  }

  async getPagesInSpace(
    spaceKey: string,
    searchParams?: SearchParams,
  ): Promise<{ results: ConfluencePageContent[] }> {
    const queryString = searchParams ? `?${buildSearchQueryParams(searchParams)}` : '';
    return this.handleRequest<{ results: ConfluencePageContent[] }>(
      `/rest/api/space/${spaceKey}/content${queryString}`,

      'GET',
      undefined,
      `${spaceKey} 스페이스의 페이지 목록 조회 중 오류가 발생했습니다`,
    );
  }

  /**
   * Confluence API의 내용 검색 기능
   * @param query 검색 쿼리
   * @param spaceKey 특정 스페이스 내에서만 검색 (선택 사항)
   * @param additionalParams 추가 검색 파라미터 (선택 사항)
   * @returns 검색 결과
   */
  async searchContent(
    query: string,
    spaceKey?: string,
    additionalParams: Partial<SearchParams> = {},
  ): Promise<{ results: ConfluencePageContent[] }> {
    // 검색 파라미터 구성
    const searchParams: SearchParams = {
      query,
      limit: additionalParams.limit || 10,
      start: additionalParams.start || 0,
      ...additionalParams,
    };

    // 특정 스페이스 내에서만 검색할 경우
    if (spaceKey) {
      searchParams.spaceKey = spaceKey;
    }

    const queryString = buildSearchQueryParams(searchParams);

    return this.handleRequest<{ results: ConfluencePageContent[] }>(
      `/rest/api/content/search?${queryString}`,
      'GET',
      undefined,
      `콘텐츠 검색 중 오류가 발생했습니다 (검색어: ${query})`,
    );
  }

  async getPageById(pageId: string): Promise<ConfluencePageContent> {
    return this.handleRequest<ConfluencePageContent>(
      `/rest/api/content/${pageId}?expand=body.storage`,
      'GET',
      undefined,
      `페이지 ${pageId} 조회 중 오류가 발생했습니다`,
    );
  }

  async createPage(params: CreatePageParams): Promise<ConfluencePageContent> {
    const { title, spaceKey, content } = params;

    const payload = {
      type: 'page',
      title,
      space: { key: spaceKey },
      body: {
        storage: {
          value: content,
          representation: 'storage',
        },
      },
    };

    return this.handleRequest<ConfluencePageContent>(
      '/rest/api/content',
      'POST',
      payload,
      '페이지 생성 중 오류가 발생했습니다',
    );
  }

  async updatePage(pageId: string, params: UpdatePageParams): Promise<ConfluencePageContent> {
    const { title, content, version } = params;

    // 현재 페이지 정보 조회
    const currentPage = await this.getPageById(pageId);

    const payload = {
      type: 'page',
      title: title || currentPage.title,
      body: {
        storage: {
          value: content,
          representation: 'storage',
        },
      },
      version: {
        number: version || currentPage.version.number + 1,
      },
    };

    return this.handleRequest<ConfluencePageContent>(
      `/rest/api/content/${pageId}`,
      'PUT',
      payload,
      `페이지 ${pageId} 업데이트 중 오류가 발생했습니다`,
    );
  }
}

export default new ConfluenceService();
