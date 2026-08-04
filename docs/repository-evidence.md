# 프로젝트 저장소 근거 기록

> Ticket 09 조사 문서
>
> 기준일: 2026-07-29

## 1. 목적과 공개 원칙

이 문서는 프로젝트 case study의 문장이 실제 저장소와 제공 자료 중 어디에서 확인됐는지 추적한다. README만 읽지 않고 디렉터리, 모델, Service·Repository·View 구조, commit, PR merge 기록, issue 번호, migration과 test를 함께 확인했다.

- public 저장소는 공개 URL과 고수준 구현 근거를 사용할 수 있다.
- private 팀 저장소는 프로젝트 목적, 공개가 승인된 이름과 본인의 기여만 요약한다.
- private 저장소 URL, 내부 코드, issue·PR URL, 팀원 계정과 사용자 데이터는 기록하지 않는다.
- 저장소가 증명하지 못하는 사용자 수와 운영 수치는 제공된 CV 또는 포트폴리오 PDF 기준이라고 표시한다.
- 구현 여부와 사용자 가치 검증 여부를 구분한다. 기능이 존재해도 실제 사용자 효과를 확인한 것으로 표현하지 않는다.

## 2. 대표 프로젝트별 근거

### 2.1 쑥쑥

근거 범위:

- private 팀 저장소의 최신 README, Feature·Domain·Preview 구조
- 본인 작성 commit과 merge된 PR 기록
- Record, MainHome, Roadmap, Repository와 Preview 관련 구현

확인된 사실:

- 저장소의 Xcode 프로젝트명은 `Leaf`지만 사용자가 확인한 공개 프로젝트명은 `쑥쑥`이다.
- 저장소 기록은 2026년 7월부터 확인된다.
- SwiftUI, SwiftData와 USDZ를 사용한다.
- AppSession, Feature Router, Service, Repository로 책임을 나눈다.
- 메모리 기반 SwiftData container와 preview service로 실제 데이터 없이 화면 상태를 구성한다.
- 본인 기록에서 Record service 계약, preview 구현, 실제 service, 기록 상세·수정·수확 흐름, 활동 timer 연결과 3D 작물 표시 책임 분리가 확인된다.
- README에는 검증 가능한 screenshot과 demo가 아직 없다고 명시되어 있다.
- 별도의 자동화 test target은 조사 범위에서 확인하지 못했다.
- 포항시청 도시농업 담당자 대면 인터뷰를 통해 텃밭 문제 중심에서 치유 경험 중심으로 기획을 전환했다.
- 텃밭 이용자 47명 설문과 최종 User Testing을 진행했다.
- 도메인 모델 설계와 다양한 기록 유형 설명은 본인 기여다.

공개 결정:

- 프로젝트명은 `쑥쑥`으로 표기하고 `Leaf`는 공개 이름으로 사용하지 않는다.
- 팀 전체 기능과 본인 기여를 별도 목록으로 표현한다.
- 저장소 링크, 팀원 정보, 원본 코드와 내부 issue·PR은 공개하지 않는다.
- 인터뷰, 47명 설문과 User Testing 과정은 공개하되 원본 응답과 참여자 정보는 공개하지 않는다.

### 2.2 BombAway

근거 범위:

- private 팀 저장소의 README, 기술 문서와 App 구조
- GameCoordinator, MPC·NI·공간 음향 service, game state model
- 본인 작성 commit과 merge된 PR 기록

확인된 사실:

