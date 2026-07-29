import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { locales } from './i18n/config';

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

const projects = defineCollection({
	loader: glob({
		base: './src/content/projects',
		pattern: '**/[^_]*.md',
		generateId: generateLocalizedId,
	}),
	schema: z.object({
		...localizedFields,
		title: z.string().min(1),
		summary: z.string().min(1),
		period: periodSchema,
		status: z.enum(['concept', 'in-progress', 'completed', 'archived']),
		role: z.array(z.string().min(1)).min(1),
		team: teamSchema,
		problem: z.string().min(1),
		contributions: z.array(z.string().min(1)).min(1),
		technologies: z.array(z.string().min(1)).min(1),
		outcomes: z.array(z.string().min(1)).min(1),
		learnings: z.array(z.string().min(1)).min(1),
		categories: z.array(z.string().min(1)).default([]),
		featured: z.boolean().default(false),
		draft: z.boolean().default(true),
		repository: z.url().optional(),
		demo: z.url().optional(),
		coverImage: coverImageSchema.optional(),
		visibility: z.enum(['public', 'private-summary', 'unlisted']),
		relatedPosts: z.array(translationKeySchema).default([]),
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
		title: z.string().min(1),
		description: z.string().min(1),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		tags: z.array(z.string().min(1)).min(1),
		draft: z.boolean().default(true),
		featured: z.boolean().default(false),
		coverImage: coverImageSchema.optional(),
		relatedProjects: z.array(translationKeySchema).default([]),
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
		title: z.string().min(1),
		organization: z.string().min(1),
		summary: z.string().min(1),
		period: periodSchema,
		category: z.enum(['education', 'work', 'leadership', 'community', 'research']),
		highlights: z.array(z.string().min(1)).default([]),
		order: z.number().int(),
		draft: z.boolean().default(true),
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
		sequence: z.enum(['C1', 'C2', 'C3', 'C4']),
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
	}),
});

export const collections = {
	projects,
	posts,
	experiences,
	challenges,
};
