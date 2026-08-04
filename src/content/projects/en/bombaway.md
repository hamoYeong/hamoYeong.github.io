---
slug: bombaway
locale: en
translationKey: bombaway
title: BombAway
summary: A nearby multiplayer iPhone game that asks people in the same space to focus on one another's distance and direction instead of continuously watching a screen.
period:
  start: '2026-05'
  end: '2026-06'
  label: May-Jun 2026
status: completed
role:
  - iOS development
  - Game structure and state lifecycle implementation
  - Cross-device sensor and communication flows
team:
  type: team
  description: The team planned and built this project during Apple Developer Academy C3. I worked on the game structure and lifecycle, device communication, and sensor flow.
overview: A game that connects room creation, role assignment, countdowns, pursuit, and bomb transfers across several iPhones through distance, direction, and spatial audio.
problem: Several nearby devices needed to share a coherent game state while actual play remained resilient to connection latency and differences in distance and direction quality.
whyItMattered: Successful communication alone does not complete a real-time nearby experience. Game rules and feedback must keep the next action understandable when sensor data becomes uncertain.
context: The team built this project during Apple Developer Academy C3 from May through June 2026. On the final day, we ran a booth where visitors learned about MultipeerConnectivity and NearbyInteraction and played the app themselves.
user: Booth visitors played a short multiplayer game by moving through the same physical space without watching the screen continuously.
contributions:
  - Established an app structure that separated screens, view models, GameCoordinator, and communication and sensor services.
  - Implemented the state lifecycle from room creation and joining through role assignment, game start and end, results, and the next round.
  - Connected MultipeerConnectivity game state with NearbyInteraction distance and direction to implement bomb transfer and sensor fallback flows.
  - Connected PHASE spatial audio to game state and distance information.
process:
  - Consolidated state distributed across screens into explicit phases owned by GameCoordinator.
  - Separated MultipeerConnectivity connections and game messages from the NearbyInteraction session in dedicated services.
  - Aligned countdown and transfer conditions, then added fallback feedback for unavailable direction and connected spatial audio.
research:
  - At the final C3 booth, we explained the underlying technologies and let visitors experience the app across multiple devices.
keyDecisions:
  - title: Centralize progression in a coordinator
    description: GameCoordinator manages roles, countdown, play, and result transitions so multiple devices can interpret the same phase instead of relying on screen-local state.
  - title: Separate game state from ranging
    description: MultipeerConnectivity carries game messages, while NearbyInteraction supplies momentary distance and direction so the two kinds of data retain distinct responsibilities.
  - title: Absorb reduced sensor quality into the rules
    description: Fallback feedback based on available signals keeps play moving when direction is unavailable.
technicalStructure:
  - AppRouter and view models own navigation and presentation state, while GameCoordinator manages the game-phase lifecycle.
  - A MultipeerConnectivity service handles nearby connections and game messages.
  - A NearbyInteraction service measures UWB distance and direction and passes only the required values into the game flow.
  - PHASE spatial audio provides role- and distance-aware feedback.
challenges:
  - Countdown, roles, and results needed consistent meaning even when devices connected in a different order or received messages at different times.
  - NearbyInteraction direction could become unstable or unavailable depending on device orientation and the environment, so raw sensor values could not serve directly as game rules.
  - The booth experience introduced the technology and app; it was not designed as a quantitative usability study.
technologies:
  - Swift
  - SwiftUI
  - MultipeerConnectivity
  - NearbyInteraction
  - PHASE
outcomes:
  - Implemented room creation and joining, role assignment, synchronized countdown, bomb transfer, results, and the next round.
  - Connected distance and direction, sensor fallback, and spatial audio into a working game flow.
  - Ran a final booth where visitors could learn about the two Apple technologies and play the game themselves.
whatIWouldChange:
  - Capture game-state transitions and message ordering in automated tests, including latency, duplicates, and reconnection.
  - Build an on-device test matrix across supported devices and spaces before tuning feedback rules for differing sensor quality.
learnings:
  - A real-time multiplayer experience needs shared game phases and message contracts before screen-level state.
  - Sensor-based features must translate uncertainty and missing values, not only ideal readings, into rules people can understand.
  - Going deeply into one technology and turning it into an experience motivated me to explore and apply more Apple technologies.
categories:
  - iOS
  - Multiplayer
  - Spatial Computing
featured: true
draft: false
visibility: private-summary
relatedPosts:
  - ai-context-before-code
---
