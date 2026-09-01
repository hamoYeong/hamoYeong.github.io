---
slug: academy-c2-benefits
locale: en
translationKey: academy-c2-benefits
roleLenses:
  - ios-software-development
  - problem-framing-research
competencies:
  - educational-prototyping
  - data-flow-architecture
evidenceLevels:
  - hypothesis
  - implemented
priority: 70
relatedChallenges:
  - academy-c2
relatedExperiences:
  - apple-developer-academy
title: Academy Benefits Discovery
summary: A personal C2 project that developed an idea for gathering scattered Academy benefits while acknowledging uncertainty about the user need and focusing on architecture learning.
period:
  start: '2026-04'
  end: '2026-04'
  label: Apr 2026
status: completed
role:
  - Individually framed and implemented the project
  - Designed the data model and state structure
  - Built SwiftData discovery and saved-item flows
team:
  type: personal
  description: I chose the problem and implementation direction and completed the challenge as an individual project.
overview: A SwiftUI prototype for exploring Academy learning benefits, facilities, and activities by category and saving items to revisit.
problem: Gathering scattered benefits seemed potentially useful, but I could not be confident that the idea reflected a sufficiently validated learner need.
whyItMattered: Because I was not confident in the user problem, I stopped adding product features and turned the implementation into a way to learn state ownership and architecture.
context: During Apple Developer Academy C2, I developed the Challenge Response as an individual app, then shifted my focus toward the architecture questions I personally wanted to explore.
user: I assumed an Academy learner who wanted to browse and save benefits, but I did not confirm that need through interviews or observation.
contributions:
  - Modeled categories, subcategories, and saved state in SwiftData.
  - Connected discovery and saved-item screens through view-model state.
  - Seeded initial data and distributed a working prototype through TestFlight.
process:
  - Turned the Challenge Response of gathering scattered benefits into a personal project.
  - Recognized that I was not confident in the user need and chose architecture learning over adding more product features.
  - Compared who should own and mutate state across models, view models, and views through implementation.
research:
  - Without confidence in the user need, I chose not to keep expanding the product and used C2 to study architecture.
keyDecisions:
  - title: Choose a learning goal over product expansion
    description: Because I was not confident in the scattered-benefits premise, I focused on state and data structure instead of adding more features.
  - title: Turn state ownership into the learning goal
    description: I used the app to compare responsibilities across models, view models, and views.
  - title: Persist saved state
    description: SwiftData owns saved items so they remain available beyond a single screen session.
technicalStructure:
  - SwiftData models store benefit categories, subcategories, and saved state.
  - View models connect queries and mutations required by discovery and saved-item flows.
  - SwiftUI views render categories and saved lists from view-model state.
challenges:
  - The quality of the implementation could not answer whether learners actually needed the product.
  - Concrete ownership and mutation responsibilities mattered more than choosing between architecture labels.
technologies:
  - Swift
  - SwiftUI
  - SwiftData
  - MVVM
outcomes:
  - Implemented working benefit discovery, category, and saved-item flows.
  - Distributed the prototype through TestFlight.
  - Compared how models, view models, and views could divide responsibility for state.
whatIWouldChange:
  - Interview or observe learners before implementation to understand when benefit information is actually needed.
  - Build a smaller feature with alternative state structures to compare their responsibilities more directly.
learnings:
  - When I lost confidence in the premise, I could stop pushing toward a product outcome and choose what I wanted to learn instead.
  - Explaining the source and mutation responsibility of state comes before naming an architecture.
categories:
  - iOS
  - Architecture
  - Learning
featured: false
draft: false
repository: https://github.com/hamoYeong/C2
visibility: public
relatedPosts: []
---
