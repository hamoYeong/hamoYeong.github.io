import type { Locale } from './config';

export const roleLenses = [
	'curriculum-design',
	'learning-experience',
	'educational-software',
	'facilitation-mentoring',
	'community-program-operations',
	'ios-software-development',
	'problem-framing-research',
] as const;

export type RoleLens = (typeof roleLenses)[number];

export const competencies = [
	'beginner-observation',
	'learning-goal-design',
	'scaffold-design',
	'self-explanation-transfer',
	'curriculum-task-design',
	'technical-explanation',
	'educational-prototyping',
	'data-flow-architecture',
	'user-research',
	'collaboration-facilitation',
	'community-operations',
	'documentation-systemization',
] as const;

export type Competency = (typeof competencies)[number];

export const evidenceLevels = [
	'hypothesis',
	'designed',
	'implemented',
	'observed',
	'operated',
	'measured',
] as const;

export type EvidenceLevel = (typeof evidenceLevels)[number];

type TaxonomyItem<Key extends string> = {
	key: Key;
	label: string;
	description: string;
};

interface TaxonomyLocale {
	roleLenses: TaxonomyItem<RoleLens>[];
	competencies: TaxonomyItem<Competency>[];
	evidenceLevels: TaxonomyItem<EvidenceLevel>[];
}

