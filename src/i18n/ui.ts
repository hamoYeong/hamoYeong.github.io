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
			eyebrow: 'iOS Developer',
			name: '김서영',
			alias: 'Hamo',
			title: '사용자의 문제를 구조로 풀고, 함께 이해할 수 있게 만듭니다.',
			intro:
				'사용자의 실제 문제에서 출발해 데이터와 책임의 경계를 설계합니다. 구현하는 데서 멈추지 않고, 팀이 구조를 함께 이해하고 다음 판단을 이어갈 수 있도록 설명하고 기록합니다.',
			aboutAction: 'About에서 더 알아보기',
			projectsAction: '프로젝트 살펴보기',
			careEyebrow: 'What I Care About',
			careTitle: '프로젝트에서 중요하게 보는 것',
			careIntro:
				'사용자를 알아가는 일, 데이터의 흐름, 팀이 함께 이해할 수 있는 설명에 관심이 있습니다.',
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
			featuredTitle: '주요 프로젝트',
			featuredIntro:
				'현재 진행 중인 Academy 챌린지와 SCUTTA 웹 서비스를 먼저 소개합니다.',
			journeyEyebrow: 'Current Journey',
			journeyTitle: 'Apple Developer Academy @ POSTECH 2026',
			journeyDescription:
				'C4 쑥쑥에서 사용자 리서치로 문제의 방향을 바꾸고, 모델을 설계하며 팀원이 같은 구조를 이해하도록 설명하는 경험을 쌓고 있습니다.',
			journeyAction: '쑥쑥 프로젝트 보기',
			learningsEyebrow: 'Selected Learnings',
			learningsTitle: '프로젝트를 하며 배운 것',
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
			contactTitle: '연락하기',
			contactDescription:
				'프로젝트는 GitHub에서 볼 수 있고, 이메일과 LinkedIn으로 연락할 수 있습니다.',
			githubAction: 'GitHub에서 보기',
		},
		about: {
			eyebrow: 'About',
			title: '배움을 구조화하고, 함께 이해하는 과정을 만듭니다.',
			intro:
				'저는 김서영, Hamo입니다. 사용자와 팀원에게 배우며 복잡한 개념과 데이터 흐름을 각자의 이해 단계에 맞게 설명하는 일에 관심이 있습니다. 한 번의 답을 건네기보다 필요할 때 다시 꺼내 쓸 수 있는 배움의 구조를 만들고 싶습니다.',
			downloadKo: '한국어 CV PDF',
			downloadEn: 'English CV PDF',
			openPdf: '새 탭에서 열기',
			downloadPdf: '다운로드',
			experienceTitle: '경력과 활동',
			experienceIntro:
				'학업, 커뮤니티 운영, 연구, 교육과 개발 경험을 시간순으로 정리했습니다.',
			experienceEmpty: '현재 이 언어로 공개된 경험 기록이 없습니다.',
			exploreEyebrow: 'Projects & Posts',
			exploreTitle: '더 살펴보기',
			exploreIntro:
				'프로젝트의 문제, 구현과 회고는 Projects에, 그 과정에서 정리한 생각은 Posts에 담았습니다.',
			exploreAcademyTitle: 'Apple Developer Academy C1-C4',
			exploreAcademyDescription:
				'CBL, 아키텍처, Apple 기술, User Experience를 차례로 탐구한 네 번의 챌린지입니다.',
			exploreScuttaTitle: 'SCUTTA 운영 도구',
			exploreScuttaDescription:
				'Notion 시스템으로 시작해 별도 웹 서비스로 발전시킨 동아리 운영 프로젝트입니다.',
			exploreLearningTitle: '컴퓨팅 사고력과 배움',
			exploreLearningDescription:
				'하모컴 프로토타입과 팀원에게 설명하고 함께 구현하며 배운 내용을 모았습니다.',
			allProjects: '모든 프로젝트',
			allPosts: '모든 글',
			pdfTitle: 'CV PDF',
			pdfIntro: '한국어와 영어 이력서를 PDF로 볼 수 있습니다.',
			skillsTitle: '기술과 관심사',
			skillsIntro:
				'현재 프로젝트에서 사용한 기술과 계속 공부하고 있는 주제입니다.',
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
			contactTitle: 'Contact',
			contactIntro:
				'프로젝트와 협업에 관한 연락은 이메일이나 LinkedIn으로 남겨 주세요.',
			email: '이메일 보내기',
			linkedin: 'LinkedIn 프로필',
			github: 'GitHub 프로필',
		},
		projects: {
			eyebrow: 'Projects',
			title: '프로젝트',
			intro:
				'SCUTTA 운영 도구, Apple Developer Academy C1-C4와 개인 사이드 프로젝트를 모았습니다.',
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
				archived: '중단됨',
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
			repository: '저장소 보기',
			demo: '데모 보기',
		},
		posts: {
			eyebrow: 'Posts',
			title: '기록',
			intro:
				'프로젝트를 진행하며 공부한 구현 방식과 협업에 관한 생각을 씁니다.',
			empty: '현재 이 언어로 공개된 글이 없습니다.',
			readMore: '글 읽기',
			back: 'Posts 목록으로',
			filterLabel: '태그로 글 필터',
			filterAll: '전체',
			postCount: '개의 글',
			publishedAt: '작성일',
			updatedAt: '수정일',
			tags: '태그',
			onThisPage: '이 글의 내용',
			relatedProjects: 'Related Projects',
			relatedProjectsIntro:
				'이 생각이 실제로 적용되거나 다시 질문하게 된 프로젝트입니다.',
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
			eyebrow: 'iOS Developer',
			name: 'Seoyeong Kim',
			alias: 'Hamo',
			title: 'I turn user problems into structures people can understand together.',
			intro:
				'I start with real user problems and define clear boundaries for data and responsibility. I go beyond implementation by explaining and documenting the structure so the team can understand it and carry the next decision forward.',
			aboutAction: 'Learn more in About',
			projectsAction: 'Explore projects',
			careEyebrow: 'What I Care About',
			careTitle: 'What matters in my projects',
			careIntro:
				'I care about learning from users, tracing data flow, and explaining a structure the team can understand together.',
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
			featuredTitle: 'Featured projects',
			featuredIntro:
				'My current Academy challenges and the SCUTTA web service.',
			journeyEyebrow: 'Current Journey',
			journeyTitle: 'Apple Developer Academy @ POSTECH 2026',
			journeyDescription:
				'In C4 Ssukssuk, user research changed the direction of the problem. I designed the model and practiced explaining the structure so the team could understand it together.',
			journeyAction: 'View the Ssukssuk project',
			learningsEyebrow: 'Selected Learnings',
			learningsTitle: 'What I learned from the work',
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
			contactTitle: 'Contact',
			contactDescription:
				'View my projects on GitHub, or reach me by email and LinkedIn.',
			githubAction: 'View GitHub',
		},
		about: {
			eyebrow: 'About',
			title: 'I structure learning and create ways to understand together.',
			intro:
				"I'm Seoyeong Kim, also known as Hamo. I learn from users and teammates, and I care about explaining complex concepts and data flows at each person's current level of understanding. Rather than offering a one-time answer, I want to build learning structures people can return to when they need them.",
			downloadKo: 'Korean CV PDF',
			downloadEn: 'English CV PDF',
			openPdf: 'Open in a new tab',
			downloadPdf: 'Download',
			experienceTitle: 'Experience',
			experienceIntro:
				'Education, community operations, research, teaching, and development experience in chronological order.',
			experienceEmpty: 'No experience entries are available in this language yet.',
			exploreEyebrow: 'Projects & Posts',
			exploreTitle: 'Explore more',
			exploreIntro:
				'Projects contains the problem, implementation, and retrospective for each project. Posts collects the ideas that emerged from the work.',
			exploreAcademyTitle: 'Apple Developer Academy C1-C4',
			exploreAcademyDescription:
				'Four challenges exploring CBL, architecture, Apple technologies, and user experience.',
			exploreScuttaTitle: 'SCUTTA operations tools',
			exploreScuttaDescription:
				'A student-club operations project that began in Notion and grew into a standalone web service.',
			exploreLearningTitle: 'Computational thinking and learning',
			exploreLearningDescription:
				'The HamoCom prototype and notes from explaining concepts and implementing them with a teammate.',
			allProjects: 'All projects',
			allPosts: 'All posts',
			pdfTitle: 'CV PDF',
			pdfIntro: 'View or download my CV in Korean or English.',
			skillsTitle: 'Skills & interests',
			skillsIntro:
				'Technologies used in current projects and subjects I continue to study.',
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
			contactTitle: 'Contact',
			contactIntro:
				'For projects and collaboration, reach me by email or LinkedIn.',
			email: 'Send email',
			linkedin: 'LinkedIn profile',
			github: 'GitHub profile',
		},
		projects: {
			eyebrow: 'Projects',
			title: 'Projects',
			intro:
				'SCUTTA operations tools, Apple Developer Academy C1-C4, and personal side projects.',
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
			repository: 'View repository',
			demo: 'View demo',
		},
		posts: {
			eyebrow: 'Posts',
			title: 'Notes',
			intro:
				'Notes on implementation and collaboration from my projects.',
			empty: 'No posts are available in this language yet.',
			readMore: 'Read post',
			back: 'Back to Posts',
			filterLabel: 'Filter posts by tag',
			filterAll: 'All',
			postCount: ' posts',
			publishedAt: 'Published',
			updatedAt: 'Updated',
			tags: 'Tags',
			onThisPage: 'In this post',
			relatedProjects: 'Related Projects',
			relatedProjectsIntro:
				'Projects where this idea was applied or raised another question.',
		},
	},
} as const;

export const getUi = (locale: Locale) => ui[locale];
