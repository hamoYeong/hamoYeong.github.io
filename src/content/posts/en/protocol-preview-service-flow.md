---
slug: protocol-preview-service-flow
locale: en
translationKey: protocol-preview-service-flow
title: Understanding Data Flow Through Protocol → PreviewService → Service
description: How Protocol → PreviewService → Service became a scaffold for one learner to see the larger data flow, and why I adjusted the size and order of that scaffold in C5.
publishedAt: 2026-07-29
updatedAt: 2026-08-31
tags:
  - SwiftUI
  - Architecture
  - Data Flow
draft: false
featured: false
relatedProjects:
  - leaf
---

I did not begin explaining this structure because I wanted cleaner file boundaries. In C4, one learner had enjoyed changing SwiftUI views and seeing immediate visual feedback early in the Academy. Returning to development later, the learner could not connect the logic and data responsibilities behind the screen and could not decide what to do next.

`Protocol → PreviewService → Service` became a scaffold for seeing the larger flow from screen to contract, example state, and production persistence. It was not a pattern I wanted the learner to reproduce as a finished answer.

SwiftUI projects often separate these three boundaries. Dividing code into three files does not make responsibilities clear by itself. When a team cannot explain why each boundary exists, abstraction can add names without adding understanding.

While implementing a record flow in a team project, I changed the order in which I approached the structure. Instead of building persistence first and extracting a protocol later, I described the actions the screen needed as a contract, checked that contract through preview states, and only then connected production persistence.

> This post rebuilds the flow used in the project with a smaller example model.

## A protocol is a question before it is a replacement mechanism

Saying that a protocol exists “so the implementation can be replaced later” does not reveal what the current interface actually needs. The screen's questions come first.

- It needs to request a list of records.
- It needs to add a record entered by the user.
- It needs to know whether persistence completed or failed.

A simplified contract for those questions might look like this:

```swift
protocol RecordService {
    func records() async throws -> [Record]
    func add(_ draft: RecordDraft) async throws -> Record
}
```

There is no SwiftData, network, or file-system name in this contract. It describes only the actions and results the screen needs. If the number of methods keeps growing, the team can ask whether the interface should really know about every action.

The protocol becomes a tool for reviewing today's boundary before it becomes insurance for a future replacement.

## PreviewService turns assumptions into executable states

When previews are treated only as attractive sample screens, they tend to represent a single happy state. A PreviewService that implements the real contract can check several assumptions the interface makes.

```swift
struct PreviewRecordService: RecordService {
    var result: Result<[Record], Error>

    func records() async throws -> [Record] {
        try result.get()
    }

    func add(_ draft: RecordDraft) async throws -> Record {
        Record.preview(from: draft)
    }
}
```

This example can provide an empty list or an error as well as populated records. Without preparing production persistence, the team can ask:

- What does the screen explain when there are no records?
- Should user input be disabled while loading?
- Does entered text remain after persistence fails?
- Does the layout survive long titles and many activities?

PreviewService is a small experiment for finding gaps between the interface and its contract before the production implementation exists.

## Production Service closes the boundary around technology

After the contract and preview states make the flow visible, the production service can use persistence technology such as SwiftData.

```swift
struct SwiftDataRecordService: RecordService {
    let store: RecordStore

    func records() async throws -> [Record] {
        try await store.fetchAll()
    }

    func add(_ draft: RecordDraft) async throws -> Record {
        let record = Record(draft: draft)
        try await store.insert(record)
        return record
    }
}
```

The important point is not simply that a production service exists. It is whether knowledge of the persistence technology stays inside that boundary. If the screen begins using `ModelContext` or fetch predicates directly, responsibility leaks back into the interface even though a protocol is present.

The opposite mistake is putting every rule into the service. A growth-stage rule for a crop, for example, may belong to a domain model or policy because it is independent of persistence. A service is not the place that solves every screen problem. It closes the boundary around data requests and persistence.

## The sequence changed the team's conversation

`Protocol → PreviewService → Service` is both an implementation technique and an order for discussion.

1. The protocol defines the promise between the interface and data layer.
2. PreviewService checks whether that promise can represent the states the interface needs.
3. The production service connects persistence technology and failure handling.

This order moves the conversation away from “Is this MV or MVVM?” and toward “Where is the source of this state?” and “Who interprets this failure?”

Architecture labels then become easier to discuss. Whether a ViewModel is needed can depend on the complexity of state transformation and the responsibility that deserves testing, not on habit.

The order mattered as a learning scaffold too. Before entering syntax or the implementation of each file, the learner could see the whole flow as one chunk and identify which boundary was still unclear. After seeing that flow, the learner wrote the intended behavior before comparing it with an AI result and was able to explain an assumption the result had missed. This was one observation, not evidence of a general learning effect.

## In C5, I adjusted the size of the scaffold

In C5, I tried a similar approach with another learner. This learner wanted to become a developer and tended to investigate details deeply, spending longer than expected inside one concept.

I therefore separated time for seeing the large chunks and overall flow from time for studying detailed concepts. This is not a validated method. It is one example of changing the size and order of a scaffold for a different learner.

## This structure is not always necessary

Three boundaries can be excessive for a small screen with read-only static data. During an experiment with one implementation, no failure state, and interface and data that change together, a direct connection may be easier to understand.

I tend to separate the boundary when:

- the team frequently needs to review several interface states without production persistence;
- persistence technology can change or fail;
- several screens share the same data actions; or
- the team needs to discuss interface and persistence responsibilities separately.

The important criterion is not whether a protocol exists. It is whether the structure is necessary for this problem and learner, and whether each boundary can be explained in one sentence.

## What the structure should leave behind

A useful structure was not the one with the most files or the most accurate pattern name. It was one where people working on the interface and persistence could explain the same data flow and knew which boundary to inspect when failure occurred.

A protocol makes the promise visible. PreviewService checks that promise through executable states. Service closes responsibility around production technology. Once that flow is understood, the first question for a new layer can become “Who needs to know this fact?” rather than “Which folder should contain it?”
