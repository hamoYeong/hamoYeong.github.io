# 콘텐츠 인벤토리와 공개 범위

> Ticket 01 조사 문서
>
> 기준일: 2026-07-29
>
> 상태: 조사 완료, 공개 전 확인이 필요한 항목은 `TODO: verify`로 표시

## 1. 조사 원칙

- 이 문서는 현재 포트폴리오 저장소, 제공된 포트폴리오 PDF와 CV, 접근 가능한 GitHub 저장소를 교차 확인해 작성했다.
- public 저장소의 설명과 링크는 공개할 수 있다.
- private 저장소는 프로젝트 목적과 김서영의 기여를 공개 가능한 수준으로 요약한다. 저장소 URL, 내부 문서, 코드, 이슈·PR 링크, 팀원 계정은 공개하지 않는다.
- PDF나 저장소에서 확인할 수 없는 역할, 수치, 사용자 반응은 추측하지 않는다.
- 자료끼리 충돌하거나 현재 상태가 달라졌을 가능성이 있으면 `TODO: verify`로 남긴다.
- 이 문서는 콘텐츠 조사만 다루며 UI 구조나 스타일을 결정하지 않는다.

## 2. 근거 자료와 우선순위

### 제공 자료

1. `원본_김서영_PF_030228.pdf`
   - 18쪽 포트폴리오
   - SCUTTA 리더십, Notion 시스템, 웹 서비스, YouTube 출연, 학습 전환 과정
2. `김서영_CV_030228.pdf`
   - 2쪽 CV
   - 학력, 경험, 프로젝트 기간, 사용자·기록 수치, 학습 이력
3. 현재 포트폴리오 저장소
   - 페이지, 데이터 파일, GitHub Pages 배포 설정
4. 접근 가능한 GitHub 저장소
   - public 저장소의 코드·문서·커밋
   - private 팀 저장소의 공개 가능한 프로젝트 요약과 본인 기여 근거

### 사실 충돌 시 우선순위

1. 최신 구현과 최신 저장소 문서
2. 저장소의 커밋·PR·테스트 근거
3. CV의 기간과 정량 결과
4. 포트폴리오 PDF의 서사와 이미지
5. 티켓에 적힌 후보 설명

수치가 저장소에서 재현되지 않더라도 CV에 명시되어 있으면 `CV 기준`이라고 출처 시점을 함께 적는다.

## 3. 현재 포트폴리오 저장소

### 구조

- Astro `6.3.2`, Node `22.12.0` 이상을 사용하는 정적 사이트다.
- 파일 기반 라우팅으로 `/`, `/about/`, `/projects/`, `/posts/`와 프로젝트 상세 2개를 제공한다.
- 공통 레이아웃과 Header, Navigation, Footer는 `src/layouts/BaseLayout.astro`에 있다.
- 프로젝트와 글은 각각 `src/data/projects.json`, `src/data/posts.json`에 있다.
- 프로젝트 목록은 `src/components/ProjectCard.astro`를 사용한다.
- 현재 콘텐츠는 한국어 단일 언어이며 Astro Content Collections는 아직 사용하지 않는다.

### 배포

- 공개 주소는 `https://hamoyeong.github.io/`다.
- `astro.config.mjs`의 `site`가 위 주소로 설정되어 있다.
- `.github/workflows/deploy.yml`에서 `main` push와 수동 실행을 트리거로 사용한다.
- `withastro/action@v6`로 빌드한 뒤 `actions/deploy-pages@v4`로 GitHub Pages에 배포한다.
- GitHub Pages의 배포 Source는 GitHub Actions이며 HTTPS가 강제된다.
- 최근 `main` 배포 워크플로 실행은 성공 상태로 확인했다.

### 현재 콘텐츠의 한계

- README가 Astro 기본 스타터 문서다.
- Home과 About의 소개가 현재 프로젝트와 Academy 경험을 충분히 반영하지 못한다.
- Projects에는 SCUTTA Notion 시스템과 웹 서비스만 짧게 등록되어 있다.
- Posts는 목록용 샘플 데이터만 있고 상세 글이 없다.
- 다국어, 콘텐츠 스키마, draft 정책은 이후 티켓 범위다.

