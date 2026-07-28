---
slug: academy-c4-leaf
locale: ko
translationKey: academy-c4-leaf
sequence: C4
title: Leaf - 텃밭의 오늘을 기록하는 앱
summary: 작은 텃밭의 돌봄과 성장 과정을 기록하는 팀 프로젝트에서 화면과 저장 계층의 책임을 나누고 기록 흐름을 구현했습니다.
period:
  start: '2026'
  end: '2026'
  label: 2026 C4
team:
  type: team
  description: Apple Developer Academy C4 팀 프로젝트
problem: 텃밭에서 반복되는 짧은 돌봄 활동과 작물의 성장 변화를 한 흐름으로 남기고 돌아보기 어렵습니다.
role:
  - iOS 개발
  - Record 및 MainHome 흐름 구현
  - 서비스 구조 설계와 설명
whatITried:
  - Record Service를 Protocol, PreviewService, 실제 Service 순서로 구현했습니다.
  - 활동 타이머를 기록 추가 흐름과 연결했습니다.
  - 작물 정보, 성장 단계, 3D 렌더링의 책임을 분리했습니다.
whatChanged:
  - 화면이 저장 방식을 직접 알지 않고 Service 계약을 통해 데이터를 다루게 했습니다.
  - 실제 저장 데이터 없이도 Preview에서 여러 화면 상태를 확인할 수 있게 했습니다.
learnings:
  - 좋은 구조를 만드는 일과 팀이 그 구조를 함께 이해하게 돕는 일은 모두 필요합니다.
  - 완성된 구현을 전달하기보다 데이터 흐름과 계층의 책임을 함께 설명하는 과정이 중요합니다.
relatedPosts: []
visibility: private-summary
draft: true
---

## Challenge context

이 문서는 private 팀 저장소의 코드를 옮기지 않고, 공개 가능한 프로젝트 목적과 본인의 기여 영역만 요약한 draft입니다.

## Before publishing

- 팀이 승인한 최종 프로젝트명과 기간을 확인합니다.
- 사용자 조사와 검증 결과 중 공개 가능한 근거를 확인합니다.
- private 저장소 URL, 내부 이슈·PR, 팀원 계정은 추가하지 않습니다.
