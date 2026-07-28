---
slug: scutta-notion-system
locale: ko
translationKey: scutta-notion-system
title: SCUTTA 경기 기록 Notion 시스템
summary: 경기 기록과 다양한 참여 지표를 활용해 기존 부원과 신입 부원이 자연스럽게 교류하도록 도운 동아리 운영 시스템입니다.
period:
  start: '2024-06'
  end: '2024-12'
  label: 2024.06-2024.12
status: completed
role:
  - 아이디어 제안
  - Notion 시스템 제작
  - 자동화 구현
  - 운영 및 개선
team:
  type: team
  description: 시스템 제작과 자동화는 직접 담당하고, 동아리 임원진과 함께 운영하며 부원 피드백을 반영했습니다.
problem: 기존 부원과 신입 부원이 자연스럽게 섞이지 않았고, 정기 활동에서 일부 부원의 참여가 소극적이었습니다.
contributions:
  - 경기 기록과 여러 참여 지표를 Notion 데이터베이스로 구조화했습니다.
  - Apple 단축어와 Notion API를 연결해 제출 텍스트를 JSON으로 바꾸고 기록 생성을 반자동화했습니다.
  - 설문 피드백을 바탕으로 제출 방식과 경기 교류 유도 방식을 개선했습니다.
technologies:
  - Notion
  - Notion API
  - Apple Shortcuts
outcomes:
  - CV 작성 시점 기준 84명이 사용했습니다.
  - CV 작성 시점 기준 1,890건의 경기 기록을 데이터화했습니다.
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

## Overview

SCUTTA 경기 기록 Notion 시스템은 단순한 순위표가 아니라, 경기 기록을 계기로 서로 다른 부원이 더 자주 만나도록 돕기 위해 만든 운영 도구입니다.

## Problem

기존 부원과 신입 부원이 각자 익숙한 상대와 경기하는 경향이 있었습니다. 승리 수만 강조하면 실력 차이가 큰 부원은 오히려 참여하기 어려울 수 있다고 판단했습니다.

## Key decisions

- 승리뿐 아니라 패배, 경기 상대 수처럼 참여 자체를 보여주는 여러 기준을 함께 사용했습니다.
- 상대를 강제로 배정하지 않고 새로운 상대와 경기할 이유를 제공하는 방식을 선택했습니다.
- 반복되는 수기 입력은 Apple 단축어와 Notion API로 줄였습니다.

## Privacy note

실제 부원 이름, 경기 결과, Notion URL과 원본 피드백은 공개하지 않습니다. 화면을 공개할 때는 mock 데이터로 다시 구성합니다.
