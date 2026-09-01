---
slug: scutta-web-service
locale: en
translationKey: scutta-web-service
roleLenses:
  - community-program-operations
  - problem-framing-research
competencies:
  - data-flow-architecture
  - user-research
  - community-operations
  - documentation-systemization
evidenceLevels:
  - designed
  - implemented
  - operated
  - measured
priority: 25
relatedExperiences:
  - scutta-leadership
relatedProjects:
  - scutta-notion-system
title: SCUTTA Match Record Web Service
summary: Expanded lessons from the Notion operation into a dedicated web service for match records and participation rules, addressing mobile access and calculation limits.
period:
  start: '2025-03'
  end: '2025-08'
  label: Mar-Aug 2025
status: completed
role:
  - Sole full-stack development
  - Deployment and operation
  - Feedback-driven improvement
team:
  type: team
  description: I developed the service independently and collaborated with the club leadership team on operation and feedback.
overview: A dedicated service that extended lessons from the Notion operation and brought match records, approval, and participation rules into one web product.
problem: Manual calculations, mobile access, and synchronization delays in Notion created a need to operate match records and participation features in one service.
whyItMattered: As records grew, manual calculation and synchronization delays affected not only the member experience but also operating cost and confidence in the data.
context: I independently developed and deployed the service for SCUTTA from the spring 2025 semester through the summer break, collaborating with the leadership team on operation and feedback. The next operator later continued it through a refactored repository.
user: SCUTTA members submitted records and used participation features, while the leadership team reviewed and managed them.
contributions:
  - Implemented HTML, CSS, and JavaScript interfaces with a Flask server.
  - Modeled players, matches, leagues, bets, and daily opponents in PostgreSQL with SQLAlchemy and tracked schema changes with Alembic.
  - Implemented match submission and approval, search, rankings, leagues, bets, and achievement flows.
process:
  - Used recurring mobile, calculation, and synchronization problems in Notion as the criteria for moving to a web service.
  - Moved players, matches, and participation features into SQLAlchemy models and separated submission from approval state for matches and bets.
  - Applied member and leadership feedback to ranking, league, betting, and participation rules after deployment.
research:
  - Feedback from live operation informed improvements to features and participation rules.
keyDecisions:
  - title: Move beyond extending Notion
    description: Once record volume and calculation complexity grew, a separate service made mobile interfaces and server calculations independently manageable.
  - title: Separate submission from approval
    description: A member-submitted match and a leadership-reviewed record were not treated as the same state.
  - title: Design motivation instead of control
    description: Points, multiple rankings, and participation features gave people reasons to act without directly forcing behavior.
technicalStructure:
  - Flask routes handled match submission and approval, search, rankings, and participation rules.
  - SQLAlchemy models and Alembic migrations managed players, matches, leagues, bets, and daily opponents.
  - HTML, CSS, and JavaScript provided the mobile web flow.
challenges:
  - Rules from rapidly added features accumulated in a large route module and the data models, increasing the scope and cost of verification.
  - Operating real user data required input errors and approval state to remain safely distinguishable.
  - Without automated tests, regression checks were difficult to repeat whenever features changed.
technologies:
  - Flask
  - Python
  - SQLAlchemy
  - Alembic
  - PostgreSQL
  - JavaScript
outcomes:
  - 128 members used the service from Mar through Aug 2025.
  - It structured 785 cumulative match records during the same operating period.
  - The service was handed to the next operator while personalized login features were being explored; a refactored successor still uses its foundation and remains active.
whatIWouldChange:
  - Move match state transitions and participation rules out of routes into domain services from the start.
  - Capture ranking calculations, submission and approval states, and migrations in automated tests.
  - Design operator tools, error observation, and backup and recovery procedures alongside user-facing features.
learnings:
  - Gained experience incorporating feedback from real users into product rules quickly.
  - After rapid implementation, data models and changeable rules need explicit boundaries.
  - Handing off a live service requires explainable boundaries that let the next operator change the structure, not only finished features.
categories:
  - Web
  - Community
featured: false
draft: false
repository: https://github.com/hamoYeong/scutta-2025-1
visibility: public
relatedPosts: []
---
