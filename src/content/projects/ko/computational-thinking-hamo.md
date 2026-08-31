---
slug: computational-thinking-hamo
locale: ko
translationKey: computational-thinking-hamo
title: 하모컴
summary: 학습자와 커리큘럼 없이 코드 리딩 도구부터 만든 한계를 확인해 중단한 macOS 프로토타입이며, 이 실패가 교육학과 사고 행동부터 다시 설계한 Learn with AI의 출발점이 됐습니다.
period:
  start: '2026-06'
  end: '2026-06'
  label: '2026.06'
status: archived
role:
  - 수업 구조 설계
  - 제품 구조 설계
  - macOS 앱 구현
team:
  type: personal
  description: 컴퓨팅 사고력에 관한 소규모 세션을 상상하며 개인으로 설계하고 구현했습니다.
overview: 코드를 직접 편집하기보다 코드를 읽고 질문하며 두 구조를 비교하는 학습 순서를 탐색한 macOS 앱 프로토타입입니다.
problem: 코딩 초보자가 AI가 만든 완성 코드만 따라가면 데이터와 흐름을 스스로 설명하고 결과를 판단하는 연습을 놓칠 수 있다는 가설에서 시작했습니다.
whyItMattered: 다만 명확한 학습자 필요와 커리큘럼 없이 도구부터 만들면 기능이 실제 배움으로 이어지는지 판단하기 어렵습니다.
context: 컴퓨팅 사고력 세션을 들은 뒤 나도 소규모 세션을 열어보고 싶어 시작했지만, 구체적인 니즈 없이 앱을 먼저 만들고 있다는 점을 깨닫고 중단했습니다.
user: 학습자와 수업 맥락을 구체적으로 검증하지 않은 초기 가설 단계였습니다.
contributions:
  - 읽기 전용 TextKit 코드 뷰어에 줄 번호, 현재 파일 검색과 줄·범위 코멘트를 구현했습니다.
  - 코멘트와 댓글, 단계별 unlock 상태를 SwiftData에 저장하고 두 코드 구조의 분할 비교 흐름을 구현했습니다.
  - MultipeerConnectivity로 같은 수업 세션의 코멘트와 댓글을 공유하고 다시 맞추는 흐름을 구현했습니다.
process:
  - 학습자가 코드를 읽으며 질문을 남기는 순서를 먼저 정의했습니다.
  - 수업 코드 로더, 읽기 전용 워크스페이스와 코멘트 저장을 만든 뒤 단일 코드 읽기에서 두 구조 비교로 이어지는 흐름을 구현했습니다.
  - 로컬 저장과 근거리 공유의 책임을 분리하고 기능별 수동 점검 문서로 전체 흐름을 확인했습니다.
research: []
keyDecisions:
  - title: 편집보다 읽기와 대화에 집중
    description: 첫 버전에서 코드 편집을 제외하고 검색, 범위 코멘트와 구조 비교에 학습 흐름을 집중했습니다.
  - title: SwiftData를 원본으로 유지
    description: 근거리 통신은 코멘트를 공유하고 다시 맞추는 수단으로만 사용해 영속 데이터의 책임을 분명히 했습니다.
  - title: 차이를 단계적으로 공개
    description: 완성된 해설을 바로 보여주지 않고 두 코드 구조의 차이를 순서대로 발견하도록 구성했습니다.
technicalStructure:
  - LessonCodeLoader가 수업용 코드 파일을 읽고 CodeSearchController가 현재 파일 안의 검색을 담당합니다.
  - AppKit TextKit 기반 읽기 전용 코드 뷰어를 SwiftUI 워크스페이스에 연결했습니다.
  - SwiftData가 코멘트, 댓글과 unlock 상태의 source of truth를 담당합니다.
  - ClassroomSessionController와 CommentSyncService가 같은 수업 세션의 공유와 재동기화를 담당합니다.
challenges:
  - SwiftUI 화면 안에서 TextKit의 텍스트 범위와 줄 번호를 일관되게 연결해야 했습니다.
  - 로컬 네트워크 권한과 연결 상태가 달라도 저장된 코멘트를 잃지 않아야 했습니다.
  - 여러 기기의 변경은 `updatedAt` 기반 last-write-wins로 맞췄지만 동시 수정의 의미 충돌은 남아 있습니다.
technologies:
  - SwiftUI
  - AppKit TextKit
  - SwiftData
  - MultipeerConnectivity
  - MVVM
outcomes:
  - 코드 로딩, 검색, 코멘트, 구조 비교, 근거리 공유 흐름을 작동 가능한 앱으로 구현했습니다.
  - 현재 저장소에는 자동화 테스트 target이 없어 기능별 수동 점검 문서로 검증 범위를 기록했습니다.
  - 실제 수업에는 사용하지 않았고, 명확한 니즈와 커리큘럼 없이 만든 프로토타입이라는 판단에서 개발을 멈췄습니다.
whatIWouldChange:
  - 다음에는 앱보다 먼저 어떤 학습자가 어떤 사고 과정을 반복해서 연습해야 하는지 정의하고 작은 세션으로 검증하겠습니다.
  - 컴퓨팅 사고력 멘토와 대화하며 커리큘럼의 역할을 정리한 뒤 새로운 프로젝트의 범위를 잡겠습니다.
learnings:
  - 교육 도구는 기능 수보다 학습자가 어떤 순서로 생각하고 필요할 때 다시 꺼낼 수 있는 체계를 만드는지가 중요합니다.
  - C4에서 팀원과 1:1로 함께 구현하며 일회성 설명의 재미와 한계를 모두 느꼈고, 명확한 커리큘럼을 만들고 싶은 동기가 다시 생겼습니다.
  - AI가 만든 답을 평가하려면 먼저 데이터와 책임을 자신의 언어로 설명할 수 있어야 합니다.
categories:
  - macOS
  - Education
  - Computational Thinking
featured: false
draft: false
repository: https://github.com/hamoYeong/ComputationalThinkingHamo
visibility: public
relatedPosts:
  - ai-context-before-code
  - thinking-together-before-code
  - reusable-knowledge-from-explanations
---
