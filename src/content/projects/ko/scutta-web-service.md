---
slug: scutta-web-service
locale: ko
translationKey: scutta-web-service
roleLenses:
  - community-program-operations
  - problem-framing-research
competencies:
  - data-flow-architecture
  - user-research
  - community-operations
  - documentation-systemization
evidenceLevels:
  - designed
  - implemented
  - operated
  - measured
priority: 25
relatedExperiences:
  - scutta-leadership
relatedProjects:
  - scutta-notion-system
title: SCUTTA 경기 기록 웹 서비스
summary: Notion 운영에서 확인한 모바일 접근성과 계산 문제를 별도 웹 서비스로 확장해 경기 기록과 참여 규칙을 운영했습니다.
period:
  start: '2025-03'
  end: '2025-08'
  label: 2025.03-2025.08
status: completed
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
context: 2025년 1학기부터 여름방학까지 SCUTTA 부원을 위한 서비스를 1인으로 개발·배포하고, 동아리 임원진과 운영 및 피드백 반영을 협업했습니다. 이후 다음 담당자가 별도 저장소에서 리팩터링하며 서비스를 이어가고 있습니다.
user: 경기 기록을 제출하고 참여 기능을 사용하는 SCUTTA 부원과 기록을 승인·관리하는 운영진을 대상으로 했습니다.
contributions:
  - HTML, CSS와 JavaScript 화면과 Flask 기반 서버를 구현했습니다.
  - SQLAlchemy와 Alembic으로 선수, 경기, 리그전, 베팅과 오늘의 상대 데이터를 PostgreSQL에 모델링하고 변경 이력을 관리했습니다.
  - 경기 제출·승인, 검색, 순위, 리그전, 베팅과 업적 흐름을 구현했습니다.
process:
  - Notion에서 반복된 모바일 접근, 계산과 동기화 문제를 별도 웹 서비스 전환의 기준으로 정했습니다.
  - 선수, 경기와 참여 기능을 SQLAlchemy 모델로 옮기고 경기와 베팅의 제출·승인 상태를 분리했습니다.
  - 배포 후 부원과 임원진 피드백을 순위, 리그전, 베팅과 참여 기능의 규칙에 반영했습니다.
research:
  - 실제 운영 중 받은 피드백을 기능과 참여 규칙 개선에 반영했습니다.
keyDecisions:
  - title: Notion 확장 대신 별도 서비스로 전환
    description: 기록량과 계산 복잡도가 커진 시점에 모바일 화면과 서버 계산을 독립적으로 관리할 수 있는 웹 서비스로 옮겼습니다.
  - title: 제출과 승인을 분리
    description: 사용자가 입력한 경기와 운영진이 확인한 기록을 같은 상태로 취급하지 않도록 흐름을 나눴습니다.
  - title: 통제보다 참여 동기를 설계
    description: 직접 행동을 강제하기보다 포인트와 여러 순위 및 참여 기능으로 선택할 이유를 제공했습니다.
technicalStructure:
  - Flask route가 경기 제출·승인, 검색, 순위와 참여 규칙을 처리했습니다.
  - SQLAlchemy 모델과 Alembic migration이 선수, 경기, 리그전, 베팅과 오늘의 상대 데이터를 관리했습니다.
  - HTML, CSS와 JavaScript 화면이 모바일 사용 흐름을 제공했습니다.
challenges:
  - 빠르게 추가한 기능들의 규칙이 큰 route 모듈과 데이터 모델에 모여 변경 범위와 검증 비용이 커졌습니다.
  - 실제 사용자 데이터를 운영하면서 입력 오류와 승인 상태를 안전하게 구분해야 했습니다.
  - 자동화 테스트를 마련하지 못해 기능을 바꿀 때마다 회귀를 반복해서 확인하기 어려웠습니다.
technologies:
  - Flask
  - Python
  - SQLAlchemy
  - Alembic
  - PostgreSQL
  - JavaScript
outcomes:
  - 2025년 3월부터 8월까지 128명이 사용했습니다.
  - 같은 운영 기간에 누적 경기 기록 785건을 데이터화했습니다.
  - 개인화 기능을 준비하던 시점에 다음 담당자에게 인계됐고, 후속 저장소에서 리팩터링된 서비스가 기존 토대를 이어 현재도 사용되고 있습니다.
whatIWouldChange:
  - 초기부터 경기 상태 전이와 참여 규칙을 route에서 도메인 서비스로 분리해 기능 변경의 범위를 줄이겠습니다.
  - 순위 계산, 제출·승인 상태와 migration을 자동화 테스트로 고정하겠습니다.
  - 배포 전 운영자 도구, 오류 관찰과 백업·복구 절차를 제품 기능과 함께 설계하겠습니다.
learnings:
  - 실제 사용자의 피드백을 제품 규칙에 빠르게 반영하는 경험을 했습니다.
  - 빠른 구현 이후에는 데이터 모델과 변경 가능한 규칙의 경계를 설계해야 합니다.
  - 운영 중인 서비스를 인계하려면 기능 구현뿐 아니라 다음 담당자가 구조를 바꿀 수 있는 설명과 경계가 필요합니다.
categories:
  - Web
  - Community
featured: true
draft: false
repository: https://github.com/hamoYeong/scutta-2025-1
visibility: public
relatedPosts: []
---
