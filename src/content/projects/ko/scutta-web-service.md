---
slug: scutta-web-service
locale: ko
translationKey: scutta-web-service
title: SCUTTA 경기 기록 웹 서비스
summary: Notion 운영에서 확인한 모바일 접근성과 계산 문제를 별도 웹 서비스로 확장해 경기 기록과 참여 규칙을 운영했습니다.
period:
  start: '2024-12'
  end: '2025-08'
  label: 2024.12-2025.08
status: archived
role:
  - 풀스택 1인 개발
  - 배포 및 운영
  - 피드백 기반 개선
team:
  type: team
  description: 개발은 개인으로 진행하고 동아리 임원진과 운영 및 피드백 반영을 협업했습니다.
overview: Notion 운영에서 확인한 제약을 별도 웹 서비스로 확장해 경기 기록, 승인과 참여 유도 규칙을 한곳에서 운영한 프로젝트입니다.
problem: Notion의 수동 계산, 모바일 접근성, 동기화 지연을 줄이고 경기 기록과 참여 유도 기능을 한 서비스에서 운영할 필요가 있었습니다.
whyItMattered: 기록이 늘어날수록 수동 계산과 동기화 지연은 부원의 사용 경험뿐 아니라 임원진의 운영 비용과 데이터 신뢰도에도 영향을 주었습니다.
context: SCUTTA 부원을 위한 서비스를 1인으로 개발·배포하고, 동아리 임원진과 운영 및 피드백 반영을 협업했습니다.
user: 경기 기록을 제출하고 참여 기능을 사용하는 SCUTTA 부원과 기록을 승인·관리하는 운영진을 대상으로 했습니다.
contributions:
  - HTML, CSS와 JavaScript 화면과 Flask 기반 서버를 구현했습니다.
  - PostgreSQL에 선수, 경기, 리그전, 베팅과 오늘의 상대 데이터를 모델링했습니다.
  - 경기 제출·승인, 검색, 순위, 리그전, 베팅과 업적 흐름을 구현했습니다.
process:
  - Notion에서 반복된 모바일 접근, 계산과 동기화 문제를 별도 웹 서비스 전환의 기준으로 정했습니다.
  - 선수, 경기와 참여 기능을 PostgreSQL 모델로 옮기고 제출과 승인 상태를 분리했습니다.
  - 배포 후 부원과 임원진 피드백을 순위, 리그전, 베팅과 참여 기능의 규칙에 반영했습니다.
research:
  - 실제 운영 중 받은 피드백을 기능과 규칙 개선에 사용했으며 원본 메시지와 사용자 데이터는 공개하지 않습니다.
keyDecisions:
  - title: Notion 확장 대신 별도 서비스로 전환
    description: 기록량과 계산 복잡도가 커진 시점에 모바일 화면과 서버 계산을 독립적으로 관리할 수 있는 웹 서비스로 옮겼습니다.
  - title: 제출과 승인을 분리
    description: 사용자가 입력한 경기와 운영진이 확인한 기록을 같은 상태로 취급하지 않도록 흐름을 나눴습니다.
  - title: 통제보다 참여 동기를 설계
    description: 직접 행동을 강제하기보다 포인트와 여러 순위 및 참여 기능으로 선택할 이유를 제공했습니다.
technicalStructure:
  - Flask 서버가 경기 제출·승인과 참여 규칙을 처리했습니다.
  - PostgreSQL에 선수, 경기, 리그전, 베팅과 오늘의 상대 데이터를 모델링했습니다.
  - HTML, CSS와 JavaScript 화면이 모바일 사용 흐름을 제공했습니다.
challenges:
  - 빠르게 추가한 기능들의 규칙이 서버 로직과 데이터 모델에 흩어져 변경 비용이 커졌습니다.
  - 실제 사용자 데이터를 운영하면서 입력 오류와 승인 상태를 안전하게 구분해야 했습니다.
technologies:
  - Flask
  - Python
  - PostgreSQL
  - JavaScript
outcomes:
  - CV 작성 시점 기준 128명이 사용했습니다.
  - CV 작성 시점 기준 누적 경기 기록 785건을 데이터화했습니다.
  - 배포 후 운영했으며 현재는 운영을 중단했습니다.
whatIWouldChange:
  - 초기부터 경기 상태 전이와 참여 규칙을 도메인 경계로 분리해 기능 변경이 데이터 모델에 미치는 영향을 줄이겠습니다.
  - 배포 전 운영자 도구, 오류 관찰과 백업·복구 절차를 제품 기능과 함께 설계하겠습니다.
learnings:
  - 실제 사용자의 피드백을 제품 규칙에 빠르게 반영하는 경험을 했습니다.
  - 빠른 구현 이후에는 데이터 모델과 변경 가능한 규칙의 경계를 설계해야 합니다.
categories:
  - Web
  - Community
featured: false
draft: false
repository: https://github.com/hamoYeong/scutta-2025-1
visibility: public
relatedPosts: []
---
