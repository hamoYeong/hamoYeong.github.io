---
slug: academy-c2
locale: ko
translationKey: academy-c2
roleLenses:
  - ios-software-development
  - problem-framing-research
competencies:
  - educational-prototyping
  - data-flow-architecture
evidenceLevels:
  - hypothesis
  - implemented
priority: 70
sequence: C2
title: Academy 혜택 탐색 프로토타입
summary: 흩어진 Academy 혜택을 모으는 아이디어를 개인으로 발전시키되, 사용자 필요에 대한 확신이 없음을 인정하고 아키텍처 학습에 집중했습니다.
period:
  start: '2026-04'
  end: '2026-04'
  label: '2026.04'
team:
  type: personal
  description: 문제와 구현 방향을 스스로 정하고 개인 프로젝트로 진행했습니다.
problem: Academy 러너에게 흩어진 혜택을 한곳에서 보여주자는 Challenge Response가 실제 사용자의 필요를 충분히 담고 있는지 확신하기 어려웠습니다.
role:
  - 모델, View와 ViewModel 구현
  - SwiftData 초기 데이터와 보관 흐름 구현
whatITried:
  - 카테고리와 하위 카테고리, 보관 상태를 데이터 모델로 만들었습니다.
  - 탐색과 보관함 흐름을 ViewModel과 SwiftData로 연결했습니다.
  - 사용자 필요에 확신이 들지 않아, 개인적으로 궁금했던 상태 소유권과 아키텍처를 탐구하는 데 챌린지를 활용했습니다.
whatChanged:
  - 단순한 화면 목록에서 상태를 저장하고 다시 탐색할 수 있는 데이터 중심 구조로 확장했습니다.
  - 프로토타입을 TestFlight로 배포했습니다.
learnings:
  - 기획에 확신이 들지 않을 때도 구현을 계속하는 대신, 지금 배우고 싶은 것을 선택할 수 있었습니다.
  - MV와 MVVM 같은 이름보다 상태를 누가 소유하고 변경하는지 설명하는 일이 먼저였습니다.
relatedProject: academy-c2-benefits
relatedPosts: []
repository: https://github.com/hamoYeong/C2
visibility: public
draft: false
---

## Challenge context

사용자 필요를 충분히 검증하지 못했다는 당시의 판단과, 그 상태에서 챌린지를 아키텍처 학습으로 전환한 과정을 함께 기록합니다.
