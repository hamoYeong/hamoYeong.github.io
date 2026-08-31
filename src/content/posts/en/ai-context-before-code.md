---
slug: ai-context-before-code
locale: en
translationKey: ai-context-before-code
title: What I Need to Decide Before Asking AI to Implement
description: Drawing on the Academy and one C4 learner case, I separate what I must decide—problem, data, failure conditions, and evaluation criteria—from implementation AI can support.
publishedAt: 2026-07-29
updatedAt: 2026-08-31
tags:
  - AI
  - Problem Framing
  - Architecture
draft: false
featured: true
relatedProjects:
  - learn-with-ai-questioning
  - computational-thinking-hamo
  - dayflow
  - leaf
---

At the Apple Developer Academy, I saw learners blocked on Swift fundamentals ask AI not only to implement something but also to decide what needed to be thought through. Generated code could remove the immediate block while leaving the learner without criteria for judging the intent and assumptions behind the result.

This is not an argument for using less AI. It is about keeping the thinking with me while AI helps with implementation: I need to define the criteria for judging a result in my own words first. Before asking AI to write code, the most important question is not how long the prompt is. It is how clearly I understand the problem.

## Four decisions that come before implementation

### The problem the user is actually trying to solve

When a request is described only as a feature, AI naturally optimizes for producing that feature quickly. Defining the change the user needs leads to a different scope and a more useful success criterion. I start with “What should become easier for the user after this work?” rather than “What should I add?”

### Ownership of source data and the interface

The same information can appear on several screens, but it should still have one source of truth. If I do not distinguish a real user record from a value calculated for presentation, a convenient-looking structure can create conflicting data. Defining who owns the data and where it may change also keeps UI components focused.

### The flow that must survive failure

Sometimes a user must not lose their work when the network disconnects or an external API fails. A request that describes only the happy path tends to produce only a polished happy path. Before implementation, I list conditions close to failure: empty data, delays, retries, and read-only states.

### Criteria for evaluating a proposal

An AI response is an option, not a decision. I evaluate whether it fits the existing structure, makes data ownership clear, can be tested, and can be maintained by a teammate after an explanation. Sometimes a structure whose reasoning is easy to understand matters more than writing fewer lines.

## Why I asked one learner to write the intent first

In C4, I worked with one learner who had modified interface code before but could not connect the logic and data flow behind it. Before asking AI to implement, the learner wrote the intended behavior in their own words and then compared it with the generated code.

The learner was then able to find something the AI result had overlooked and explain what should have been specified more clearly. This was one observation in one learner’s project context. I have not yet evaluated whether the same judgment transfers to another problem.

## Good context is not a long prompt

Good context does not mean adding every possible requirement. It means clarifying the boundaries needed to make a decision. Once I define the problem, the data, failure conditions, and evaluation criteria in my own words, I can safely delegate a larger part of implementation. The best preparation for faster implementation is deciding what deserves to be called a good result.

## A checklist for separating my thinking from work I can delegate to AI

### What I decide first

- The user problem and the state that should change after this work
- The source of truth, who may change it, and what the interface needs to know
- The conditions that must hold through empty states, failures, delays, and retries
- Criteria for accepting or rejecting a proposal
- What I do not yet understand and which assumptions need verification

### What I can ask AI to help with

- Drafting repetitive implementation and boilerplate against an already-defined contract
- Comparing implementation options that satisfy the same requirements
- Drafting test cases from failure conditions I have already identified
- Organizing terms and documentation candidates when exploring an unfamiliar API or pattern

### What returns to me after the result

- Marking differences from my intent, missing premises, and newly introduced failure conditions
- Explaining the chosen structure in my own words and recording the criteria for the next person
- Verifying the result through execution, tests, and original documentation
