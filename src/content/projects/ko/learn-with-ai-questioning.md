---
slug: learn-with-ai-questioning
locale: ko
translationKey: learn-with-ai-questioning
title: 막힘을 질문으로 — Learn with AI
summary: Academy의 초심자 관찰과 C4의 1:1 학습 지원에서 출발해, 사고 행위 정의·최소 Swift 개념 역산·지식/학습 체계 분리·macOS 프로토타입까지 만든 C5 설계 프로젝트입니다. 실제 학습자 파일럿은 아직 진행하지 않았습니다.
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
overview: Swift 초심자가 자신의 막힘을 감지하고, 아는 것과 모르는 것을 분리하고, 막힌 지점을 언어화해 구체적인 질문으로 바꾸도록 돕는 학습 경험 설계입니다. C5 안에서 교육학 탐구를 커리큘럼·기획·UI/UX·macOS 프로토타입으로 연결했지만, 아직 실제 학습자에게 교육 효과를 검증한 프로그램은 아닙니다.
problem: Academy에서 Swift 기초에 어려움을 겪고 AI에게 구현뿐 아니라 생각까지 맡기는 러너들을 보았습니다. “모르겠어요”, “왜 안 되죠?”, “뭘 해야 하죠?”라는 막힘 안에서 이해한 범위와 막힌 위치·조건·시도를 분리하지 못하면, AI가 곧바로 답을 줄수록 문제를 나누고 결과를 판단하는 사고 과정을 생략하기 쉽습니다.
whyItMattered: 목표는 AI 사용을 줄이는 것이 아닙니다. 생각은 학습자가 하고 구현은 AI가 도울 수 있도록, 자신의 의도와 가정을 설명하고 AI 결과의 누락과 오류를 판단하며 다음 질문을 만드는 주체를 학습자에게 남기는 일입니다.
context: 2026년 6월 하모컴은 구체적인 학습자와 커리큘럼 없이 도구부터 만든 macOS 프로토타입이라 중단했습니다. C4에서는 커리큘럼 없이 한 팀원과 1:1로 로직을 함께 살피며 재미와 한계를 모두 느꼈습니다. 설명할수록 더 기초 개념으로 거슬러 올라갔고, 한 번의 설명이 필요할 때 다시 꺼내 쓸 사고 체계가 되지는 못했습니다. 그래서 C5에서는 “무엇을 많이 알려줄까?”보다 “어떤 사고를 반복하게 할까?”에서 다시 시작했습니다.
user: 프로그래밍 언어를 처음 배우거나 Swift를 처음 배우며, 화면 코드를 따라 수정할 수는 있지만 의도와 데이터 흐름을 자신의 말로 설명하기 어려운 초심자를 우선 대상으로 상정했습니다.
contributions:
  - 인지 부하, 학습 발판과 메타인지 개념을 살피며 답 대신 사고 과정을 꺼내게 하는 경험을 탐구했습니다.
  - C4의 1:1 도움에서 관찰한 막힘과 일회성 설명의 한계를 Before–Diagnosis–Intervention–After–Limitation으로 정리했습니다.
  - 학습할 Swift 문법부터 정하지 않고 학습자가 할 수 있어야 하는 사고 행위를 먼저 정의한 뒤 필요한 최소 Swift 개념을 역산했습니다.
  - 자기설명과 새로운 문제로의 전이를 학습 목표로 두고, 경험을 자신의 지식으로 다시 연결하는 흐름을 설계했습니다.
  - 비선형적인 지식 체계와 선형적인 학습 경험을 구분해 Obsidian에서 구조화하고 구현 가능한 Ticket으로 옮겼습니다.
  - macOS의 Sidebar와 Inspector를 활용해 사용자가 현재 위치와 사고 과정을 확인하는 UI/UX 프로토타입을 구성했습니다.
  - 낯선 분야에서는 AI를 학습의 길잡이로, 구현 영역에서는 생각을 빠르게 확인하는 도구로 사용하고 결과와 의도의 차이를 다시 질문했습니다.
process:
  - Academy 러너 관찰, 하모컴의 중단과 C4의 1:1 도움을 연결해 한 번의 설명이 재사용 가능한 사고 체계가 되지 못하는 문제를 정의했습니다.
  - 교육학에서 인지 부하, 학습 발판과 메타인지가 학습자의 사고를 어떻게 돕는지 질문했습니다.
  - Swift의 언어 친화성, 표준 라이브러리와 언어 특성을 살피며 학습 도구로서의 범위를 검토했습니다.
  - 배울 문법보다 학습자가 수행해야 할 사고 행위를 먼저 정의하고 필요한 최소 Swift 개념을 역산했습니다.
  - 지식 체계와 학습 체계를 분리해 Obsidian에 구조화하고 구현 가능한 Ticket으로 바꿨습니다.
  - macOS의 Sidebar, Inspector와 공통 컴포넌트로 현재 위치와 사고 과정을 확인하는 UI/UX를 구성했습니다.
processDetails:
  - title: 실제 계기
    question: 왜 설명 한 번으로는 부족했지?
    items:
      - Academy 초심자와 AI 사용 관찰
      - 하모컴의 도구 우선 한계
      - C4 1:1 도움과 재사용되지 않는 설명
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
  - Academy에서 Swift 기초에 막힌 러너가 AI에게 사고까지 맡기는 모습을 문제의 출발점으로 삼았습니다.
  - C4의 한 학습자와 로직·데이터 흐름을 함께 살핀 변화를 사례로 정리하되, 한 명에 대한 관찰이라는 한계를 분리했습니다.
  - 인지 부하, 학습 발판과 메타인지 개념을 학습 경험 설계의 출발점으로 검토했습니다.
  - Swift의 언어 친화성, 표준 라이브러리와 언어 특성을 학습 도구의 관점에서 살폈습니다.
