# Confluence MCP Server

Confluence API에 접근하기 위한 Model Context Protocol 서버입니다. Personal Access Token을 사용하여 Confluence와 통신합니다.

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
CONFLUENCE_BASE_URL=https://wiki.musinsa.com
PERSONAL_ACCESS_TOKEN=your_personal_access_token
NODE_ENV=development
```

## 실행

```bash
# 개발 모드 실행
bun run dev

# 빌드
bun run build

# 프로덕션 모드 실행
bun run start
```

## 문제 해결

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

개발 환경에서는 SSL 인증서 검증이 비활성화되어 있어 자체 서명된 인증서를 사용하는 서버에도 접근할 수 있지만, 보안상 이상적이지 않습니다. 프로덕션 환경에서는 적절한 SSL 인증서 설정을 사용하세요.

## 테스트

```bash
# 모든 테스트 실행
bun test

# 특정 테스트 실행
bun test src/test/getSpaces.test.ts
```

## 라이센스

MIT
