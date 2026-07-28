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
problem: When coding beginners follow finished AI-generated code, they can miss the practice of reasoning about data and flow before the interface.
contributions:
  - Built a read-only TextKit code viewer with line numbers and range comments.
  - Implemented an unlock flow and split view for comparing two code structures step by step.
  - Kept SwiftData as the source of truth and limited MultipeerConnectivity to sharing and resynchronization within a class session.
technologies:
  - SwiftUI
  - AppKit TextKit
  - SwiftData
  - MultipeerConnectivity
  - MVVM
outcomes:
  - Implemented working flows for loading, searching, commenting on, comparing, and sharing code nearby.
  - Classroom use and participant feedback will only be published after verification.
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
---

## Overview

HamoCom is a macOS app centered on reading code and asking questions together rather than editing code directly.

## Key decisions

- The first version focuses on reading, searching, range comments, and structural comparison instead of code editing.
- SwiftData owns comments and replies, while nearby communication is limited to sharing and resynchronizing across devices.
- Sections reveal differences between two code structures gradually instead of presenting a finished answer first.

## Verification note

The implementation and final check document are available in the public repository. Classroom use and participant feedback are not presented as outcomes until verified.
