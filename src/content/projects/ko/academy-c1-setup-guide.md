---
slug: academy-c1-setup-guide
locale: ko
translationKey: academy-c1-setup-guide
title: Academy 생활 설정 안내
summary: CBL로 팀과 문제를 찾고, 함께 만든 기획을 각자 SwiftUI로 구현하며 문제 해결과 Swift 기초를 함께 배운 C1 프로젝트입니다.
period:
  start: '2026-03'
  end: '2026-04'
  label: 2026.03-2026.04
status: completed
role:
  - 팀의 주제 탐색과 기획 참여
  - 개인 SwiftUI 앱 구현
  - 안내 정보와 화면 경로 모델링
team:
  type: team
  description: 주제 탐색과 기획은 팀으로 진행하고, 구현 단계부터 각자 같은 기획을 바탕으로 개인 앱을 만들었습니다.
overview: Academy를 위한 서비스라는 Big Idea에서 출발해 새 러너가 웹메일, 필수 앱과 모바일 학생증 같은 초기 설정을 단계적으로 확인하는 안내 앱을 만들었습니다.
problem: Academy 생활을 시작할 때 필요한 설정 정보가 여러 단계와 위치에 나뉘어 있어 처음 접하는 사람이 순서를 파악하기 어렵습니다.
whyItMattered: C1은 완성도 높은 서비스보다 CBL로 문제를 구체화하고 직접 Swift로 응답을 구현하는 과정 자체가 중요한 첫 학습 경험이었습니다.
context: Apple Developer Academy C1은 Challenge-Based Learning과 Swift 기초를 함께 경험하도록, 팀 기획 뒤 각자가 개인 구현을 진행하는 구조였습니다.
user: Academy 생활을 처음 설정하며 여러 필수 단계를 순서대로 확인해야 하는 새 러너를 구현 대상으로 삼았습니다.
contributions:
  - 팀과 함께 Big Idea에서 Guiding Question과 Answer, Challenge Response로 주제를 구체화했습니다.
  - 안내 항목을 화면에 직접 작성하지 않고 경로 데이터로 분리했습니다.
  - NavigationStack으로 목록에서 단계별 상세 안내로 이동하는 SwiftUI 앱을 구현했습니다.
process:
  - Academy를 위한 서비스라는 Big Idea 아래 팀과 관찰과 질문을 나눴습니다.
  - 함께 만든 기획을 각자 구현하는 단계에서 안내 순서와 화면 이동을 데이터로 표현했습니다.
  - 구현하며 SwiftUI의 상태, 데이터와 NavigationStack 기초를 문제 해결 맥락 안에서 익혔습니다.
research:
  - 팀 대화를 통해 새 러너가 Academy 생활을 시작하며 거치는 초기 설정 과정을 탐색했습니다.
keyDecisions:
  - title: 기획은 함께, 구현은 각자
    description: 같은 Challenge Response를 각자가 직접 Swift로 구현해 협업의 문제 탐색과 개인의 기술 학습을 연결했습니다.
  - title: 안내 순서를 경로 데이터로 표현
    description: 화면마다 다음 단계를 직접 연결하는 대신 안내 항목과 경로를 데이터로 정의했습니다.
  - title: 첫 구현의 범위를 단계형 안내에 집중
    description: 복잡한 운영 기능보다 새 러너가 설정 순서를 따라가는 핵심 흐름과 Swift 기초 학습에 집중했습니다.
technicalStructure:
  - SwiftUI NavigationStack이 목록에서 상세 안내로 이어지는 탐색을 담당합니다.
  - 안내 항목과 경로 모델이 화면 순서와 표시할 정보를 정의합니다.
  - 각 화면은 경로 데이터에서 필요한 내용을 받아 표시합니다.
challenges:
  - 팀에서 함께 만든 넓은 주제를 개인 구현이 가능한 범위로 좁혀야 했습니다.
  - Swift를 처음 배우는 단계에서 화면 이동과 데이터를 동시에 이해해야 했습니다.
technologies:
  - Swift
  - SwiftUI
  - NavigationStack
outcomes:
  - 주요 초기 설정을 목록과 단계별 상세로 탐색하는 작동 가능한 SwiftUI 프로토타입을 완성했습니다.
  - 팀의 문제 탐색에서 개인 구현까지 이어지는 CBL의 한 순환을 직접 경험했습니다.
whatIWouldChange:
  - 구현 전 실제 새 러너가 어느 단계에서 막히는지 짧은 관찰이나 인터뷰로 우선순위를 확인하겠습니다.
  - 팀 기획과 각자의 구현이 어떻게 달라졌는지 비교하는 회고 시간을 추가하겠습니다.
learnings:
  - CBL은 정답을 먼저 받기보다 스스로 질문하고 응답을 구현하는 과정으로 배움을 만든다는 점을 몸소 이해했습니다.
  - 작은 안내 앱에서도 정보 순서와 화면 이동의 책임을 분리할 수 있었습니다.
categories:
  - iOS
  - Education
  - Learning
featured: false
draft: false
repository: https://github.com/hamoYeong/C1
visibility: public
relatedPosts: []
---
