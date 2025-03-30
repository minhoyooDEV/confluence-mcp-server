import { z } from 'zod';

// 이 파일은 이제 타입 참조용으로만 사용됩니다.
// 실제 스키마는 server.ts에서 tool 등록 시 직접 정의합니다.

// 스페이스 스키마
const ConfluenceSpace = z.object({
  id: z.string(),
  key: z.string(),
  name: z.string(),
  type: z.string(),
  _links: z.object({
    webui: z.string(),
    self: z.string(),
  }),
});

// 페이지 콘텐츠 스키마
const ConfluencePageContent = z.object({
  id: z.string(),
  type: z.string(),
  status: z.string(),
  title: z.string(),
  space: z
    .object({
      key: z.string(),
      name: z.string().optional(),
    })
    .optional(),
  body: z
    .object({
      storage: z.object({
        value: z.string(),
        representation: z.string(),
      }),
    })
    .optional(),
  version: z.object({
    number: z.number(),
  }),
  _links: z.object({
    webui: z.string(),
    self: z.string(),
  }),
});

// 함수 파라미터 스키마
const GetPagesInSpaceParams = z.object({
  spaceKey: z.string(),
});

const GetPageByIdParams = z.object({
  pageId: z.string(),
});

const CreatePageParams = z.object({
  title: z.string(),
  spaceKey: z.string(),
  content: z.string(),
});

const UpdatePageParams = z.object({
  pageId: z.string(),
  title: z.string().optional(),
  content: z.string(),
  version: z.number().optional(),
});

// MCP 스키마 정의
export const mcpSchema = {
  getSpaces: {
    description: '모든 Confluence 스페이스 목록을 가져옵니다.',
    returns: z.object({
      results: z.array(ConfluenceSpace),
    }),
  },
  getPagesInSpace: {
    description: '특정 스페이스 내의 모든 페이지를 가져옵니다.',
    parameters: GetPagesInSpaceParams,
    returns: z.object({
      results: z.array(ConfluencePageContent),
    }),
  },
  getPageById: {
    description: 'ID로 특정 페이지 정보를 가져옵니다.',
    parameters: GetPageByIdParams,
    returns: ConfluencePageContent,
  },
  createPage: {
    description: '새 페이지를 생성합니다.',
    parameters: CreatePageParams,
    returns: ConfluencePageContent,
  },
  updatePage: {
    description: '기존 페이지를 업데이트합니다.',
    parameters: UpdatePageParams,
    returns: ConfluencePageContent,
  },
};
