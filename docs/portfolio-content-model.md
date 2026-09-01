# 포트폴리오 콘텐츠 모델과 마이그레이션 기준

기준 브랜치: `main` (`9ef8b08`)

이 문서는 공개 웹사이트와 기업별 포트폴리오 PDF 준비 화면이 같은 원문을 사용하도록 만드는 기준이다. 공개 사이트는 처음 방문한 사람이 김서영이 중요하게 보는 문제, 만들고 싶은 학습자 변화, 실제로 설계·개발·운영한 일, 근거와 한계를 이해하도록 하는 서사를 우선한다. Portfolio Kit은 그 서사를 대체하지 않고 필요한 문장과 증거를 고르는 작성자용 보조 화면이다.

## 1. 리팩터링 전 기준선

리팩터링 직전 production build를 `/tmp/hamo-portfolio-before.json`에 기록했다. 임시 스냅샷은 저장소에 커밋하지 않는다.

| 항목 | 기준선 |
| --- | ---: |
| production route | 40 |
| Project | 9개 × 2개 언어 |
| Experience | 8개 × 2개 언어 |
| Challenge | 5개 × 2개 언어 |
| 공개 Post | 한국어 3개, 영어 3개 |
| draft Post | 한국어 3개 |
| public asset | 6개 |

보존 대상은 다음과 같다.

- 기존 공개 URL과 `/projects/leaf/` 호환 redirect
- 한국어·영어의 공개 문구, 사실, 기간, 수치, 링크와 주장 수준
- Home의 인물 서사, About의 CV 전체, Projects 카드의 보이는 정보와 All/iOS/Web/Education/Community 필터
- Post 본문과 heading 구조, locale 전환 fallback, draft 제외 정책
- `/projects/learn-with-ai-questioning/` 아래 기존 poster PNG/PDF URL

문장을 다른 필드로 옮길 때는 원문을 고치지 않는다. 제목 label, 표시 순서, 동일 문장의 중복 제거만 허용한다. 전후 검증은 새 production build와 기준선의 route, collection count, 텍스트, 링크와 asset 목록을 비교한다.

2026-09-01 피드백 이후 공개 Home/About의 추상적인 역량 설명은 Project/Experience의 canonical 문장을 직접 조립해 구체화한다. 이때 Project·Experience·Challenge·Post 원문과 사실·수치·한계는 바꾸지 않고, UI heading과 원문 사이의 연결 설명만 목적에 맞게 다듬는다. `src/i18n/portfolio-stories.ts`의 접속부도 새 성과를 주장하지 않고 이미 기록된 문제와 다음 판단의 관계만 설명한다.

## 2. 단일 콘텐츠 원천

| 원천 | 책임 | 조립되는 화면 |
| --- | --- | --- |
| `src/i18n/ui.ts` | locale별 Profile 서사와 UI label | Home, About, Portfolio Kit의 Profile block |
| `src/content/projects/` | Project의 문제·역할·과정·결정·구조·결과·한계 | Projects 카드와 상세, Home featured, About 연결, Portfolio Kit |
| `src/content/experiences/` | CV 사실, 역할, 실제 행동과 규모 | About timeline, Portfolio Kit |
| `src/content/challenges/` | Academy 문제·시도·판단 변화 | Project related content, Portfolio Kit |
| `src/content/posts/` | 사용자의 생각과 프로젝트 근거 | Posts, Project related content, Portfolio Kit |
| `src/i18n/taxonomy.ts` | taxonomy key의 locale별 label과 설명 | badge와 filter UI |
| `src/i18n/portfolio-stories.ts` | 주제별 명시적 순서와 원문 사이의 접속부 | Portfolio Kit의 curated story |
| `src/lib/portfolio.ts` | canonical field를 `PortfolioBlock`으로 변환 | Portfolio Kit |

