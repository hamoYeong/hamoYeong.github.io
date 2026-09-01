import type { CollectionEntry } from 'astro:content';
import { localizedPath, type Locale } from '../i18n/config';
import { getUi } from '../i18n/ui';
import type {
	Competency,
	EvidenceLevel,
	RoleLens,
} from '../i18n/taxonomy';

export type PortfolioBlockKind =
	| 'summary'
	| 'problem'
	| 'context'
	| 'role'
	| 'action'
	| 'decision'
	| 'technical-evidence'
	| 'outcome'
	| 'learning'
	| 'limitation'
	| 'next-step';

export type PortfolioSourceType =
	| 'project'
	| 'experience'
	| 'challenge'
	| 'post'
	| 'profile';

export interface PortfolioBlock {
	id: string;
	sourceType: PortfolioSourceType;
	sourceKey: string;
	sourceTitle: string;
	kind: PortfolioBlockKind;
	title: string;
	text: string | string[];
	note?: string;
	roleLenses: RoleLens[];
	competencies: Competency[];
	evidenceLevels: EvidenceLevel[];
	href: string;
	assetIds: string[];
	date: string;
	priority: number;
}

export interface PortfolioAsset {
	id: string;
	sourceType: Exclude<PortfolioSourceType, 'profile'>;
	sourceKey: string;
	section: string;
	type: 'image' | 'pdf' | 'video' | 'diagram';
	webSrc?: string;
	masterPath?: string;
	alt?: string;
	caption?: string;
	credit?: string;
}

interface PortfolioKitInput {
	locale: Locale;
	projects: CollectionEntry<'projects'>[];
	posts: CollectionEntry<'posts'>[];
	experiences: CollectionEntry<'experiences'>[];
	challenges: CollectionEntry<'challenges'>[];
}

interface BlockOptions {
	sourceType: PortfolioSourceType;
	sourceKey: string;
	sourceTitle: string;
	kind: PortfolioBlockKind;
	title: string;
	text: string | string[];
	note?: string;
	roleLenses: RoleLens[];
	competencies: Competency[];
	evidenceLevels: EvidenceLevel[];
	href: string;
	assetIds?: string[];
	date: string;
	priority: number;
}

const createBlock = (options: BlockOptions): PortfolioBlock | undefined => {
	const text = Array.isArray(options.text)
		? options.text.filter((item) => item.trim().length > 0)
		: options.text.trim();

	if (Array.isArray(text) ? text.length === 0 : text.length === 0) return;

	return {
		...options,
		text,
		assetIds: options.assetIds ?? [],
		id: `${options.sourceType}-${options.sourceKey}-${options.kind}`,
	};
};

const compactBlocks = (blocks: Array<PortfolioBlock | undefined>) =>
	blocks.filter((block): block is PortfolioBlock => block !== undefined);

const unique = (items: string[]) => [...new Set(items)];

