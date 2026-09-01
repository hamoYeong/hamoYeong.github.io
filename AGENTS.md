# AI Agent Instructions

이 프로젝트는 Astro 기반 개인 홈페이지입니다.

최종 배포 목표는 GitHub Pages의 `github.io` 주소입니다.

## 현재 사이트 구조

- 현재 사이트는 Home / About / Projects / Posts 구조를 가집니다.
- 주요 페이지는 `src/pages` 아래에서 Astro 파일 기반 라우팅으로 관리합니다.
- 공통 Layout, Header, Navigation, Footer는 `src/layouts/BaseLayout.astro`에서 관리합니다.
- Projects는 카드와 상세 페이지 또는 상세 링크를 가질 수 있습니다.

## 콘텐츠 데이터 관리

- Projects 정보는 `src/content/projects/{locale}/` Markdown을 canonical source로 관리합니다.
- Projects 카드는 가능하면 `src/components/ProjectCard.astro`를 우선 사용합니다.
- Posts 정보는 `src/content/posts/{locale}/` Markdown을 canonical source로 관리합니다.
- Experience와 Challenge도 각각 `src/content/experiences/`, `src/content/challenges/`에서 관리합니다.
- 새 콘텐츠에는 `src/i18n/taxonomy.ts`의 role lens, competency, evidence level key와 priority를 지정합니다.
- Project↔Post related link는 양방향으로 유지하고 `npm run content:validate`로 확인합니다.
- 콘텐츠 모델은 `docs/portfolio-content-model.md`, 작성법은 `docs/content-authoring-guide.md`, 이미지 규칙은 `docs/portfolio-asset-guide.md`를 따릅니다.
- 외부 콘텐츠 소스를 붙이더라도 API 응답 원본을 화면에 바로 쓰지 않고, 화면에서 쓰기 쉬운 JSON 구조로 변환해서 사용합니다.

## 작업 규칙

1. 새 라이브러리는 사용자 승인 없이 추가하지 않습니다.
2. 관련 없는 파일은 수정하지 않습니다.
3. `secret`, `token`, `password`, `API key`를 코드에 직접 작성하지 않습니다.
4. 삭제 명령은 실행 전에 반드시 사용자에게 확인합니다.
5. 수정 후 변경한 파일과 이유를 설명합니다.
6. 가능하면 변경 후 `npm run build`로 확인합니다.
7. UI 변경 후에는 가능하면 Browser로 로컬 화면을 확인합니다.
8. 변경사항이 생기면 적절한 단위로 commit하되, commit과 push는 변경사항 요약을 먼저 보여주고 사용자 승인 후 진행합니다.
9. commit 메시지는 아래 형식을 사용합니다.
   - `feat: 한국어설명`
   - `fix: 한국어설명`
   - `chore: 한국어설명`
   - `docs: 한국어설명`

## 주의사항

- 프로젝트 목적과 직접 관련 없는 리팩터링은 하지 않습니다.
- 기존 코드 스타일과 구조를 우선 따릅니다.
- 민감한 값은 환경 변수나 별도 설정으로 관리하고, 저장소에 커밋하지 않습니다.
