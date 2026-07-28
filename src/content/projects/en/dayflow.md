---
slug: dayflow
locale: en
translationKey: dayflow
title: DayFlow
summary: A personal iOS project that separates plans from actual records so people can reflect on the difference without judging the day as a success or failure.
period:
  start: '2026-06'
  end: present
  label: Jun 2026-present
status: in-progress
role:
  - Defined the product principles
  - Designed the data model and architecture
  - Implemented and verified iOS features
team:
  type: personal
  description: I am independently developing the product from its principles through implementation and verification.
problem: Automatically adjusting a plan to match actual behavior can blur the meaning of both and encourage people to judge a day only as a success or failure.
contributions:
  - Designed plans and actual records as independent models.
  - Built optional CloudKit, App Intents, Widget, and Live Activity flows around SwiftData.
  - Captured time zones, daylight saving time, midnight crossings, and interval overlaps in tests.
technologies:
  - SwiftUI
  - SwiftData
  - CloudKit
  - App Intents
  - WidgetKit
  - ActivityKit
outcomes:
  - Recorded feature-level builds and unit and UI test evidence in the public repository documentation.
  - Final integration, on-device verification, and release are still in progress.
learnings:
  - Apps involving time and synchronization need clear data contracts and failure fallbacks before polished screens.
  - Data with different meanings, such as plans and records, should not be merged merely for convenience.
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

In DayFlow, a plan is a hypothesis for the day, while an actual record is evidence of how the day was lived. The app keeps them separate so the difference can be reviewed rather than automatically corrected.

## Key decisions

- Plans and actual records remain independent data.
- The local-only core flow continues to work when CloudKit is unavailable.
- Widgets and Live Activities are projections that receive only the data they need, not additional sources of truth.

## Current status

Feature-level builds and test evidence are documented in the public repository. Final integration, on-device verification, and release are not presented as completed outcomes.
