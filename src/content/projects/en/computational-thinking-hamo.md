---
slug: computational-thinking-hamo
locale: en
translationKey: computational-thinking-hamo
title: HamoCom
summary: A macOS learning tool that helps coding beginners read data and flow, then discuss them together instead of simply following AI-generated results.
period:
  start: '2026'
  end: present
  label: 2026-present
status: in-progress
role:
  - Designed the learning flow
  - Designed the product structure
  - Implemented the macOS app
team:
  type: personal
  description: I designed and implemented it independently for a computational thinking class at Apple Developer Academy.
overview: A macOS app centered on reading code, asking questions, and comparing structures in sequence rather than editing code directly.
problem: When coding beginners follow finished AI-generated code, they can miss the practice of reasoning about data and flow before the interface.
whyItMattered: As AI accelerates implementation, learners need more practice judging and changing results through their own computational thinking.
context: I designed it for a computational thinking class at Apple Developer Academy. Classroom use and participant responses are not yet presented as verified outcomes.
user: It is intended for coding beginners who need to practice reading data and flow rather than following completed code.
contributions:
  - Built a read-only TextKit code viewer with line numbers and range comments.
  - Implemented an unlock flow and split view for comparing two code structures step by step.
  - Kept SwiftData as the source of truth and limited MultipeerConnectivity to sharing and resynchronization within a class session.
process:
  - Defined the sequence in which a learner reads code and leaves questions before choosing features.
  - Implemented a staged flow from reading one code sample to comparing two structures.
  - Separated local comment persistence from nearby sharing and verified the flows in a final check document.
research: []
keyDecisions:
  - title: Focus on reading and dialogue, not editing
    description: The first version excludes code editing and concentrates the learning flow on search, range comments, and structural comparison.
  - title: Keep SwiftData as the source of truth
    description: Nearby communication only shares and resynchronizes comments, keeping persistence responsibility explicit.
  - title: Reveal differences progressively
    description: Learners discover structural differences in sequence instead of receiving a finished explanation immediately.
technicalStructure:
  - An AppKit TextKit read-only code viewer is integrated into SwiftUI.
  - SwiftData owns comments and replies as the source of truth.
  - MultipeerConnectivity handles sharing and resynchronization inside a class session.
challenges:
  - Text ranges and line numbers from TextKit needed to remain consistent inside SwiftUI screens.
  - Sharing comments across devices could not dilute the ownership of locally persisted data.
technologies:
  - SwiftUI
  - AppKit TextKit
  - SwiftData
  - MultipeerConnectivity
  - MVVM
outcomes:
  - Implemented working flows for loading, searching, commenting on, comparing, and sharing code nearby.
  - Classroom use and participant feedback will only be published after verification.
whatIWouldChange:
  - Define observation criteria for each learning objective and the boundaries of anonymous feedback before classroom use.
  - Add more explicit tests for conflict handling when nearby sharing disconnects and recovers.
learnings:
  - The order in which a learner is encouraged to think matters more than the number of features in a learning tool.
  - Evaluating an AI-generated answer starts with explaining data and responsibilities in your own words.
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
  - thinking-together-before-code
---
