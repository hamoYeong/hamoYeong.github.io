# 콘텐츠 작성 가이드

> Ticket 02 산출물
>
> 기준일: 2026-08-31

## 1. 목적

이 사이트의 프로젝트, 글, 경험, Academy 챌린지는 화면 코드와 분리된 Markdown 콘텐츠로 관리한다. 새 콘텐츠는 schema를 만족하는 파일을 추가하는 것만으로 등록할 수 있게 한다.

Astro 6의 Content Layer API를 사용한다.

- 설정 파일: `src/content.config.ts`
- loader: `astro/loaders`의 `glob`
- schema: `astro/zod`
- 콘텐츠 조회: `src/lib/content.ts`
- PortfolioBlock 변환: `src/lib/portfolio.ts`
- taxonomy label: `src/i18n/taxonomy.ts`

전체 모델과 마이그레이션 기준은 `docs/portfolio-content-model.md`, 이미지와 master asset 규칙은 `docs/portfolio-asset-guide.md`를 함께 따른다.

Astro 6에서는 legacy `type: 'content'` 또는 `type: 'data'`를 사용하지 않는다.

## 2. 디렉터리 구조

```text
src/
├── content.config.ts
├── content/
│   ├── projects/
│   │   ├── ko/
│   │   └── en/
│   ├── posts/
│   │   ├── ko/
│   │   └── en/
│   ├── experiences/
│   │   ├── ko/
│   │   └── en/
│   └── challenges/
│       ├── ko/
│       └── en/
└── lib/
    └── content.ts
```

locale 디렉터리는 콘텐츠 파일이 생길 때 추가한다. 영어 파일은 한국어 원문이 완성되고 번역이 준비된 뒤 추가한다.

## 3. 파일 이름과 식별자

파일 이름, `slug`, `translationKey`는 소문자 kebab-case를 사용한다.

```text
src/content/projects/ko/scutta-notion-system.md
src/content/projects/en/scutta-notion-system.md
```

```yaml
slug: scutta-notion-system
locale: ko
translationKey: scutta-notion-system
```

- `slug`: 해당 언어에서 URL을 만들 때 사용할 값
- `locale`: `ko` 또는 `en`
- `translationKey`: 서로 번역 관계인 콘텐츠가 공유하는 값

한국어와 영어 제목이 달라도 `translationKey`는 같아야 한다. 번역본이 없으면 파일을 만들지 않는다. 언어 전환에서는 같은 `translationKey`의 반대 locale을 찾고, 없으면 해당 언어의 목록 페이지로 이동한다.

locale과 지원 언어는 `src/i18n/config.ts`에서 관리한다. 언어를 추가할 때는 이 파일의 `locales`, 언어 이름, 날짜 locale과 `src/i18n/ui.ts`의 UI 사전을 함께 추가하고 Astro의 `i18n.locales` 설정도 맞춘다.

공개 URL은 다음 구조를 사용한다.

```text
/ko/
/ko/about/
/ko/projects/{slug}/
/ko/posts/{slug}/
/en/
/en/about/
/en/projects/{slug}/
/en/posts/{slug}/
```

루트 `/`는 저장된 언어 선택을 먼저 확인하고, 없으면 브라우저 언어를 사용한다. 사용자가 Header에서 선택한 언어는 브라우저 저장소에 보관된다.

## 4. 공통 작성 원칙

- 한국어 원문을 먼저 완성한 후 영어판을 별도 문장으로 작성한다.
- 확인되지 않은 사실이나 수치를 frontmatter에 넣지 않는다.
- 확인이 필요한 정보는 공개 파일에 임시 사실로 쓰지 말고 조사 문서의 `TODO: verify`로 관리한다.
- 팀 프로젝트는 팀 역할과 개인 역할을 구분한다.
- private 프로젝트는 `visibility: private-summary`를 사용하고 repository와 demo를 비워 둔다.
- 이미지가 없으면 `coverImage`를 생략한다.
- 새 라이브러리가 필요한 MDX는 사용하지 않는다. 현재 콘텐츠 형식은 `.md`다.
- 공개 범위는 `docs/privacy-guidelines.md`를 따른다.

모든 collection 파일에는 다음 Portfolio Kit metadata가 필요하다. key를 새로 만들지 말고 `src/i18n/taxonomy.ts`의 값을 사용한다.

