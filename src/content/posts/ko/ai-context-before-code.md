---
slug: ai-context-before-code
locale: ko
translationKey: ai-context-before-code
title: AI에게 구현을 맡기기 전에 내가 정해야 하는 것
description: AI의 결과를 평가하려면 먼저 문제, 제약, 데이터의 책임을 내 언어로 정리해야 한다는 작업 원칙을 기록합니다.
publishedAt: 2026-07-29
tags:
  - AI
  - Problem Framing
  - Architecture
draft: true
featured: false
relatedProjects: []
---

AI에게 코드를 요청하기 전에 먼저 확인해야 할 것은 프롬프트의 길이가 아니라 내가 문제를 얼마나 분명하게 이해하고 있는지입니다.

이 글에서는 다음 질문을 중심으로 경험을 정리할 예정입니다.

1. 사용자가 실제로 해결하려는 문제는 무엇인가?
2. 어떤 데이터가 원본이며, 어떤 화면은 그 데이터를 보여주는 표현인가?
3. 실패했을 때도 반드시 유지되어야 하는 흐름은 무엇인가?
4. AI가 제안한 구조를 어떤 근거로 채택하거나 거절할 것인가?

완성된 글에는 DayFlow의 계획과 실제 기록 분리, 하모컴의 읽기 전용 범위 설정, 팀 프로젝트에서 계층의 책임을 설명한 경험을 연결합니다.