Home/About 문구는 페이지 파일에 복제하지 않는다. 현재 locale별 인물 서사는 이미 `src/i18n/ui.ts`에 한 번만 존재하므로 Profile의 canonical source로 유지하고 `src/lib/portfolio.ts`가 같은 값을 읽는다. 연락처와 featured 정렬은 페이지 안의 별도 문구가 아니라 공통 설정과 Project metadata에서 가져온다.

## 3. 공통 taxonomy

콘텐츠에는 kebab-case key만 저장한다. 화면 label과 설명은 `src/i18n/taxonomy.ts` 한 곳에서 관리한다.

### Role lens

- `curriculum-design`
- `learning-experience`
- `educational-software`
- `facilitation-mentoring`
- `community-program-operations`
- `ios-software-development`
- `problem-framing-research`

### Competency

- `beginner-observation`
- `learning-goal-design`
- `scaffold-design`
- `self-explanation-transfer`
- `curriculum-task-design`
- `technical-explanation`
- `educational-prototyping`
- `data-flow-architecture`
- `user-research`
- `collaboration-facilitation`
- `community-operations`
- `documentation-systemization`

### Evidence level

| key | 의미 |
| --- | --- |
| `hypothesis` | 아직 검증하지 않은 가설 |
| `designed` | 커리큘럼·흐름·구조를 설계함 |
| `implemented` | 작동 가능한 결과물을 구현함 |
| `observed` | 소규모 사례에서 변화를 관찰함 |
| `operated` | 실제 프로그램·서비스·커뮤니티를 운영함 |
| `measured` | 수치 또는 명시적 평가로 확인함 |

`observed`는 사례 관찰이고 `measured`는 수치나 명시적 평가다. 둘을 같은 근거로 취급하지 않는다. 하나의 콘텐츠는 여러 level을 가질 수 있다.

## 4. Canonical schema

모든 collection은 다음 portfolio metadata를 가진다.

```yaml
roleLenses:
  - learning-experience
competencies:
  - beginner-observation
evidenceLevels:
  - observed
priority: 10
media: []
```

Project identity는 `title`, `summary`, 선택적인 `summaryNote`, `period`, `status`, `categories`, `technologies`다. `summaryNote`는 요약의 흐름을 끊지 않으면서 바로 아래에 분리해 보여줘야 하는 근거의 한계나 현재 상태에만 사용한다. 나머지 canonical field의 책임은 다음과 같다.

| 질문 | canonical field |
| --- | --- |
| 누구와 어떤 맥락인가 | `user`, `context` |
| 어떤 문제이며 왜 중요한가 | `problem`, `whyItMattered` |
| 팀과 개인 책임은 무엇인가 | `team`, `role`, `contributions` |
| 무엇을 조사하고 시도했나 | `research`, `process`, `processDetails`, `processSummary` |
| 어떤 판단과 trade-off가 있었나 | `keyDecisions`, `questionShift` |
| 기술 또는 교육 구조의 근거는 무엇인가 | `technicalStructure`, `technologies`, `repository`, `demo`, `artifacts` |
| 무엇을 만들고 확인했나 | `outcomes`, `validation` |
| 무엇을 배우고 교육·협업에 어떻게 연결했나 | `learnings` |
| 아직 무엇을 확인하지 못했나 | `learnerCase.limitation`, `validation.limitations` |
| 다음 검증은 무엇인가 | `whatIWouldChange`, `validation.nextValidation` |
| 무엇과 연결되는가 | `relatedPosts`, `relatedChallenges`, `relatedExperiences` |

`portfolioSections`는 Project 전체 metadata보다 더 정확한 분류가 필요한 경우에만 쓴다. 본문을 다시 적지 않고 canonical field key와 선택적 taxonomy override, `assetIds`만 지정한다.

```yaml
portfolioSections:
  - field: outcomes
    kind: outcome
    evidenceLevels:
      - measured
    assetIds:
      - learning-poster
```

Experience는 `summary`와 `highlights`, Challenge는 `problem`, `role`, `whatITried`, `whatChanged`, `learnings`, Post는 `description`과 원문 링크를 PortfolioBlock으로 변환한다. Post 본문은 생각의 맥락을 보존하기 위해 Project처럼 잘게 분해하지 않는다.