```yaml
roleLenses:
  - learning-experience
competencies:
  - beginner-observation
evidenceLevels:
  - observed
priority: 30
```

- `roleLenses`: 어떤 직무 관점에서 찾을 콘텐츠인지 표시한다.
- `competencies`: 문장이 뒷받침하는 구체적인 역량을 표시한다.
- `evidenceLevels`: `hypothesis`, `designed`, `implemented`, `observed`, `operated`, `measured`를 구분한다.
- `priority`: 숫자가 작을수록 Home featured와 Portfolio Kit의 직접 구성 흐름에서 먼저 보인다. 날짜보다 콘텐츠 중요도와 이야기 구조를 우선한다.
- 한국어와 영어 번역 쌍은 네 필드를 동일하게 유지한다.

Portfolio Kit의 네 curated story는 `src/i18n/portfolio-stories.ts`에서 `PortfolioBlock.id`를 순서대로 참조한다. 새 Project가 기존 story의 문제·개선·근거 흐름을 실제로 바꿀 때만 한국어와 영어 story 순서 및 접속부를 함께 수정한다. 최신 콘텐츠라는 이유만으로 마지막에 붙이거나 날짜순으로 다시 정렬하지 않는다. 접속부에는 원문에 없는 성과를 추가하지 않고, 앞선 문제와 다음 개선 또는 과거 문제의 출발점만 설명한다.

## 5. Project 작성법

### 필수 frontmatter

```yaml
slug: example-project
locale: ko
translationKey: example-project
roleLenses:
  - ios-software-development
competencies:
  - data-flow-architecture
evidenceLevels:
  - designed
  - implemented
priority: 50
title: 프로젝트 제목
summary: 목록 카드에 표시할 한두 문장 요약
period:
  start: '2026-01'
  end: present
  label: 2026.01-현재
status: in-progress
role:
  - iOS 개발
team:
  type: personal
  description: 개인 프로젝트
overview: 상세 페이지의 Quick Summary
problem: 해결하려는 문제
whyItMattered: 이 문제가 중요한 이유
context: 프로젝트가 진행된 맥락
user: 실제 또는 가정한 사용자
contributions:
  - 직접 수행한 기여
process:
  - 조사하고 구현한 과정
keyDecisions:
  - title: 주요 결정
    description: 선택 이유와 trade-off
technicalStructure:
  - 기술 또는 교육 구조의 근거
challenges:
  - 해결 과정에서 남은 어려움
technologies:
  - SwiftUI
outcomes:
  - 확인 가능한 결과
whatIWouldChange:
  - 다음에 바꿀 점 또는 검증
learnings:
  - 배운 점
categories:
  - iOS
featured: false
draft: true
visibility: public
relatedProjects: []
relatedPosts: []
relatedChallenges: []
relatedExperiences: []
media: []
portfolioSections: []
```

### 필드 기준

| 필드 | 기준 |
| --- | --- |
| `period.start` | `YYYY` 또는 `YYYY-MM` |
| `period.end` | `YYYY`, `YYYY-MM`, `present`, 또는 생략 |
| `status` | `concept`, `in-progress`, `completed`, `archived` |
| `team.type` | `personal` 또는 `team` |
| `role` | 직함보다 실제 책임을 우선 |
| `contributions` | 팀 성과가 아니라 직접 수행한 행동 |
| `outcomes` | 저장소, CV, 사용자 조사 등으로 확인된 결과 |
| `featured` | Home 후보 여부 |
| `draft` | production 공개 여부 |
| `visibility` | `public`, `private-summary`, `unlisted` |
| `repository` | public 저장소 URL만 허용 |
| `demo` | 현재 열리고 공개가 승인된 URL만 허용 |
| `coverImage` | `{ src, alt }`, 없으면 생략 |
| `relatedPosts` | 관련 글의 `translationKey` 목록 |
| `relatedProjects` | 함께 읽을 Project의 `translationKey` 목록 |
| `relatedChallenges` | 근거가 된 Challenge의 `translationKey` 목록 |
| `relatedExperiences` | 근거가 된 Experience의 `translationKey` 목록 |
| `media` | public web file과 curated master를 연결하는 목록 |
| `portfolioSections` | 본문을 복제하지 않고 특정 canonical field의 taxonomy·asset만 세밀하게 지정 |

### 본문 권장 순서

1. Overview
2. Problem
3. Context / User
4. My Role
5. Process
6. Key Decisions
7. Outcome
8. Learning

