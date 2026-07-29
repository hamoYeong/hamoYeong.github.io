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
overview: 계획을 오늘에 대한 가설로, 실제 기록을 살아낸 하루의 흔적으로 분리해 차이를 판단 없이 돌아보는 iOS 앱입니다.
problem: 계획을 실제 행동에 맞춰 자동 보정하면 계획과 기록의 의미가 섞이고 하루를 성공 또는 실패로만 평가하기 쉽습니다.
whyItMattered: 생산성 도구가 계획 달성률만 강조하면 예상과 달랐던 하루에서 배울 정보까지 실패로 취급할 수 있습니다.
context: 개인 iOS 프로젝트로 제품 원칙, 데이터 모델, Apple 플랫폼 연동과 실패 시 동작을 함께 검증하고 있습니다.
user: 계획과 실제 하루를 함께 기록하되 둘의 차이를 성공과 실패로 단정하지 않고 돌아보고 싶은 사용자를 상정합니다.
contributions:
  - 계획과 실제 기록을 독립된 모델로 설계했습니다.
  - EventKit 일정과 HealthKit 수면 구간을 가져와 사용자가 오늘의 계획과 실제 기록을 구성하는 재료로 활용하게 했습니다.
  - SwiftData를 중심으로 선택적 CloudKit, App Intents, Widget과 Live Activity 흐름을 구현하고 시간 경계 조건을 테스트로 고정했습니다.
process:
  - 계획과 실제 기록이 각각 무엇을 의미하는지 제품 원칙으로 먼저 정의했습니다.
  - 계획, 실제 활동, 방해 구간, 수면과 회고를 독립된 SwiftData 모델과 Store로 구현했습니다.
  - EventKit, HealthKit, App Intents, Widget과 Live Activity를 핵심 데이터의 입력 또는 projection으로 연결하고 시간 경계 조건을 검증했습니다.
research: []
keyDecisions:
  - title: 계획과 실제 기록을 분리
    description: 실제 행동이 계획을 덮어쓰지 않도록 두 데이터를 독립된 기록으로 유지했습니다.
  - title: 로컬 핵심 흐름을 우선
    description: CloudKit을 사용할 수 없어도 기록과 회고의 핵심 흐름이 계속 동작하도록 설계했습니다.
  - title: 확장 화면은 projection으로 제한
    description: Widget과 Live Activity가 별도 원본이 되지 않고 필요한 상태만 전달받도록 경계를 정했습니다.
technicalStructure:
  - 버전이 지정된 SwiftData schema가 계획, 실제 활동, 방해 구간, 수면과 회고의 로컬 원본을 담당합니다.
  - 기능별 Store가 모델 조회와 변경을 맡고 EventKit 및 HealthKit adapter가 외부 데이터를 앱 모델로 변환합니다.
  - CloudKit 동기화는 선택적이며 실패해도 local-only 흐름을 유지합니다.
  - App Intents, WidgetKit과 ActivityKit은 제한된 데이터 projection을 소비합니다.
challenges:
  - 시간대, 일광절약시간과 자정을 넘는 구간이 같은 의미로 계산되어야 했습니다.
  - CloudKit 호환 조건을 만족하지 못하는 환경에서도 local-only 기록이 중단되지 않아야 했습니다.
  - 여러 Apple 플랫폼 연동과 확장이 원본 데이터의 소유권을 나눠 갖지 않도록 해야 했습니다.
technologies:
  - SwiftUI
  - SwiftData
  - CloudKit
  - EventKit
  - HealthKit
  - App Intents
  - WidgetKit
  - ActivityKit
outcomes:
  - 시간 구간 계산, Store, CloudKit fallback, 일정·수면 연동, App Intents와 Widget 및 Live Activity를 unit 및 UI test로 검증했습니다.
  - 최종 통합, 실기기 검증과 출시는 아직 진행 중입니다.
whatIWouldChange:
  - 기능 범위를 더 일찍 제한하고 하루 기록과 회고의 핵심 순환을 먼저 실기기에서 검증하겠습니다.
  - 동기화 실패와 재시도 상태를 사용자가 이해할 수 있는 언어로 보여주는 정책을 보강하겠습니다.
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
