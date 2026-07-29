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
overview: A club operations system designed not as a simple leaderboard, but to use match records as a reason for members from different groups to meet more often.
problem: Existing and new members rarely mixed naturally, and some members participated passively in regular activities.
whyItMattered: A win-centered ranking could raise the participation barrier in a community with wide skill differences, so the operating rules needed to recognize multiple forms of participation.
context: The system was operated with the leadership team during regular activities of SCUTTA, the University of Seoul table tennis club.
user: SCUTTA members with different skill levels and joining dates used it alongside the leadership team managing match records.
contributions:
  - Structured match records and multiple participation signals in a Notion database.
  - Connected Apple Shortcuts with the Notion API to turn submitted text into JSON and partially automate record creation.
  - Improved the submission flow and prompts for meeting new opponents based on survey feedback.
process:
  - Reframed limited interaction and participation as an operations problem that match records could address.
  - Structured matches and several participation signals in Notion.
  - Reduced repetitive entry with Apple Shortcuts and the Notion API, then applied survey feedback to submission and discovery flows.
research:
  - Survey feedback collected during operation informed submission and interaction rules; raw responses remain private.
keyDecisions:
  - title: Recognize participation beyond wins
    description: Losses and the number of unique opponents appeared alongside other signals so participation itself remained visible.
  - title: Do not force opponent assignments
    description: The system provided reasons to meet someone new while preserving each member's choice.
  - title: Automate only repetitive entry
    description: It partially automated text conversion and record creation without automating leadership judgment.
technicalStructure:
  - A Notion database structured match records and participation signals.
  - Apple Shortcuts accepted submission text and converted it into a JSON request.
  - The Notion API connected the shortcut to database page creation.
challenges:
  - More automation also introduced exception records that the leadership team needed to review and correct.
  - Multiple rankings needed adjustment so they encouraged participation without creating a different competitive pressure.
technologies:
  - Notion
  - Notion API
  - Apple Shortcuts
outcomes:
  - 84 members had used the system as of the CV publication date.
  - 1,890 match records had been structured as data as of the CV publication date.
whatIWouldChange:
  - Document validation rules and ownership of exceptional submissions before automating the entry flow.
  - Define anonymous observation criteria before launch to understand whether participation signals changed actual interaction.
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