## 6. Post 작성법

Post는 구현 순서만 나열하지 않고 문제를 바라본 전제, 선택의 이유, 실제 프로젝트에서 확인한 근거와 다음에 바꿀 점을 포함한다.

```yaml
slug: example-post
locale: ko
translationKey: example-post
roleLenses:
  - learning-experience
competencies:
  - technical-explanation
evidenceLevels:
  - observed
priority: 50
title: 글 제목
description: 목록과 검색 결과에 표시할 설명
publishedAt: 2026-07-29
updatedAt: 2026-08-01
tags:
  - Architecture
draft: true
featured: false
relatedProjects:
  - example-project
```

- `publishedAt`, `updatedAt`은 `YYYY-MM-DD`를 사용한다.
- 공개 전까지 `draft: true`를 유지한다.
- `relatedProjects`에는 프로젝트의 `translationKey`를 넣는다.
- 번역본은 날짜를 별도로 관리할 수 있지만 같은 `translationKey`를 사용한다.
- 번역본이 없는 글은 해당 locale 파일을 만들지 않는다. 언어 전환 시 반대 언어의 Posts 목록으로 안전하게 이동한다.

### 본문 구조와 표현

- 글 제목은 frontmatter의 `title`만 사용하고 본문은 `##`부터 시작한다.
- `##` 제목은 상세 페이지의 목차에 자동으로 표시된다.
- 한 섹션 안의 세부 내용은 `###`을 사용한다.
- 코드 블록은 언어를 명시한 fenced code block을 사용한다.
- 일반 인용 또는 독자에게 강조할 판단 기준은 Markdown blockquote를 사용한다. 상세 페이지에서는 callout 형태로 표시된다.
- 이미지는 반드시 의미 있는 alt text를 작성한다. 장식용 이미지는 추가하지 않는다.
- 이미지 파일은 `public/images/posts/{translationKey}/` 아래에 두고 `/images/posts/...` 절대 경로로 참조한다.
- private 저장소의 원본 코드, 내부 문서, 팀원 계정과 사용자 데이터는 글에 옮기지 않는다. 설명용 코드는 공개 가능한 최소 예시로 다시 작성하고 그 사실을 밝힌다.

````md
## 선택의 이유

기능보다 먼저 데이터의 책임을 정했습니다.

> 이 예시는 흐름을 설명하기 위해 단순화한 공개용 코드입니다.

```swift
protocol ExampleService {
    func load() async throws -> [Item]
}
```

![데이터가 화면과 서비스 사이를 이동하는 공개용 흐름도](/images/posts/example-post/data-flow.png)
````

### 프로젝트와 상호 연결

Post의 `relatedProjects`와 Project의 `relatedPosts`는 같은 `translationKey`를 서로 참조해야 한다.

```yaml
# Post
relatedProjects:
  - example-project

# Project
relatedPosts:
  - example-post
```

한쪽 링크만 추가하면 상세 페이지 간 이동이 비대칭이 되므로 공개 전 두 방향을 확인한다.

## 7. Experience 작성법

Experience는 About의 CV 타임라인에 사용한다.

```yaml
slug: example-experience
locale: ko
translationKey: example-experience
roleLenses:
  - facilitation-mentoring
competencies:
  - beginner-observation
evidenceLevels:
  - operated
priority: 50
title: 역할
organization: 조직
summary: 경험 요약
period:
  start: '2025-01'
  end: '2025-06'
  label: 2025.01-2025.06
category: community
highlights:
  - 확인 가능한 주요 활동
order: 10
draft: true
relatedProjects: []
relatedChallenges: []
media: []
```

`category`는 `education`, `work`, `leadership`, `community`, `research` 중 하나다. `order`가 작은 항목부터 표시한다.

## 8. Challenge 작성법

Challenge는 Academy C1-C5의 성장 흐름을 프로젝트 상세와 분리해 기록한다.

```yaml
slug: academy-c1
locale: ko
translationKey: academy-c1
roleLenses:
  - learning-experience
competencies:
  - learning-goal-design
evidenceLevels:
  - designed
priority: 50
sequence: C1
title: 챌린지 제목
summary: 한 문장 요약
period:
  start: '2026-03'
  end: '2026-04'
  label: 2026.03-2026.04
team:
  type: personal
  description: 개인 챌린지
problem: 챌린지에서 확인한 문제
role:
  - 역할
whatITried:
  - 시도한 것
whatChanged:
  - 달라진 점
learnings:
  - 배운 점
relatedProject: project-translation-key
relatedPosts: []
visibility: public
draft: true
media: []
```

