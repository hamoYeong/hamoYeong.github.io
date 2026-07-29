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
overview: An iOS app that treats plans as hypotheses and actual records as evidence of the lived day, keeping both available for reflection without judgment.
problem: Automatically adjusting a plan to match actual behavior can blur the meaning of both and encourage people to judge a day only as a success or failure.
whyItMattered: When productivity tools emphasize completion alone, useful information from an unexpected day can be reduced to failure.
context: This is a personal iOS project for validating product principles, data models, Apple platform integrations, and failure behavior together.
user: The intended user wants to record plans and actual activity while reflecting on the difference without labeling the day a success or failure.
contributions:
  - Designed plans and actual records as independent models.
  - Built optional CloudKit, App Intents, Widget, and Live Activity flows around SwiftData.
  - Captured time zones, daylight saving time, midnight crossings, and interval overlaps in tests.
process:
  - Defined the distinct meanings of plans and actual records as product principles.
  - Implemented independent data models and a local-first persistence flow.
  - Connected CloudKit, App Intents, Widgets, and Live Activities as projections, then verified time-boundary conditions.
research: []
keyDecisions:
  - title: Separate plans from actual records
    description: Actual behavior does not overwrite a plan; the two remain independent records with different meanings.
  - title: Prioritize the local core flow
    description: Recording and reflection continue when CloudKit is unavailable.
  - title: Keep extensions as projections
    description: Widgets and Live Activities receive only the state they need instead of becoming additional sources of truth.
technicalStructure:
  - SwiftData owns local plan, actual-record, and reflection data.
  - CloudKit synchronization is optional and preserves local-only behavior on failure.
  - App Intents, WidgetKit, and ActivityKit consume limited data projections.
challenges:
  - Time zones, daylight saving changes, and intervals crossing midnight needed consistent meaning.
  - Multiple Apple platform extensions could not be allowed to split ownership of the core data.
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
whatIWouldChange:
  - Limit scope earlier and verify the core record-and-reflection loop on a device before expanding platform integrations.
  - Strengthen the policy for communicating synchronization failure and retry state in language users can understand.
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