## 4. 페이지별 콘텐츠 후보

### Home

- 정체성 후보: 복잡한 문제를 구조로 풀고, 그 구조를 다른 사람이 이해할 수 있는 언어로 연결하는 iOS 개발자
- 현재 여정: Apple Developer Academy @ POSTECH Cohort 2026
- 대표 프로젝트 후보
  - 텃밭 치유 기록 앱 `쑥쑥`
  - BombAway
  - SCUTTA 경기 기록 Notion 시스템
- 핵심 관점
  - 실제 사용자 문제에서 시작하기
  - 데이터와 책임을 먼저 구조화하기
  - 팀의 공동 이해를 돕기
  - 컴퓨팅 사고력과 책임 있는 AI 활용
- 최신 Posts 후보는 아래 Posts 목록에서 선택한다.

### About

- 서울시립대학교 화학공학과
  - Class of 2027
- Apple Developer Academy @ POSTECH Cohort 2026
- SCUTTA 리더십
  - 훈련부장: 2022.03-2023.08
  - 회장: 2023.09-2024.02
  - 홍보부장: 2024.09-2025.02
  - 총무: 2025.03-2025.08
- 서울시립대학교 웰니스센터 직장체험인턴: 2024.09-2025.08
- 화학 튜터링: 2023.03-2023.12
- CCMD 연구실 연구인턴: 2024.06-2024.08
- Java 스터디 운영과 우아한테크코스 8기 프리코스: 2025.10-2025.11
- Flutter 10주 스터디: 2025.07-2025.10
- YouTube `방구석 리뷰룸` 출연: 2024.08-2024.09
  - iPad 영상: 2026.07.29 기준 89만 회
  - Notion 영상: 2026.07.29 기준 32만 회
  - 정확한 영상 URL은 experience 콘텐츠에 반영했다.

### Projects

대표 프로젝트 후보:

1. 쑥쑥 - iOS, 도시 텃밭, User Experience, 아키텍처
2. SCUTTA 경기 기록 웹 서비스 - Web, Community, 실제 운영
3. SCUTTA 경기 기록 Notion 시스템 - Automation, Community
4. 하모컴 - macOS, Education, Computational Thinking
5. DayFlow - iOS, Personal Productivity, Architecture
6. BombAway - iOS, UWB, 실시간 팀 프로젝트

Academy 챌린지:

- C1: Academy 생활 필수 설정 안내 프로토타입
- C2: Academy 구성원을 위한 혜택·장소 정보 보관/탐색 프로토타입
- C3: BombAway
- C4: 쑥쑥

학습 및 실험:

- Java 프리코스 3개 저장소
- Flutter 학습 저장소
- Sweet-SwiftUI

### Posts

- Notion에서 웹 서비스로 확장하며 바뀐 문제 정의
- 순위가 실력 차이를 강화할 수 있었던 이유
- 사용자의 자율성과 운영 규칙 사이에서 베팅 기능을 설계한 과정
- Protocol → PreviewService → Service로 책임을 나눈 이유
- 화면보다 데이터와 흐름을 먼저 생각하는 코드 리딩
- 완성된 코드를 주는 대신 팀원이 스스로 생각하도록 돕는 방법
- NearbyInteraction과 기기 간 상태 동기화에서 배운 점
- 계획과 실제 기록을 독립된 데이터로 둔 이유
- AI의 답보다 내가 제공한 전제를 먼저 의심하기
- 컴퓨팅 사고력은 AI 시대에 왜 더 중요해지는가
- 화학공학에서 개발로 방향을 바꾸며 다시 찾은 배움의 즐거움

## 5. 접근 가능한 저장소 분류

private 저장소는 공개 저장소인 이 문서에 식별자를 남기지 않고 프로젝트 또는 학습 묶음으로만 분류했다.

