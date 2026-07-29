---
slug: academy-c1
locale: ko
translationKey: academy-c1
sequence: C1
title: Academy 생활 설정 안내 프로토타입
summary: 처음 Academy 생활을 설정하는 사람이 여러 필수 항목을 단계적으로 확인할 수 있도록 정보를 경로 데이터로 구조화했습니다.
period:
  start: '2026-03'
  end: '2026-04'
  label: 2026.03-2026.04
team:
  type: unspecified
  description: 공개 저장소만으로 개인·팀 진행 여부를 확정하지 않고 구현 근거만 설명합니다.
problem: 웹메일, 기본 메일 앱, 필수 앱과 모바일 학생증처럼 초기 설정에 필요한 정보가 여러 단계로 나뉘어 있습니다.
role:
  - 주요 SwiftUI 화면과 경로 모델 구현
whatITried:
  - 안내 항목을 경로 데이터로 분리했습니다.
  - NavigationStack을 사용해 목록에서 단계별 상세로 이동하는 흐름을 만들었습니다.
whatChanged:
  - 화면에 안내 순서를 직접 적는 대신 데이터로 탐색 순서를 표현했습니다.
learnings:
  - 작은 안내 앱에서도 정보의 순서와 화면 이동의 책임을 분리할 수 있습니다.
relatedPosts: []
repository: https://github.com/hamoYeong/C1
visibility: public
draft: false
---

## Challenge context

공개 저장소에서 확인되는 구현만 요약합니다. 당시의 사용자 조사와 협업 형태는 확인되기 전까지 성과로 추가하지 않습니다.
