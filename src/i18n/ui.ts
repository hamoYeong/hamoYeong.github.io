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
			title: '사람이 배우고 참여하기 쉬운 환경을 만듭니다.',
			intro:
				'저는 김서영, Hamo입니다. iOS와 Swift를 공부하며 복잡한 내용을 더 쉽게 이해하고 함께 성장할 수 있는 방법을 기록합니다.',
			principlesTitle: '일하는 기준',
			principles: [
				'기능보다 먼저 사용자가 실제로 겪는 문제를 정의합니다.',
				'결과뿐 아니라 선택의 근거와 배운 점을 기록합니다.',
				'혼자 빠르게 끝내는 것보다 함께 지속할 수 있는 구조를 고민합니다.',
			],
			experienceTitle: 'Experience',
			experienceEmpty: '현재 이 언어로 공개된 경험 기록이 없습니다.',
		},
		projects: {
			eyebrow: 'Projects',
			title: '문제를 해결하며 만든 것들',
			intro: '프로젝트마다 문제, 기여, 결과와 다음 선택에 남은 배움을 기록합니다.',
			empty: '현재 이 언어로 공개된 프로젝트가 없습니다.',
			readMore: '프로젝트 자세히 보기',
			back: 'Projects 목록으로',
			period: '기간',
			role: '역할',
			team: '협업',
			problem: '문제',
			contributions: '기여',
			technologies: '사용 도구',
			outcomes: '결과',
			learnings: '배운 점',
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
			title: 'I create environments where people can learn and take part.',
			intro:
				"I'm Seoyeong Kim, also known as Hamo. I study iOS and Swift, and document ways to make complex ideas easier to understand and learn together.",
			principlesTitle: 'How I work',
			principles: [
				'Define the real user problem before choosing features.',
				'Document the reasoning and learning behind each result.',
				'Build structures that help a team continue, not just finish quickly alone.',
			],
			experienceTitle: 'Experience',
			experienceEmpty: 'No experience entries are available in this language yet.',
		},
		projects: {
			eyebrow: 'Projects',
			title: 'Things I built while solving problems',
			intro:
				'Each project records the problem, my contribution, the outcome, and what shaped my next decision.',
			empty: 'No projects are available in this language yet.',
			readMore: 'View project details',
			back: 'Back to Projects',
			period: 'Period',
			role: 'Role',
			team: 'Collaboration',
			problem: 'Problem',
			contributions: 'Contributions',
			technologies: 'Tools',
			outcomes: 'Outcomes',
			learnings: 'Learnings',
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
