---
slug: scutta-notion-system
locale: en
translationKey: scutta-notion-system
title: SCUTTA Match Record System in Notion
summary: A club operations system that used match records and participation signals to help existing and new members interact more naturally.
period:
  start: '2024-06'
  end: '2024-12'
  label: Jun-Dec 2024
status: completed
role:
  - Proposed the concept
  - Designed the Notion system
  - Built the automation
  - Operated and improved the system
team:
  type: team
  description: I designed the system and its automation, then operated it with the club leadership team and incorporated member feedback.
problem: Existing and new members rarely mixed naturally, and some members participated passively in regular activities.
contributions:
  - Structured match records and multiple participation signals in a Notion database.
  - Connected Apple Shortcuts with the Notion API to turn submitted text into JSON and partially automate record creation.
  - Improved the submission flow and prompts for meeting new opponents based on survey feedback.
technologies:
  - Notion
  - Notion API
  - Apple Shortcuts
outcomes:
  - 84 members had used the system as of the CV publication date.
  - 1,890 match records had been structured as data as of the CV publication date.
learnings:
  - For an operations tool, the submission and review flow and maintenance cost matter more than the number of features.
  - Rules can encourage action while preserving each user's autonomy.
categories:
  - Community
  - Automation
featured: true
draft: false
visibility: public
relatedPosts: []
---

## Overview

The SCUTTA match record system was not designed as a simple leaderboard. It used match records as a reason for members from different groups to meet and play more often.

## Problem

Existing and new members tended to keep playing familiar opponents. I also believed that emphasizing wins alone could make participation harder for members with less experience.

## Key decisions

- We used several signals, including losses and the number of unique opponents, to recognize participation rather than wins alone.
- Instead of assigning opponents, the system gave members a reason to seek out someone new.
- Apple Shortcuts and the Notion API reduced repetitive manual entry.

## Privacy note

Real member names, match results, the Notion URL, and raw feedback remain private. Any future screenshots will be reconstructed with mock data.
