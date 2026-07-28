---
slug: dayflow
locale: ko
translationKey: dayflow
title: DayFlow
summary: 계획과 실제 기록을 분리해 하루의 차이를 성공과 실패로 판단하지 않고 돌아보도록 설계한 개인 iOS 프로젝트입니다.
period:
  start: '2026-06'
  end: present
  label: 2026.06-현재
status: in-progress
role:
  - 제품 원칙 정의
  - 데이터 모델과 아키텍처 설계
  - iOS 기능 구현과 검증
team:
  type: personal
  description: 제품 원칙부터 구현과 검증까지 개인으로 진행하고 있습니다.
problem: 계획을 실제 행동에 맞춰 자동 보정하면 계획과 기록의 의미가 섞이고 하루를 성공 또는 실패로만 평가하기 쉽습니다.
contributions:
  - 계획과 실제 기록을 독립된 모델로 설계했습니다.
  - SwiftData를 중심으로 선택적 CloudKit, App Intents, Widget, Live Activity 흐름을 구현했습니다.
  - 시간대, 일광절약시간, 자정 통과와 구간 겹침 조건을 테스트로 고정했습니다.
technologies:
  - SwiftUI
  - SwiftData
  - CloudKit
  - App Intents
  - WidgetKit
  - ActivityKit
outcomes:
  - 기능별 build와 unit 및 UI test 기록을 공개 저장소 문서에 남겼습니다.
  - 최종 통합, 실기기 검증과 출시는 아직 진행 중입니다.
learnings:
  - 시간과 동기화가 있는 앱에서는 화면보다 데이터 계약과 실패 시 fallback을 먼저 정해야 합니다.
  - 계획과 기록처럼 의미가 다른 데이터는 편의를 위해 하나로 합치지 않아야 합니다.
categories:
  - iOS
  - Architecture
  - Personal Productivity
featured: true
draft: false
repository: https://github.com/hamoYeong/DayFlow
visibility: public
relatedPosts:
  - ai-context-before-code
---

## Overview

DayFlow에서 계획은 오늘에 대한 가설이고 실제 기록은 살아낸 하루의 흔적입니다. 둘을 자동으로 맞추기보다 차이를 그대로 돌아볼 수 있도록 분리했습니다.

## Key decisions

- 계획과 실제 기록을 독립된 데이터로 유지합니다.
- CloudKit을 사용할 수 없는 상황에서도 local-only 핵심 흐름은 계속 동작합니다.
- Widget과 Live Activity는 원본 저장소가 아니라 필요한 정보만 전달받는 projection으로 제한합니다.

## Current status

기능별 build와 테스트 근거는 공개 저장소에 남아 있습니다. 최종 통합, 실기기 검증과 출시는 완료된 결과로 표기하지 않습니다.
