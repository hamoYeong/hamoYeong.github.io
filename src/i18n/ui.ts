import type { Locale } from './config';

export const ui = {
	ko: {
		site: {
			defaultTitle: '김서영 | Hamo',
			defaultDescription: '김서영(Seoyeong Kim), Hamo의 개인 홈페이지입니다.',
			footer: '배우고 기록하는 Hamo의 개인 홈페이지',
		},
		nav: {
			label: '주요 메뉴',
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			posts: 'Posts',
		},
		language: {
			label: '언어 선택',
		},
		home: {
			eyebrow: 'Personal Homepage',
			name: '김서영',
			alias: 'Hamo',
			title: 'Swift를 배우고 기록하는 Hamo입니다.',
			intro:
				'더 쉽게, 더 깊게 읽는 Swift 기록을 통해 배움의 행복을 전달하고 있습니다.',
			aboutAction: 'About에서 더 알아보기',
			projectsAction: 'Projects 보기',
			postsAction: 'Posts 읽기',
			interestsTitle: '관심 분야',
			interests: 'iOS, Swift, 교육, 배움을 중심으로 공부하고 기록합니다.',
			guideTitle: '어디로 이동하면 좋을까요?',
			guides: [
				{
					title: 'About',
					description: '처음 방문했다면 김서영과 Hamo를 먼저 알아보세요.',
					action: 'About 페이지로 이동',
					path: 'about',
				},
				{
					title: 'Projects',
					description: '문제를 발견하고 해결한 과정과 배운 점을 정리합니다.',
					action: 'Projects 페이지로 이동',
					path: 'projects',
				},
				{
					title: 'Posts',
					description: 'Swift와 제품 개발을 배우며 정리한 글을 모았습니다.',
					action: 'Posts 페이지로 이동',
					path: 'posts',
				},
			],
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
		},
		nav: {
			label: 'Main navigation',
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			posts: 'Posts',
		},
		language: {
			label: 'Choose language',
		},
		home: {
			eyebrow: 'Personal Homepage',
			name: 'Seoyeong Kim',
			alias: 'Hamo',
			title: "I'm Hamo, learning Swift and sharing the journey.",
			intro:
				'I share the joy of learning through approachable, in-depth notes on Swift.',
			aboutAction: 'Learn more about me',
			projectsAction: 'View projects',
			postsAction: 'Read posts',
			interestsTitle: 'Interests',
			interests: 'I study and write about iOS, Swift, education, and learning.',
			guideTitle: 'Where would you like to go?',
			guides: [
				{
					title: 'About',
					description: 'Start here to learn more about Seoyeong and Hamo.',
					action: 'Go to About',
					path: 'about',
				},
				{
					title: 'Projects',
					description: 'Explore the problems I found, the decisions I made, and what I learned.',
					action: 'Go to Projects',
					path: 'projects',
				},
				{
					title: 'Posts',
					description: 'Read notes from learning Swift and building products.',
					action: 'Go to Posts',
					path: 'posts',
				},
			],
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