## 5. PortfolioBlock 파생 규칙

`src/lib/portfolio.ts`는 다음 타입으로 화면용 block을 만든다.

```ts
type PortfolioBlockKind =
  | 'summary'
  | 'problem'
  | 'context'
  | 'role'
  | 'action'
  | 'decision'
  | 'technical-evidence'
  | 'outcome'
  | 'learning'
  | 'limitation'
  | 'next-step';

interface PortfolioBlock {
  id: string;
  sourceType: 'project' | 'experience' | 'challenge' | 'post' | 'profile';
  sourceKey: string;
  sourceTitle: string;
  kind: PortfolioBlockKind;
  title: string;
  text: string | string[];
  roleLenses: RoleLens[];
  competencies: Competency[];
  evidenceLevels: EvidenceLevel[];
  href: string;
  assetIds: string[];
  date: string;
  priority: number;
}
```

adapter는 문자열을 새로 쓰지 않고 canonical field를 참조한다. 빈 field는 block을 만들지 않는다. Project `portfolioSections`가 있으면 해당 field의 metadata를 우선하고, 없으면 콘텐츠 전체 metadata를 쓴다. private-summary에서는 public repository/demo나 private asset을 block에 싣지 않는다.

`PortfolioBlock.href`는 목록 페이지가 아니라 Project의 `#problem`, `#context`, `#decisions`, `#structure`, `#outcome` 같은 실제 section이나 About의 개별 Experience anchor를 가리킨다. Portfolio Kit에서 본 문장을 공개 웹사이트의 같은 파트로 바로 이어 읽을 수 있어야 한다.

## 6. Media와 asset

```yaml
media:
  - id: learning-poster
    section: outcome
    type: image
    webSrc: /images/projects/learn-with-ai-questioning/01-cover-learning-poster.webp
    masterPath: portfolio-assets/projects/learn-with-ai-questioning/masters/01-cover-learning-poster.png
    alt: 학습 흐름과 질문의 변화를 정리한 Learn with AI 포스터
    caption: 기존 콘텐츠에서 사용 중인 설명
    credit: 김서영
    visibility: public
```

- master: `portfolio-assets/{projects|posts|experiences}/{translation-key}/masters/`
- web derivative: `public/images/{projects|posts|experiences}/{translation-key}/`
- 파일명: `{두 자리 순서}-{section}-{짧은 설명}.{확장자}`
- section: `cover`, `context`, `research`, `process`, `decision`, `solution`, `outcome`, `learning`
- `image`, `pdf`, `video`, `diagram`을 지원한다.
- master와 web derivative는 핵심 basename을 공유한다.
- 일반 페이지는 master를 직접 로드하지 않는다.
- master는 GitHub Pages 번들 밖에 있을 뿐 public repository에 커밋하면 공개된다.
- 원본 인터뷰, 개인정보, 위치 정보, 동의받지 않은 얼굴, 팀원 계정, private 저장소 화면은 이 저장소에 두지 않는다.
- 공개 가능한 curated master만 두고 EXIF·위치 metadata를 제거한다.
- 기존 공개 URL은 호환 파일로 남긴다.

## 7. 화면 조립 원칙

### 공개 사이트

