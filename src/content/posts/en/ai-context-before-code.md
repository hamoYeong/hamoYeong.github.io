---
slug: ai-context-before-code
locale: en
translationKey: ai-context-before-code
title: What I Need to Decide Before Asking AI to Implement
description: To evaluate AI-generated work, I first define the problem, constraints, and ownership of data in my own words.
publishedAt: 2026-07-29
tags:
  - AI
  - Problem Framing
  - Architecture
draft: false
featured: true
relatedProjects: []
---

Before asking AI to write code, the most important question is not how long the prompt is. It is how clearly I understand the problem.

## Four decisions that come before implementation

### The problem the user is actually trying to solve

When a request is described only as a feature, AI naturally optimizes for producing that feature quickly. Defining the change the user needs leads to a different scope and a more useful success criterion. I start with “What should become easier for the user after this work?” rather than “What should I add?”

### Ownership of source data and the interface

The same information can appear on several screens, but it should still have one source of truth. If I do not distinguish a real user record from a value calculated for presentation, a convenient-looking structure can create conflicting data. Defining who owns the data and where it may change also keeps UI components focused.

### The flow that must survive failure

Sometimes a user must not lose their work when the network disconnects or an external API fails. A request that describes only the happy path tends to produce only a polished happy path. Before implementation, I list conditions close to failure: empty data, delays, retries, and read-only states.

### Criteria for evaluating a proposal

An AI response is an option, not a decision. I evaluate whether it fits the existing structure, makes data ownership clear, can be tested, and can be maintained by a teammate after an explanation. Sometimes a structure whose reasoning is easy to understand matters more than writing fewer lines.

## Good context is not a long prompt

Good context does not mean adding every possible requirement. It means clarifying the boundaries needed to make a decision. Once I define the problem, the data, failure conditions, and evaluation criteria in my own words, I can safely delegate a larger part of implementation. The best preparation for faster implementation is deciding what deserves to be called a good result.
