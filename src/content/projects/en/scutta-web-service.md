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
problem: Manual calculations, mobile access, and synchronization delays in Notion created a need to operate match records and participation features in one service.
contributions:
  - Implemented HTML, CSS, and JavaScript interfaces with a Flask server.
  - Modeled players, matches, leagues, bets, and daily opponents in PostgreSQL.
  - Implemented match submission and approval, search, rankings, leagues, bets, and achievement flows.
technologies:
  - Flask
  - Python
  - PostgreSQL
  - JavaScript
outcomes:
  - 128 people had used the service as of the source CV publication date.
  - 785 cumulative match records had been structured as data as of the source CV publication date.
  - The service was deployed and operated, but is no longer active.
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

## From Notion to a web service

The record system grew from Notion into a dedicated web service. This case separates my development work from collaborative operations and does not expose real player data, match records, or the retired deployment URL.

## Current status

The service is no longer active. User and record counts are labeled only as figures from the source CV publication date.