| 분류 | 저장소 또는 프로젝트 | 포트폴리오 사용 |
| --- | --- | --- |
| 대표 프로젝트 | `scutta-2025-1` | SCUTTA 웹 서비스 case study와 public 링크 |
| 대표 프로젝트 | `ComputationalThinkingHamo` | 하모컴 교육 도구 case study와 Posts |
| 대표 프로젝트 | `DayFlow` | 개인 iOS 프로젝트 case study와 아키텍처 Posts |
| Academy 챌린지 | `C1`, `C2` | About에는 요약, Projects에는 전체 case study |
| Academy 챌린지 | BombAway, 쑥쑥 | private 팀 프로젝트의 공개 가능한 요약과 본인 기여만 사용 |
| 학습 및 실험 | `java-calculator-8`, `java-racingcar-8`, `java-lotto-8` | Java 프리코스와 스터디 회고 |
| 학습 및 실험 | `yeong_mood_tracker` | Flutter 아키텍처 학습 근거, 대표 프로젝트에서는 보류 |
| 학습 및 실험 | `Sweet-SwiftUI` | 초기 SwiftUI 학습 근거 |
| 학습 및 실험 | 그 외 public Flutter starter·clone 저장소 | About의 학습 흐름에만 묶어서 언급 |
| Posts 소재 | 위 대표 프로젝트의 public 문서와 검증 기록 | 아키텍처, 데이터 계약, 사용자 규칙, AI 활용 글 |
| 제외 | private 튜토리얼·clone 저장소 | 링크와 내부 구현 비공개 |
| 제외 | README가 기본 starter이고 Problem/Result가 없는 iOS·Web·Flutter 실험 | 근거가 보강되기 전 전시하지 않음 |
| 제외 | GitHub 협업 실습 저장소 | 포트폴리오 목적과 직접 관련 없음 |
| 제외 | 현재 포트폴리오 저장소 | 결과물이 아닌 사이트 자체 |

확인된 저장소 중 대표 프로젝트나 학습 서사로 분류하지 못한 항목은 억지로 전시하지 않는다. README, 문제 정의, 본인 기여, 결과 중 하나라도 부족하면 제외 상태를 유지한다.

## 6. 대표 프로젝트 상세 인벤토리

### 6.1 SCUTTA 경기 기록 Notion 시스템

- 기간: 2024.09-2025.02
- 성격: 동아리 임원진과 함께 운영한 커뮤니티 프로젝트
- Problem: 기존 부원과 신입 부원이 자연스럽게 섞이지 않고, 정기 활동에서 참여가 소극적인 문제
- User: 서울시립대학교 중앙 탁구 동아리 SCUTTA 부원
- Role: 아이디어 제안, Notion 시스템 제작, 자동화 구현, 운영과 피드백 반영
- Action
  - 경기 기록과 여러 순위 항목을 Notion 데이터베이스로 구성
  - Apple 단축어와 Notion API를 연결해 제출 텍스트를 JSON으로 바꾸고 페이지 생성을 반자동화
  - 설문 피드백을 바탕으로 제출 방식, 업적 확인 방식, 경기 교류 유도 방식을 개선
- Key decision
  - 승리 수만 강조하지 않고 최다 패배, 최다 상대 등 여러 참여 기준을 제공
  - 상대 선택을 강제하지 않고 `오늘의 상대` 같은 간접 동기를 제공
- Result
  - 2024.09-2025.02 사용자 84명
  - 같은 운영 기간 누적 경기 기록 1,890건
- Learning
  - 운영 도구는 기능 수보다 실제 제출·확인 흐름과 관리 비용이 중요하다.
  - 자율성을 유지하면서 행동을 유도하는 규칙을 설계할 수 있다.
- 공개 가능 자료
  - 기능 구조를 다시 그린 다이어그램
  - 개인정보를 제거한 단축어 흐름
  - 익명화한 화면 일부
- 공개 금지
  - 실제 부원 이름, 경기 결과, Notion URL, 원본 피드백 메시지
- 근거: 포트폴리오 PDF 7-10쪽, CV 2쪽

### 6.2 SCUTTA 경기 기록 웹 서비스

- 기간: 2025.03-2025.08
  - 공개 저장소 커밋은 2025년 3월까지 확인된다.
  - 이후 운영은 2025년 8월 인계까지 이어졌다.
