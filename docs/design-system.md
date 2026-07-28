# 포트폴리오 디자인 시스템

> Ticket 04 산출물
>
> 기준일: 2026-07-29

## 방향

이 사이트는 장식보다 프로젝트의 문제 해결 과정과 글의 흐름을 우선한다. 밝고 따뜻한 중성색과 절제된 테라코타 강조색을 사용하고, 한국어와 영어의 긴 제목이 모두 안정적으로 읽히는 타이포그래피를 유지한다.

## 스타일 구조

- `src/styles/tokens.css`: 색, 글자 크기, 행간, 간격, radius, border, shadow, 콘텐츠 폭
- `src/styles/global.css`: reset, 본문 레이아웃, 공통 섹션, 긴 글, focus, 반응형, reduced motion
- 컴포넌트의 `<style>`: 해당 컴포넌트 안에서만 의미가 있는 배치와 상태
- 페이지의 `<style>`: Home hero처럼 해당 페이지에만 있는 구성

페이지에서 색상 hex 값이나 반복되는 콘텐츠 폭을 직접 작성하지 않는다. 새 값이 필요하면 기존 토큰과 의미가 겹치는지 먼저 확인한다.

## 주요 토큰

### 색상

- `--color-canvas`: 전체 배경
- `--color-surface`: 카드와 패널
- `--color-surface-muted`: 보조 surface
- `--color-text`: 기본 텍스트
- `--color-text-soft`: 본문 보조 텍스트
- `--color-accent`: 주요 동작과 시각적 강조
- `--color-focus`: 키보드 focus 표시
- `--color-border`: 기본 구분선

### 콘텐츠 폭

- `--width-reading`: Post와 Project 상세의 긴 글
- `--width-content`: 일반 페이지와 Header
- `--width-wide`: 향후 이미지 중심 섹션
- `--gutter`: 화면 크기에 따라 변하는 좌우 여백

### 간격과 모서리

간격은 `--space-1`부터 `--space-24`까지의 단계만 사용한다. 모서리는 작은 UI, 카드, 큰 패널, pill 형태에 맞춰 `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`을 선택한다.

## 공통 컴포넌트

- `Header`: 데스크톱 Navigation과 현재 경로 표시
- `MobileNavigation`: 키보드로 조작 가능한 `details` 기반 메뉴
- `Footer`: locale Home 링크와 사이트 설명
- `LanguageSwitcher`: 현재 콘텐츠의 번역 경로 또는 상위 목록으로 이동
- `SectionHeading`: 페이지와 섹션 제목 계층
- `ProjectCard`: 이미지가 없을 때도 유지되는 CSS fallback visual
- `PostCard`: 날짜, 제목, 설명, 태그, 상세 링크
- `Tag`: 기술과 글 주제 표시
- `TimelineItem`: Experience와 향후 Challenge 시간순 표시
- `ExternalLink`: 새 탭으로 여는 저장소와 demo
- `Callout`: 긴 글 안에서 중요한 배경이나 주의사항 강조

## 접근성과 반응형 원칙

- 모든 상호작용 요소는 `:focus-visible`에서 명확한 outline을 제공한다.
- Header에는 본문 바로가기를 제공한다.
- 모바일 Header는 760px 이하에서 별도 Navigation으로 바뀐다.
- 주요 링크와 메뉴의 터치 높이는 최소 44px에 가깝게 유지한다.
- 긴 제목은 `word-break: keep-all`과 `overflow-wrap: anywhere`를 함께 사용한다.
- 동작을 추가할 때 `prefers-reduced-motion`에서 제거되거나 즉시 완료되어야 한다.
