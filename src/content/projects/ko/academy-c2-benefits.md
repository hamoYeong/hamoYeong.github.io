---
slug: academy-c2-benefits
locale: ko
translationKey: academy-c2-benefits
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
relatedChallenges:
  - academy-c2
relatedExperiences:
  - apple-developer-academy
title: Academy 혜택 탐색
summary: 흩어진 Academy 혜택을 모으는 아이디어를 개인으로 발전시키되, 사용자 필요에 대한 확신이 없음을 인정하고 아키텍처 학습에 집중한 C2 프로젝트입니다.
period:
  start: '2026-04'
  end: '2026-04'
  label: '2026.04'
status: completed
role:
  - 개인 문제 정의와 구현
  - 데이터 모델과 상태 구조 설계
  - SwiftData 탐색·보관 흐름 구현
team:
  type: personal
  description: 문제와 구현 방향을 스스로 정하고 개인 프로젝트로 진행했습니다.
overview: Academy 러너가 이용할 수 있는 학습 혜택, 시설과 활동을 카테고리로 탐색하고 다시 볼 항목을 보관하는 SwiftUI 프로토타입입니다.
problem: 흩어진 혜택을 모으면 유용할 것이라는 아이디어는 있었지만, 실제 러너의 충분한 필요를 담고 있는지 확신하기 어려웠습니다.
whyItMattered: 사용자 문제에 확신이 들지 않았기 때문에 기능을 더 만드는 대신, 이미 시작한 구현을 상태 소유권과 아키텍처를 배우는 기회로 바꿨습니다.
context: Apple Developer Academy C2에서 Challenge Response를 개인 앱으로 발전시키다가, 기획보다 개인적으로 궁금했던 아키텍처 학습에 집중했습니다.
user: Academy 혜택을 탐색하고 관심 항목을 다시 보고 싶은 러너를 가정했지만, 실제 인터뷰나 관찰로 그 필요를 확인하지 못했습니다.
contributions:
  - 카테고리, 하위 카테고리와 보관 상태를 SwiftData 모델로 구성했습니다.
  - 탐색과 보관함 화면을 ViewModel의 상태와 연결했습니다.
  - 초기 데이터를 넣고 TestFlight에서 실행 가능한 프로토타입까지 배포했습니다.
process:
  - 흩어진 혜택을 모으는 Challenge Response를 개인 프로젝트로 구체화했습니다.
  - 사용자 필요에 확신이 들지 않아 제품 기능을 늘리는 대신 아키텍처 학습 목표를 정했습니다.
  - 모델, ViewModel과 View 사이에서 상태를 누가 소유하고 바꾸는지 구현으로 비교했습니다.
research:
  - 실제 사용자 필요를 확인하지 못한 상태에서 제품을 계속 확장하지 않고, C2의 시간을 아키텍처 학습에 쓰기로 했습니다.
keyDecisions:
  - title: 제품 확장보다 학습 목표를 선택하기
    description: 혜택 정보가 흩어졌다는 가설에 확신이 들지 않아, 기능을 늘리는 대신 상태와 데이터 구조를 배우는 데 집중했습니다.
  - title: 상태 소유권을 학습 목표로 전환
    description: 이미 시작한 앱을 모델, ViewModel과 View의 책임을 비교하는 아키텍처 실험으로 활용했습니다.
  - title: 보관 상태를 영속 데이터로 유지
    description: 관심 항목이 화면을 벗어나도 남도록 SwiftData가 보관 상태를 소유하게 했습니다.
technicalStructure:
  - SwiftData 모델이 혜택 카테고리, 하위 카테고리와 보관 상태를 저장합니다.
  - ViewModel이 탐색과 보관함에 필요한 조회 및 상태 변경을 연결합니다.
  - SwiftUI View는 ViewModel 상태를 바탕으로 카테고리와 보관 목록을 표시합니다.
challenges:
  - 구현의 완성도와 별개로, 이 기획이 실제 사용자에게 필요한지는 답하지 못했습니다.
  - MV와 MVVM이라는 이름보다 각 상태의 원본과 변경 책임을 구체적으로 설명해야 했습니다.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - MVVM
outcomes:
  - 혜택 탐색, 카테고리와 보관함 흐름을 작동 가능한 프로토타입으로 구현했습니다.
  - 프로토타입을 TestFlight로 배포했습니다.
  - 모델, ViewModel과 View가 상태를 나누어 맡는 방식을 직접 비교했습니다.
whatIWouldChange:
  - 구현 전에 러너 인터뷰나 관찰로 혜택 정보가 실제로 어떤 순간에 필요한지 확인하겠습니다.
  - 같은 기능을 서로 다른 상태 구조로 작게 구현해 책임 차이를 더 명확히 비교하겠습니다.
learnings:
  - 기획에 확신이 들지 않을 때도 구현을 계속하는 대신, 지금 배우고 싶은 것을 선택할 수 있었습니다.
  - 아키텍처 이름보다 상태의 원본과 변경 책임을 설명하는 능력이 먼저였습니다.
categories:
  - iOS
  - Architecture
  - Learning
featured: false
draft: false
repository: https://github.com/hamoYeong/C2
visibility: public
relatedPosts: []
---