- 성격
  - CV에는 `1인 개발`로 명시되어 있다.
  - 포트폴리오 PDF에는 동아리 임원진과의 팀 프로젝트로 표현되어 있다.
  - 공개 문구는 `개발은 1인, 운영과 피드백은 동아리 임원진과 협업`으로 구분하는 것이 안전하다.
- Problem
  - Notion의 수동 계산, 모바일 접근성, 동기화 지연, 단편적인 기능
  - 경기 기록과 참여 유도 기능을 한 서비스에서 운영할 필요
- User: SCUTTA 부원과 운영진
- Role: 풀스택 1인 개발, 배포, 운영, 피드백 기반 개선
- Action
  - HTML/CSS/JavaScript 화면과 Flask 기반 서버 구현
  - PostgreSQL에 선수, 경기, 리그전, 베팅, 오늘의 상대 데이터를 모델링
  - 경기 제출·승인, 선수 검색, 순위, 리그전, 베팅, 업적, 오늘의 상대 기능 구현
- Key decision
  - Notion을 계속 확장하지 않고 별도 웹 서비스로 전환
  - 경기 기록과 승인 상태를 분리
  - 사용자 행동을 직접 통제하기보다 포인트와 다양한 순위로 참여를 유도
- Result
  - 2025.03-2025.08 사용자 128명
  - 같은 운영 기간 누적 경기 기록 785건
  - 다음 담당자가 별도 저장소에서 리팩터링한 후에도 서비스의 토대는 유지되며 현재 활발히 사용 중
- Learning
  - 실제 사용자의 피드백을 빠르게 제품 규칙에 반영하는 경험
  - 빠른 구현 이후에는 데이터 모델과 변경 가능한 규칙의 경계를 설계해야 한다.
  - AI로 구현을 시작하더라도 오류의 원리와 구조를 이해해야 유지할 수 있다.
- 공개 가능 자료
  - public 저장소: `https://github.com/hamoYeong/scutta-2025-1`
  - 개인정보를 제거한 화면과 기능 흐름
- 공개 금지
  - 운영 비밀번호, 환경 설정 값, 실제 선수·경기 데이터, 폐쇄된 배포 URL
- 근거: 포트폴리오 PDF 3-5쪽, CV 2쪽, public 저장소

### 6.3 Academy C1

- 기간: 2026.03-2026.04의 public 커밋으로 확인
- 성격: 주제 탐색과 기획은 팀, 구현은 각자 개인으로 진행
- 학습 구조: Challenge-Based Learning과 Swift 기초를 함께 경험
- 확인된 구현
  - POSTECH 웹메일, Academy 웹메일, 기본 메일 앱, 필수 앱, 모바일 학생증 설정을 안내
  - SwiftUI `NavigationStack`과 경로 모델을 사용한 단계형 프로토타입
- Problem: Academy를 위한 서비스라는 Big Idea에서 새 러너의 초기 설정 안내를 Challenge Response로 도출
- User: 코드 내용상 Academy 생활을 처음 설정하는 학습자
- Role: 팀 주제 탐색과 기획 참여, 개인 SwiftUI 앱 구현
- Action: 안내 항목을 경로 데이터로 분리하고 목록-상세 탐색 흐름을 구현
- Result: 작동 가능한 SwiftUI 프로토타입
- Learning: CBL은 정답을 먼저 가르치기보다 질문과 구현을 통해 문제 해결 안에서 배움을 만든다는 점을 경험
- 공개 가능 링크: `https://github.com/hamoYeong/C1`

### 6.4 Academy C2

- 기간: 2026.04의 public 커밋으로 확인
- 성격: 개인 프로젝트
- 확인된 구현
  - Academy 생활에서 이용할 수 있는 학습 혜택, 시설, 활동 정보를 보관하고 탐색
  - SwiftUI, SwiftData, ViewModel 구조
  - 카테고리·하위 카테고리·상태별 탐색과 초기 데이터 seed
- Problem: 혜택 정보가 흩어져 있다는 아이디어가 실제 사용자 필요를 충분히 담고 있는지 확신하기 어려웠음
- User: 코드 내용상 Academy 구성원
- Role: 본인 계정의 public 저장소에서 모델, View, ViewModel을 작성
- Action: 혜택 데이터를 구조화하고 `보관함`과 `탐색` 흐름을 구현
- Result: SwiftData를 사용하는 작동 가능한 프로토타입
- Learning
  - 검증되지 않은 사용자 문제를 해결했다고 단정하지 않음
  - 프로젝트를 상태 소유권과 아키텍처를 배우는 실험으로 전환