export const taxonomy: Record<Locale, TaxonomyLocale> = {
	ko: {
		roleLenses: [
			{ key: 'curriculum-design', label: '커리큘럼·과제 설계', description: '학습 목표, 사고 행동, 과제와 순서를 설계한 근거' },
			{ key: 'learning-experience', label: '학습 경험·발판 설계', description: '초심자의 막힘과 학습 흐름에 맞춘 경험을 설계한 근거' },
			{ key: 'educational-software', label: '교육용 소프트웨어', description: '학습 흐름을 소프트웨어로 구현하고 시험한 근거' },
			{ key: 'facilitation-mentoring', label: '수업·멘토링', description: '상대의 이해에 맞춰 설명하고 함께 사고한 근거' },
			{ key: 'community-program-operations', label: '커뮤니티·프로그램 운영', description: '참여 규칙, 도구와 운영 흐름을 개선한 근거' },
			{ key: 'ios-software-development', label: 'iOS·소프트웨어 개발', description: 'Apple 플랫폼과 소프트웨어 구조를 구현한 근거' },
			{ key: 'problem-framing-research', label: '문제 정의·사용자 리서치', description: '관찰과 조사로 문제 또는 가정을 바꾼 근거' },
		],
		competencies: [
			{ key: 'beginner-observation', label: '초심자 관찰', description: '초심자의 막힘과 현재 이해를 관찰함' },
			{ key: 'learning-goal-design', label: '학습 목표 설계', description: '원하는 학습자 변화를 목표로 정의함' },
			{ key: 'scaffold-design', label: '학습 발판 설계', description: '사고를 대신하지 않는 단계와 단서를 설계함' },
			{ key: 'self-explanation-transfer', label: '자기설명·전이', description: '설명과 새로운 문제로의 연결을 학습 기준으로 둠' },
			{ key: 'curriculum-task-design', label: '커리큘럼·과제 설계', description: '사고 행동을 과제와 순서로 구성함' },
			{ key: 'technical-explanation', label: '기술 설명', description: '기술 구조와 선택의 이유를 공동 언어로 설명함' },
			{ key: 'educational-prototyping', label: '교육 프로토타이핑', description: '학습 가설을 도구나 프로토타입으로 구현함' },
			{ key: 'data-flow-architecture', label: '데이터 흐름·아키텍처', description: '상태, 책임, 실패 조건과 데이터 계약을 설계함' },
			{ key: 'user-research', label: '사용자 리서치', description: '관찰, 인터뷰, 설문과 테스트로 맥락을 확인함' },
			{ key: 'collaboration-facilitation', label: '협업·퍼실리테이션', description: '팀이 같은 구조와 판단 기준을 이해하도록 도움' },
			{ key: 'community-operations', label: '커뮤니티 운영', description: '사람, 규칙과 운영 도구를 함께 관리함' },
			{ key: 'documentation-systemization', label: '문서화·시스템화', description: '반복 가능한 기록, 규칙과 운영 구조를 만듦' },
		],
		evidenceLevels: [
			{ key: 'hypothesis', label: '가설', description: '아직 검증하지 않은 가설' },
			{ key: 'designed', label: '설계', description: '커리큘럼, 흐름 또는 구조를 설계함' },
			{ key: 'implemented', label: '구현', description: '작동 가능한 결과물을 구현함' },
			{ key: 'observed', label: '관찰', description: '소규모 사례에서 변화를 관찰함' },
			{ key: 'operated', label: '운영', description: '프로그램, 서비스 또는 커뮤니티를 운영함' },
			{ key: 'measured', label: '측정', description: '수치 또는 명시적 평가로 확인함' },
		],
	},
	en: {
		roleLenses: [
			{ key: 'curriculum-design', label: 'Curriculum & Task Design', description: 'Evidence of defining learning goals, thinking actions, tasks, and sequence' },
			{ key: 'learning-experience', label: 'Learning Experience & Scaffolding', description: 'Evidence of designing around beginner blocks and learning flow' },
			{ key: 'educational-software', label: 'Educational Software', description: 'Evidence of implementing and testing learning flows in software' },
			{ key: 'facilitation-mentoring', label: 'Facilitation & Mentoring', description: 'Evidence of adapting explanations and thinking with others' },
			{ key: 'community-program-operations', label: 'Community & Program Operations', description: 'Evidence of improving participation rules, tools, and operations' },
			{ key: 'ios-software-development', label: 'iOS & Software Development', description: 'Evidence of Apple-platform implementation and software architecture' },
			{ key: 'problem-framing-research', label: 'Problem Framing & Research', description: 'Evidence of changing problems or assumptions through research' },
		],
		competencies: [
			{ key: 'beginner-observation', label: 'Beginner Observation', description: 'Observing blocks and current understanding' },
			{ key: 'learning-goal-design', label: 'Learning Goal Design', description: 'Defining intended learner change' },
			{ key: 'scaffold-design', label: 'Scaffold Design', description: 'Designing steps and cues without replacing the thinking' },
			{ key: 'self-explanation-transfer', label: 'Self-explanation & Transfer', description: 'Using explanation and transfer as learning criteria' },
			{ key: 'curriculum-task-design', label: 'Curriculum & Task Design', description: 'Turning thinking actions into tasks and sequence' },
			{ key: 'technical-explanation', label: 'Technical Explanation', description: 'Explaining structures and trade-offs in a shared language' },
			{ key: 'educational-prototyping', label: 'Educational Prototyping', description: 'Implementing a learning hypothesis as a tool or prototype' },
			{ key: 'data-flow-architecture', label: 'Data Flow & Architecture', description: 'Designing state, responsibilities, failure modes, and data contracts' },
			{ key: 'user-research', label: 'User Research', description: 'Using observation, interviews, surveys, and tests to examine context' },
			{ key: 'collaboration-facilitation', label: 'Collaboration & Facilitation', description: 'Helping a team share structure and criteria' },
			{ key: 'community-operations', label: 'Community Operations', description: 'Operating people, rules, and tools together' },
			{ key: 'documentation-systemization', label: 'Documentation & Systems', description: 'Creating repeatable records, rules, and operating structures' },
		],
		evidenceLevels: [
			{ key: 'hypothesis', label: 'Hypothesis', description: 'A hypothesis that has not yet been validated' },
			{ key: 'designed', label: 'Designed', description: 'A curriculum, flow, or structure was designed' },
			{ key: 'implemented', label: 'Implemented', description: 'A working output was implemented' },
			{ key: 'observed', label: 'Observed', description: 'A change was observed in a small-scale case' },
			{ key: 'operated', label: 'Operated', description: 'A program, service, or community was operated' },
			{ key: 'measured', label: 'Measured', description: 'Confirmed with a number or explicit evaluation' },
		],
	},
};

export const getTaxonomy = (locale: Locale) => taxonomy[locale];
