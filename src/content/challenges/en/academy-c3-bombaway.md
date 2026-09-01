---
slug: academy-c3-bombaway
locale: en
translationKey: academy-c3-bombaway
roleLenses:
  - ios-software-development
competencies:
  - data-flow-architecture
  - technical-explanation
  - collaboration-facilitation
evidenceLevels:
  - implemented
  - operated
priority: 40
sequence: C3
title: BombAway
summary: Implemented state and communication flows for a nearby multiplayer iPhone game played through distance and direction without continuous screen attention.
period:
  start: '2026-05'
  end: '2026-06'
  label: May-Jun 2026
team:
  type: team
  description: The team planned and built the project during Apple Developer Academy C3. I worked on the game structure and lifecycle, device communication, and sensor flow.
problem: People in the same space need to play a real-time game together through distance and direction without focusing continuously on their screens.
role:
  - iOS development
  - Game structure and state lifecycle implementation
  - Cross-device sensor and communication flows
whatITried:
  - Separated responsibilities across screens, view models, a game coordinator, and communication and sensor services.
  - Connected nearby device state with distance and direction through MultipeerConnectivity and NearbyInteraction.
  - Implemented start countdown, bomb transfer, and sensor fallback flows.
whatChanged:
  - Expanded from managing one screen's state to keeping state consistent across several devices.
  - At the final booth, we explained MultipeerConnectivity and NearbyInteraction and let visitors experience the app directly.
learnings:
  - A real-time experience needs game rules that absorb latency and differences in sensor quality, not just successful communication.
  - Turning a deep technical exploration into an experience motivated me to explore more Apple technologies.
relatedProject: bombaway
relatedPosts: []
visibility: private-summary
draft: false
---