const getProjectBlocks = (project: CollectionEntry<'projects'>) => {
	const { data } = project;
	const t = getUi(data.locale);
	const href = localizedPath(data.locale, `projects/${data.slug}`);
	const sectionHref = (section: string) => `${href}#${section}`;
	const defaults = {
		sourceType: 'project' as const,
		sourceKey: data.translationKey,
		sourceTitle: data.title,
		roleLenses: data.roleLenses,
		competencies: data.competencies,
		evidenceLevels: data.evidenceLevels,
		href,
		date: data.period.start,
		priority: data.priority,
	};
	const mediaBySection = (sections: string[]) =>
		data.media
			.filter((item) => item.visibility === 'public' && sections.includes(item.section))
			.map((item) => item.id);
	const sectionOverride = (field: string) =>
		data.portfolioSections.find((section) => section.field === field);
	const metadataFor = (field: string, sections: string[]) => {
		const override = sectionOverride(field);
		return {
			roleLenses: override?.roleLenses ?? data.roleLenses,
			competencies: override?.competencies ?? data.competencies,
			evidenceLevels: override?.evidenceLevels ?? data.evidenceLevels,
			assetIds: override?.assetIds.length
				? override.assetIds
				: mediaBySection(sections),
		};
	};
	const limitations = unique([
		...(data.validation?.limitations ?? []),
		...(data.learnerCase ? [data.learnerCase.limitation] : []),
	]);
	const nextSteps = data.validation?.nextValidation ?? data.whatIWouldChange;
	const process = data.processDetails.length > 0
		? data.processDetails.flatMap((step) => [step.title, step.question, ...step.items])
		: data.process;

	return compactBlocks([
		createBlock({ ...defaults, href: sectionHref('overview'), ...metadataFor('summary', ['cover']), kind: 'summary', title: t.projects.overview, text: data.summary, note: data.summaryNote }),
		createBlock({ ...defaults, href: sectionHref('problem'), ...metadataFor('problem', []), kind: 'problem', title: `${t.projects.problem} · ${t.projects.whyItMattered}`, text: [data.problem, data.whyItMattered] }),
		createBlock({ ...defaults, href: sectionHref('context'), ...metadataFor('context', ['context', 'research']), kind: 'context', title: `${t.projects.user} · ${t.projects.context}`, text: [data.user, data.context, ...data.research] }),
		createBlock({ ...defaults, href: sectionHref('role'), ...metadataFor('role', []), kind: 'role', title: t.projects.myRole, text: [data.team.description, ...data.role, ...data.contributions] }),
		createBlock({ ...defaults, href: sectionHref('process'), ...metadataFor('process', ['process']), kind: 'action', title: t.projects.process, text: [...(data.processSummary ? [data.processSummary] : []), ...process] }),
		createBlock({ ...defaults, href: sectionHref('decisions'), ...metadataFor('keyDecisions', ['decision']), kind: 'decision', title: t.projects.keyDecisions, text: data.keyDecisions.map((item) => `${item.title}: ${item.description}`) }),
		createBlock({ ...defaults, href: sectionHref('structure'), ...metadataFor('technicalStructure', ['solution']), kind: 'technical-evidence', title: t.projects.technicalStructure, text: data.technicalStructure }),
		createBlock({ ...defaults, href: sectionHref('outcome'), ...metadataFor('outcomes', ['outcome']), kind: 'outcome', title: t.projects.outcomes, text: data.outcomes }),
		createBlock({ ...defaults, href: sectionHref('outcome'), ...metadataFor('limitations', []), kind: 'limitation', title: t.projects.limitation, text: limitations }),
		createBlock({ ...defaults, href: sectionHref('change'), ...metadataFor('nextValidation', []), kind: 'next-step', title: t.projects.nextValidation, text: nextSteps }),
		createBlock({ ...defaults, href: sectionHref('learning'), ...metadataFor('learnings', ['learning']), kind: 'learning', title: t.projects.learnings, text: data.learnings }),
	]);
};

const getExperienceBlocks = (experience: CollectionEntry<'experiences'>) => {
	const { data } = experience;
	const t = getUi(data.locale);
	const defaults = {
		sourceType: 'experience' as const,
		sourceKey: data.translationKey,
		sourceTitle: `${data.title} · ${data.organization}`,
		roleLenses: data.roleLenses,
		competencies: data.competencies,
		evidenceLevels: data.evidenceLevels,
		href: `${localizedPath(data.locale, 'about')}#experience-${data.translationKey}`,
		date: data.period.start,
		priority: data.priority,
	};

	return compactBlocks([
		createBlock({ ...defaults, kind: 'summary', title: t.portfolioKit.kindLabels.summary, text: data.summary }),
		createBlock({ ...defaults, kind: 'action', title: t.portfolioKit.experienceEvidence, text: data.highlights }),
	]);
};

const getChallengeBlocks = (
	challenge: CollectionEntry<'challenges'>,
	projectSlugByKey: Map<string, string>,
) => {
	const { data } = challenge;
	const t = getUi(data.locale);
	const relatedSlug = data.relatedProject
		? projectSlugByKey.get(data.relatedProject)
		: undefined;
	const defaults = {
		sourceType: 'challenge' as const,
		sourceKey: data.translationKey,
		sourceTitle: `${data.sequence} · ${data.title}`,
		roleLenses: data.roleLenses,
		competencies: data.competencies,
		evidenceLevels: data.evidenceLevels,
		href: relatedSlug
			? `${localizedPath(data.locale, `projects/${relatedSlug}`)}#challenges`
			: localizedPath(data.locale, 'projects'),
		date: data.period.start,
		priority: data.priority,
	};

	return compactBlocks([
		createBlock({ ...defaults, kind: 'summary', title: t.portfolioKit.kindLabels.summary, text: data.summary }),
		createBlock({ ...defaults, kind: 'problem', title: t.projects.problem, text: data.problem }),
		createBlock({ ...defaults, kind: 'role', title: t.projects.role, text: [data.team.description, ...data.role] }),
		createBlock({ ...defaults, kind: 'action', title: t.portfolioKit.challengeAttempt, text: data.whatITried }),
		createBlock({ ...defaults, kind: 'outcome', title: t.portfolioKit.changedJudgment, text: data.whatChanged }),
		createBlock({ ...defaults, kind: 'learning', title: t.projects.learnings, text: data.learnings }),
	]);
};