learnerCase:
  title: 화면의 변화는 알지만 로직의 다음 단계를 정하지 못했던 학습자
  context: 경영학을 전공하고 PM을 희망하면서도 프로젝트에서 개발을 배우려는 의지가 있던 한 Academy 학습자와 C4에서 함께 작업했습니다. 초반에는 SwiftUI View를 수정하며 시각적 변화에 흥미를 느꼈지만, 오랜만에 개발을 맡자 화면 뒤의 로직과 데이터 흐름을 연결하지 못했습니다.
  before: 화면 코드를 바꾸는 경험은 있었지만, 데이터가 어디에서 오고 누가 책임지는지와 다음에 무엇을 해야 하는지를 자신의 말로 설명하지 못했습니다.
  diagnosis: 시각적 결과와 그 결과를 만드는 데이터·책임 흐름 사이에 학습 공백이 있다고 보았습니다. 이해되지 않는 순간을 스스로 포착하고 설명하는 경험도 부족했습니다.
  intervention:
    - 먼저 화면–계약–예시 상태–실제 저장 구현의 큰 흐름을 함께 그렸습니다.
    - Protocol → PreviewService → Service를 파일 이름이 아니라 각 경계의 책임으로 탐색했습니다.
    - AI에게 바로 구현을 맡기기 전에 원하는 동작과 자신의 의도를 먼저 작성하고, 생성 결과와 비교하게 했습니다.
  after: 이후 자신의 의도를 표현하고, AI 결과가 간과한 부분을 찾아 무엇을 더 명시했어야 하는지 설명할 수 있었습니다.
  limitation: 한 학습자의 한 프로젝트 맥락에서 관찰한 변화입니다. 다른 문제로의 전이와 시간이 지난 뒤의 지속성은 아직 확인하지 못했습니다.
keyDecisions:
  - title: 답보다 질문을 만드는 순서
    description: 막힘 감지에서 아는 것 분리, 모르는 지점 언어화와 구체적인 질문으로 이어지는 사고 순서를 중심 경험으로 두었습니다.
  - title: 사고 행위에서 Swift 개념을 역산
    description: 학습할 문법 목록부터 만들지 않고 학습자가 수행해야 할 사고를 먼저 정의한 뒤 그 사고에 필요한 최소 개념을 연결했습니다.
  - title: 지식 체계와 학습 체계를 분리
    description: 서로 연결된 지식 구조와 학습자가 따라갈 경험의 순서를 같은 것으로 취급하지 않고 분리한 뒤 다시 연결했습니다.
  - title: 자기설명과 전이를 학습 목표로 두기
    description: 정답을 맞히는 데서 끝내지 않고, 학습자가 자신의 가정과 판단을 설명하며 이전 경험을 처음 보는 문제에 연결하는 것을 목표로 두었습니다.
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
  - C4의 한 학습자 사례에서 얻은 가설을 일반적인 교육 효과로 확대하지 않고, 실제 파일럿에서 확인할 질문으로 남겨야 했습니다.
technologies:
  - Swift
  - macOS
  - Obsidian
  - Codex
outcomes:
  - 막힘 감지 → 아는 것과 모르는 것 분리 → 위치·조건·시도 언어화 → 질문 생성 → AI 결과 판단으로 이어지는 사고 행동을 정의했습니다.
  - 사고 행동에서 필요한 최소 Swift 개념을 역산하고, 비선형 지식 체계와 선형 학습 체계를 분리한 커리큘럼 구조를 만들었습니다.
  - 교육학에서 시작한 생각을 Obsidian 지식 구조, 구현 Ticket, macOS Sidebar·Inspector 기반 프로토타입으로 연결했습니다.
  - 질문이 바뀐 과정과 AI를 사용하며 배운 점을 한 장의 최종 Learning Poster로 정리했습니다.
validation:
  statusNote: 이 프로젝트의 “완료”는 Apple Developer Academy C5 챌린지와 포스터·프로토타입 제작을 마쳤다는 뜻입니다. 커리큘럼 전체가 완성됐거나 학습 효과가 검증됐다는 의미는 아닙니다.
  limitations:
    - 실제 Swift 초심자를 대상으로 커리큘럼과 macOS 프로토타입을 파일럿하지 않았습니다.
    - C4의 변화는 한 학습자의 한 프로젝트 맥락에서 관찰했으며 자기설명과 전이의 지속성을 확인하지 못했습니다.
    - 인지 부하·메타인지·자기설명·전이 개념을 설계에 연결했지만 각 발판의 효과를 비교하지 않았습니다.
  nextValidation:
    - 서로 다른 배경의 Swift 초심자와 작은 세션을 진행해 막힘을 언어화하는 지점을 관찰합니다.
    - 학습자가 도움 없이 AI 결과의 전제와 오류를 설명하고 새 문제에 이전 경험을 연결하는지 확인합니다.
    - C5에서 세부 개념에 오래 머문 다른 학습자에게 적용했던 것처럼, 학습자에 따라 큰 chunk와 발판의 크기·설명 순서를 조정합니다.
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
  - thinking-actions-before-content
  - reusable-knowledge-from-explanations
---
