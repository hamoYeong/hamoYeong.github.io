import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { locales } from './i18n/config';
import {
	competencies,
	evidenceLevels,
	roleLenses,
} from './i18n/taxonomy';

const localeSchema = z.enum(locales);
const slugSchema = z
	.string()
	.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase kebab-case slug.');
const translationKeySchema = z
	.string()
	.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase kebab-case translation key.');
const monthSchema = z
	.string()
	.regex(/^\d{4}(?:-\d{2})?$/, 'Use YYYY or YYYY-MM.');

const roleLensSchema = z.enum(roleLenses);
const competencySchema = z.enum(competencies);
const evidenceLevelSchema = z.enum(evidenceLevels);

const portfolioMetadataFields = {
	roleLenses: z.array(roleLensSchema).min(1),
	competencies: z.array(competencySchema).min(1),
	evidenceLevels: z.array(evidenceLevelSchema).min(1),
	priority: z.number().int().min(0).default(100),
};

const localizedFields = {
	slug: slugSchema,
	locale: localeSchema,
	translationKey: translationKeySchema,
};

const generateLocalizedId = ({ entry }: { entry: string }) => {
	return entry.replace(/\.[^/.]+$/, '');
};

const periodSchema = z.object({
	start: monthSchema,
	end: z.union([monthSchema, z.literal('present')]).optional(),
	label: z.string().min(1),
});

const teamSchema = z.object({
	type: z.enum(['personal', 'team', 'unspecified']),
	size: z.number().int().positive().optional(),
	description: z.string().min(1),
});

const coverImageSchema = z.object({
	src: z.string().min(1),
	alt: z.string().min(1),
});

const mediaSchema = z.object({
	id: translationKeySchema,
	section: z.enum([
		'cover',
		'context',
		'research',
		'process',
		'decision',
		'solution',
		'outcome',
		'learning',
	]),
	type: z.enum(['image', 'pdf', 'video', 'diagram']),
	webSrc: z.string().min(1).optional(),
	masterPath: z.string().min(1).optional(),
	alt: z.string().min(1).optional(),
	caption: z.string().min(1).optional(),
	credit: z.string().min(1).optional(),
	visibility: z.enum(['public', 'private']).default('public'),
});

const externalLinkSchema = z.object({
	label: z.string().min(1),
	href: z.url(),
});

const projectDecisionSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
});

const projectProcessStepSchema = z.object({
	title: z.string().min(1),
	question: z.string().min(1),
	items: z.array(z.string().min(1)).min(1),
});

const questionShiftSchema = z.object({
	summary: z.string().min(1),
	before: z.object({
		statement: z.string().min(1),
		note: z.string().min(1),
	}),
	after: z.object({
		statement: z.string().min(1),
		note: z.string().min(1),
	}),
	secondary: z.array(
		z.object({
			label: z.string().min(1),
			before: z.string().min(1),
			after: z.string().min(1),
			note: z.string().min(1),
		}),
	).default([]),
});

const projectArtifactSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	href: z.string().min(1),
	previewImage: coverImageSchema,
});

const learnerCaseSchema = z.object({
	title: z.string().min(1),
	context: z.string().min(1),
	before: z.string().min(1),
	diagnosis: z.string().min(1),
	intervention: z.array(z.string().min(1)).min(1),
	after: z.string().min(1),
	limitation: z.string().min(1),
});

const projectValidationSchema = z.object({
	statusNote: z.string().min(1),
	limitations: z.array(z.string().min(1)).min(1),
	nextValidation: z.array(z.string().min(1)).min(1),
});

const portfolioSectionSchema = z.object({
	field: z.enum([
		'summary',
		'problem',
		'context',
		'role',
		'process',
		'keyDecisions',
		'technicalStructure',
		'outcomes',
		'learnings',
		'limitations',
		'nextValidation',
	]),
	kind: z.enum([
		'summary',
		'problem',
		'context',
		'role',
		'action',
		'decision',
		'technical-evidence',
		'outcome',
		'learning',
		'limitation',
		'next-step',
	]),
	roleLenses: z.array(roleLensSchema).optional(),
	competencies: z.array(competencySchema).optional(),
	evidenceLevels: z.array(evidenceLevelSchema).optional(),
	assetIds: z.array(translationKeySchema).default([]),
});

