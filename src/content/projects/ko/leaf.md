---
slug: ssukssuk
locale: ko
translationKey: leaf
title: 쑥쑥
summary: 텃밭의 문제를 관리하는 도구보다 돌봄 과정에서 느끼는 치유를 키우는 경험에 집중한 iOS 기록 앱입니다.
period:
  start: '2026-07'
  end: present
  label: 2026.07-현재
status: in-progress
role:
  - iOS 개발
  - 도메인 모델 설계
  - Record 및 MainHome 흐름 구현
  - 팀의 구조 이해 지원
team:
  type: team
  description: Apple Developer Academy C4에서 팀으로 진행한 프로젝트입니다. 저는 도메인 모델 설계와 기록·메인 홈 구현, 팀의 구조 이해를 맡았습니다.
overview: 온보딩에서 텃밭과 작물을 등록하고, 활동 타이머와 물 주기·수확·메모를 성장 로드맵으로 이어 텃밭에서 보낸 시간을 돌아보게 하는 iOS 앱입니다.
problem: 외부 변수가 많은 텃밭에서는 모든 문제를 앱이 해결하기 어렵고, 단순한 작업 기록만으로는 사용자가 돌봄 과정에서 얻는 치유를 충분히 되돌아보기 어렵습니다.
whyItMattered: 텃밭의 치유는 결과 한 번보다 반복되는 돌봄과 변화의 순간에서 생기므로, 다양한 기록을 연결해 그 과정을 다시 느낄 수 있어야 했습니다.
context: Apple Developer Academy C4에서 2026년 7월부터 팀으로 진행했습니다. C4는 사용자 리서치, 접근성과 User Testing을 거치며 User Experience를 깊게 탐구하는 챌린지였습니다.
user: 작은 텃밭을 돌보며 활동과 작물의 성장 과정에서 느끼는 치유를 기록하고 돌아보려는 사용자를 대상으로 합니다.
contributions:
  - 외부 변수가 많은 텃밭과 여러 기록 유형을 하나의 흐름으로 연결하는 도메인 모델을 설계했습니다.
  - Record Service를 Protocol, PreviewService와 실제 Service로 나눴습니다.
  - 기록 추가·상세·수정 및 수확 기록 흐름을 구현했습니다.
  - MainHome의 활동 타이머를 기록 생성 흐름과 연결했습니다.
  - 모델과 데이터 흐름을 팀원의 지식과 이해 정도에 맞춰 설명하며 함께 구현할 수 있도록 도왔습니다.
process:
  - 포항시청 도시농업 담당자와 대면 인터뷰한 뒤 텃밭의 문제를 줄이는 기획에서 치유를 증대하는 기획으로 방향을 바꿨습니다.
  - 텃밭 이용자 47명을 설문해 치유가 구체적으로 일어나는 상황을 살폈습니다.
  - 사용자 경험과 접근성을 고려해 모델과 화면을 구현하고, 마지막 User Testing의 피드백으로 앱을 발전시켰습니다.
research:
  - 포항시청 도시농업 담당자 대면 인터뷰를 통해 문제 중심 기획을 치유 경험 중심으로 전환했습니다.
  - 텃밭 이용자 47명 설문으로 텃밭의 치유가 일어나는 구체적인 상황을 조사했습니다.
  - 최종 User Testing에서 받은 피드백을 반영해 앱을 개선했습니다.
keyDecisions:
  - title: 문제 해결에서 치유 증대로 방향 전환
    description: 시청 담당자 인터뷰를 계기로 외부 변수를 모두 관리하려 하기보다 사용자가 텃밭에서 느끼는 치유를 이어주는 경험에 집중했습니다.
  - title: 다양한 기록 유형을 하나의 모델로 연결
    description: 단순한 활동 로그를 피하고 물 주기, 수확, 메모와 시간 기록이 성장 과정 안에서 함께 의미를 갖도록 설계했습니다.
  - title: Service 계약과 Preview를 먼저 정의
    description: 화면이 SwiftData 구현을 직접 알지 않고 실제 데이터 없이도 팀이 여러 기록 상태를 함께 검토할 수 있게 했습니다.
technicalStructure:
  - SwiftUI 화면이 Protocol 기반 Record Service에 의존합니다.
  - PreviewRecordService와 실제 RecordService가 같은 계약을 구현하고 Repository가 SwiftData 접근을 담당합니다.
  - AppSession과 Feature Router가 현재 텃밭 상태와 화면 전환의 경계를 관리합니다.
  - 활동 타이머와 기록 생성은 필요한 context만 전달하며 연결됩니다.
  - 작물 성장 표시 정책과 USDZ 기반 GardenPlantSceneRenderer는 별도 책임으로 유지합니다.
challenges:
  - 외부 변수가 많은 텃밭의 특성과 다양한 기록 유형을 모델에 담으면서도 팀이 이해할 수 있는 구조로 만들어야 했습니다.
  - 단순한 기록을 피하기 위해 늘어난 유형과 관계를 프로그래밍 경험이 다른 팀원에게 설명하는 일이 하나의 장벽이 됐습니다.
  - 정답을 전달하기보다 팀원의 현재 지식과 이해 정도를 살피며 필요한 개념까지 함께 거슬러 올라가야 했습니다.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - USDZ
outcomes:
  - 시청 담당자 인터뷰와 47명 설문을 바탕으로 제품 방향을 텃밭의 치유 경험에 맞췄습니다.
  - 온보딩, 현재 텃밭, 활동 타이머, 성장 로드맵과 물 주기·수확 기록 흐름을 구현했습니다.
  - 메모리 기반 PreviewModelContainer와 mock data로 실제 저장 데이터 없이 주요 화면 상태를 재현할 수 있습니다.
  - 최종 User Testing의 피드백을 받아 앱을 한 차례 더 개선했습니다.
whatIWouldChange:
  - 다양한 기록 유형을 구현하기 전에 팀이 핵심 개념과 관계를 직접 그려보는 모델링 세션을 더 일찍 진행하겠습니다.
  - 접근성 기준과 User Testing에서 확인할 질문을 모델 및 화면 설계 단계부터 함께 관리하겠습니다.
learnings:
  - 사용자를 깊게 조사하면 처음 정의한 문제 자체가 바뀔 수 있고, 그 전환이 더 나은 경험의 출발점이 됩니다.
  - 좋은 구조를 만드는 것만큼 상대의 현재 지식과 이해 정도에 맞춰 그 구조를 설명하는 일이 중요했습니다.
  - 한 번의 설명을 넘어 체계화된 배움을 함께 만들고 공유하는 일에 대한 관심이 커졌습니다.
categories:
  - iOS
  - User Experience
  - Accessibility
featured: true
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - protocol-preview-service-flow
---
