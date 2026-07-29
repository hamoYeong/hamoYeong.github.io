---
slug: leaf
locale: en
translationKey: leaf
title: Leaf (working title)
summary: In a team project for recording small-garden care and growth, I separated UI and persistence responsibilities and implemented the record flow.
period:
  start: '2026'
  end: present
  label: 2026 C4-present
status: in-progress
role:
  - iOS development
  - Record and MainHome flows
  - Service structure design and explanation
team:
  type: team
  description: This is a private Apple Developer Academy C4 team project. I distinguish the team's outcome from my publishable individual contribution.
overview: An iOS record app that helps people connect brief garden-care activities with gradual crop growth and reflect on the full process.
problem: When watering, care, harvests, and growth changes are recorded separately, it is difficult to review both the crop's development and the care that supported it.
whyItMattered: Garden change is gradual while care is brief and repetitive, so the product needed to connect small records over time rather than emphasize a single result.
context: This is an ongoing private Apple Developer Academy C4 team project. The public name, exact period, and user-research figures remain unconfirmed.
user: The intended user tends a small garden and wants to record and review activities alongside crop growth.
contributions:
  - Separated the Record Service into a protocol, PreviewService, and production service.
  - Implemented add, detail, edit, and harvest record flows.
  - Connected the MainHome activity timer to record creation.
  - Separated crop information, growth stages, and 3D garden rendering responsibilities.
process:
  - Read the existing screens and data models, then mapped how a record is created and stored with the team.
  - Defined the service contract and preview implementation so screens would not know the persistence details.
  - Connected record and activity-timer flows, then extended the contract to production persistence.
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
  - PreviewService and the production SwiftData service implement the same contract.
  - The activity timer and record creation exchange only the data needed for the transition.
  - Crop growth models and USDZ-based 3D rendering remain separate responsibilities.
challenges:
  - I had to understand and adjust UI, persistence, and domain responsibilities inside an active team codebase.
  - Beyond proposing a structure, I needed to help teammates with different programming experience explain the flow in their own words.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - USDZ
outcomes:
  - Verified implemented flows for onboarding, the current garden, activity timing, growth roadmaps, watering, and harvest records.
  - User-research counts and test results are not presented as outcomes until public evidence is confirmed.
whatIWouldChange:
  - Run a short shared modeling session earlier so the team can explain the core flow and data vocabulary before implementation.
  - Maintain publishable research evidence and verification criteria alongside product decision records.
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
