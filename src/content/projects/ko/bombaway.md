---
slug: bombaway
locale: ko
translationKey: bombaway
roleLenses:
  - ios-software-development
competencies:
  - data-flow-architecture
  - technical-explanation
  - collaboration-facilitation
evidenceLevels:
  - implemented
  - operated
priority: 40
relatedChallenges:
  - academy-c3-bombaway
relatedExperiences:
  - apple-developer-academy
title: BombAway
summary: 같은 공간의 여러 사람이 화면보다 서로의 거리와 방향에 집중해 즐기는 근거리 다인 iPhone 게임입니다.
period:
  start: '2026-05'
  end: '2026-06'
  label: 2026.05-2026.06
status: completed
role:
  - iOS 개발
  - 게임 구조와 상태 생명주기 구현
  - 기기 간 센서 및 통신 흐름 구현
team:
  type: team
  description: Apple Developer Academy C3에서 팀으로 기획하고 구현한 프로젝트입니다. 저는 게임 구조와 상태 생명주기, 기기 간 통신·센서 흐름을 맡았습니다.
overview: 방 생성과 참가, 역할 배정, 카운트다운, 추격과 폭탄 전달을 여러 iPhone의 거리·방향 감각과 공간 음향으로 연결한 게임입니다.
problem: 같은 공간의 여러 기기가 게임 상태를 함께 유지하면서도 거리와 방향 센서의 품질 차이와 연결 지연을 실제 플레이가 감당할 수 있어야 했습니다.
whyItMattered: 실시간 근거리 경험은 통신 성공만으로 완성되지 않으며, 센서가 불안정한 순간에도 사용자가 다음 행동을 이해할 수 있는 게임 규칙과 피드백이 필요합니다.
context: Apple Developer Academy C3에서 2026년 5월부터 6월까지 팀으로 진행했습니다. 최종일에는 부스를 운영하며 MultipeerConnectivity와 NearbyInteraction을 설명하고 방문자가 앱을 직접 체험하게 했습니다.
user: 같은 공간에서 화면을 계속 바라보지 않고 몸을 움직이며 짧은 다인 게임을 함께 즐기는 부스 방문자가 직접 플레이했습니다.
contributions:
  - 화면, ViewModel, GameCoordinator와 통신·센서 Service의 책임을 나누는 앱 구조를 만들었습니다.
  - 방 생성과 참가, 역할 배정, 게임 시작·종료, 결과와 다음 라운드로 이어지는 상태 생명주기를 구현했습니다.
  - MultipeerConnectivity의 게임 상태와 NearbyInteraction의 거리·방향 측정을 연결해 폭탄 전달 및 sensor fallback 흐름을 구현했습니다.
  - PHASE 공간 음향을 게임 상태와 거리 정보에 연결했습니다.
process:
  - 여러 화면에 흩어진 상태를 GameCoordinator가 관리하는 명시적 단계로 정리했습니다.
  - MultipeerConnectivity 연결과 게임 메시지, NearbyInteraction session의 책임을 서로 다른 Service로 분리했습니다.
  - 카운트다운과 폭탄 전달 조건을 맞춘 뒤 센서 방향을 사용할 수 없는 상황의 대체 피드백과 공간 음향을 연결했습니다.
research:
  - C3 최종 부스에서 방문자에게 사용 기술을 설명하고 여러 기기로 앱을 직접 체험하게 했습니다.
keyDecisions:
  - title: 게임 진행을 Coordinator에 모으기
    description: 화면별 상태 대신 GameCoordinator가 역할, 카운트다운, 플레이와 결과 전환을 관리하게 해 여러 기기가 같은 단계를 이해하도록 했습니다.
  - title: 게임 상태와 거리 측정을 분리하기
    description: 신뢰 가능한 게임 메시지는 MultipeerConnectivity가, 순간적인 거리와 방향은 NearbyInteraction이 맡아 두 데이터의 성격을 섞지 않았습니다.
  - title: 센서 품질 저하를 규칙으로 흡수하기
    description: 방향 값을 사용할 수 없는 순간에도 거리와 대체 피드백으로 플레이를 이어가도록 fallback을 두었습니다.
technicalStructure:
  - AppRouter와 ViewModel이 화면 전환과 화면 상태를 담당하고 GameCoordinator가 게임 단계의 생명주기를 관리합니다.
  - MultipeerConnectivity Service가 주변 기기의 연결과 게임 메시지를 전달합니다.
  - NearbyInteraction Service가 UWB 기반 거리와 방향을 측정하고 필요한 값만 게임 흐름에 전달합니다.
  - PHASE 공간 음향은 역할과 거리 변화에 맞는 청각 피드백을 제공합니다.
challenges:
  - 여러 기기의 연결 순서와 지연이 달라도 카운트다운, 역할과 결과가 같은 의미를 유지해야 했습니다.
  - NearbyInteraction의 상대 방향 값이 기기 방향과 주변 환경에 따라 불안정하거나 제공되지 않아 센서 값을 그대로 게임 규칙으로 사용할 수 없었습니다.
  - 부스 체험은 기술과 앱을 소개하는 자리였으며, 정량 사용성 평가로 설계된 테스트는 아니었습니다.
technologies:
  - Swift
  - SwiftUI
  - MultipeerConnectivity
  - NearbyInteraction
  - PHASE
outcomes:
  - 방 생성·참가, 역할 배정, 동기화된 카운트다운, 폭탄 전달, 결과와 다음 라운드 흐름을 구현했습니다.
  - 거리·방향 측정, sensor fallback과 공간 음향을 작동 가능한 게임 흐름에 연결했습니다.
  - 최종 부스에서 방문자에게 두 Apple 기술을 설명하고 직접 플레이할 수 있는 체험을 운영했습니다.
whatIWouldChange:
  - 게임 상태 전이와 메시지 순서를 자동화 test로 고정하고 연결 지연·중복·재접속 조건을 반복 검증하겠습니다.
  - 지원 기기와 공간 조건을 나눈 실기기 test matrix를 먼저 만들고 센서 품질에 따른 피드백 규칙을 조정하겠습니다.
learnings:
  - 실시간 다인 경험에서는 화면 상태보다 기기들이 공유하는 게임 단계와 메시지 계약을 먼저 설계해야 합니다.
  - 센서 기반 기능은 정상 값뿐 아니라 불확실성과 결측을 사용자가 이해할 수 있는 규칙으로 바꿔야 합니다.
  - 한 기술을 깊게 파고 실제 경험으로 연결한 과정이 다른 Apple 기술도 탐구하고 활용해보고 싶은 동기가 됐습니다.
categories:
  - iOS
  - Multiplayer
  - Spatial Computing
featured: false
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
---
