---
slug: scutta-web-service
locale: en
translationKey: scutta-web-service
title: SCUTTA Match Record Web Service
summary: Expanded lessons from the Notion operation into a dedicated web service for match records and participation rules, addressing mobile access and calculation limits.
period:
  start: '2024-12'
  end: '2025-08'
  label: Dec 2024-Aug 2025
status: archived
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
context: I developed and deployed the service independently, while collaborating with the SCUTTA leadership team on operation and feedback.
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
  - Feedback from live operation informed feature and rule changes; original messages and user data remain private.
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
  - The public repository has no automated tests, making regression checks difficult to repeat systematically.
technologies:
  - Flask
  - Python
  - SQLAlchemy
  - Alembic
  - PostgreSQL
  - JavaScript
outcomes:
  - 128 people had used the service as of the source CV publication date.
  - 785 cumulative match records had been structured as data as of the source CV publication date.
  - The public repository verifies implementation history through March 2025; the source CV records operation through August 2025, after which the service became inactive.
whatIWouldChange:
  - Move match state transitions and participation rules out of routes into domain services from the start.
  - Capture ranking calculations, submission and approval states, and migrations in automated tests.
  - Design operator tools, error observation, and backup and recovery procedures alongside user-facing features.
learnings:
  - Gained experience incorporating feedback from real users into product rules quickly.
  - After rapid implementation, data models and changeable rules need explicit boundaries.
categories:
  - Web
  - Community
featured: false
draft: false
repository: https://github.com/hamoYeong/scutta-2025-1
visibility: public
relatedPosts: []
---
