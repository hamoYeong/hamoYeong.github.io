# Portfolio asset guide

웹사이트에서 빠르게 읽을 파생 이미지와 기업별 PDF에 재사용할 curated master를 분리한다. 이 저장소는 public이므로 `portfolio-assets/`도 커밋하는 순간 외부에 공개된다. `public/` 밖이라는 사실은 GitHub Pages 번들에서 빠진다는 의미일 뿐 비공개라는 뜻이 아니다.

## 경로

```text
portfolio-assets/
├── projects/{translation-key}/masters/
├── posts/{translation-key}/masters/
└── experiences/{translation-key}/masters/

public/images/
├── projects/{translation-key}/
├── posts/{translation-key}/
└── experiences/{translation-key}/
```

파일명은 소문자 kebab-case ASCII로 작성한다.

```text
{두 자리 순서}-{section}-{짧은 설명}.{확장자}
```

section은 `cover`, `context`, `research`, `process`, `decision`, `solution`, `outcome`, `learning` 중 하나를 우선 사용한다. master와 web derivative는 확장자가 달라도 같은 핵심 basename을 공유한다.

```text
portfolio-assets/projects/learn-with-ai-questioning/masters/
├── 01-cover-learning-poster.png
└── 02-outcome-learning-poster.pdf

public/images/projects/learn-with-ai-questioning/
└── 01-cover-learning-poster.webp
```

`IMG_1234`, `스크린샷 2026-...`, `최종진짜최종`처럼 의미와 순서가 드러나지 않는 이름은 쓰지 않는다.

## media metadata

asset 정보는 해당 Project/Post/Experience의 frontmatter 한 곳에서 관리한다.

```yaml
media:
  - id: learning-poster
    section: outcome
    type: image
    webSrc: /images/projects/learn-with-ai-questioning/01-cover-learning-poster.webp
    masterPath: portfolio-assets/projects/learn-with-ai-questioning/masters/01-cover-learning-poster.png
    alt: 막힘을 질문으로 Learn with AI 최종 학습 포스터 미리보기
    caption: 기존 콘텐츠에서 사용 중인 설명
    credit: 김서영
    visibility: public
```

- `id`: 한 콘텐츠 안에서 유일한 kebab-case 식별자
- `section`: asset이 뒷받침하는 case study 구간
- `type`: `image`, `pdf`, `video`, `diagram`
- `webSrc`: 일반 페이지가 읽는 public URL. local file이면 실제 파일이 있어야 한다.
- `masterPath`: 저장소 기준 curated master 상대 경로
- `alt`: public image는 필수. 보이는 내용을 설명하되 새 사실을 만들지 않는다.
- `caption`: 기존 설명이 있을 때만 사용한다.
- `credit`: 권리와 작성자를 확인했을 때만 사용한다.
- `visibility`: `public` 또는 `private`. private asset에는 `webSrc`를 쓰지 않는다.

Project의 특정 결과만 별도 근거 수준이나 asset을 가져야 할 때 `portfolioSections`가 canonical field를 가리키게 한다. 문장은 복제하지 않는다.

```yaml
portfolioSections:
  - field: outcomes
    kind: outcome
    evidenceLevels:
      - measured
    assetIds:
      - learning-poster
```

## 공개 전 점검

- PDF에 재사용할 가치가 있고 공개 가능한 고해상도 master만 둔다.
- 카메라 전체 원본을 보관하는 폴더로 사용하지 않는다.
- EXIF와 위치 metadata를 제거한다.
- 원본 인터뷰, 사용자 이름과 계정, 연락처, 팀 내부 문서, private 저장소 화면을 넣지 않는다.
- 얼굴이 보이면 당사자의 공개 동의를 확인한다.
- 공개할 수 없는 자료는 private storage에 두고 저장소에는 공개 가능한 derivative나 placeholder만 연결한다.
- 일반 페이지에서 master를 직접 로드하지 않는다.
- WebP 등 웹 파생본은 용도에 맞게 축소하고 lazy loading과 의미 있는 alt를 사용한다.
- 기존 public URL이 외부에서 쓰인다면 파일을 삭제하지 않고 호환 경로를 남긴다.

## 검증

다음 명령은 local `webSrc`, `masterPath`, image alt, private-summary 노출과 taxonomy를 함께 확인한다.

```sh
npm run content:validate
npm run astro -- sync
npm run build
```

현재 Learn with AI poster는 새 master/web 경로에 복제·변환했지만, 기존 `/projects/learn-with-ai-questioning/learn-with-ai-poster.png`와 PDF URL도 호환성을 위해 유지한다.
