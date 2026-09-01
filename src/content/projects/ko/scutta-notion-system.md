---
slug: scutta-notion-system
locale: ko
translationKey: scutta-notion-system
roleLenses:
  - community-program-operations
competencies:
  - user-research
  - community-operations
  - documentation-systemization
evidenceLevels:
  - designed
  - implemented
  - operated
  - measured
priority: 20
relatedExperiences:
  - scutta-leadership
relatedProjects:
  - scutta-web-service
title: SCUTTA 경기 기록 Notion 시스템
summary: 경기 기록과 다양한 참여 지표를 활용해 기존 부원과 신입 부원이 자연스럽게 교류하도록 도운 동아리 운영 시스템입니다.
period:
  start: '2024-09'
  end: '2025-02'
  label: 2024.09-2025.02
status: completed
role:
  - 아이디어 제안
  - Notion 시스템 제작
  - 자동화 구현
  - 운영 및 개선
team:
  type: team
  description: 시스템 제작과 자동화는 직접 담당하고, 동아리 임원진과 함께 운영하며 부원 피드백을 반영했습니다.
overview: 단순한 순위표가 아니라 경기 기록을 계기로 서로 다른 부원이 더 자주 만나도록 만든 동아리 운영 시스템입니다.
problem: 기존 부원과 신입 부원이 자연스럽게 섞이지 않았고, 정기 활동에서 일부 부원의 참여가 소극적이었습니다.
whyItMattered: 승리 중심의 순위는 실력 차이가 큰 커뮤니티에서 오히려 참여 장벽을 높일 수 있어, 다양한 참여를 인정하는 운영 규칙이 필요했습니다.
context: 2024년 2학기부터 겨울방학까지 서울시립대학교 중앙 탁구 동아리 SCUTTA의 정기 활동에서 임원진과 함께 운영했습니다.
user: 실력과 가입 시기가 다른 SCUTTA 부원과 경기 기록을 확인·관리하는 운영진이 사용했습니다.
contributions:
  - 경기 기록과 여러 참여 지표를 Notion 데이터베이스로 구조화했습니다.
  - Apple 단축어와 Notion API를 연결해 제출 텍스트를 JSON으로 바꾸고 기록 생성을 반자동화했습니다.
  - 설문 피드백을 바탕으로 제출 방식과 경기 교류 유도 방식을 개선했습니다.
process:
  - 부원 교류와 참여가 줄어드는 운영 문제를 경기 기록이라는 접점으로 다시 정의했습니다.
  - Notion 데이터베이스에 경기와 여러 참여 지표를 구조화했습니다.
  - Apple 단축어와 Notion API로 반복 입력을 줄이고, 운영 중 받은 설문 피드백을 제출·확인 흐름에 반영했습니다.
research:
  - 운영 중 수집한 설문 피드백을 제출 방식과 교류 유도 규칙 개선에 반영했습니다.
keyDecisions:
  - title: 승리 이외의 참여를 함께 인정
    description: 패배 수와 서로 다른 경기 상대 수 등 여러 기준을 함께 보여주어 참여 자체를 드러냈습니다.
  - title: 상대를 강제하지 않기
    description: 상대를 배정하는 대신 새로운 사람과 경기할 이유를 제공해 부원의 자율성을 남겼습니다.
  - title: 반복 입력만 자동화
    description: 운영 판단까지 자동화하지 않고 제출 텍스트 변환과 기록 생성을 반자동화했습니다.
technicalStructure:
  - Notion 데이터베이스가 경기 기록과 참여 지표를 구조화했습니다.
  - Apple 단축어가 제출 텍스트를 입력받아 JSON 요청으로 변환했습니다.
  - Notion API가 데이터베이스 페이지 생성을 연결했습니다.
challenges:
  - 자동화가 늘어날수록 예외 기록을 임원진이 확인하고 수정하는 운영 비용도 함께 고려해야 했습니다.
  - 다양한 순위가 새로운 참여 동기가 되면서도 또 다른 경쟁 압력이 되지 않도록 기준을 조정해야 했습니다.
technologies:
  - Notion
  - Notion API
  - Apple Shortcuts
outcomes:
  - 2024년 9월부터 2025년 2월까지 84명이 사용했습니다.
  - 같은 운영 기간에 누적 경기 기록 1,890건을 데이터화했습니다.
whatIWouldChange:
  - 자동화 전에 제출 데이터의 유효성 규칙과 예외 처리 책임을 더 명확히 문서화하겠습니다.
  - 참여 지표가 실제 교류에 미친 영향을 확인할 익명화된 관찰 기준을 운영 시작 전에 정하겠습니다.
learnings:
  - 운영 도구는 기능 수보다 실제 제출과 확인 흐름, 관리 비용이 중요합니다.
  - 사용자의 자율성을 유지하면서도 행동을 유도하는 규칙을 설계할 수 있습니다.
categories:
  - Community
  - Automation
featured: true
draft: false
visibility: public
relatedPosts: []
---
