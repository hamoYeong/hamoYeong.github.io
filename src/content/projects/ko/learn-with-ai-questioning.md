---
slug: learn-with-ai-questioning
locale: ko
translationKey: learn-with-ai-questioning
title: 막힘을 질문으로 — Learn with AI
summary: Swift 초심자가 막연한 “모르겠어요”에서 멈추지 않고 자신의 막힘을 구체적인 질문으로 바꾸도록 돕는 학습 경험을 설계했습니다. 그 과정에서 AI를 사용해 저의 모호한 생각 역시 질문과 구조로 바꾸는 법을 배웠습니다.
period:
  start: '2026-08'
  end: '2026-08'
  label: '2026.08'
status: completed
role:
  - 교육학적 문제 탐구
  - 커리큘럼 및 학습 경험 설계
  - macOS UI/UX와 프로토타입 구현
  - AI를 활용한 학습 및 구현 확인
team:
  type: personal
  description: Apple Developer Academy @ POSTECH C5 Learn with AI에서 개인 학습 프로젝트로 진행했습니다.
overview: Swift 초심자가 자신의 막힘을 감지하고, 아는 것과 모르는 것을 분리하고, 막힌 지점을 언어화해 구체적인 질문으로 바꾸도록 돕는 컴퓨팅 사고력 학습 지원 경험입니다. 완성된 서비스보다 교육학적 문제를 커리큘럼·기획·UI/UX·프로토타입으로 연결해 본 학습 과정에 가깝습니다.
problem: 프로그래밍 초심자는 “모르겠어요”, “왜 안 되죠?”, “뭘 해야 하죠?”처럼 막힘을 느끼면서도 어디까지 이해했고 어느 위치·조건·시도에서 막혔는지 분리하지 못할 수 있습니다. AI가 곧바로 답을 줄수록 이 사고 과정을 생략하기도 쉽습니다.
whyItMattered: 중요한 것은 AI 없이 모든 것을 해결하는 능력보다, AI의 답을 보더라도 자신의 문제와 맞는지 판단하고 다음에 필요한 질문을 스스로 만들 수 있는 능력이라고 보았습니다.
context: 2026년 6월의 하모컴은 학습자와 커리큘럼을 충분히 정의하지 않고 도구부터 만든 macOS 프로토타입이었습니다. 그 한계를 확인한 뒤 C5에서는 교육학을 다시 공부하고, Swift가 사고를 연습하는 도구가 될 수 있는지 질문하며 별개의 학습 프로젝트로 다시 시작했습니다.
user: 프로그래밍 언어를 처음 배우거나 Swift를 처음 배우는 초심자입니다. Swift 문법 자체를 외우는 앱이 아니라 Swift를 사고 연습의 도구로 사용하는 경험을 상정했습니다.
contributions:
  - 인지 부하, 학습 발판과 메타인지 개념을 살피며 답 대신 사고 과정을 꺼내게 하는 경험을 탐구했습니다.
  - 학습할 Swift 문법부터 정하지 않고 학습자가 할 수 있어야 하는 사고 행위를 먼저 정의한 뒤 필요한 최소 Swift 개념을 역산했습니다.
  - 비선형적인 지식 체계와 선형적인 학습 경험을 구분해 Obsidian에서 구조화하고 구현 가능한 Ticket으로 옮겼습니다.
  - macOS의 Sidebar와 Inspector를 활용해 사용자가 현재 위치와 사고 과정을 확인하는 UI/UX 프로토타입을 구성했습니다.
  - 낯선 분야에서는 AI를 학습의 길잡이로, 구현 영역에서는 생각을 빠르게 확인하는 도구로 사용하고 결과와 의도의 차이를 다시 질문했습니다.
process:
  - 교육학에서 인지 부하, 학습 발판과 메타인지가 학습자의 사고를 어떻게 돕는지 질문했습니다.
  - Swift의 언어 친화성, 표준 라이브러리와 언어 특성을 살피며 학습 도구로서의 범위를 검토했습니다.
  - 배울 문법보다 학습자가 수행해야 할 사고 행위를 먼저 정의하고 필요한 최소 Swift 개념을 역산했습니다.
  - 지식 체계와 학습 체계를 분리해 Obsidian에 구조화하고 구현 가능한 Ticket으로 바꿨습니다.
  - macOS의 Sidebar, Inspector와 공통 컴포넌트로 현재 위치와 사고 과정을 확인하는 UI/UX를 구성했습니다.
processDetails:
  - title: 교육학
    question: 어떻게 가르쳐야 하지?
    items:
      - 인지 부하
      - 학습 발판
      - 메타인지
  - title: Swift
    question: 무엇까지 알아야 하지?
    items:
      - 언어 친화성
      - 표준 라이브러리
      - 언어 자체의 특성
  - title: 커리큘럼
    question: 무엇을 하게 해야 하지?
    items:
      - 사고 행위 먼저 정의
      - 필요한 최소 개념 역산
  - title: 기획
    question: 어떤 구조로 경험하게 하지?
    items:
      - 지식 체계와 학습 체계 분리
      - Obsidian 구조화
      - 구현 가능한 Ticket
  - title: UX
    question: 어떻게 확인하게 하지?
    items:
      - macOS 환경
      - Sidebar와 Inspector
      - 공통 컴포넌트
processSummary: 한 질문의 답이 작업을 끝내는 것이 아니라, 다음 질문을 더 정확하게 만들었습니다.
research:
  - 인지 부하, 학습 발판과 메타인지 개념을 학습 경험 설계의 출발점으로 검토했습니다.
  - Swift의 언어 친화성, 표준 라이브러리와 언어 특성을 학습 도구의 관점에서 살폈습니다.
