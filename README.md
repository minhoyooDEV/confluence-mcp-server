# Confluence MCP Server

Confluence API에 접근하기 위한 Model Context Protocol 서버 시스템입니다. Personal Access Token을 사용하여 Confluence와 통신합니다. VPN 영역 내에서 Confluence API에 접근하기 위한 중개 서버 역할을 합니다.

## 시스템 구성

이 프로젝트는 두 가지 서버로 구성되어 있습니다:

1. **MCP 서버** (server.ts): Confluence API와 통신하여 데이터를 처리하는 주 서버입니다.
   - 기본 포트: 3000
   - RESTful API 제공
   - MCP 프로토콜 처리

2. **프록시 서버** (proxyServer.ts): MCP 클라이언트와 MCP 서버 사이의 프록시 역할을 합니다.
   - 기본 포트: 3001
   - MCP 클라이언트로부터 요청을 받아 주 서버로 전달

이 구조는 VPN 영역 문제를 해결하기 위해 설계되었습니다. MCP 서버는 VPN 내부에서 실행되어 Confluence API에 접근하고, 프록시 서버는 외부에서 접근 가능한 환경에서 실행됩니다.

## 기능

- 모든 Confluence 스페이스 목록 조회
- 특정 스페이스 내의 모든 페이지 조회
- 페이지 ID로 특정 페이지 정보 조회
- 새 페이지 생성
- 기존 페이지 업데이트

## 설치 및 설정

### 필수 조건

- Node.js 16.x 이상
- Bun 1.0.0 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/confluence-mcp-server.git
cd confluence-mcp-server

# 의존성 설치
bun install
```

### 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가합니다:

```
PORT=3000
PROXY_PORT=3001
MCP_SERVER_URL=http://localhost:3000
CONFLUENCE_BASE_URL=https://wiki.musinsa.com
PERSONAL_ACCESS_TOKEN=your_personal_access_token
NODE_ENV=development
```

## 실행

### 개발 환경

```bash
# MCP 서버 실행 (Confluence API와 통신)
bun run dev

# 프록시 서버 실행 (MCP 클라이언트와 통신)
bun run dev:proxy

# MCP 서버 Stdio 모드 실행 (선택 사항)
bun run dev:stdio
```

### 프로덕션 환경

```bash
# 빌드
bun run build

# MCP 서버 실행
bun run serve

# 프록시 서버 실행
bun run serve:proxy
```

## 엔드포인트

### MCP 서버 엔드포인트 (기본 포트: 3000)

- **POST /mcp** - MCP 요청을 처리하는 메인 엔드포인트
- **GET /mcp/tools** - 사용 가능한 도구 목록 조회
- **GET /api/spaces** - 모든 스페이스 목록 조회
- **GET /api/spaces/:spaceKey/pages** - 특정 스페이스의 페이지 목록 조회
- **GET /api/pages/:pageId** - 특정 페이지 정보 조회
- **POST /api/pages** - 새 페이지 생성
- **PUT /api/pages/:pageId** - 페이지 업데이트
- **GET /health** - 서버 상태 확인

### 프록시 서버 엔드포인트 (기본 포트: 3001)

- **POST /mcp** - MCP 클라이언트 요청을 받아 MCP 서버로 전달
- **GET /tools** - 사용 가능한 도구 목록 조회
- **GET /health** - 프록시 서버 상태 확인

## 문제 해결

### VPN 영역 문제 해결

이 프로젝트는 VPN 영역 문제를 해결하기 위해 두 서버로 분리되었습니다:

1. **MCP 서버**는 VPN 내부에서 실행하여 Confluence API에 직접 접근합니다.
2. **프록시 서버**는 외부에서 접근 가능한 환경에서 실행하여 MCP 클라이언트의 요청을 받습니다.

이 구성은 MCP 클라이언트가 직접 Confluence API에 접근할 수 없는 상황에서 중개 역할을 합니다.

### "Error fetching spaces: Unable to connect" 오류

이 오류는 다음과 같은 문제로 발생할 수 있습니다:

1. **HTTPS 인증서 문제**: 개발 환경에서는 SSL 인증서 검증이 비활성화되어 있지만, 프로덕션 환경에서는 올바른 인증서 설정이 필요합니다.

2. **네트워크 연결 문제**: 방화벽이나 프록시 설정으로 인해 Confluence 서버에 접근할 수 없는 경우입니다.

3. **Personal Access Token 문제**: 토큰이 만료되었거나 잘못된 형식일 수 있습니다.

### 해결 방법

1. `.env` 파일의 `CONFLUENCE_BASE_URL`이 올바른지 확인합니다.
2. Personal Access Token이 유효한지 확인합니다.
3. 방화벽 설정을 확인하여 Confluence 서버에 접근할 수 있는지 확인합니다.
4. 네트워크 관리자에게 문의하여 접근 권한을 확인합니다.
5. MCP 서버와 프록시 서버 간의 연결이 올바르게 설정되었는지 확인합니다 (`MCP_SERVER_URL` 설정).

## 테스트

```bash
# 모든 테스트 실행
bun test

# 특정 테스트 실행
bun test src/test/getSpaces.test.ts
```

## 배포 구성

### 권장 배포 구성

프로덕션 환경에서는 다음과 같은 배포 구성을 권장합니다:

1. **MCP 서버**: VPN 내부 또는 Confluence 서버에 접근할 수 있는 네트워크에 배포
2. **프록시 서버**: MCP 클라이언트가 접근할 수 있는 네트워크에 배포

### 보안 고려사항

- 프록시 서버와 MCP 서버 간의 통신은 HTTPS를 사용하여 암호화하는 것을 권장합니다.
- Personal Access Token은 안전하게 관리하고, 필요에 따라 정기적으로 갱신하세요.
- 프로덕션 환경에서는 적절한 인증 메커니즘을 추가하여 프록시 서버에 대한 무단 접근을 방지하세요.

## 라이센스

MIT
