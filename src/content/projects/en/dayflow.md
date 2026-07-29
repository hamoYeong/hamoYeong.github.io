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
  - Imported EventKit events and HealthKit sleep intervals as material people can use to compose plans and actual records.
  - Built optional CloudKit, App Intents, Widget, and Live Activity flows around SwiftData, with time-boundary behavior captured in tests.
process:
  - Defined the distinct meanings of plans and actual records as product principles.
  - Implemented plans, actual activity, distractions, sleep, and reflection as independent SwiftData models and stores.
  - Connected EventKit, HealthKit, App Intents, Widgets, and Live Activities as inputs or projections, then verified time-boundary conditions.
research: []
keyDecisions:
  - title: Separate plans from actual records
    description: Actual behavior does not overwrite a plan; the two remain independent records with different meanings.
  - title: Prioritize the local core flow
    description: Recording and reflection continue when CloudKit is unavailable.
  - title: Keep extensions as projections
    description: Widgets and Live Activities receive only the state they need instead of becoming additional sources of truth.
technicalStructure:
  - A versioned SwiftData schema owns local plans, actual activity, distractions, sleep, and reflection data.
  - Feature stores handle model queries and mutations, while EventKit and HealthKit adapters translate external data into app models.
  - CloudKit synchronization is optional and preserves local-only behavior on failure.
  - App Intents, WidgetKit, and ActivityKit consume limited data projections.
challenges:
  - Time zones, daylight saving changes, and intervals crossing midnight needed consistent meaning.
  - Local-only recording needed to continue in environments that could not satisfy CloudKit compatibility requirements.
  - Multiple Apple platform integrations and extensions could not be allowed to split ownership of the core data.
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
  - Verified interval calculations, stores, CloudKit fallback, calendar and sleep integrations, App Intents, Widgets, and Live Activities through unit and UI tests.
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
