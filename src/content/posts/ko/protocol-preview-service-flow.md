---
slug: protocol-preview-service-flow
locale: ko
translationKey: protocol-preview-service-flow
title: Protocol → PreviewService → Service로 이해하는 데이터 흐름
description: 구조의 이름을 외우기보다 계약, 예시 상태와 실제 저장 구현을 차례로 만들며 계층의 책임을 확인한 과정을 정리합니다.
publishedAt: 2026-07-29
tags:
  - SwiftUI
  - Architecture
  - Data Flow
draft: false
featured: false
relatedProjects:
  - leaf
---

SwiftUI 프로젝트에서 `Protocol`, `PreviewService`, 실제 `Service`를 나누는 구조는 자주 볼 수 있습니다. 하지만 파일을 세 개로 나누는 것만으로 책임이 분명해지는 것은 아닙니다. 각 계층이 왜 필요한지 설명할 수 없다면 추상화는 이름만 늘릴 수 있습니다.

저는 팀 프로젝트의 기록 흐름을 구현하며 순서를 바꿔 생각했습니다. 실제 저장 코드를 먼저 만든 뒤 Protocol을 추출하지 않고, 화면이 어떤 행동을 요청해야 하는지 계약으로 적고, Preview에서 그 계약이 충분한지 확인한 다음 실제 저장 구현으로 이어갔습니다.

> 이 글의 코드는 데이터 흐름을 설명하기 위해 단순화한 예시이며 private 팀 저장소의 원본 코드를 옮긴 것이 아닙니다.

## Protocol은 교체를 위한 장치보다 질문에 가깝다

Protocol을 도입하는 이유를 “나중에 구현을 교체하기 위해서”라고만 말하면 현재 화면이 무엇을 필요로 하는지는 드러나지 않습니다. 먼저 화면의 질문을 적어야 합니다.

- 기록 목록을 요청할 수 있어야 한다.
- 사용자가 입력한 기록을 추가할 수 있어야 한다.
- 저장이 완료됐는지 실패했는지 알 수 있어야 한다.

이 질문을 계약으로 옮긴 단순한 예시는 다음과 같습니다.

```swift
protocol RecordService {
    func records() async throws -> [Record]
    func add(_ draft: RecordDraft) async throws -> Record
}
```

여기에는 SwiftData, 네트워크나 파일 이름이 없습니다. 화면이 원하는 행동과 결과만 있습니다. 이 상태에서 메서드가 계속 늘어난다면 화면이 정말 그 행동을 모두 알아야 하는지 다시 물을 수 있습니다.

Protocol은 미래의 교체 가능성보다 현재 경계를 검토하는 도구가 됐습니다.

## PreviewService는 가짜 데이터가 아니라 실행 가능한 전제다

Preview를 단순히 보기 좋은 샘플 화면으로만 사용하면 정상 상태 하나만 만들기 쉽습니다. 하지만 PreviewService가 실제 계약을 구현하면 화면이 기대하는 여러 전제를 빠르게 확인할 수 있습니다.

```swift
struct PreviewRecordService: RecordService {
    var result: Result<[Record], Error>

    func records() async throws -> [Record] {
        try result.get()
    }

    func add(_ draft: RecordDraft) async throws -> Record {
        Record.preview(from: draft)
    }
}
```

이 예시는 목록이 있는 상태뿐 아니라 빈 상태와 오류 상태를 만들 수 있습니다. 실제 저장소를 준비하지 않아도 다음 질문을 화면에서 확인할 수 있습니다.

- 기록이 하나도 없을 때 무엇을 안내하는가?
- 로딩 중에 사용자의 입력을 막아야 하는가?
- 저장이 실패했을 때 입력 내용은 남아 있는가?
- 긴 제목이나 여러 활동이 있을 때 레이아웃은 유지되는가?

PreviewService는 실제 구현 전에 화면과 계약 사이의 빈틈을 찾는 작은 실험 환경입니다.

## 실제 Service에서 기술의 책임을 닫는다

계약과 Preview에서 흐름을 확인한 뒤 실제 Service가 SwiftData 같은 저장 기술을 사용합니다.

```swift
struct SwiftDataRecordService: RecordService {
    let store: RecordStore

    func records() async throws -> [Record] {
        try await store.fetchAll()
    }

    func add(_ draft: RecordDraft) async throws -> Record {
        let record = Record(draft: draft)
        try await store.insert(record)
        return record
    }
}
```

중요한 점은 실제 Service가 있다는 사실보다 저장 기술의 지식이 이 경계 안에 머무는지입니다. 화면이 `ModelContext`나 fetch 조건을 직접 알기 시작하면 Protocol이 있어도 책임은 다시 화면으로 새어 나갑니다.

반대로 모든 로직을 Service에 넣으면 서비스가 너무 커집니다. 작물의 성장 단계처럼 저장과 무관한 규칙은 도메인 모델이나 별도 정책이 담당할 수 있습니다. Service는 화면의 모든 문제를 해결하는 곳이 아니라 데이터 요청과 저장의 경계를 닫는 곳이어야 합니다.

## 순서가 팀의 대화를 바꿨다

`Protocol → PreviewService → Service` 순서는 구현 기법이면서 대화의 순서이기도 했습니다.

1. Protocol에서 화면과 데이터 계층 사이의 약속을 정합니다.
2. PreviewService에서 그 약속으로 필요한 상태를 표현할 수 있는지 봅니다.
3. 실제 Service에서 저장 기술과 실패 처리를 연결합니다.

이 순서로 작업하면 “MV인가 MVVM인가?”라는 질문보다 “현재 상태의 원본은 어디인가?”, “이 실패를 누가 해석하는가?”를 먼저 이야기할 수 있습니다.

구조 이름에 대한 토론도 더 구체적으로 바뀝니다. ViewModel이 필요한지는 관습이 아니라 화면 상태 변환의 복잡도와 테스트할 책임이 있는지로 판단할 수 있습니다.

## 이 구조가 항상 필요한 것은 아니다

작은 화면에 읽기 전용 정적 데이터만 있다면 세 계층은 과할 수 있습니다. 구현이 하나뿐이고 실패 상태도 없으며 화면과 데이터가 함께 바뀌는 실험 단계라면 직접 연결이 더 이해하기 쉬울 수 있습니다.

저는 다음 조건이 있을 때 경계를 나누는 편입니다.

- 실제 저장 없이 여러 화면 상태를 자주 검토해야 한다.
- 저장 기술이 바뀌거나 실패할 수 있다.
- 여러 화면이 같은 데이터 행동을 사용한다.
- 팀이 화면과 저장 책임을 따로 논의해야 한다.

핵심은 Protocol의 존재가 아니라 각 경계를 한 문장으로 설명할 수 있는지입니다.

## 구조가 남겨야 하는 것

좋은 구조는 파일 수가 많거나 패턴 이름이 정확한 구조가 아니었습니다. 화면을 만드는 사람과 저장을 구현하는 사람이 같은 데이터 흐름을 설명할 수 있고, 실패가 생겼을 때 어느 경계를 확인할지 아는 구조였습니다.

Protocol은 약속을 드러내고, PreviewService는 그 약속을 실행 가능한 상태로 검토하며, Service는 실제 기술의 책임을 닫습니다. 이 흐름을 이해하면 새로운 계층을 추가할 때도 “어디에 둘까?”보다 “누가 이 사실을 알아야 하는가?”를 먼저 물을 수 있습니다.