keyDecisions:
  - title: 답보다 질문을 만드는 순서
    description: 막힘 감지에서 아는 것 분리, 모르는 지점 언어화와 구체적인 질문으로 이어지는 사고 순서를 중심 경험으로 두었습니다.
  - title: 사고 행위에서 Swift 개념을 역산
    description: 학습할 문법 목록부터 만들지 않고 학습자가 수행해야 할 사고를 먼저 정의한 뒤 그 사고에 필요한 최소 개념을 연결했습니다.
  - title: 지식 체계와 학습 체계를 분리
    description: 서로 연결된 지식 구조와 학습자가 따라갈 경험의 순서를 같은 것으로 취급하지 않고 분리한 뒤 다시 연결했습니다.
questionShift:
  summary: “무엇을 가르치지?”에서 “어떤 사고를 하게 하지?”로 질문이 바뀌었습니다.
  before:
    statement: Swift를 도구로 활용해 컴퓨팅 사고력을 키우는 기초 커리큘럼을 만들자.
    note: 목표는 있었지만 학습자의 사고가 아직 보이지 않았습니다.
  after:
    statement: 배울 문법이 아니라 학습자가 할 수 있어야 하는 사고 행위를 먼저 정의하자.
    note: 그 사고를 수행하는 데 필요한 최소 Swift 개념을 역산했습니다.
  secondary:
    - label: Question 02
      before: Swift를 쓸 거야
      after: 왜 Swift여야 하지?
      note: 이미 사용할 환경이라는 이유로 학습 도구로서의 적합성을 당연하게 두지 않았습니다.
    - label: Question 03
      before: 지식을 어떻게 정리하지?
      after: 서로 다른 지식 체계를 어떻게 분리하고 연결하지?
      note: 생각을 구조와 Ticket으로 바꾸고 구현까지 내려갈 연결 방식을 질문했습니다.
technicalStructure:
  - 학습 경험은 막힘 감지, 아는 것 분리, 모르는 지점 언어화와 구체적인 질문 생성의 순서로 이어집니다.
  - 서로 연결된 지식 체계와 순서가 있는 학습 체계를 분리한 뒤 각 학습 단계에서 필요한 지식을 연결했습니다.
  - Obsidian에서 정리한 생각을 구현 가능한 Ticket으로 바꾸고 macOS Sidebar와 Inspector 구조로 확인했습니다.
challenges:
  - 교육학처럼 지식과 경험이 적은 분야에서 무엇을 이해했고 무엇을 더 확인해야 하는지 스스로 판단해야 했습니다.
  - Swift를 이미 사용하는 환경이라는 사실과 학습 도구로서 Swift가 적합하다는 판단을 구분해야 했습니다.
  - 비선형적인 지식 구조를 학습자가 따라갈 수 있는 선형적인 경험으로 바꾸면서도 둘을 같은 체계로 섞지 않아야 했습니다.
technologies:
  - Swift
  - macOS
  - Obsidian
  - Codex
outcomes:
  - Swift 초심자의 막힘을 질문으로 바꾸는 컴퓨팅 사고력 학습 경험을 설계했습니다.
  - 교육학에서 시작한 생각을 커리큘럼, 기획, UI/UX와 macOS 프로토타입으로 연결했습니다.
  - 질문이 바뀐 과정과 AI를 사용하며 배운 점을 한 장의 최종 Learning Poster로 정리했습니다.
whatIWouldChange:
  - Swift 초심자가 실제로 어느 지점에서 자신의 막힘을 설명하기 어려워하는지 관찰하고 질문 흐름을 검증하겠습니다.
  - 각 발판이 답을 유도하는지, 학습자가 다음 질문을 직접 만들게 하는지 작은 학습 세션으로 확인하겠습니다.
  - 지식 체계와 학습 체계의 연결 규칙을 더 명시해 다음 단계의 커리큘럼을 확장하겠습니다.
learnings:
  - 지식과 경험이 적은 분야에서는 AI에게 학습 경로의 안내를 맡길 수 있지만, 무엇을 이해했는지 판단하고 원본 자료로 다시 확인하는 책임은 저에게 있습니다.
  - 구현 영역에서는 생각과 의도를 먼저 정의하고 AI가 만든 결과에서 의도가 반영되지 않은 부분을 찾아 질문을 수정하는 반복이 중요했습니다.
  - 같은 AI를 사용해도 질문을 한 번 더 수정하고 근거를 다시 확인한 순간 결과의 질이 달라졌습니다. 막힘을 질문으로 바꾸는 앱을 만들며 저 역시 막힘을 질문으로 바꾸는 법을 배웠습니다.
categories:
  - macOS
  - Education
  - Computational Thinking
  - Learning
featured: true
draft: false
coverImage:
  src: /projects/learn-with-ai-questioning/learn-with-ai-poster.png
  alt: 막힘을 질문으로 Learn with AI 최종 학습 포스터 미리보기
artifacts:
  - title: 막힘을 질문으로 — Learning Poster
    description: 앱의 학습 흐름, 제가 실제로 배운 경로, 질문의 Before와 After, AI와 함께 하며 배운 점을 한 장에 정리한 C5 최종 결과물입니다.
    href: /projects/learn-with-ai-questioning/learn-with-ai-poster.pdf
    previewImage:
      src: /projects/learn-with-ai-questioning/learn-with-ai-poster.png
      alt: C5 Learn with AI 막힘을 질문으로 학습 포스터 전체
visibility: public
relatedPosts:
  - ai-context-before-code
---