private 팀 챌린지는 `visibility: private-summary`로 두고 팀이 승인한 요약만 작성한다.

## 9. draft와 visibility

`src/lib/content.ts`의 조회 함수는 production build에서 `draft: true`인 항목을 제외한다. 개발 모드에서는 초안을 함께 조회할 수 있다.

- `draft: true`: production에서 제외
- `draft: false`: 공개 후보
- `visibility: public`: 공개 가능한 콘텐츠
- `visibility: private-summary`: private 근거를 공개 가능한 문장으로 변환한 콘텐츠
- `visibility: unlisted`: 일반 목록에서 제외

`includeUnlisted: true`는 명시적인 미리보기나 내부 검증에서만 사용한다.

## 10. 콘텐츠 조회

페이지에서는 `astro:content`를 직접 반복 호출하기보다 공통 함수를 사용한다.

```astro
---
import { getProjects } from '../lib/content';

const projects = await getProjects({ locale: 'ko' });
---
```

지원 함수:

- `getProjects()`
- `getPosts()`
- `getExperiences()`
- `getChallenges()`
- `findTranslation()`

## 11. 새 콘텐츠 추가 절차

1. 올바른 collection과 locale 디렉터리에 `.md` 파일을 만든다.
2. 파일명, `slug`, `translationKey`를 kebab-case로 맞춘다.
3. schema의 필수 frontmatter를 작성한다.
4. 본문을 작성하고 공개 범위를 확인한다.
5. 초안은 `draft: true`로 둔다.
6. 관련 Project 또는 Post의 반대쪽 연결도 갱신한다.
7. `npm run content:validate`로 taxonomy, 번역 쌍, 양방향 related link, asset과 공개 범위를 확인한다.
8. 콘텐츠 타입을 동기화한다.
9. production build로 schema, 링크, 번역 fallback과 draft 정책을 확인한다.

```sh
npm run content:validate
npm run astro -- sync
npm run build
```

schema를 변경한 뒤 개발 서버가 실행 중이면 다시 시작하거나 content sync를 실행한다.

## 12. 기존 JSON 데이터

현재 화면의 canonical source는 `src/content/` collection이다. `src/data/projects.json`과 `src/data/posts.json`은 이전 구조의 호환 자료일 뿐 화면이 읽지 않는다.

- 새 Project/Post를 JSON에 추가하지 않는다.
- 기존 JSON을 근거 없이 삭제하지 않는다.
- 내용 수정은 `src/content/`의 한국어 canonical 파일을 먼저 검토하고 영어 번역에 반영한다.

## 13. 새 Project 추가 체크리스트

1. 한국어 canonical Project 파일을 만든다.
2. 사실, 수치, 개인 기여, 팀 성과와 한계를 구분한다.
3. role lens, competency, evidence level과 priority를 지정한다.
4. 관련 Challenge, Experience, Project와 Post를 연결한다.
5. 공개 가능한 curated master만 정해진 `portfolio-assets/` 경로에 둔다.
6. 웹 파생 이미지를 만들고 `media` metadata에 연결한다.
7. Project↔Post 링크가 양방향인지 확인한다.
8. 한국어를 검토한 뒤 영어 번역 파일을 추가한다.
9. `npm run content:validate`, `npm run astro -- sync`, `npm run build`를 실행한다.
10. Project 상세 anchor와 Portfolio Kit의 주제 순서·접속부·페이지 이동·필터·복사·asset 경로를 desktop과 mobile에서 확인한다.

사진을 추가한 뒤 다음처럼 요청할 수 있다.

```text
`portfolio-assets/projects/{translation-key}/masters/`에 고해상도 사진을 추가했어.
파일들을 확인해서 개인정보·공개 범위 위험을 먼저 점검하고, 기존 basename을 유지한 웹용 WebP 파생본을 `public/images/projects/{translation-key}/`에 만들어줘.
해당 Project의 media metadata에 section, alt, caption, credit, masterPath, webSrc를 연결하고 적절한 case study section에 배치해줘.
기존 문구와 URL은 바꾸지 말고 `npm run content:validate`, `npm run astro -- sync`, `npm run build` 후 데스크톱과 모바일 화면을 확인해줘.
```
