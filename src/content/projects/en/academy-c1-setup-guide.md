---
slug: academy-c1-setup-guide
locale: en
translationKey: academy-c1-setup-guide
title: Academy Setup Guide
summary: A C1 project where team problem finding through CBL led into individual SwiftUI implementations, combining problem solving with Swift fundamentals.
period:
  start: '2026-03'
  end: '2026-04'
  label: Mar-Apr 2026
status: completed
role:
  - Contributed to team topic discovery and planning
  - Implemented an individual SwiftUI app
  - Modeled guide information and navigation routes
team:
  type: team
  description: Topic discovery and planning were collaborative; from implementation onward, each person built an individual app from the shared plan.
overview: Starting from the Big Idea of a service for the Academy, I built a guide that helps new learners review webmail, required apps, mobile identification, and other setup tasks step by step.
problem: Essential setup information for starting Academy life spans several locations and steps, making the sequence difficult for a new learner to understand.
whyItMattered: C1 emphasized the process of framing a problem through CBL and implementing a response in Swift, rather than treating product completeness as the only outcome.
context: Apple Developer Academy C1 paired Challenge-Based Learning with Swift fundamentals through team planning followed by individual implementation.
user: The implementation was designed for a new Academy learner who needs to complete several setup tasks in sequence.
contributions:
  - Worked with the team from Big Idea through Guiding Questions and Answers to a Challenge Response.
  - Separated guide items into route data instead of hard-coding the sequence into screens.
  - Built a SwiftUI app that moves from a list into step-by-step details with NavigationStack.
process:
  - Shared observations and questions with the team under the Big Idea of a service for the Academy.
  - During individual implementation, represented the guide order and navigation as data.
  - Learned SwiftUI state, data, and NavigationStack fundamentals inside a concrete problem-solving context.
research:
  - Team discussion explored the setup steps a new learner encounters when starting Academy life.
keyDecisions:
  - title: Plan together, implement individually
    description: Each person implemented the shared Challenge Response in Swift, connecting collaborative discovery with individual technical learning.
  - title: Represent guide order as route data
    description: Guide items and routes define the sequence instead of each screen directly owning the next step.
  - title: Focus the first implementation on guided setup
    description: The scope prioritized the essential setup journey and Swift fundamentals over broader operations features.
technicalStructure:
  - SwiftUI NavigationStack handles navigation from the list into detailed instructions.
  - Guide items and route models define the information and its order.
  - Screens render the content associated with the current route.
challenges:
  - A broad topic developed by the team needed to become a scope that one person could implement.
  - As a Swift beginner, I needed to understand navigation and data at the same time.
technologies:
  - Swift
  - SwiftUI
  - NavigationStack
outcomes:
  - Completed a working SwiftUI prototype for browsing major setup tasks through a list and step-by-step details.
  - Experienced one complete CBL cycle from collaborative problem discovery to individual implementation.
whatIWouldChange:
  - Observe or interview new learners before implementation to identify which setup steps create the most friction.
  - Add a shared retrospective comparing how each implementation interpreted the team plan.
learnings:
  - I experienced how CBL creates learning by asking people to form questions and implement responses rather than receiving an answer first.
  - Even a small guide app can separate responsibility for information order from screen navigation.
categories:
  - iOS
  - Education
  - Learning
featured: false
draft: false
repository: https://github.com/hamoYeong/C1
visibility: public
relatedPosts: []
---
