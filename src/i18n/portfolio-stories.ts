import type { Locale } from './config';
import type { Competency, RoleLens } from './taxonomy';

export type PortfolioStoryKey =
	| 'learning-experience'
	| 'educational-software'
	| 'community-operations'
	| 'ios-architecture';

export type StoryDirection = 'earlier' | 'later' | 'same' | 'reflection';

export interface PortfolioStoryStep {
	blockId: string;
	bridge?: {
		direction: StoryDirection;
		text: string;
	};
}

export interface PortfolioStory {
	key: PortfolioStoryKey;
	title: string;
	description: string;
	orderReason: string;
	roleLenses: RoleLens[];
	competencies: Competency[];
	steps: PortfolioStoryStep[];
}

const stories: Record<Locale, PortfolioStory[]> = {
	ko: [
		{
			key: 'learning-experience',
			title: '초심자의 막힘을 질문으로 바꾸는 학습 경험',
			description: '한 학습자에게서 관찰한 막힘이 도구 우선 실패를 다시 보게 했고, 사고 행동 중심 커리큘럼으로 이어진 흐름입니다.',
			orderReason: '최종 설계부터 설명하지 않고, 실제 관찰 → 이전 실패의 원인 → 개선한 설계 → 현재 근거와 한계 순서로 읽습니다.',
			roleLenses: ['curriculum-design', 'learning-experience', 'facilitation-mentoring'],
			competencies: ['beginner-observation', 'learning-goal-design', 'scaffold-design', 'self-explanation-transfer'],
			steps: [
				{ blockId: 'project-leaf-context' },
				{
					blockId: 'project-leaf-outcome',
					bridge: {
						direction: 'same',
						text: 'C4에서 문제를 관찰하는 데서 멈추지 않고, 화면 뒤의 데이터 책임을 함께 그린 뒤 학습자가 AI 결과의 누락을 직접 설명하는지 살폈습니다.',
					},
				},
				{
					blockId: 'project-computational-thinking-hamo-summary',
					bridge: {
						direction: 'earlier',
						text: '이 변화를 재사용 가능한 학습으로 만들기 어려웠던 이유를 보기 위해 C4보다 앞선 하모컴으로 거슬러 갑니다. 당시에는 학습자와 커리큘럼보다 코드 리딩 도구 구현에 먼저 초점을 뒀습니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-problem',
					bridge: {
						direction: 'later',
						text: '하모컴의 도구 우선 실패와 C4의 일회성 설명 한계를 개선하기 위해, C5에서는 기능보다 초심자가 막힘을 어떻게 나누고 표현하는지를 먼저 문제로 정의했습니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-decision',
					bridge: {
						direction: 'same',
						text: '문제를 구체화한 다음에는 가르칠 Swift 문법 목록이 아니라 학습자가 반복해야 할 사고 행동과 발판의 순서를 먼저 결정했습니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-outcome',
					bridge: {
						direction: 'same',
						text: '결정이 선언에 머물지 않았는지 확인하기 위해 커리큘럼 구조, 구현 Ticket, macOS 프로토타입과 Learning Poster로 연결된 결과를 봅니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-limitation',
					bridge: {
						direction: 'reflection',
						text: 'C5 산출물을 완성한 사실과 학습 효과를 검증한 사실은 다릅니다. 마지막에는 현재 주장할 수 없는 범위를 분리해 다음 파일럿의 출발점으로 남깁니다.',
					},
				},
			],
		},
		{
			key: 'educational-software',
			title: '학습 흐름을 소프트웨어로 검증하는 과정',
			description: '작동하는 도구를 먼저 만든 실패에서 시작해, 학습 목표와 지식 구조를 먼저 정한 뒤 다시 프로토타입으로 내려간 과정입니다.',
			orderReason: '성공한 결과만 나열하지 않고 첫 구현 → 중단 판단 → 설계 기준의 변화 → 새 구현 → 검증되지 않은 부분 순서로 읽습니다.',
			roleLenses: ['educational-software', 'curriculum-design', 'learning-experience'],
			competencies: ['educational-prototyping', 'data-flow-architecture', 'learning-goal-design', 'documentation-systemization'],
			steps: [
				{ blockId: 'project-computational-thinking-hamo-summary' },
				{
					blockId: 'project-computational-thinking-hamo-technical-evidence',
					bridge: {
						direction: 'same',
						text: '하모컴을 중단한 이유는 구현하지 못했기 때문이 아닙니다. 실제로 만든 코드 리딩·코멘트·근거리 공유 구조를 먼저 확인해야 무엇이 빠졌는지 분명해집니다.',
					},
				},
				{
					blockId: 'project-computational-thinking-hamo-next-step',
					bridge: {
						direction: 'reflection',
						text: '구현 범위를 확인한 뒤 부족했던 것은 기능이 아니라 구체적인 학습자, 커리큘럼과 평가 기준이었다고 판단했습니다. 다음 시도에서 먼저 바꿔야 할 조건입니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-decision',
					bridge: {
						direction: 'later',
						text: '하모컴의 한계를 개선한 C5에서는 화면 기능보다 사고 행동과 필요한 최소 Swift 개념을 먼저 정하고, 지식 체계와 학습 체계를 분리했습니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-technical-evidence',
					bridge: {
						direction: 'same',
						text: '설계 기준을 세운 뒤에야 Obsidian의 지식 구조와 Ticket을 macOS Sidebar·Inspector의 구현 구조로 옮겼습니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-outcome',
					bridge: {
						direction: 'same',
						text: '이번 구현이 어떤 산출물까지 도달했는지, 그리고 처음의 도구 우선 접근과 무엇이 달라졌는지를 결과에서 확인합니다.',
					},
				},
				{
					blockId: 'project-learn-with-ai-questioning-limitation',
					bridge: {
						direction: 'reflection',
						text: '학습 목표에서 출발한 프로토타입이라도 실제 초심자 파일럿 전에는 교육 효과를 말할 수 없습니다. 제품 완성과 학습 검증을 구분합니다.',
					},
				},
			],
		},
		{
			key: 'community-operations',
			title: '사람의 참여를 운영 규칙과 도구로 이어간 경험',
			description: '초심자 훈련과 100명+ 커뮤니티 운영에서 시작해 Notion 시스템, 자동화, 별도 웹 서비스로 개선한 흐름입니다.',
			orderReason: '도구보다 먼저 사람을 관찰한 역할을 보고, 운영 문제 → 첫 시스템 → 실제 운영 결과 → 다음 서비스로 확장한 이유 순서로 읽습니다.',
			roleLenses: ['community-program-operations', 'facilitation-mentoring'],
			competencies: ['beginner-observation', 'community-operations', 'collaboration-facilitation', 'documentation-systemization'],
			steps: [
				{ blockId: 'experience-scutta-leadership-summary' },
				{
					blockId: 'experience-scutta-leadership-action',
					bridge: {
						direction: 'same',
						text: '직함만으로는 운영 방식을 설명할 수 없습니다. 초심자 훈련, 100명+ 구성원 운영, 홍보와 회계에서 실제로 맡은 행동을 먼저 확인합니다.',
					},
				},
				{
					blockId: 'project-scutta-notion-system-problem',
					bridge: {
						direction: 'same',
						text: '운영 중에는 경기 기록 자체보다 서로 다른 구성원이 만날 이유가 부족한 문제가 반복됐습니다. 이 문제를 첫 번째 도구의 설계 기준으로 삼았습니다.',
					},
				},
				{
					blockId: 'project-scutta-notion-system-outcome',
					bridge: {
						direction: 'same',
						text: '강제 규칙 대신 새로운 상대와 경기할 이유를 Notion·Shortcuts·API 흐름으로 만든 뒤, 실제 운영에서 무엇이 가능했고 무엇이 불편했는지 봅니다.',
					},
				},
				{
					blockId: 'project-scutta-web-service-problem',
					bridge: {
						direction: 'later',
						text: 'Notion 시스템은 참여를 촉진했지만 기록 승인과 운영 규칙을 한곳에서 다루기 어려웠습니다. 그 제약을 개선하기 위해 별도 웹 서비스로 확장했습니다.',
					},
				},
				{
					blockId: 'project-scutta-web-service-technical-evidence',
					bridge: {
						direction: 'same',
						text: '운영 문제를 Flask·SQLAlchemy 기반의 데이터와 승인 흐름으로 어떻게 옮겼는지 구현 구조에서 확인합니다.',
					},
				},
				{
					blockId: 'project-scutta-web-service-outcome',
					bridge: {
						direction: 'reflection',
						text: '마지막에는 서비스를 만들었다는 사실보다 실제 운영에서 확인한 결과와 남은 제약을 분리해 봅니다.',
					},
				},
			],
		},
		{
			key: 'ios-architecture',
			title: '문제의 의미를 데이터 경계와 실패 조건으로 옮기는 개발',
			description: '개인 기록 앱, 근거리 다인 게임, 팀 프로젝트를 통해 서로 다른 문제를 데이터 책임과 fallback으로 구조화한 근거입니다.',
			orderReason: '최신 기술을 시간순으로 나열하지 않고 데이터 의미 → 실패 조건 → 여러 기기의 상태 → 팀이 공유하는 계약 → 사용자 리서치의 결과 순서로 읽습니다.',
			roleLenses: ['ios-software-development', 'problem-framing-research'],
			competencies: ['data-flow-architecture', 'user-research', 'technical-explanation', 'collaboration-facilitation'],
			steps: [
				{ blockId: 'project-dayflow-problem' },
				{
					blockId: 'project-dayflow-technical-evidence',
					bridge: {
						direction: 'same',
						text: '계획과 실제 기록의 의미를 섞지 않기 위해 원본 데이터, 외부 연동과 확장 화면의 책임을 분리하고 동기화 실패에도 로컬 흐름이 유지되게 했습니다.',
					},
				},
				{
					blockId: 'project-bombaway-problem',
					bridge: {
						direction: 'earlier',
						text: '이 실패 대응 기준이 어디서 단련됐는지 보기 위해 더 이른 BombAway로 이동합니다. 당시에는 여러 기기가 지연과 센서 품질 차이 속에서도 하나의 게임 상태를 유지하는 데 집중했습니다.',
					},
				},
				{
					blockId: 'project-bombaway-technical-evidence',
					bridge: {
						direction: 'same',
						text: '근거리 통신, 거리·방향 센서와 공간 음향이 각각 어떤 책임을 갖는지 기술 구조로 이어집니다.',
					},
				},
				{
					blockId: 'project-leaf-context',
					bridge: {
						direction: 'later',
						text: '다음 C4에서는 기술 조건부터 정하지 않았습니다. 시청 담당자 인터뷰와 47명 설문으로 문제를 텃밭 관리에서 치유 경험으로 바꾼 뒤 구조를 설계했습니다.',
					},
				},
				{
					blockId: 'project-leaf-technical-evidence',
					bridge: {
						direction: 'same',
						text: '바뀐 사용자 문제를 여러 기록 유형과 성장 흐름으로 옮기면서, 화면과 저장 구현 사이에 Protocol·PreviewService·Service 계약을 두었습니다.',
					},
				},
				{
					blockId: 'project-leaf-outcome',
					bridge: {
						direction: 'reflection',
						text: '구조의 가치는 코드만으로 끝나지 않습니다. 구현 결과, 사용자 리서치와 팀원이 같은 데이터 흐름을 설명하게 된 관찰을 함께 확인합니다.',
					},
				},
			],
		},
	],
	en: [
		{
			key: 'learning-experience',
			title: 'Turning beginner stuckness into questions',
			description: 'An observed learner difficulty led me to revisit a tool-first failure and redesign the work around repeatable thinking actions.',
			orderReason: 'The story follows observation → cause of an earlier failure → redesigned learning flow → current evidence and limits, rather than presenting the final design first.',
			roleLenses: ['curriculum-design', 'learning-experience', 'facilitation-mentoring'],
			competencies: ['beginner-observation', 'learning-goal-design', 'scaffold-design', 'self-explanation-transfer'],
			steps: [
				{ blockId: 'project-leaf-context' },
				{ blockId: 'project-leaf-outcome', bridge: { direction: 'same', text: 'In C4, I moved beyond observing the problem: we drew the responsibilities behind the screen and watched whether the learner could identify what an AI result had missed.' } },
				{ blockId: 'project-computational-thinking-hamo-summary', bridge: { direction: 'earlier', text: 'To understand why that change was difficult to turn into reusable learning, the story moves back to HamoCom. At that point, I had focused on building a code-reading tool before defining a learner and curriculum.' } },
				{ blockId: 'project-learn-with-ai-questioning-problem', bridge: { direction: 'later', text: 'To address both HamoCom’s tool-first failure and the limits of one-off support in C4, C5 began by defining how a beginner separates and expresses stuckness before defining features.' } },
				{ blockId: 'project-learn-with-ai-questioning-decision', bridge: { direction: 'same', text: 'Once the problem was concrete, I chose the thinking actions and scaffold sequence before assembling a list of Swift syntax to teach.' } },
				{ blockId: 'project-learn-with-ai-questioning-outcome', bridge: { direction: 'same', text: 'The next page checks whether those choices became concrete curriculum structure, implementation tickets, a macOS prototype, and a learning poster.' } },
				{ blockId: 'project-learn-with-ai-questioning-limitation', bridge: { direction: 'reflection', text: 'Completing C5 artifacts is not the same as validating a learning effect. The story ends by separating what the evidence cannot yet support from the next pilot.' } },
			],
		},
		{
			key: 'educational-software',
			title: 'Making a learning flow testable in software',
			description: 'A working tool came first and failed as a learning intervention; the next attempt began with learning goals and knowledge structure before returning to a prototype.',
			orderReason: 'The sequence is first implementation → decision to stop → changed design criteria → new implementation → unvalidated claims, rather than a list of successful outputs.',
			roleLenses: ['educational-software', 'curriculum-design', 'learning-experience'],
			competencies: ['educational-prototyping', 'data-flow-architecture', 'learning-goal-design', 'documentation-systemization'],
			steps: [
				{ blockId: 'project-computational-thinking-hamo-summary' },
				{ blockId: 'project-computational-thinking-hamo-technical-evidence', bridge: { direction: 'same', text: 'HamoCom was not stopped because it could not be implemented. Its code-reading, commenting, and nearby-sharing structure shows exactly what was built—and what the implementation still could not validate.' } },
				{ blockId: 'project-computational-thinking-hamo-next-step', bridge: { direction: 'reflection', text: 'After building it, I identified the missing pieces as a specific learner, curriculum, and evaluation criteria rather than additional features. Those became the conditions for the next attempt.' } },
				{ blockId: 'project-learn-with-ai-questioning-decision', bridge: { direction: 'later', text: 'C5 addressed that limit by defining thinking actions and minimum Swift concepts before screen features, while separating a knowledge system from a learning sequence.' } },
				{ blockId: 'project-learn-with-ai-questioning-technical-evidence', bridge: { direction: 'same', text: 'Only after setting those design criteria did I translate the Obsidian knowledge structure and tickets into a macOS Sidebar and Inspector implementation.' } },
				{ blockId: 'project-learn-with-ai-questioning-outcome', bridge: { direction: 'same', text: 'The results show how far the revised implementation reached and how it differed from the original tool-first approach.' } },
				{ blockId: 'project-learn-with-ai-questioning-limitation', bridge: { direction: 'reflection', text: 'Even a prototype that starts from learning goals cannot claim educational effectiveness before a learner pilot. Product completion and learning validation remain separate.' } },
			],
		},
		{
			key: 'community-operations',
			title: 'Connecting participation through operating rules and tools',
			description: 'Beginner coaching and operating a 100+ member community led to a Notion system, automation, and then a standalone web service.',
			orderReason: 'The story starts with observing people, then follows operating problem → first system → observed operation → reason for the next service.',
			roleLenses: ['community-program-operations', 'facilitation-mentoring'],
			competencies: ['beginner-observation', 'community-operations', 'collaboration-facilitation', 'documentation-systemization'],
			steps: [
				{ blockId: 'experience-scutta-leadership-summary' },
				{ blockId: 'experience-scutta-leadership-action', bridge: { direction: 'same', text: 'Titles alone do not explain how I operated. The next page shows the actions across beginner coaching, a 100+ member community, communications, accounting, and service operation.' } },
				{ blockId: 'project-scutta-notion-system-problem', bridge: { direction: 'same', text: 'During operation, the repeated issue was not the match record itself but the lack of reasons for members from different groups to meet. That became the design criterion for the first tool.' } },
				{ blockId: 'project-scutta-notion-system-outcome', bridge: { direction: 'same', text: 'After using Notion, Shortcuts, and APIs to create reasons to meet new opponents rather than forcing matches, I looked at what actual operation enabled and where it remained awkward.' } },
				{ blockId: 'project-scutta-web-service-problem', bridge: { direction: 'later', text: 'The Notion system encouraged participation but made record approval and operating rules difficult to manage in one place. A standalone web service was the next improvement.' } },
				{ blockId: 'project-scutta-web-service-technical-evidence', bridge: { direction: 'same', text: 'The implementation structure shows how the operating problem became Flask and SQLAlchemy data, approval, and participation flows.' } },
				{ blockId: 'project-scutta-web-service-outcome', bridge: { direction: 'reflection', text: 'The final page separates the fact that a service was built from the outcomes and remaining limits observed in operation.' } },
			],
		},
		{
			key: 'ios-architecture',
			title: 'Translating meaning into data boundaries and failure conditions',
			description: 'A personal record app, a nearby multiplayer game, and a team project show different ways I structured problems through data responsibility and fallback behavior.',
			orderReason: 'Rather than sorting technologies by date, the story follows data meaning → failure conditions → shared device state → team-readable contracts → user-research outcomes.',
			roleLenses: ['ios-software-development', 'problem-framing-research'],
			competencies: ['data-flow-architecture', 'user-research', 'technical-explanation', 'collaboration-facilitation'],
			steps: [
				{ blockId: 'project-dayflow-problem' },
				{ blockId: 'project-dayflow-technical-evidence', bridge: { direction: 'same', text: 'To keep planned and actual time meaningful, I separated source data, external adapters, and extension projections while preserving a local flow when synchronization failed.' } },
				{ blockId: 'project-bombaway-problem', bridge: { direction: 'earlier', text: 'The story moves to the earlier BombAway project to show where this failure-aware reasoning was practiced: several devices had to share one game state despite latency and differences in sensor quality.' } },
				{ blockId: 'project-bombaway-technical-evidence', bridge: { direction: 'same', text: 'The technical structure assigns distinct responsibilities to nearby communication, distance and direction sensing, and spatial audio.' } },
				{ blockId: 'project-leaf-context', bridge: { direction: 'later', text: 'In the following C4 project, the technology was not chosen first. An interview and survey of 47 gardeners shifted the problem from garden management toward sustaining a restorative experience.' } },
				{ blockId: 'project-leaf-technical-evidence', bridge: { direction: 'same', text: 'The changed user problem became several record types and a growth flow, with Protocol, PreviewService, and Service contracts between the screen and storage implementation.' } },
				{ blockId: 'project-leaf-outcome', bridge: { direction: 'reflection', text: 'The value of the structure is not limited to code. The final page combines implementation results, user research, and the observation that a teammate could explain the same data flow.' } },
			],
		},
	],
};

export const getPortfolioStories = (locale: Locale) => stories[locale];
