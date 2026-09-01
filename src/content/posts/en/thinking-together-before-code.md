---
slug: thinking-together-before-code
locale: en
translationKey: thinking-together-before-code
roleLenses:
  - learning-experience
  - facilitation-mentoring
competencies:
  - beginner-observation
  - technical-explanation
  - collaboration-facilitation
evidenceLevels:
  - observed
priority: 25
title: Thinking Together Instead of Handing Over Finished Code
description: A reflection on naming different success criteria, finding data flow and intent with one learner, and the limits of one-off explanations.
publishedAt: 2026-07-29
updatedAt: 2026-08-31
tags:
  - Collaboration
  - Computational Thinking
  - Architecture
draft: false
featured: true
relatedProjects:
  - leaf
  - computational-thinking-hamo
---

When a teammate is stuck, the fastest help can seem to be handing over code that works. The screen is completed today, but when a similar change appears, the answer may need to come from the same person again. Help intended to increase the team's speed can concentrate judgment in one place.

Working with teammates who had different levels of programming experience during an Apple Developer Academy project changed how I define useful help. Even when I thought I knew the answer, I began spending more time explaining where data came from and in what order it changed instead of delivering a finished structure.

We did not always begin with exactly the same definition of success. Completing a solution within the project period mattered to the team; I also saw investigating the user problem and having each person explain the basis for a decision as learning goals. Instead of deciding that one standard was correct, we needed to put both into shared language so implementation speed and learning could be discussed together.

> Useful help does more than complete today's code. It helps someone form their own question when the next problem appears.

## What an immediate answer can prevent

Finished code is concrete and reassuring. But when the answer arrives before the reason for the structure, only its shape may remain.

Suppose a screen needs to save a record. We could begin by adding a `ViewModel` or a `Service`. The conversation quickly moves to class names and file locations. More important questions fall behind: What is the source of this data? Who may change it? What should the interface show when persistence fails?

When the name of a structure comes first, a teammate can place code into predetermined boxes but may struggle to redraw the boxes when the requirement changes. I try to discuss the movement of data before naming the implementation.

## Four steps for thinking together

### 1. Clarify the question before reading the blocked code

“How should I implement this?” can contain several different problems. I first distinguish whether the issue is navigation, an undefined data model, or state that several screens need to share.

Instead of opening the code immediately, I ask:

- What should remain after the user completes this action?
- Is the value shown on this screen the same as the value that must be persisted?
- Where is the value created, and where may it change?
- What information must survive failure?

As the question becomes specific, the implementation becomes smaller.

### 2. Draw the movement of data on a whiteboard

When a structure is explained only in words, people can understand the same term differently. I draw screens, services, and persistence as boxes and connect them with arrows showing the direction of data.

The goal is not a polished architecture diagram. It is a diagram that can answer one question:

“After the user taps Add Record, who receives the data, and when does it become a persisted fact?”

Following that question reveals whether the screen should know the persistence technology, what contract an intermediate layer needs, and who communicates completion or failure.

### 3. Describe each boundary in one sentence

After drawing the boxes, we describe each layer's responsibility in one sentence.

- The screen presents user input and current state.
- The service contract defines the actions the screen may request.
- The production service performs those actions using persistence.
- The preview implementation supplies expected states without production storage.

If the description of one layer repeatedly needs “and,” its responsibility may be too broad. If two layers cannot be described differently, they may be separated only by name.

### 4. Implement only the next small step

Instead of delivering the whole solution, we implement the smallest step that can verify the current flow. That might be declaring a contract, rendering one state with preview data, or separating persistence success from failure.

Once the small step works, the teammate explains the next step in their own words. The point where the explanation stops often exposes missing shared understanding more clearly than a syntax error does.

## The change I observed

In C4, one learner initially could not explain the logic and data flow behind a screen and struggled to choose the next task. After we drew the larger flow and the learner wrote the intended behavior before comparing it with an AI result, the learner found something the result had overlooked and explained what should have been specified more clearly.

## The limit of that change

One explanation did not become a knowledge system the learner could retrieve whenever it was needed. Each explanation kept tracing back to more fundamental concepts, and the change above was observed in one learner and one project. I have not evaluated whether the learner can form the same kind of question in another problem or sustain it over time. That limit led me to think beyond one-off help toward a curriculum where thinking actions are repeated and knowledge is connected.

## Explanation was not one-way transfer

Explaining the structure together also exposed my assumptions. A layer that felt obviously necessary to me could seem unnecessary to someone else, and their question sometimes led us to a simpler structure.

When discussing MV and MVVM, we moved away from choosing the correct label. We asked who owns state, who interprets a user action, and who presents a persistence failure. A pattern then becomes an option for explaining current responsibilities rather than an answer by itself.

The same applies when a team uses AI. Beginning with finished AI-generated code can narrow the conversation to whether the result should be accepted. When assumptions and failure conditions are first put into shared language, everyone can evaluate why an AI proposal should or should not fit.

## Defining team speed differently

Team speed is difficult to measure only by the amount of code written today. It also depends on who can understand and continue the next change, and whether every question must return to one person.

Not handing over finished code does not require a long discussion every time. One short question, a few arrows showing data flow, and a sentence describing a boundary can become enough criteria for the next implementation.

The team structure I want is not one where I hold the most answers. It is one where each person can decompose a problem, explain an assumption, and form the next question.
