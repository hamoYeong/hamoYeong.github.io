---
slug: ssukssuk
locale: en
translationKey: leaf
title: Ssukssuk
summary: An iOS record app focused on deepening the restorative experience of tending a garden rather than trying to manage every garden problem.
period:
  start: '2026-07'
  end: present
  label: Jul 2026-present
status: in-progress
role:
  - iOS development
  - Domain model design
  - Record and MainHome flows
  - Helping the team understand the structure
team:
  type: team
  description: The team built this project during Apple Developer Academy C4. I led the domain model, record and main-home implementation, and helped the team understand the structure.
overview: An iOS app that begins with garden and crop setup, then connects activity timing, watering, harvests, and notes to a growth roadmap so people can revisit their time in the garden.
problem: A garden has too many external variables for an app to manage them all, while a simple task log cannot fully preserve the restorative experience people find in ongoing care.
whyItMattered: The restorative value of gardening emerges through repeated care and moments of change, so the product needed to connect varied records into a process people could revisit.
context: The team began this project during Apple Developer Academy C4 in July 2026. C4 explored User Experience through research, accessibility, implementation, and final user testing.
user: The app is for people who tend a small garden and want to record and revisit the restorative experience found in care and crop growth.
contributions:
  - Designed a domain model that connects a garden's external variables and multiple record types into one flow.
  - Separated the Record Service into a protocol, PreviewService, and production service.
  - Implemented add, detail, edit, and harvest record flows.
  - Connected the MainHome activity timer to record creation.
  - Explained models and data flow at each teammate's current level of knowledge so the team could implement together.
process:
  - After an in-person interview with the Pohang city official responsible for urban agriculture, we shifted from reducing garden problems to increasing the restorative value of gardening.
  - Surveyed 47 garden users to understand the specific situations in which that restorative experience occurs.
  - Considered user experience and accessibility during implementation, then iterated on the app with feedback from final user testing.
research:
  - An in-person interview with Pohang's urban-agriculture official shifted the product from problem reduction to the restorative experience of gardening.
  - A survey of 47 garden users explored the concrete situations in which gardening feels restorative.
  - The team used feedback from final user testing to improve the app.
keyDecisions:
  - title: Shift from problem reduction to restoration
    description: The city-official interview moved the product away from managing every external variable and toward extending the restorative moments people experience in a garden.
  - title: Connect varied record types in one model
    description: Watering, harvests, notes, and time records gain meaning together within the growth process instead of becoming a simple activity log.
  - title: Define the service contract and preview first
    description: Screens do not know SwiftData details, and the team can review multiple record states without production data.
technicalStructure:
  - SwiftUI screens depend on a protocol-based Record Service.
  - PreviewRecordService and the production RecordService implement the same contract, while repositories own SwiftData access.
  - AppSession and feature routers manage current-garden state and navigation boundaries.
  - The activity timer passes only the context needed to create a record.
  - Crop growth presentation policies and the USDZ-based GardenPlantSceneRenderer remain separate.
challenges:
  - The model needed to represent many garden variables and record types while remaining understandable to the team.
  - Avoiding a simple activity log introduced more types and relationships, which became a barrier when explaining the model to teammates with different programming experience.
  - Instead of handing over an answer, I needed to understand each teammate's current knowledge and trace concepts back to the level they needed.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - USDZ
outcomes:
  - Used the city-official interview and 47-person survey to focus the product on the restorative experience of gardening.
  - Implemented onboarding, the current garden, activity timing, growth roadmaps, watering, and harvest records.
  - A memory-backed PreviewModelContainer and mock data reproduce major screen states without production data.
  - Iterated on the app once more with feedback from final user testing.
whatIWouldChange:
  - Run a shared modeling session earlier so the team can draw the core concepts and relationships before implementing many record types.
  - Manage accessibility criteria and user-testing questions alongside the model and interface design from the beginning.
learnings:
  - Deep user research can change the problem itself, and that shift can become the starting point for a better experience.
  - Building a sound structure matters as much as explaining it at another person's current level of knowledge.
  - The experience deepened my interest in sharing learning through a more systematic curriculum rather than one-off explanations.
categories:
  - iOS
  - User Experience
  - Accessibility
featured: true
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - protocol-preview-service-flow
---
