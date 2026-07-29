#!/usr/bin/env python3
"""Generate the public, privacy-safe Korean and English CV PDFs."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "cv"
FONT_PATH = Path("/System/Library/Fonts/Supplemental/AppleGothic.ttf")
FONT_NAME = "AppleGothic"
ACCENT = colors.HexColor("#176B5B")
TEXT = colors.HexColor("#1C2523")
MUTED = colors.HexColor("#5F6E69")
LINE = colors.HexColor("#DDE5E2")


CVS = {
    "ko": {
        "filename": "seoyeong-kim-cv-ko.pdf",
        "title": "김서영",
        "headline": "문제를 구조화하고, 함께 이해할 수 있는 제품을 만드는 iOS 개발자",
        "meta": "공개용 CV · 2026년 7월 업데이트",
        "website_label": "최신 Web CV",
        "website": "https://hamoyeong.github.io/ko/about/",
        "github": "https://github.com/hamoYeong",
        "notice": (
            "이 문서는 공개 가능한 정보만 담은 요약본입니다. 최신 경험과 프로젝트 설명은 "
            "Web CV를 기준으로 합니다."
        ),
        "profile_title": "소개",
        "profile": (
            "사용자의 문제를 데이터와 흐름으로 구조화하고, 팀이 같은 판단 기준을 공유할 수 있는 "
            "제품을 만드는 데 관심이 있습니다. 화학공학 연구, 커뮤니티 운영, iOS 팀 프로젝트를 "
            "거치며 근거를 설명하고 다음 사람이 이어갈 수 있는 구조를 중요하게 생각하게 되었습니다."
        ),
        "experience_title": "경험",
        "experiences": [
            (
                "2026-현재",
                "Learner · Apple Developer Academy @ POSTECH",
                "SwiftUI 프로토타입, 근거리 다인 게임, 기록 서비스 프로젝트를 수행하며 "
                "사용자 문제 정의와 데이터 책임, 팀의 공동 이해를 학습하고 있습니다.",
            ),
            (
                "2025.07-2025.11",
                "Flutter 및 Java 학습 커뮤니티",
                "Flutter 프로젝트 스터디에 참여하고 Java 학습 스터디를 모집·운영하며 "
                "우아한테크코스 8기 프리코스 과제를 수행했습니다.",
            ),
            (
                "2022.03-2025.08",
                "운영진 · 서울시립대학교 중앙 탁구 동아리 SCUTTA",
                "훈련부장, 회장, 홍보부장, 총무로 활동하며 훈련·행사·콘텐츠·회계와 "
                "동아리 운영 도구를 연결했습니다.",
            ),
            (
                "2024.09-2025.08",
                "직장체험인턴 · 서울시립대학교 웰니스센터",
                "회원 응대와 교내 실외 테니스장 운영을 지원했습니다.",
            ),
            (
                "2024.06-2024.08",
                "연구인턴 · 서울시립대학교 CCMD 연구실",
                "암모니아 분해 촉매 선행 연구를 조사하고 VASP 시뮬레이션 결과 분석을 지원했습니다.",
            ),
            (
                "2023.03-2023.12",
                "화학 튜터 · 서울시립대학교 화학공학과",
                "새내기 대상 화학및실험 I·II 과목을 튜터링했습니다.",
            ),
        ],
        "education_title": "교육",
        "education": (
            "서울시립대학교 화학공학과 · 2022.03-2026.02 (원본 CV 기재 기준)"
        ),
        "projects_title": "선택 프로젝트",
        "projects": [
            (
                "Academy C1 · 생활 설정 안내 프로토타입",
                "안내 항목을 경로 데이터로 분리하고 NavigationStack 기반 단계별 탐색 흐름을 구현했습니다.",
                "SwiftUI · 데이터 모델링",
            ),
            (
                "Academy C2 · 혜택 탐색 프로토타입",
                "카테고리와 보관 상태를 모델링하고 ViewModel과 SwiftData로 탐색·보관 흐름을 연결했습니다.",
                "SwiftUI · SwiftData",
            ),
            (
                "Academy C3 · BombAway",
                "MultipeerConnectivity와 NearbyInteraction을 활용한 근거리 다인 게임의 "
                "상태·통신·센서 흐름을 구현했습니다.",
                "SwiftUI · MultipeerConnectivity · NearbyInteraction",
            ),
            (
                "Academy C4 · Leaf(작업명)",
                "기록 화면과 저장 계층의 책임을 나누고 Protocol 기반 Service와 PreviewService를 구현했습니다.",
                "SwiftUI · Service architecture",
            ),
            (
                "SCUTTA 경기 기록 웹 서비스",
                "경기 제출·승인, 검색, 순위와 참여 기능을 개발·운영했습니다. "
                "원본 CV 작성 시점 기준 128명, 누적 경기 기록 785건을 지원했습니다.",
                "Flask · PostgreSQL · JavaScript",
            ),
        ],
        "skills_title": "기술과 관심사",
        "skills": [
            "iOS: Swift, SwiftUI, SwiftData",
            "Architecture: 상태 소유권, Service 경계, Preview 가능한 구조",
            "Web & Data: Python, Flask, PostgreSQL, JavaScript",
            "Collaboration: 문제 정의, 데이터 흐름 설명, 운영 기록",
        ],
    },
    "en": {
        "filename": "seoyeong-kim-cv-en.pdf",
        "title": "Seoyeong Kim",
        "headline": "iOS developer structuring problems into products teams can understand together",
        "meta": "Public CV · Updated July 2026",
        "website_label": "Current Web CV",
        "website": "https://hamoyeong.github.io/en/about/",
        "github": "https://github.com/hamoYeong",
        "notice": (
            "This public summary contains only information suitable for publication. "
            "The Web CV is the source of truth for current experience and project details."
        ),
        "profile_title": "Profile",
        "profile": (
            "I turn user problems into explicit data and product flows, and help teams share the "
            "same reasoning. Chemical engineering research, community operations, and iOS team "
            "projects taught me to explain evidence and leave structures others can continue."
        ),
        "experience_title": "Experience",
        "experiences": [
            (
                "2026-Present",
                "Learner · Apple Developer Academy @ POSTECH",
                "Learning user problem framing, data responsibilities, and shared team understanding "
                "through SwiftUI prototypes, a nearby multiplayer game, and a record service.",
            ),
            (
                "Jul-Nov 2025",
                "Flutter and Java learning communities",
                "Joined a Flutter project study, organized a Java study, and completed the "
                "Woowacourse Precourse assignments.",
            ),
            (
                "Mar 2022-Aug 2025",
                "Leadership · SCUTTA, University of Seoul table tennis club",
                "Connected training, events, content, accounting, and operating tools while serving "
                "as training lead, president, publicity lead, and treasurer.",
            ),
            (
                "Sep 2024-Aug 2025",
                "Work-experience intern · University of Seoul Wellness Center",
                "Supported member service and outdoor tennis court operations.",
            ),
            (
                "Jun-Aug 2024",
                "Research intern · CCMD Laboratory, University of Seoul",
                "Reviewed ammonia decomposition catalyst research and supported analysis of VASP "
                "simulation results.",
            ),
            (
                "Mar-Dec 2023",
                "Chemistry tutor · Department of Chemical Engineering",
                "Tutored first-year students in Chemistry and Experiment I and II.",
            ),
        ],
        "education_title": "Education",
        "education": (
            "Chemical Engineering, University of Seoul · Mar 2022-Feb 2026 "
            "(as recorded in the source CV)"
        ),
        "projects_title": "Selected Projects",
        "projects": [
            (
                "Academy C1 · Onboarding guide prototype",
                "Separated guide steps into route data and built staged navigation with NavigationStack.",
                "SwiftUI · Data modeling",
            ),
            (
                "Academy C2 · Benefits explorer prototype",
                "Modeled categories and saved state, then connected discovery and collection flows "
                "with a ViewModel and SwiftData.",
                "SwiftUI · SwiftData",
            ),
            (
                "Academy C3 · BombAway",
                "Implemented state, communication, and sensor flows for a nearby multiplayer game "
                "using MultipeerConnectivity and NearbyInteraction.",
                "SwiftUI · MultipeerConnectivity · NearbyInteraction",
            ),
            (
                "Academy C4 · Leaf (working title)",
                "Separated UI and persistence responsibilities with a protocol-based service and "
                "preview implementation.",
                "SwiftUI · Service architecture",
            ),
            (
                "SCUTTA match record web service",
                "Built and operated submission, approval, search, ranking, and participation flows. "
                "At the source CV date, it supported 128 users and 785 match records.",
                "Flask · PostgreSQL · JavaScript",
            ),
        ],
        "skills_title": "Skills & Interests",
        "skills": [
            "iOS: Swift, SwiftUI, SwiftData",
            "Architecture: state ownership, service boundaries, previewable structures",
            "Web & Data: Python, Flask, PostgreSQL, JavaScript",
            "Collaboration: problem framing, data-flow explanation, operational records",
        ],
    },
}


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName=FONT_NAME,
            fontSize=24,
            leading=30,
            textColor=TEXT,
            alignment=TA_CENTER,
            spaceAfter=3 * mm,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName=FONT_NAME,
            fontSize=10.5,
            leading=16,
            textColor=TEXT,
            alignment=TA_CENTER,
            spaceAfter=2 * mm,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName=FONT_NAME,
            fontSize=8,
            leading=12,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=5 * mm,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName=FONT_NAME,
            fontSize=13,
            leading=18,
            textColor=ACCENT,
            borderColor=LINE,
            borderWidth=0,
            borderPadding=(0, 0, 2 * mm, 0),
            spaceBefore=3 * mm,
            spaceAfter=2.4 * mm,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=8.5,
            leading=13.2,
            textColor=TEXT,
            spaceAfter=2.2 * mm,
        ),
        "item_title": ParagraphStyle(
            "ItemTitle",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=9,
            leading=13,
            textColor=TEXT,
            spaceAfter=0.7 * mm,
        ),
        "item_body": ParagraphStyle(
            "ItemBody",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=8,
            leading=12.2,
            textColor=MUTED,
            leftIndent=18 * mm,
            spaceAfter=2.4 * mm,
        ),
        "project_body": ParagraphStyle(
            "ProjectBody",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=8.2,
            leading=12.5,
            textColor=MUTED,
            leftIndent=3 * mm,
            spaceAfter=0.8 * mm,
        ),
        "tech": ParagraphStyle(
            "Tech",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=7.5,
            leading=11,
            textColor=ACCENT,
            leftIndent=3 * mm,
            spaceAfter=2.8 * mm,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=8.2,
            leading=12.5,
            leftIndent=4 * mm,
            firstLineIndent=-3 * mm,
            textColor=TEXT,
            spaceAfter=1.5 * mm,
        ),
        "notice": ParagraphStyle(
            "Notice",
            parent=base["BodyText"],
            fontName=FONT_NAME,
            fontSize=7.6,
            leading=11.5,
            textColor=MUTED,
            borderColor=LINE,
            borderWidth=0.6,
            borderPadding=2.5 * mm,
            spaceAfter=3 * mm,
        ),
    }


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 14 * mm, A4[0] - doc.rightMargin, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont(FONT_NAME, 7)
    canvas.drawString(doc.leftMargin, 9.5 * mm, "hamoYeong · Public CV")
    canvas.drawRightString(
        A4[0] - doc.rightMargin, 9.5 * mm, f"{canvas.getPageNumber()} / 2"
    )
    canvas.restoreState()


def section(story, styles, title):
    story.append(Paragraph(title, styles["section"]))


def build_cv(language, content):
    output = OUTPUT_DIR / content["filename"]
    doc = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        rightMargin=17 * mm,
        leftMargin=17 * mm,
        topMargin=15 * mm,
        bottomMargin=19 * mm,
        title=f"{content['title']} - Public CV",
        author=content["title"],
        subject="Public professional profile",
        creator="hamoYeong portfolio",
    )
    styles = build_styles()
    story = [
        Paragraph(content["title"], styles["name"]),
        Paragraph(content["headline"], styles["headline"]),
        Paragraph(
            f"{content['meta']}<br/>"
            f"<link href='{content['website']}' color='#176B5B'>{content['website_label']}</link>"
            f" · <link href='{content['github']}' color='#176B5B'>GitHub</link>",
            styles["meta"],
        ),
        Paragraph(content["notice"], styles["notice"]),
    ]

    section(story, styles, content["profile_title"])
    story.append(Paragraph(content["profile"], styles["body"]))

    section(story, styles, content["experience_title"])
    for period, title, description in content["experiences"]:
        story.append(
            KeepTogether(
                [
                    Paragraph(
                        f"<font color='#176B5B'>{period}</font>  <b>{title}</b>",
                        styles["item_title"],
                    ),
                    Paragraph(description, styles["item_body"]),
                ]
            )
        )

    section(story, styles, content["education_title"])
    story.append(Paragraph(content["education"], styles["body"]))
    story.append(PageBreak())

    section(story, styles, content["projects_title"])
    for title, description, technologies in content["projects"]:
        story.append(
            KeepTogether(
                [
                    Paragraph(f"<b>{title}</b>", styles["item_title"]),
                    Paragraph(description, styles["project_body"]),
                    Paragraph(technologies, styles["tech"]),
                ]
            )
        )

    section(story, styles, content["skills_title"])
    for item in content["skills"]:
        story.append(Paragraph(f"• {item}", styles["bullet"]))

    story.append(Spacer(1, 4 * mm))
    story.append(
        Paragraph(
            (
                f"<link href='{content['website']}' color='#176B5B'>{content['website']}</link><br/>"
                f"<link href='{content['github']}' color='#176B5B'>{content['github']}</link>"
            ),
            styles["notice"],
        )
    )
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    return output


def main():
    if not FONT_PATH.exists():
        raise FileNotFoundError(f"Required font not found: {FONT_PATH}")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont(FONT_NAME, str(FONT_PATH)))
    for language, content in CVS.items():
        output = build_cv(language, content)
        print(output.relative_to(ROOT))


if __name__ == "__main__":
    main()