- 공개 가능 링크: `https://github.com/hamoYeong/C2`

### 6.5 Academy C3 - BombAway

- 기간: 2026.05-2026.06
- 성격: 팀 프로젝트, private 저장소
- Problem: 같은 공간의 여러 사람이 화면을 계속 보지 않고 거리·방향 감각으로 함께 즐기는 실시간 iPhone 게임
- User: UWB 지원 iPhone을 가진 근거리 다인 플레이어
- Role: iOS 개발, 게임 구조와 상태 흐름 구현
- 확인된 주요 기여
  - 앱 아키텍처 기반과 결과 화면 흐름
  - 게임 상태 생명주기와 폭탄 전달 모델
  - NearbyInteraction 방향·거리 흐름
  - 기기 간 시작 카운트다운 동기화
  - 공간 음향 시작 흐름과 NI fallback 처리
- Tech: SwiftUI, MultipeerConnectivity, NearbyInteraction, 공간 음향
- Key decision
  - 화면, ViewModel, 게임 조정자, 통신·센서 Service의 책임 분리
  - 서버 없이 주변 기기 간 세션과 게임 상태를 동기화
- Result
  - 방 생성·참가, 역할 분배, 폭탄 전달, 결과 흐름이 저장소에서 확인됨
  - C3 최종 부스에서 기술을 설명하고 방문자가 앱을 직접 체험
- Learning
  - 여러 기기의 상태를 일관되게 맞추는 문제
  - 센서 품질 차이를 게임 규칙과 피드백으로 흡수하는 문제
- 공개 가능 자료
  - 프로젝트명, 소개, 기술 스택과 최종 부스 경험
  - 본인 역할을 구분한 고수준 아키텍처 다이어그램
- 공개 금지
  - private 저장소 URL, 내부 문서와 코드, 팀원 계정, 승인되지 않은 테스트 기록

### 6.6 Academy C4 - 쑥쑥

- 기간: 2026.07-현재
- 성격: 팀 프로젝트, private 저장소
- Naming: 공개 프로젝트명은 `쑥쑥`; `Leaf`는 Xcode 프로젝트명
- Problem: 외부 변수가 많은 텃밭의 모든 문제를 관리하기보다 돌봄 과정의 치유를 증대하고 기록하기
- User: 소규모 텃밭을 돌보며 과정을 기록하고 돌아보려는 사용자
- Role: iOS 개발, Record와 MainHome 흐름, 서비스 구조, 팀의 구조 이해 지원
- 확인된 주요 기여
  - Record Service의 Protocol → PreviewService → 실제 Service 흐름
  - 기록 추가·상세·수정과 수확 기록 연결
  - MainHome 활동 타이머와 기록 화면 연결
  - 3D 텃밭 렌더러의 책임 분리
  - 작물별 성장 단계 모델과 표시 정책
- Tech: Swift, SwiftUI, SwiftData, USDZ
- Key decision
  - 화면이 저장 방식을 직접 알지 않도록 Service와 Repository 경계를 둠
  - Preview에서 실제 저장소 없이 여러 화면 상태를 재현
  - 작물별 성장 규칙과 화면 표현을 분리
- Result
  - 시청 담당자 대면 인터뷰를 통해 문제 중심 기획을 치유 경험 중심으로 전환
  - 텃밭 이용자 47명 설문으로 치유가 일어나는 상황을 조사
  - 온보딩, 현재 텃밭, 활동 타이머, 성장 로드맵, 물 주기·수확 기록 흐름이 구현됨
  - 최종 User Testing의 피드백으로 앱을 개선
- Learning
  - 좋은 구조를 설명하는 것과 팀이 함께 구현 가능한 구조를 만드는 것은 다른 문제다.
  - 완성된 코드를 전달하기보다 계층의 책임과 데이터 흐름을 함께 설명하는 과정이 중요하다.
