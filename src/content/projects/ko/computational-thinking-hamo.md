---
slug: computational-thinking-hamo
locale: ko
translationKey: computational-thinking-hamo
title: 하모컴
summary: 코딩 초보자가 AI의 결과를 따라가기보다 데이터와 흐름을 먼저 읽고 함께 이야기하도록 돕는 macOS 교육 도구입니다.
period:
  start: '2026'
  end: present
  label: 2026-현재
status: in-progress
role:
  - 수업 구조 설계
  - 제품 구조 설계
  - macOS 앱 구현
team:
  type: personal
  description: Apple Developer Academy의 컴퓨팅 사고력 수업을 위해 개인으로 설계하고 구현했습니다.
problem: 코딩 초보자가 AI가 만든 완성 코드만 따라가면 화면보다 먼저 데이터와 흐름을 생각하는 연습을 놓칠 수 있습니다.
contributions:
  - 읽기 전용 TextKit 코드 뷰어와 줄 번호, 범위 코멘트 기능을 구현했습니다.
  - 두 코드 구조를 단계적으로 비교하는 unlock 흐름과 분할 보기를 구현했습니다.
  - SwiftData를 원본으로 두고 MultipeerConnectivity를 수업 세션의 공유와 재동기화 수단으로 제한했습니다.
technologies:
  - SwiftUI
  - AppKit TextKit
  - SwiftData
  - MultipeerConnectivity
  - MVVM
outcomes:
  - 코드 로딩, 검색, 코멘트, 구조 비교, 근거리 공유 흐름을 작동 가능한 앱으로 구현했습니다.
  - 실제 수업 사용 여부와 참여자 피드백은 확인 후 공개할 예정입니다.
learnings:
  - 교육 도구는 기능 수보다 학습자가 어떤 순서로 생각하게 하는지가 중요합니다.
  - AI가 만든 답을 평가하려면 먼저 데이터와 책임을 자신의 언어로 설명할 수 있어야 합니다.
categories:
  - macOS
  - Education
  - Computational Thinking
featured: true
draft: false
repository: https://github.com/hamoYeong/ComputationalThinkingHamo
visibility: public
relatedPosts:
  - ai-context-before-code
---

## Overview

하모컴은 코드를 직접 편집하는 도구보다 코드를 읽고 질문하는 수업 흐름에 집중한 macOS 앱입니다.

## Key decisions

- 첫 버전은 코드 편집 기능을 넣지 않고 읽기, 검색, 범위 코멘트, 구조 비교에 집중했습니다.
- 코멘트와 댓글의 원본은 SwiftData에 두고 근거리 통신은 다른 기기와 공유하고 다시 맞추는 수단으로 제한했습니다.
- 정답을 바로 공개하기보다 두 코드의 차이를 단계적으로 발견하도록 섹션을 구성했습니다.

## Verification note

공개 저장소에서 구현과 최종 점검 문서를 확인할 수 있습니다. 실제 수업 사용 여부와 참여자 피드백은 확인되기 전까지 성과로 표기하지 않습니다.
