---
slug: academy-c1
locale: en
translationKey: academy-c1
sequence: C1
title: Academy Setup Guide Prototype
summary: Structured required setup information as route data so someone new to Academy life could review it step by step.
period:
  start: '2026-03'
  end: '2026-04'
  label: Mar-Apr 2026
team:
  type: unspecified
  description: The public repository does not establish whether this was individual or team work, so only verified implementation is described.
problem: Initial setup information such as webmail, a default mail app, required apps, and mobile identification spans several steps.
role:
  - Implemented the main SwiftUI screens and route model
whatITried:
  - Separated guide items into route data.
  - Used NavigationStack to build a flow from the list to step-by-step details.
whatChanged:
  - Represented navigation order as data instead of writing the sequence directly into each screen.
learnings:
  - Even a small guide app can separate the responsibility for information order from screen navigation.
relatedPosts: []
repository: https://github.com/hamoYeong/C1
visibility: public
draft: false
---

## Challenge context

This summary is limited to implementation visible in the public repository. User research and collaboration format are not added as outcomes until verified.