- 공개 가능 자료
  - 팀이 승인한 앱 소개, 기능, 데모, 스크린샷
  - 공개용으로 다시 그린 서비스·데이터 흐름
- 공개 금지
  - private 저장소 URL, 내부 이슈·PR, 팀원 계정, 원본 인터뷰와 참여자 정보

### 6.7 하모컴 (`ComputationalThinkingHamo`)

- 기간: 2026.06
- 성격: 개인 개발, 중단된 교육 도구 프로토타입
- Problem
  - 코딩 초보자가 AI가 만든 결과를 따라가기만 하고 View보다 먼저 데이터와 흐름을 생각하는 연습을 놓칠 수 있음
- User: 구체적으로 검증되지 않은 초기 학습자 가설
- Role: 수업 설계, 제품 구조 설계, macOS 앱 구현
- Action
  - 읽기 전용 TextKit 코드 뷰어, 줄 번호와 범위 코멘트 구현
  - 두 코드 구조를 비교하는 섹션 unlock과 분할 보기 구현
  - SwiftData에 코멘트·댓글을 저장
  - MultipeerConnectivity로 같은 수업 세션에서 코멘트를 공유
- Tech: SwiftUI, AppKit TextKit, SwiftData, MultipeerConnectivity, MVVM
- Key decision
  - 1.0은 코드 편집기가 아니라 코드 리딩과 대화에 집중
  - SwiftData를 source of truth로 두고 근거리 통신은 공유·재동기화 수단으로 제한
- Result
  - 저장소의 최종 점검 문서에서 코드 로딩, 검색, 코멘트, 비교, 근거리 공유 기능 구현을 확인
  - 실제 수업에는 사용하지 않았고 명확한 니즈와 커리큘럼 없이 만든 프로토타입이라는 판단에서 중단
- Learning
  - 교육 도구는 기능 수보다 학습자가 다시 꺼내 쓸 수 있는 사고 체계와 커리큘럼이 중요하다.
  - C4의 1:1 도움 경험을 거쳐 체계적인 커리큘럼에 대한 동기가 다시 생겼고 관련 멘토에게 연락함
- 공개 가능 링크: `https://github.com/hamoYeong/ComputationalThinkingHamo`

### 6.8 DayFlow

- 기간: 2026.06-2026.07
- 성격: 직접 필요를 느껴 만들고 사용한 뒤 멈춘 개인 iOS 사이드 프로젝트
- Problem
  - 계획을 실제 행동에 맞춰 자동 보정하면 계획과 기록의 의미가 섞이고 하루를 성공/실패로 평가하기 쉬움
- User: 우선 본인 자신
- Role: 제품 원칙, 데이터 모델, 아키텍처, 기능 구현과 검증
- Action
  - 계획과 실제 기록을 독립된 모델로 설계
  - SwiftData, 선택적 CloudKit, App Intents, Widget, Live Activity 구현
  - 수면, 방해, 카테고리, 템플릿, 회고, 캘린더 import 흐름 구현
  - 시간대, DST, 자정 통과, 구간 겹침을 테스트로 고정
- Tech: SwiftUI, SwiftData, CloudKit, EventKit, HealthKit, App Intents, WidgetKit, ActivityKit
- Key decision
  - 계획은 `오늘의 가설`, 기록은 `실제로 살아낸 하루`로 분리
  - CloudKit을 사용할 수 없어도 local-only 핵심 흐름을 유지
  - Widget과 Live Activity를 원본 저장소가 아닌 데이터 projection으로 제한
- Result
  - 기능별 build와 unit/UI test 기록이 public 문서에 남아 있음
  - 직접 사용했으나 추가 사용자 검증, 반복 개선과 출시 없이 중단
- Learning
  - 시간과 동기화가 있는 앱에서는 화면보다 데이터 계약과 실패 시 fallback을 먼저 정해야 한다.
- 공개 가능 링크: `https://github.com/hamoYeong/DayFlow`

## 7. 학습 및 실험 저장소

### Java 프리코스

- 기간: 2025.10-2025.11
- 저장소
  - `java-calculator-8`
  - `java-racingcar-8`
  - `java-lotto-8`
