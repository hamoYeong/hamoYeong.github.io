---
slug: computational-thinking-hamo
locale: en
translationKey: computational-thinking-hamo
title: HamoCom
summary: A macOS learning tool that helps coding beginners read data and flow, then discuss them together instead of simply following AI-generated results.
period:
  start: '2026-06'
  end: present
  label: Jun 2026-present
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
  - Built a read-only TextKit code viewer with line numbers, current-file search, and line or range comments.
  - Persisted comments, replies, and staged unlock state in SwiftData, then implemented a split comparison flow for two code structures.
  - Used MultipeerConnectivity to share and resynchronize comments and replies within the same class session.
process:
  - Defined the sequence in which a learner reads code and leaves questions before choosing features.
  - Built the lesson code loader, read-only workspace, and comment persistence before extending the flow from one code sample to two-structure comparison.
  - Separated local persistence from nearby sharing and checked the end-to-end flow through a feature-level manual verification document.
research: []
keyDecisions:
  - title: Focus on reading and dialogue, not editing
    description: The first version excludes code editing and concentrates the learning flow on search, range comments, and structural comparison.
  - title: Keep SwiftData as the source of truth
    description: Nearby communication only shares and resynchronizes comments, keeping persistence responsibility explicit.
  - title: Reveal differences progressively
    description: Learners discover structural differences in sequence instead of receiving a finished explanation immediately.
technicalStructure:
  - LessonCodeLoader reads lesson files, while CodeSearchController handles search within the current file.
  - An AppKit TextKit read-only code viewer is integrated into the SwiftUI workspace.
  - SwiftData owns comments, replies, and unlock state as the source of truth.
  - ClassroomSessionController and CommentSyncService handle sharing and resynchronization inside a class session.
challenges:
  - Text ranges and line numbers from TextKit needed to remain consistent inside SwiftUI screens.
  - Saved comments needed to remain intact across differing local-network permissions and connection states.
  - Cross-device changes use `updatedAt`-based last-write-wins, which still leaves semantic conflicts under simultaneous edits.
technologies:
  - SwiftUI
  - AppKit TextKit
  - SwiftData
  - MultipeerConnectivity
  - MVVM
outcomes:
  - Implemented working flows for loading, searching, commenting on, comparing, and sharing code nearby.
  - The repository has no automated test target yet, so the current verification scope is recorded in a feature-level manual check document.
  - Classroom use and participant feedback will only be published after verification.
whatIWouldChange:
  - Define observation criteria for each learning objective and the boundaries of anonymous feedback before classroom use.
  - Add automated tests for search, comment-range conversion, unlock state, and synchronization conflict policy.
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
