---
slug: computational-thinking-hamo
locale: en
translationKey: computational-thinking-hamo
title: HamoCom
summary: I stopped this macOS code-reading prototype after recognizing that I had built the tool before defining a learner and curriculum; that failure became the starting point for rebuilding Learn with AI from education and thinking actions.
period:
  start: '2026-06'
  end: '2026-06'
  label: Jun 2026
status: archived
role:
  - Designed the learning flow
  - Designed the product structure
  - Implemented the macOS app
team:
  type: personal
  description: I independently designed and implemented it while imagining a small computational-thinking session.
overview: A macOS app prototype that explored a sequence of reading code, asking questions, and comparing two structures rather than editing code directly.
problem: I began with the hypothesis that coding beginners who follow finished AI-generated code can miss the practice of explaining data and flow and judging a result themselves.
whyItMattered: A tool built before clarifying the learner need and curriculum makes it difficult to know whether its features support actual learning.
context: After attending a computational-thinking session, I wanted to run a small session of my own. I stopped when I recognized that I was building the app before identifying a concrete need.
user: The learner and session context remained an unvalidated early hypothesis.
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
  - The app was never used in a class; I stopped development after recognizing that it was a prototype without a clear need or curriculum.
whatIWouldChange:
  - Begin by defining which learner needs to practice which thinking process, then validate it through a small session before building an app.
  - Discuss the role of a computational-thinking curriculum with a mentor before scoping the next project.
learnings:
  - A learning tool needs a reusable structure for thinking, not only more features or a one-time explanation.
  - Working one-on-one with a C4 teammate later showed me both the joy and limits of improvised explanations and renewed my motivation to design a clear curriculum.
  - Evaluating an AI-generated answer starts with explaining data and responsibilities in your own words.
categories:
  - macOS
  - Education
  - Computational Thinking
featured: false
draft: false
repository: https://github.com/hamoYeong/ComputationalThinkingHamo
visibility: public
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - reusable-knowledge-from-explanations
---
