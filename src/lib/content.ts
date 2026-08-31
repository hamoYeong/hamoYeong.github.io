import {
	getCollection,
	type CollectionEntry,
	type CollectionKey,
} from 'astro:content';
import type { Locale } from '../i18n/config';

interface LocalizedEntry {
	data: {
		locale: Locale;
		translationKey: string;
	};
}

interface CollectionOptions {
	locale?: Locale;
	includeUnlisted?: boolean;
}

const includeDraftInCurrentMode = (draft: boolean) => {
	return import.meta.env.PROD ? !draft : true;
};

export const findTranslation = <Entry extends LocalizedEntry>(
	entries: Entry[],
	translationKey: string,
	locale: Locale,
) => {
	return entries.find(
		(entry) =>
			entry.data.translationKey === translationKey && entry.data.locale === locale,
	);
};

export async function getProjects(options: CollectionOptions = {}) {
	const entries = await getCollection('projects', ({ data }) => {
		const matchesLocale = options.locale ? data.locale === options.locale : true;
		const matchesVisibility =
			options.includeUnlisted === true ? true : data.visibility !== 'unlisted';

		return includeDraftInCurrentMode(data.draft) && matchesLocale && matchesVisibility;
	});

	return entries.sort((left, right) => {
		const featuredOrder =
			Number(right.data.featured) - Number(left.data.featured);

		if (featuredOrder !== 0) return featuredOrder;

		return right.data.period.start.localeCompare(left.data.period.start);
	});
}

export async function getPosts(options: Pick<CollectionOptions, 'locale'> = {}) {
	const entries = await getCollection('posts', ({ data }) => {
		const matchesLocale = options.locale ? data.locale === options.locale : true;

		return includeDraftInCurrentMode(data.draft) && matchesLocale;
	});

	return entries.sort(
		(left, right) =>
			right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
	);
}

export async function getExperiences(
	options: Pick<CollectionOptions, 'locale'> = {},
) {
	const entries = await getCollection('experiences', ({ data }) => {
		const matchesLocale = options.locale ? data.locale === options.locale : true;

		return includeDraftInCurrentMode(data.draft) && matchesLocale;
	});

	return entries.sort((left, right) => left.data.order - right.data.order);
}

const challengeOrder = {
	C1: 1,
	C2: 2,
	C3: 3,
	C4: 4,
	C5: 5,
} as const;

export async function getChallenges(options: CollectionOptions = {}) {
	const entries = await getCollection('challenges', ({ data }) => {
		const matchesLocale = options.locale ? data.locale === options.locale : true;
		const matchesVisibility =
			options.includeUnlisted === true ? true : data.visibility !== 'unlisted';

		return includeDraftInCurrentMode(data.draft) && matchesLocale && matchesVisibility;
	});

	return entries.sort(
		(left, right) =>
			challengeOrder[left.data.sequence] - challengeOrder[right.data.sequence],
	);
}

export type LocalizedCollectionKey = Extract<
	CollectionKey,
	'projects' | 'posts' | 'experiences' | 'challenges'
>;

export type LocalizedCollectionEntry =
	| CollectionEntry<'projects'>
	| CollectionEntry<'posts'>
	| CollectionEntry<'experiences'>
	| CollectionEntry<'challenges'>;
