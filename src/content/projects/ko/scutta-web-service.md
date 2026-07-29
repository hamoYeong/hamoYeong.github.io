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
problem: Notion의 수동 계산, 모바일 접근성, 동기화 지연을 줄이고 경기 기록과 참여 유도 기능을 한 서비스에서 운영할 필요가 있었습니다.
contributions:
  - HTML, CSS와 JavaScript 화면과 Flask 기반 서버를 구현했습니다.
  - PostgreSQL에 선수, 경기, 리그전, 베팅과 오늘의 상대 데이터를 모델링했습니다.
  - 경기 제출·승인, 검색, 순위, 리그전, 베팅과 업적 흐름을 구현했습니다.
technologies:
  - Flask
  - Python
  - PostgreSQL
  - JavaScript
outcomes:
  - CV 작성 시점 기준 128명이 사용했습니다.
  - CV 작성 시점 기준 누적 경기 기록 785건을 데이터화했습니다.
  - 배포 후 운영했으며 현재는 운영을 중단했습니다.
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

## From Notion to a web service

Notion에서 시작한 기록 방식을 별도 웹 서비스로 확장했습니다. 개발과 운영의 책임을 구분해 표현하고, 실제 선수와 경기 데이터 및 폐쇄된 배포 주소는 공개하지 않습니다.

## Current status

서비스는 현재 운영을 중단했습니다. 사용자와 기록 수치는 원본 CV 작성 시점의 값으로만 표기합니다.