- Home은 정체성 → 문제의식 → 관찰 사례 → 실제 근거 → featured Project/Post → 현재 한계 → Contact 순서의 인물 서사를 유지한다. 역량을 추상 문장으로만 설명하지 않고 C4 학습자 사례, C5 설계 결정, 구현 구조, SCUTTA 운영 원문을 함께 조립한다.
- About은 CV 사실을 timeline에서 한 번 보여주고, 그 아래에서 대상 학습자·원하는 변화·설계 원칙·근거·개발과 교육의 연결·한계를 해석한다. skill과 방향 문장에는 근거 Project/Experience의 실제 section 링크와 canonical 문장을 붙인다.
- Projects는 featured Project와 연결된 Project를 분리하고 각 그룹 안에서 `priority`를 먼저 적용한다. `featured`는 최신성이나 구현 규모가 아니라 현재 직무 방향을 대표하면서 실제 사용·관찰 근거까지 설명할 수 있는지를 기준으로 지정한다. All/iOS/Web/Education/Community filter는 두 그룹에 함께 작동한다. 목록 카드는 summary·개인 역할·대표 outcome만 보여주고 문제와 전체 근거는 상세에서 읽게 한다.
- Project 상세는 공통 component가 대상·접근·역할·근거 수준을 Quick Summary로 보여준 뒤 문제와 대상 → 역할과 과정 → 판단과 구조 → 결과와 다음 단계 순서로 렌더링한다. 학습자 사례는 독립 section으로, artifact는 outcome의 근거로 배치한다. 값이 없는 section은 출력하지 않는다.
- Posts는 본문을 과도하게 데이터화하지 않는다.

### Portfolio Kit

- URL: `/[locale]/portfolio-kit/`
- 기본 navigation에는 넣지 않고 footer에 작은 링크만 둔다.
- 검색 엔진에 `noindex, nofollow`를 적용한다.
- 기본 화면은 `src/i18n/portfolio-stories.ts`에 명시한 네 curated story다. 각 story는 시간순이 아니라 문제 발견 → 판단 변화 → 구현 → 결과 → 근거의 한계를 설명하기에 적합한 순서로 `PortfolioBlock.id`를 참조한다.
- 한 화면에는 Project 상세와 다른 canonical source에서 가져온 원문 한 파트를 먼저 보여주고, 다음 원문으로 이어지는 접속부와 추가 metadata를 그 아래에 분리한다. 이전/다음 버튼과 좌우 방향키로 페이지를 넘기며, `prefers-reduced-motion`을 존중하는 짧은 전환 애니메이션을 사용한다.
- 과거 원문으로 이동하는 접속부는 현재 판단이 시작된 문제와 당시 초점을, 이후 원문으로 이동하는 접속부는 앞선 문제와 다음 개선을 설명한다. 접속부는 원문을 대체하거나 성과를 새로 주장하지 않는다.
- role lens, competency, content type, evidence level은 접힌 “직접 흐름 만들기”에서 제공한다. 결과는 날짜가 아니라 `priority`와 원천별 `summary → problem → context → role/action → decision/structure → outcome → limitation/next` 순서로 한 페이지씩 보여준다.
- 선택한 story, page, custom filter는 URL query에 남긴다. 각 페이지에서 원문 section 이동과 문장 복사를 제공한다.
- JavaScript가 없으면 전체 block의 제목과 원문 section 링크를 인덱스로 읽을 수 있다.
- 인쇄에서는 선택한 story의 페이지들을 이어서 출력하고 controls와 copy button을 숨긴다. 기업별 PDF layout 생성은 범위 밖이다.

## 8. 마이그레이션과 검증 순서

1. production build 기준선과 사용자 변경 여부를 확인한다.
2. schema와 taxonomy를 먼저 추가한다.
3. 한국어와 영어 쌍에 같은 taxonomy key와 priority를 넣는다.
4. Project → Experience → Challenge → Post 순으로 migration한다.
5. adapter와 공통 component를 연결한다.
6. Portfolio Kit과 asset 규칙을 연결한다.
7. `npm run content:validate`, `npm run astro -- sync`, `npm run build`를 실행한다.
8. 기준선과 route, count, 공개 텍스트, 링크, draft, asset을 비교한다.
9. Home, About, Projects, 교육·커뮤니티·iOS Project 상세, Posts, Portfolio Kit을 mobile/tablet/desktop에서 확인한다.

문구 이동으로 완전한 byte 단위 비교가 불가능한 경우에는 canonical source와 조립 화면을 최종 보고에 명시하고, 누락된 문장이 없는지 별도로 확인한다.
