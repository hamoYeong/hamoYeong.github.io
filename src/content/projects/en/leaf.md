---
slug: leaf
locale: en
translationKey: leaf
title: Leaf
summary: An iOS record app for reviewing time in the garden, watering, harvests, and notes alongside each crop's growth.
period:
  start: '2026-07'
  end: present
  label: Jul 2026-present
status: in-progress
role:
  - iOS development
  - Record and MainHome flows
  - Service structure design and explanation
team:
  type: team
  description: This is a private Apple Developer Academy C4 team project. I distinguish the team's outcome from my publishable individual contribution.
overview: An iOS app that begins with garden and crop setup, then connects activity timing, watering, harvests, and notes to a growth roadmap.
problem: When watering, care, harvests, and growth changes are recorded separately, it is difficult to review both the crop's development and the care that supported it.
whyItMattered: Garden change is gradual while care is brief and repetitive, so the product needed to connect small records over time rather than emphasize a single result.
context: This private Apple Developer Academy C4 team project began in July 2026. The latest repository README confirms the public name `Leaf`; user-research figures remain unpublished until verified.
user: The intended user tends a small garden and wants to record and review activities alongside crop growth.
contributions:
  - Separated the Record Service into a protocol, PreviewService, and production service.
  - Implemented add, detail, edit, and harvest record flows.
  - Connected the MainHome activity timer to record creation.
  - Separated crop growth presentation policies from the 3D garden scene renderer.
process:
  - Read the existing screens and data models, then mapped how a record is created and stored with the team.
  - Defined the service contract and preview implementation so screens would not know the persistence details.
  - Connected preview states to the screens, then extended the flow to the production SwiftData service, record editing, harvests, and the activity timer.
research: []
keyDecisions:
  - title: Define the service contract first
    description: Screens work through the Record Service contract instead of knowing the SwiftData implementation.
  - title: Provide preview as a separate implementation
    description: The team can review and discuss multiple record states without production data.
  - title: Separate growth rules from presentation
    description: Crop stages, record data, and 3D garden rendering do not own one another's implementation details.
technicalStructure:
  - SwiftUI screens depend on a protocol-based Record Service.
  - PreviewRecordService and the production RecordService implement the same contract, while repositories own SwiftData access.
  - AppSession and feature routers manage current-garden state and navigation boundaries.
  - The activity timer passes only the context needed to create a record.
  - Crop growth presentation policies and the USDZ-based GardenPlantSceneRenderer remain separate.
challenges:
  - I had to understand and adjust UI, persistence, and domain responsibilities inside an active team codebase.
  - Beyond proposing a structure, I needed to help teammates with different programming experience explain the flow in their own words.
  - Without an automated test target or publishable user validation yet, implementation evidence and user value must remain separate claims.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - USDZ
outcomes:
  - Verified repository flows for onboarding, the current garden, activity timing, growth roadmaps, watering, and harvest records.
  - A memory-backed PreviewModelContainer and mock data reproduce major screen states without production data.
  - User-research counts and test results are not presented as outcomes until public evidence is confirmed.
whatIWouldChange:
  - Run a short shared modeling session earlier so the team can explain the core flow and data vocabulary before implementation.
  - Capture repository and service rules in automated tests and maintain publishable research evidence alongside product decision records.
learnings:
  - Building a sound structure and helping a team understand that structure are both necessary.
  - Explaining data flow and layer responsibilities together makes the team's next decision easier than handing over finished code.
categories:
  - iOS
  - Community
featured: true
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - protocol-preview-service-flow
---
