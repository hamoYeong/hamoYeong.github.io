---
slug: academy-c2
locale: ko
translationKey: academy-c2
sequence: C2
title: Academy 혜택 탐색 프로토타입
summary: Academy 생활에서 이용할 수 있는 혜택과 장소 정보를 카테고리와 상태로 구조화하고 보관·탐색 흐름을 구현했습니다.
period:
  start: '2026-04'
  end: '2026-04'
  label: '2026.04'
team:
  type: unspecified
  description: 공개 저장소만으로 개인·팀 진행 여부를 확정하지 않고 구현 근거만 설명합니다.
problem: 학습 혜택, 시설과 활동 정보를 다시 찾기 위해 카테고리와 보관 상태로 나눌 필요가 있습니다.
role:
  - 모델, View와 ViewModel 구현
  - SwiftData 초기 데이터와 보관 흐름 구현
whatITried:
  - 카테고리와 하위 카테고리, 보관 상태를 데이터 모델로 만들었습니다.
  - 탐색과 보관함 흐름을 ViewModel과 SwiftData로 연결했습니다.
whatChanged:
  - 단순한 화면 목록에서 상태를 저장하고 다시 탐색할 수 있는 데이터 중심 구조로 확장했습니다.
learnings:
  - MV와 MVVM 같은 이름보다 상태를 누가 소유하고 변경하는지 설명하는 일이 먼저입니다.
relatedPosts: []
repository: https://github.com/hamoYeong/C2
visibility: public
draft: false
---

## Challenge context

공개 코드로 확인되는 데이터와 화면 구조를 중심으로 기록합니다. 실제 사용자에게 정보 분산 문제를 확인했는지는 검증 전까지 단정하지 않습니다.
