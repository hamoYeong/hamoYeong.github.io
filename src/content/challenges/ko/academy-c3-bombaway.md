---
slug: academy-c3-bombaway
locale: ko
translationKey: academy-c3-bombaway
sequence: C3
title: BombAway
summary: 화면을 계속 보지 않고 거리와 방향 감각으로 함께 즐기는 근거리 다인 iPhone 게임의 상태와 통신 흐름을 구현했습니다.
period:
  start: '2026-05'
  end: '2026-06'
  label: 2026.05-2026.06
team:
  type: team
  description: Apple Developer Academy C3에서 팀으로 기획하고 구현했습니다. 저는 게임 구조와 상태 생명주기, 기기 간 통신·센서 흐름을 맡았습니다.
problem: 같은 공간의 여러 사람이 화면에 집중하지 않고도 거리와 방향을 이용해 실시간 게임을 함께 진행해야 합니다.
role:
  - iOS 개발
  - 게임 구조와 상태 생명주기 구현
  - 기기 간 센서 및 통신 흐름 구현
whatITried:
  - 화면, ViewModel, 게임 조정자와 통신·센서 Service의 책임을 나눴습니다.
  - MultipeerConnectivity와 NearbyInteraction으로 주변 기기의 게임 상태와 거리·방향을 연결했습니다.
  - 시작 카운트다운, 폭탄 전달과 센서 fallback 흐름을 구현했습니다.
whatChanged:
  - 한 화면의 상태를 만드는 관점에서 여러 기기의 상태를 일관되게 맞추는 관점으로 확장했습니다.
  - 최종 부스에서 방문자에게 MultipeerConnectivity와 NearbyInteraction을 설명하고 앱을 직접 체험하게 했습니다.
learnings:
  - 실시간 경험에서는 통신 성공뿐 아니라 지연과 센서 품질 차이를 게임 규칙이 흡수해야 합니다.
  - 한 기술을 깊게 파고 경험으로 연결한 과정이 다른 Apple 기술도 탐구하고 싶다는 동기가 됐습니다.
relatedProject: bombaway
relatedPosts: []
visibility: private-summary
draft: false
---
