---
slug: leaf
locale: ko
translationKey: leaf
title: Leaf
summary: 텃밭에서 보낸 시간과 물 주기·수확·메모를 작물의 성장 과정과 함께 돌아보도록 만든 iOS 기록 앱입니다.
period:
  start: '2026-07'
  end: present
  label: 2026.07-현재
status: in-progress
role:
  - iOS 개발
  - Record 및 MainHome 흐름 구현
  - 서비스 구조 설계와 설명
team:
  type: team
  description: Apple Developer Academy C4 private 팀 프로젝트이며 팀 전체 결과와 공개 가능한 본인 기여를 구분해 설명합니다.
overview: 온보딩에서 텃밭과 작물을 등록하고, 활동 타이머와 물 주기·수확·메모를 성장 로드맵으로 이어주는 iOS 앱입니다.
problem: 텃밭에서 반복되는 물 주기, 활동과 수확 기록이 흩어지면 사용자가 작물의 성장 과정과 자신의 돌봄을 함께 돌아보기 어렵습니다.
whyItMattered: 텃밭의 변화는 느리고 돌봄은 짧게 반복되므로, 한 번의 결과보다 과정의 작은 기록을 이어주는 구조가 필요했습니다.
context: Apple Developer Academy C4에서 2026년 7월부터 진행한 private 팀 프로젝트입니다. 저장소의 최신 README에서 공개 이름 `Leaf`를 확인했으며 사용자 조사 수치는 검증 전까지 공개하지 않습니다.
user: 작은 텃밭을 돌보며 활동과 작물의 성장 과정을 기록하고 돌아보려는 사용자를 대상으로 합니다.
contributions:
  - Record Service를 Protocol, PreviewService와 실제 Service로 나눴습니다.
  - 기록 추가·상세·수정 및 수확 기록 흐름을 구현했습니다.
  - MainHome의 활동 타이머를 기록 생성 흐름과 연결했습니다.
  - 작물별 성장 단계 표시 정책과 3D 텃밭 Scene Renderer의 책임을 분리했습니다.
process:
  - 화면과 데이터 모델을 살피며 기록이 생성되고 저장되는 흐름을 팀과 함께 정리했습니다.
  - 화면이 저장 방식을 직접 알지 않도록 Service 계약과 Preview 구현을 먼저 만들었습니다.
  - Preview 상태를 화면에 연결한 뒤 실제 SwiftData Service, 기록 수정·수확과 활동 타이머 흐름으로 확장했습니다.
research: []
keyDecisions:
  - title: Service 계약을 먼저 정의
    description: 화면이 SwiftData 구현을 직접 알지 않고 Record Service의 계약을 통해 데이터를 다루도록 했습니다.
  - title: Preview를 독립된 구현으로 제공
    description: 실제 저장 데이터 없이도 여러 기록 상태를 화면에서 검토하고 대화할 수 있게 했습니다.
  - title: 성장 규칙과 표현 책임을 분리
    description: 작물별 성장 단계, 기록 데이터와 3D 텃밭 표현이 서로의 내부 구현을 직접 소유하지 않도록 나눴습니다.
technicalStructure:
  - SwiftUI 화면이 Protocol 기반 Record Service에 의존합니다.
  - PreviewRecordService와 실제 RecordService가 같은 계약을 구현하고 Repository가 SwiftData 접근을 담당합니다.
  - AppSession과 Feature Router가 현재 텃밭 상태와 화면 전환의 경계를 관리합니다.
  - 활동 타이머와 기록 생성은 필요한 context만 전달하며 연결됩니다.
  - 작물 성장 표시 정책과 USDZ 기반 GardenPlantSceneRenderer는 별도 책임으로 유지합니다.
challenges:
  - 이미 진행 중인 팀 코드에서 화면, 저장과 도메인 규칙의 책임을 함께 이해하고 조정해야 했습니다.
  - 좋은 구조를 제안하는 것뿐 아니라 프로그래밍 경험이 다른 팀원이 데이터 흐름을 자기 언어로 설명할 수 있게 도와야 했습니다.
  - 자동화 test target과 공개 가능한 사용자 검증 결과가 아직 없어 구현 완료와 사용자 가치를 분리해 판단해야 합니다.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - USDZ
outcomes:
  - 저장소에서 온보딩, 현재 텃밭, 활동 타이머, 성장 로드맵과 물 주기·수확 기록 흐름을 확인했습니다.
  - 메모리 기반 PreviewModelContainer와 mock data로 실제 저장 데이터 없이 주요 화면 상태를 재현할 수 있습니다.
  - 사용자 조사 인원과 테스트 결과는 공개 근거를 확인하기 전까지 성과 수치로 표기하지 않습니다.
whatIWouldChange:
  - 구현 전에 핵심 사용자 흐름과 데이터 용어를 팀이 함께 설명하는 짧은 모델링 세션을 더 일찍 진행하겠습니다.
  - Repository와 Service의 핵심 규칙을 자동화 test로 고정하고 공개 가능한 리서치 근거를 제품 의사결정 기록과 함께 관리하겠습니다.
learnings:
  - 좋은 구조를 만드는 일과 팀이 그 구조를 함께 이해하도록 돕는 일은 모두 필요합니다.
  - 완성된 코드를 전달하기보다 데이터 흐름과 계층의 책임을 함께 설명할 때 팀의 다음 판단이 쉬워집니다.
categories:
  - iOS
  - Community
featured: true
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - protocol-preview-service-flow
---