const getPostBlocks = (post: CollectionEntry<'posts'>) => {
	const { data } = post;
	const t = getUi(data.locale);

	return compactBlocks([
		createBlock({
			sourceType: 'post',
			sourceKey: data.translationKey,
			sourceTitle: data.title,
			kind: 'summary',
			title: t.portfolioKit.postClaim,
			text: data.description,
			roleLenses: data.roleLenses,
			competencies: data.competencies,
			evidenceLevels: data.evidenceLevels,
			href: `${localizedPath(data.locale, `posts/${data.slug}`)}#article-content`,
			assetIds: data.media.filter((item) => item.visibility === 'public').map((item) => item.id),
			date: data.publishedAt.toISOString().slice(0, 10),
			priority: data.priority,
		}),
	]);
};

const getProfileBlocks = (locale: Locale) => {
	const t = getUi(locale);
	const href = localizedPath(locale, 'about');
	const sourceTitle = t.home.name;
	const defaultRoleLenses: RoleLens[] = ['curriculum-design', 'learning-experience', 'educational-software', 'facilitation-mentoring'];
	const defaultCompetencies: Competency[] = ['beginner-observation', 'learning-goal-design', 'scaffold-design', 'self-explanation-transfer', 'curriculum-task-design'];

	return compactBlocks([
		createBlock({
			sourceType: 'profile', sourceKey: 'identity', sourceTitle, kind: 'summary', title: t.home.title,
			text: t.home.intro, roleLenses: defaultRoleLenses, competencies: defaultCompetencies,
			evidenceLevels: ['designed'], href, date: '2026-08', priority: 0,
		}),
		createBlock({
			sourceType: 'profile', sourceKey: 'learning-transformation', sourceTitle, kind: 'outcome', title: t.about.directionGroups[1].title,
			text: t.about.directionGroups[1].items, roleLenses: ['curriculum-design', 'learning-experience'],
			competencies: ['learning-goal-design', 'self-explanation-transfer', 'curriculum-task-design'],
			evidenceLevels: ['designed'], href: `${href}#direction`, date: '2026-08', priority: 1,
		}),
		createBlock({
			sourceType: 'profile', sourceKey: 'learning-principles', sourceTitle, kind: 'decision', title: t.about.directionGroups[2].title,
			text: t.about.directionGroups[2].items, roleLenses: ['curriculum-design', 'learning-experience'],
			competencies: ['learning-goal-design', 'scaffold-design', 'self-explanation-transfer'],
			evidenceLevels: ['designed'], href: `${href}#direction`, date: '2026-08', priority: 2,
		}),
		createBlock({
			sourceType: 'profile', sourceKey: 'current-limitations', sourceTitle, kind: 'limitation', title: t.about.directionGroups[4].title,
			text: t.about.directionGroups[4].items, roleLenses: defaultRoleLenses, competencies: defaultCompetencies,
			evidenceLevels: ['hypothesis'], href: `${href}#direction`, date: '2026-08', priority: 3,
		}),
	]);
};

const getAssets = (
	sourceType: PortfolioAsset['sourceType'],
	entries: Array<CollectionEntry<'projects'> | CollectionEntry<'posts'> | CollectionEntry<'experiences'> | CollectionEntry<'challenges'>>,
): PortfolioAsset[] => entries.flatMap((entry) =>
	entry.data.media
		.filter((item) => item.visibility === 'public')
		.map((item) => ({
			id: item.id,
			sourceType,
			sourceKey: entry.data.translationKey,
			section: item.section,
			type: item.type,
			webSrc: item.webSrc,
			masterPath: item.masterPath,
			alt: item.alt,
			caption: item.caption,
			credit: item.credit,
		})),
);

export const buildPortfolioKit = ({
	locale,
	projects,
	posts,
	experiences,
	challenges,
}: PortfolioKitInput) => {
	const projectSlugByKey = new Map(
		projects.map((project) => [project.data.translationKey, project.data.slug]),
	);
	const blocks = [
		...getProfileBlocks(locale),
		...projects.flatMap(getProjectBlocks),
		...experiences.flatMap(getExperienceBlocks),
		...challenges.flatMap((challenge) => getChallengeBlocks(challenge, projectSlugByKey)),
		...posts.flatMap(getPostBlocks),
	].sort((left, right) => left.priority - right.priority || right.date.localeCompare(left.date));
	const assets = [
		...getAssets('project', projects),
		...getAssets('experience', experiences),
		...getAssets('challenge', challenges),
		...getAssets('post', posts),
	];

	return { blocks, assets };
};