- 확인된 사실
  - 우아한테크코스 프리코스 원본을 fork한 public Java/Gradle 저장소다.
  - CV에 Java 4주 스터디 모집·운영과 프리코스 참여가 명시되어 있다.
- 분류: 학습 및 실험, Posts 소재
- 포트폴리오 사용
  - 대표 프로젝트에서 강조하지 않고 학습 커뮤니티 참여 이력으로만 요약

### Flutter

- 기간: CV 기준 2025.07-2025.10
- 확인된 public 저장소
  - `yeong_mood_tracker`: Riverpod, GoRouter, Firebase, SharedPreferences를 사용한 감정 기록 앱
  - `yeong_animation`, `yeong_clova_mood`, `yeong_twitter`, `yeongflix`: README가 기본 Flutter starter 수준인 학습 저장소
- private clone·튜토리얼 저장소도 일부 확인되나 포트폴리오에서 링크하지 않는다.
- 분류: 학습 및 실험
- 포트폴리오 사용
  - Flutter 10주 스터디와 모바일 플랫폼 학습 흐름을 About에 요약
  - `yeong_mood_tracker`는 공개 링크 사용이 가능하지만 대표 프로젝트에서는 강조하지 않음
  - 기본 starter 또는 clone 저장소는 대표 프로젝트에서 제외

### SwiftUI

- `Sweet-SwiftUI`
  - public fork
  - SwiftUI 개념, Component, Modifier를 정리한 학습 저장소
  - 분류: 학습 및 실험
  - 대표 프로젝트에서는 제외하고 초기 SwiftUI 학습의 근거로만 사용

## 8. 포트폴리오에서 제외할 저장소

- 강의나 튜토리얼을 그대로 따라 만든 clone 프로젝트
- README가 기본 starter 상태이고 본인의 문제 정의나 결정이 확인되지 않는 프로젝트
- private 저장소의 URL과 내부 구현
- 연습용 협업 저장소와 GitHub 사용법 실습 저장소
- 현재 포트폴리오 저장소 자체
- 민감한 사용자 데이터나 운영 설정이 포함될 가능성이 있는 과거 서비스 저장소의 직접 데모

제외는 경험을 숨긴다는 뜻이 아니다. About의 학습 타임라인이나 Posts의 회고 근거로는 사용할 수 있지만 대표 case study로 전시하지 않는다.

## 9. 사용자 확인 반영

- [x] Class of 2027 표기
- [x] 공개 이메일, LinkedIn과 현재 GitHub 계정
- [x] C1의 팀 기획·개인 구현 구조와 CBL 배움
- [x] C2의 개인 프로젝트 성격과 검증되지 않은 사용자 필요에 대한 판단
- [x] C3 최종 부스 체험과 공개 범위
- [x] C4 공개명 `쑥쑥`, 사용자 리서치와 User Testing
- [x] SCUTTA Notion·웹 서비스 운영 기간과 수치 기준
- [x] SCUTTA 웹 서비스 인계 후 현재 운영 상태
- [x] YouTube 영상 링크, 조회수와 확인일
- [x] 하모컴 미사용·중단 상태와 다음 커리큘럼 탐구
- [x] DayFlow의 직접 사용 후 중단 상태
- [x] Java 프리코스는 강조하지 않고 Flutter 학습 저장소는 공개 링크 가능

## 10. Ticket 01 결정

- Home은 SCUTTA, Academy, 컴퓨팅 사고력 경험을 서로 다른 역할로 배치한다.
- Projects의 featured는 쑥쑥, BombAway와 SCUTTA Notion 시스템을 우선한다.
- SCUTTA Notion 시스템은 웹 서비스의 전 단계로 연결하되 독립 case study도 가능하다.
- Academy C1-C4는 About에서 요약하고, 전체 Problem/Action/Result와 회고는 Projects 상세에 둔다.
- Posts는 구현 방법만이 아니라 사용자 규칙, 아키텍처 설명, 공동 이해, 책임 있는 AI 활용을 중심으로 작성한다.
- private 팀 프로젝트는 팀 승인 전까지 링크와 원본 이미지를 공개하지 않는다.