- 전체 기간은 2026.05.06-2026.06.12, 개발 기간은 2026.05.20-2026.06.12로 문서화되어 있다.
- MultipeerConnectivity가 방과 게임 상태를 연결하고 NearbyInteraction이 거리·방향을 측정한다.
- PHASE가 방향 기반 공간 음향에 사용된다.
- 본인 기록에서 game state lifecycle, 폭탄 전달 model, 기기 간 countdown, NI fallback·active target과 공간 음향 연결이 확인된다.
- 자동화 test target 대신 실제 UWB 지원 기기에서 여러 대를 연결하는 검증 절차가 문서화되어 있다.
- 최종 부스에서 방문자에게 MultipeerConnectivity와 NearbyInteraction을 설명하고 앱을 직접 체험하게 했다.
- 2026년 7월 29일 확인한 [Apple의 iOS 27 문서](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-27-release-notes)와 [Nearby Interaction 문서](https://developer.apple.com/documentation/NearbyInteraction)에서도 프레임워크가 계속 안내된다. 프레임워크 전체가 iOS 27에서 deprecated된다는 표현은 사용하지 않는다.
- Apple의 [NINearbyObject 문서](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject)는 방향 값을 제공할 수 없을 때 `nil`이 될 수 있다고 설명하며, 프로젝트에서도 상대 방향 안정성이 한계로 확인됐다.

공개 결정:

- 한국어·영어 private-summary case study를 추가한다.
- private 저장소 URL, 팀원과 내부 문서는 공개하지 않는다.
- 최종 부스 경험은 공개하되 정량 사용성 테스트로 확대 해석하지 않는다.

### 2.3 DayFlow

근거 범위:

- public 저장소의 전체 commit, Models, Stores, Features, Widget·Live Activity target
- unit test와 UI test
- 기능 ticket 문서

확인된 사실:

- 저장소 기록은 2026년 6월부터 시작하며 현재 공개 콘텐츠의 기간과 일치한다.
- SwiftData versioned schema에서 계획, 실제 기록, 수면, 방해, template, 회고와 calendar import 데이터를 분리한다.
- EventKit calendar import와 HealthKit sleep import가 구현되어 있다.
- CloudKit schema compatibility gate와 local-only persistence fallback이 있다.
- App Intents, Widget과 Live Activity는 별도 source of truth가 아니라 조회용 snapshot을 사용한다.
- test는 시간 구간, DST·자정 경계, store, CloudKit fallback, calendar import, HealthKit, App Intents, Widget과 Live Activity 흐름을 포함한다.
- 조사 시점의 public PR과 issue 목록은 비어 있으며 구현 근거는 commit과 저장소 문서를 기준으로 확인했다.
- 사용자가 직접 사용한 뒤 추가 검증, 개선과 release 없이 중단했다.

공개 결정:

- EventKit, HealthKit과 검증 범위를 case study에 추가한다.
- test가 존재한다는 사실은 설명하되 제품 가치나 release 완료로 확대 해석하지 않는다.
- 진행 중이 아닌 중단된 개인 사이드 프로젝트로 표기한다.

### 2.4 HamoCom

근거 범위:

- public 저장소의 PRD, 단계별 ticket과 final check 문서
- Models, Services, ViewModels, Persistence와 TextKit code viewer
- 전체 commit 기록

확인된 사실:

- 저장소 기록과 구현은 2026년 6월에 집중되어 있다.
- 모든 확인된 commit은 본인 작성 기록이다.
- 읽기 전용 TextKit code viewer, 줄 범위 comment, SwiftData 저장, 단계별 section unlock, split comparison, 현재 file 검색이 구현되어 있다.
- MultipeerConnectivity는 comment·reply 공유와 재동기화에 사용된다.
- 동기화 충돌은 `updatedAt` 기준 last-write-wins이며, 연결은 local network 권한과 환경에 의존한다.
- 별도의 자동화 test target은 확인하지 못했다.
- 조사 시점의 public PR과 issue 목록은 비어 있으며 구현 근거는 commit과 단계별 ticket 문서를 기준으로 확인했다.
- 실제 수업에는 사용하지 않았고, 명확한 니즈와 커리큘럼 없이 앱부터 만들고 있다는 판단에서 중단했다.
- 이후 C4 팀원과의 1:1 구현 도움 경험을 통해 체계적인 커리큘럼에 대한 동기가 다시 생겼고 관련 멘토에게 연락했다.

공개 결정:

- 기간을 `2026.06`으로 표기하고 상태를 중단된 prototype으로 바꾼다.
- 동기화 한계와 자동화 test 부재를 `Challenges`와 다음 개선점에 반영한다.
- 실제 수업이나 교육 효과를 성과로 표현하지 않는다.

### 2.5 SCUTTA 경기 기록 웹 서비스

근거 범위:

- public 저장소의 Flask app, SQLAlchemy model, route, Alembic migration과 commit
- 제공된 CV와 포트폴리오 PDF

확인된 사실:

- public 저장소 기록은 2024.12-2025.03 범위에서 확인된다.
- Player, Match, League, Betting, BettingParticipant와 TodayPartner model이 존재한다.
- Match와 Betting에 제출·승인 상태가 분리되어 있다.
- Alembic migration에서 순위, betting 제출·결과와 league model 변경 기록을 확인했다.
- server route는 한 파일에 많은 운영 규칙을 함께 담고 있으며 자동화 test는 확인하지 못했다.
- 조사 시점의 public PR과 issue 목록은 비어 있으며 구현 근거는 commit과 migration을 기준으로 확인했다.
- public commit author 이름과 현재 GitHub 계정 이름이 다르므로 본인 기여는 CV의 1인 개발 기록과 저장소 소유 관계를 함께 근거로 삼는다.
- 128명과 경기 기록 785건은 2025년 3월부터 8월까지의 운영 합계다.
- 2025년 8월 인계 뒤 다음 담당자가 별도 저장소에서 리팩터링했으며, 기존 토대를 유지한 서비스가 현재도 활발히 사용되고 있다.

공개 결정:

- model과 migration에서 확인된 구조를 기술 설명에 추가한다.
- 자동화 test와 분리된 domain service가 없었던 점을 다음 개선점으로 남긴다.
- 수치는 2025.03-2025.08 운영 기간을 함께 표시한다.
- 과거 commit identity와 현재 GitHub 사용자명 변경은 공개 페이지에서 별도로 설명하지 않는다.

### 2.6 SCUTTA 경기 기록 Notion 시스템

근거 범위:

- 제공된 포트폴리오 PDF와 CV
- 후속 웹 서비스의 공개 저장소

확인된 사실:

- Notion database, Apple Shortcuts와 Notion API를 사용한 흐름은 제공 자료에서 확인된다.
- 84명과 1,890건은 2024년 9월부터 2025년 2월까지의 운영 합계다.
- 원본 Notion과 사용자 data는 공개 검증 대상으로 사용하지 않는다.

공개 결정:

- 후속 웹 서비스 저장소를 이전 Notion 시스템의 수치 근거처럼 사용하지 않는다.
- Notion URL, 실제 부원과 경기 data, 원본 feedback은 계속 비공개로 둔다.

## 3. Academy C1·C2

- C1 public 저장소는 본인 commit으로 구성되어 있으며 NavigationStack과 route data 기반 안내 흐름을 확인했다.
- C2 public 저장소는 본인 commit으로 구성되어 있으며 SwiftData model, 탐색·보관 상태와 TestFlight 배포 기록을 확인했다.
- 조사 시점에 두 저장소 모두 public PR과 issue 목록은 비어 있다.
- C1은 주제 탐색과 기획까지 팀으로, 구현부터 각자 개인으로 진행했다.
- C1은 CBL과 Swift 기초를 함께 배우도록 구성됐으며 Academy를 위한 서비스라는 Big Idea에서 Challenge Response를 도출했다.
- C2는 개인 프로젝트이며 흩어진 혜택을 모으자는 아이디어의 사용자 필요를 충분히 확신하지 못해 아키텍처 학습에 집중했다.
- About에서는 C1-C4의 변화만 요약하고 전체 내용은 Projects 상세에 둔다.

## 4. 사용자 확인 반영

2026년 7월 29일 사용자 답변으로 학적, C1-C4 진행 방식과 리서치, HamoCom·DayFlow 상태, SCUTTA 운영 기간, YouTube와 공개 연락처를 확인해 한국어·영어 콘텐츠에 반영했다.