const projects = defineCollection({
	loader: glob({
		base: './src/content/projects',
		pattern: '**/[^_]*.md',
		generateId: generateLocalizedId,
	}),
	schema: z.object({
		...localizedFields,
		...portfolioMetadataFields,
		title: z.string().min(1),
		summary: z.string().min(1),
		period: periodSchema,
		status: z.enum(['concept', 'in-progress', 'completed', 'archived']),
		role: z.array(z.string().min(1)).min(1),
		team: teamSchema,
		overview: z.string().min(1),
		problem: z.string().min(1),
		whyItMattered: z.string().min(1),
		context: z.string().min(1),
		user: z.string().min(1),
		contributions: z.array(z.string().min(1)).min(1),
		process: z.array(z.string().min(1)).min(1),
		processDetails: z.array(projectProcessStepSchema).default([]),
		processSummary: z.string().min(1).optional(),
		research: z.array(z.string().min(1)).default([]),
		keyDecisions: z.array(projectDecisionSchema).min(1),
		questionShift: questionShiftSchema.optional(),
		technicalStructure: z.array(z.string().min(1)).min(1),
		challenges: z.array(z.string().min(1)).min(1),
		technologies: z.array(z.string().min(1)).min(1),
		outcomes: z.array(z.string().min(1)).min(1),
		whatIWouldChange: z.array(z.string().min(1)).min(1),
		learnings: z.array(z.string().min(1)).min(1),
		categories: z.array(z.string().min(1)).default([]),
		featured: z.boolean().default(false),
		draft: z.boolean().default(true),
		repository: z.url().optional(),
		demo: z.url().optional(),
		coverImage: coverImageSchema.optional(),
		artifacts: z.array(projectArtifactSchema).default([]),
		learnerCase: learnerCaseSchema.optional(),
		validation: projectValidationSchema.optional(),
		visibility: z.enum(['public', 'private-summary', 'unlisted']),
		relatedPosts: z.array(translationKeySchema).default([]),
		relatedProjects: z.array(translationKeySchema).default([]),
		relatedChallenges: z.array(translationKeySchema).default([]),
		relatedExperiences: z.array(translationKeySchema).default([]),
		media: z.array(mediaSchema).default([]),
		portfolioSections: z.array(portfolioSectionSchema).default([]),
	}),
});

const posts = defineCollection({
	loader: glob({
		base: './src/content/posts',
		pattern: '**/[^_]*.md',
		generateId: generateLocalizedId,
	}),
	schema: z.object({
		...localizedFields,
		...portfolioMetadataFields,
		title: z.string().min(1),
		description: z.string().min(1),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string().min(1)).min(1),
		draft: z.boolean().default(true),
		featured: z.boolean().default(false),
		coverImage: coverImageSchema.optional(),
		relatedProjects: z.array(translationKeySchema).default([]),
		media: z.array(mediaSchema).default([]),
	}),
});

const experiences = defineCollection({
	loader: glob({
		base: './src/content/experiences',
		pattern: '**/[^_]*.md',
		generateId: generateLocalizedId,
	}),
	schema: z.object({
		...localizedFields,
		...portfolioMetadataFields,
		title: z.string().min(1),
		organization: z.string().min(1),
		summary: z.string().min(1),
		period: periodSchema,
		category: z.enum(['education', 'work', 'leadership', 'community', 'research']),
		highlights: z.array(z.string().min(1)).default([]),
		links: z.array(externalLinkSchema).default([]),
		order: z.number().int(),
		draft: z.boolean().default(true),
		relatedProjects: z.array(translationKeySchema).default([]),
		relatedChallenges: z.array(translationKeySchema).default([]),
		media: z.array(mediaSchema).default([]),
	}),
});

const challenges = defineCollection({
	loader: glob({
		base: './src/content/challenges',
		pattern: '**/[^_]*.md',
		generateId: generateLocalizedId,
	}),
	schema: z.object({
		...localizedFields,
		...portfolioMetadataFields,
		sequence: z.enum(['C1', 'C2', 'C3', 'C4', 'C5']),
		title: z.string().min(1),
		summary: z.string().min(1),
		period: periodSchema,
		team: teamSchema,
		problem: z.string().min(1),
		role: z.array(z.string().min(1)).min(1),
		whatITried: z.array(z.string().min(1)).min(1),
		whatChanged: z.array(z.string().min(1)).min(1),
		learnings: z.array(z.string().min(1)).min(1),
		relatedProject: translationKeySchema.optional(),
		relatedPosts: z.array(translationKeySchema).default([]),
		repository: z.url().optional(),
		visibility: z.enum(['public', 'private-summary', 'unlisted']),
		draft: z.boolean().default(true),
		media: z.array(mediaSchema).default([]),
	}),
});

export const collections = {
	projects,
	posts,
	experiences,
	challenges,
};
