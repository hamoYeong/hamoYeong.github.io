import type { Locale } from './config';

export const ui = {
	ko: {
		site: {
			defaultTitle: '김서영 | Hamo',
			defaultDescription: '김서영(Seoyeong Kim), Hamo의 개인 홈페이지입니다.',
			footer: '배우고 기록하는 Hamo의 개인 홈페이지',
			skipLink: '본문으로 건너뛰기',
		},
		nav: {
			label: '주요 메뉴',
			menu: '메뉴',
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			posts: 'Posts',
		},
		language: {
			label: '언어 선택',
		},
		home: {
			eyebrow: 'iOS Developer · Problem Solver',
			name: '김서영',
			alias: 'Hamo',
			title: '복잡한 문제를 구조로 풀고, 이해할 수 있는 언어로 연결합니다.',
			intro:
				'사용자의 실제 문제에서 시작해 데이터와 책임의 경계를 설계하는 iOS 개발자입니다. 구현을 끝내는 데서 멈추지 않고, 팀이 함께 이해하고 다음 판단을 내릴 수 있는 구조를 만듭니다.',
			aboutAction: 'About에서 더 알아보기',
			projectsAction: '프로젝트 살펴보기',
			careEyebrow: 'What I Care About',
			careTitle: '기능보다 먼저 생각하는 것',
			careIntro:
				'코드를 쓰기 전에 문제와 데이터, 함께 일하는 사람의 이해를 먼저 확인합니다.',
			carePoints: [
				{
					title: 'Problem Framing',
					description: '사용자가 바라는 변화를 기능 이름보다 먼저 정의합니다.',
				},
				{
					title: 'Architecture',
					description: '화면보다 데이터의 원본과 각 계층의 책임을 먼저 나눕니다.',
				},
				{
					title: 'Shared Understanding',
					description: '완성된 답을 전달하기보다 팀이 판단 기준을 함께 이해하도록 돕습니다.',
				},
				{
					title: 'Computational Thinking',
					description: 'AI는 구현을 돕게 하되 문제를 나누고 결과를 판단하는 일은 직접 합니다.',
				},
			],
			featuredEyebrow: 'Featured Projects',
			featuredTitle: '문제와 사람 사이에서 만든 것',
			featuredIntro:
				'공개 근거가 확인된 프로젝트 중 서로 다른 문제 해결 방식을 보여주는 세 가지를 골랐습니다.',
			journeyEyebrow: 'Current Journey',
			journeyTitle: 'Apple Developer Academy @ POSTECH 2026',
			journeyDescription:
				'iOS 제품을 만들며 화면보다 데이터 흐름과 책임의 경계를 먼저 설명하는 연습을 하고 있습니다. C4에서는 Record 서비스의 계약과 Preview·실제 구현을 나누고, 팀이 같은 구조를 이해하도록 흐름을 함께 정리했습니다.',
			journeyAction: '성장 과정 보기',
			learningsEyebrow: 'Selected Learnings',
			learningsTitle: '경험 뒤에 남은 판단 기준',
			learnings: [
				{
					title: '구조는 설명할 수 있어야 합니다.',
					description:
						'좋은 아키텍처는 계층이 많은 구조가 아니라, 데이터가 어디에서 오고 누가 바꿀 수 있는지 팀이 함께 설명할 수 있는 구조였습니다.',
				},
				{
					title: 'AI의 답보다 전제를 먼저 봅니다.',
					description:
						'AI가 만든 구현을 평가하려면 문제, 실패 조건과 데이터의 책임을 먼저 제 언어로 정해야 했습니다.',
				},
				{
					title: '규칙은 사람의 자율성을 남겨야 합니다.',
					description:
						'SCUTTA 운영 도구에서는 상대를 강제하기보다 새로운 사람과 경기할 이유를 설계했습니다.',
				},
			],
			postsEyebrow: 'Latest Posts',
			postsTitle: '최근에 정리한 생각',
			postsIntro: '구현 방법뿐 아니라 선택의 이유와 다음 판단에 남은 것을 기록합니다.',
			postsAction: '모든 글 보기',
			contactEyebrow: 'Contact',
			contactTitle: '함께 풀고 싶은 문제가 있다면',
			contactDescription:
				'공개 프로젝트와 현재 학습 과정은 GitHub에서 확인할 수 있습니다.',
			githubAction: 'GitHub에서 보기',
		},
		about: {
			eyebrow: 'About',
			title: '배움의 구조를 만들고, 함께 이해하는 과정을 돕습니다.',
			intro:
				'저는 김서영, Hamo입니다. 화학공학과 커뮤니티 운영 경험에서 출발해 iOS 개발을 배우고 있습니다. 사용자의 실제 문제를 데이터와 책임으로 나누고, 팀이 그 구조를 자기 언어로 이해하도록 돕는 일에 관심이 있습니다.',
			principlesTitle: '일하는 기준',
			principles: [
				'기능보다 먼저 사용자가 실제로 겪는 문제를 정의합니다.',
				'결과뿐 아니라 선택의 근거와 배운 점을 기록합니다.',
				'완성된 답을 전달하기보다 함께 판단할 수 있는 구조를 설명합니다.',
			],
			sourceNoticeTitle: '웹 정보가 최신입니다',
			sourceNotice:
				'다운로드용 CV는 공개 가능한 정보만 담은 요약본입니다. Academy 경험과 진행 중인 프로젝트는 이 웹 페이지의 내용을 우선해 주세요.',
			cvEyebrow: 'Web CV',
			cvTitle: '경험과 역할의 흐름',
			cvIntro:
				'직함만 나열하지 않고 어떤 환경에서 무엇을 맡았으며 다음 선택에 무엇이 남았는지 정리했습니다.',
			downloadKo: '한국어 CV PDF',
			downloadEn: 'English CV PDF',
			openPdf: '새 탭에서 열기',
			downloadPdf: '다운로드',
			experienceTitle: 'Experience Timeline',
			experienceIntro:
				'최근의 iOS 학습부터 커뮤니티 운영, 연구와 교육 경험까지 시간의 흐름으로 볼 수 있습니다.',
			experienceEmpty: '현재 이 언어로 공개된 경험 기록이 없습니다.',
			projectsTitle: 'CV Projects',
			projectsIntro:
				'원본 CV에 수록된 SCUTTA 운영 도구를 현재 공개 기준에 맞춰 연결합니다.',
			academyEyebrow: 'Apple Developer Academy',
			academyTitle: 'C1에서 C4까지, 달라진 질문',
			academyIntro:
				'프로젝트명보다 각 챌린지에서 문제를 바라보는 방식과 팀에 기여하는 방식이 어떻게 달라졌는지 기록합니다.',
			challenge: {
				context: 'Challenge Context',
				team: 'Team',
				problem: 'Problem',
				role: 'My Role',
				tried: 'What I Tried',
				changed: 'What Changed',
				learning: 'What I Learned',
				related: 'Related',
				repository: '공개 저장소 보기',
			},
			skillsTitle: 'Skills & Interests',
			skillsIntro:
				'도구 이름보다 현재 프로젝트에서 실제로 사용하거나 탐구하는 영역을 중심으로 정리했습니다.',
			skillGroups: [
				{
					title: 'iOS & Apple Platforms',
					items: ['Swift', 'SwiftUI', 'SwiftData', 'App Intents', 'WidgetKit'],
				},
				{
					title: 'Architecture & Data',
					items: ['데이터 모델링', 'Service 계약', '상태 흐름', '실패 fallback'],
				},
				{
					title: 'Learning & Collaboration',
					items: ['컴퓨팅 사고력', '교육', '문서화', 'AI 보조 문제 해결'],
				},
			],
			contactTitle: 'Public Contact',
			contactIntro:
				'개인 전화번호와 주소는 공개하지 않습니다. 공개 프로젝트와 활동은 GitHub에서 확인할 수 있습니다.',
			github: 'GitHub 프로필',
		},
		projects: {
			eyebrow: 'Projects',
			title: '문제를 해결하며 만든 것들',
			intro:
				'기술 목록보다 문제를 정의하고, 역할을 나누고, 구조를 선택한 이유와 다음에 바꿀 점을 case study로 기록합니다.',
			empty: '현재 이 언어로 공개된 프로젝트가 없습니다.',
			readMore: '프로젝트 자세히 보기',
			back: 'Projects 목록으로',
			filterLabel: '프로젝트 분야 필터',
			filterAll: '전체',
			filterCount: '개의 프로젝트',
			filters: [
				{ value: 'ios', label: 'iOS' },
				{ value: 'web', label: 'Web' },
				{ value: 'education', label: 'Education' },
				{ value: 'community', label: 'Community' },
			],
			period: '기간',
			status: '상태',
			statusLabels: {
				concept: '구상 중',
				'in-progress': '진행 중',
				completed: '완료',
				archived: '운영 종료',
			},
			role: '역할',
			team: '협업',
			overview: 'Overview',
			problem: 'Problem',
			whyItMattered: 'Why It Mattered',
			context: 'Context',
			user: 'User',
			research: 'Research',
			myRole: 'My Role',
			contributions: 'My Contribution',
			process: 'Process',
			keyDecisions: 'Key Decisions',
			technicalStructure: 'Technical Structure',
			technologies: 'Technology',
			challenges: 'Challenges',
			outcomes: 'Outcome',
			whatIWouldChange: 'What I Would Change',
			learnings: 'Learning',
			relatedPosts: 'Related Posts',
			contents: 'Case study 목차',
			privateSummaryTitle: '공개 범위를 제한한 프로젝트',
			privateSummary:
				'팀의 private 저장소, 내부 코드와 문서, 팀원 정보는 공개하지 않습니다. 아래 내용은 공개 가능한 프로젝트 목적과 본인의 기여만 구분해 정리했습니다.',
			repository: '저장소 보기',
			demo: '데모 보기',
		},
		posts: {
			eyebrow: 'Posts',
			title: '배우며 정리한 글',
			intro: 'Swift, 제품 개발, 협업 과정에서 얻은 생각을 제 언어로 정리합니다.',
			empty: '현재 이 언어로 공개된 글이 없습니다.',
			readMore: '글 읽기',
			back: 'Posts 목록으로',
			publishedAt: '작성일',
			updatedAt: '수정일',
			tags: '태그',
		},
	},
	en: {
		site: {
			defaultTitle: 'Seoyeong Kim | Hamo',
			defaultDescription:
				'The personal website of Seoyeong Kim, also known as Hamo.',
			footer: "Hamo's personal space for learning and sharing",
			skipLink: 'Skip to content',
		},
		nav: {
			label: 'Main navigation',
			menu: 'Menu',
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			posts: 'Posts',
		},
		language: {
			label: 'Choose language',
		},
		home: {
			eyebrow: 'iOS Developer · Problem Solver',
			name: 'Seoyeong Kim',
			alias: 'Hamo',
			title: 'I turn complex problems into structures people can understand.',
			intro:
				"I'm an iOS developer who starts with real user problems and defines the boundaries of data and responsibility. I aim beyond finishing an implementation: I build structures a team can understand and use for its next decision.",
			aboutAction: 'Learn more in About',
			projectsAction: 'Explore projects',
			careEyebrow: 'What I Care About',
			careTitle: 'What comes before features',
			careIntro:
				'Before writing code, I clarify the problem, the data, and what the people working together need to understand.',
			carePoints: [
				{
					title: 'Problem Framing',
					description: 'Define the change the user needs before naming a feature.',
				},
				{
					title: 'Architecture',
					description: 'Separate sources of truth and layer responsibilities before polishing screens.',
				},
				{
					title: 'Shared Understanding',
					description: 'Help a team understand the criteria behind a decision instead of handing over a finished answer.',
				},
				{
					title: 'Computational Thinking',
					description: 'Use AI to support implementation while retaining responsibility for decomposition and judgment.',
				},
			],
			featuredEyebrow: 'Featured Projects',
			featuredTitle: 'Built between problems and people',
			featuredIntro:
				'Three projects with verifiable public evidence, selected to show different approaches to problem solving.',
			journeyEyebrow: 'Current Journey',
			journeyTitle: 'Apple Developer Academy @ POSTECH 2026',
			journeyDescription:
				"I'm building iOS products while practicing how to explain data flow and responsibility before screens. During C4, I separated the Record service contract from preview and production implementations, then worked with the team to build a shared understanding of the flow.",
			journeyAction: 'View my journey',
			learningsEyebrow: 'Selected Learnings',
			learningsTitle: 'Principles that remained after the work',
			learnings: [
				{
					title: 'A structure should be explainable.',
					description:
						'Good architecture was not the one with more layers, but the one where the team could explain where data came from and who could change it.',
				},
				{
					title: 'Question the premise before the AI answer.',
					description:
						'Evaluating AI-generated work required me to define the problem, failure conditions, and data ownership in my own words first.',
				},
				{
					title: 'Rules should preserve agency.',
					description:
						'In the SCUTTA operations tool, I designed reasons to meet new opponents instead of forcing a match.',
				},
			],
			postsEyebrow: 'Latest Posts',
			postsTitle: 'Recent notes',
			postsIntro:
				'I document not only implementation methods, but why a choice was made and what remains for the next decision.',
			postsAction: 'View all posts',
			contactEyebrow: 'Contact',
			contactTitle: "Let's talk about a problem worth solving",
			contactDescription:
				'My public projects and current learning journey are available on GitHub.',
			githubAction: 'View GitHub',
		},
		about: {
			eyebrow: 'About',
			title: 'I build structures for learning and help teams understand them together.',
			intro:
				"I'm Seoyeong Kim, also known as Hamo. My path to iOS development began with chemical engineering and community operations. I care about turning real user problems into data and responsibilities, then helping a team understand that structure in its own language.",
			principlesTitle: 'How I work',
			principles: [
				'Define the real user problem before choosing features.',
				'Document the reasoning and learning behind each result.',
				'Explain structures that support shared judgment instead of handing over finished answers.',
			],
			sourceNoticeTitle: 'The web version is current',
			sourceNotice:
				'The downloadable CV is a public-safe summary. For Academy work and projects in progress, please treat this web page as the current source.',
			cvEyebrow: 'Web CV',
			cvTitle: 'A timeline of roles and learning',
			cvIntro:
				'Rather than listing titles alone, this timeline records the environment, my responsibility, and what influenced the next decision.',
			downloadKo: 'Korean CV PDF',
			downloadEn: 'English CV PDF',
			openPdf: 'Open in a new tab',
			downloadPdf: 'Download',
			experienceTitle: 'Experience Timeline',
			experienceIntro:
				'Follow the path from current iOS learning through community operations, research, and education.',
			experienceEmpty: 'No experience entries are available in this language yet.',
			projectsTitle: 'CV Projects',
			projectsIntro:
				'SCUTTA operations tools from the source CV, connected under the current public disclosure policy.',
			academyEyebrow: 'Apple Developer Academy',
			academyTitle: 'How my questions changed from C1 to C4',
			academyIntro:
				'The focus is not only what each challenge built, but how my approach to problems and contribution to a team changed.',
			challenge: {
				context: 'Challenge Context',
				team: 'Team',
				problem: 'Problem',
				role: 'My Role',
				tried: 'What I Tried',
				changed: 'What Changed',
				learning: 'What I Learned',
				related: 'Related',
				repository: 'View public repository',
			},
			skillsTitle: 'Skills & Interests',
			skillsIntro:
				'Focused on areas I currently use or explore in real projects, rather than a long list of tool names.',
			skillGroups: [
				{
					title: 'iOS & Apple Platforms',
					items: ['Swift', 'SwiftUI', 'SwiftData', 'App Intents', 'WidgetKit'],
				},
				{
					title: 'Architecture & Data',
					items: ['Data modeling', 'Service contracts', 'State flow', 'Failure fallbacks'],
				},
				{
					title: 'Learning & Collaboration',
					items: ['Computational thinking', 'Education', 'Documentation', 'AI-assisted problem solving'],
				},
			],
			contactTitle: 'Public Contact',
			contactIntro:
				'Personal phone numbers and addresses remain private. Public projects and activity are available on GitHub.',
			github: 'GitHub profile',
		},
		projects: {
			eyebrow: 'Projects',
			title: 'Things I built while solving problems',
			intro:
				'These case studies focus on how I framed each problem, separated responsibilities, chose a structure, and decided what to change next—not just the technology list.',
			empty: 'No projects are available in this language yet.',
			readMore: 'View project details',
			back: 'Back to Projects',
			filterLabel: 'Filter projects by field',
			filterAll: 'All',
			filterCount: ' projects',
			filters: [
				{ value: 'ios', label: 'iOS' },
				{ value: 'web', label: 'Web' },
				{ value: 'education', label: 'Education' },
				{ value: 'community', label: 'Community' },
			],
			period: 'Period',
			status: 'Status',
			statusLabels: {
				concept: 'Concept',
				'in-progress': 'In progress',
				completed: 'Completed',
				archived: 'Archived',
			},
			role: 'Role',
			team: 'Collaboration',
			overview: 'Overview',
			problem: 'Problem',
			whyItMattered: 'Why It Mattered',
			context: 'Context',
			user: 'User',
			research: 'Research',
			myRole: 'My Role',
			contributions: 'My Contribution',
			process: 'Process',
			keyDecisions: 'Key Decisions',
			technicalStructure: 'Technical Structure',
			technologies: 'Technology',
			challenges: 'Challenges',
			outcomes: 'Outcome',
			whatIWouldChange: 'What I Would Change',
			learnings: 'Learning',
			relatedPosts: 'Related Posts',
			contents: 'Case study contents',
			privateSummaryTitle: 'Public scope is limited',
			privateSummary:
				'The private team repository, internal code and documents, and teammate information are not published. This case study separates the publishable project context from my individual contribution.',
			repository: 'View repository',
			demo: 'View demo',
		},
		posts: {
			eyebrow: 'Posts',
			title: 'Notes from learning',
			intro:
				'I put ideas from Swift, product development, and collaboration into my own words.',
			empty: 'No posts are available in this language yet.',
			readMore: 'Read post',
			back: 'Back to Posts',
			publishedAt: 'Published',
			updatedAt: 'Updated',
			tags: 'Tags',
		},
	},
} as const;

export const getUi = (locale: Locale) => ui[locale];
