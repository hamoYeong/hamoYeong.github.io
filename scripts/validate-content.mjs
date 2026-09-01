import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, normalize, relative } from 'node:path';
import yaml from 'js-yaml';

const root = process.cwd();
const contentRoot = join(root, 'src', 'content');
const collectionNames = ['projects', 'posts', 'experiences', 'challenges'];
const errors = [];
const warnings = [];

const walk = (directory) => readdirSync(directory).flatMap((name) => {
	const path = join(directory, name);
	return statSync(path).isDirectory() ? walk(path) : [path];
});

const parseFrontmatter = (path) => {
	const source = readFileSync(path, 'utf8');
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
	if (!match) throw new Error('Frontmatter block not found.');
	return yaml.load(match[1]);
};

const taxonomySource = readFileSync(join(root, 'src', 'i18n', 'taxonomy.ts'), 'utf8');
const taxonomyKeys = (exportName) => {
	const match = taxonomySource.match(new RegExp(`export const ${exportName} = \\[([\\s\\S]*?)\\] as const;`));
	if (!match) throw new Error(`Cannot read ${exportName} from taxonomy.ts.`);
	return new Set([...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]));
};

const allowedTaxonomy = {
	roleLenses: taxonomyKeys('roleLenses'),
	competencies: taxonomyKeys('competencies'),
	evidenceLevels: taxonomyKeys('evidenceLevels'),
};

const entries = collectionNames.flatMap((collection) =>
	walk(join(contentRoot, collection))
		.filter((path) => path.endsWith('.md'))
		.map((path) => {
			try {
				return { collection, path, data: parseFrontmatter(path) };
			} catch (error) {
				errors.push(`${relative(root, path)}: ${error.message}`);
				return undefined;
			}
		})
		.filter(Boolean),
);

const byCollection = Object.fromEntries(collectionNames.map((collection) => [
	collection,
	entries.filter((entry) => entry.collection === collection),
]));

const formatPath = (path) => relative(root, path);
const entryLabel = (entry) => `${formatPath(entry.path)} (${entry.data.translationKey}/${entry.data.locale})`;

for (const collection of collectionNames) {
	const collectionEntries = byCollection[collection];
	const seenSlugs = new Map();
	const seenTranslations = new Map();

	for (const entry of collectionEntries) {
		const slugKey = `${entry.data.locale}:${entry.data.slug}`;
		const translationKey = `${entry.data.locale}:${entry.data.translationKey}`;
		if (seenSlugs.has(slugKey)) {
			errors.push(`${entryLabel(entry)}: duplicate slug with ${formatPath(seenSlugs.get(slugKey))}.`);
		} else {
			seenSlugs.set(slugKey, entry.path);
		}
		if (seenTranslations.has(translationKey)) {
			errors.push(`${entryLabel(entry)}: duplicate translationKey with ${formatPath(seenTranslations.get(translationKey))}.`);
		} else {
			seenTranslations.set(translationKey, entry.path);
		}

		for (const [field, allowed] of Object.entries(allowedTaxonomy)) {
			if (!Array.isArray(entry.data[field]) || entry.data[field].length === 0) {
				errors.push(`${entryLabel(entry)}: ${field} must contain at least one key.`);
				continue;
			}
			for (const key of entry.data[field]) {
				if (!allowed.has(key)) errors.push(`${entryLabel(entry)}: invalid ${field} key "${key}".`);
			}
		}

		const mediaIds = new Set();
		for (const media of entry.data.media ?? []) {
			if (mediaIds.has(media.id)) errors.push(`${entryLabel(entry)}: duplicate media id "${media.id}".`);
			mediaIds.add(media.id);
			if (media.type === 'image' && media.visibility === 'public' && !media.alt) {
				errors.push(`${entryLabel(entry)}: public image "${media.id}" is missing alt text.`);
			}
			if (media.visibility === 'private' && media.webSrc) {
				errors.push(`${entryLabel(entry)}: private media "${media.id}" must not expose webSrc.`);
			}
			if (media.webSrc?.startsWith('/')) {
				const publicPath = join(root, 'public', media.webSrc.replace(/^\/+/, ''));
				if (!existsSync(publicPath)) errors.push(`${entryLabel(entry)}: media webSrc not found: ${media.webSrc}.`);
			}
			if (media.masterPath) {
				const masterPath = normalize(join(root, media.masterPath));
				if (!masterPath.startsWith(`${root}/`)) errors.push(`${entryLabel(entry)}: masterPath leaves repository: ${media.masterPath}.`);
				else if (!existsSync(masterPath)) errors.push(`${entryLabel(entry)}: media masterPath not found: ${media.masterPath}.`);
			}
		}

		if (entry.data.coverImage) {
			if (!entry.data.coverImage.alt) errors.push(`${entryLabel(entry)}: coverImage is missing alt text.`);
			if (entry.data.coverImage.src?.startsWith('/')) {
				const coverPath = join(root, 'public', entry.data.coverImage.src.replace(/^\/+/, ''));
				if (!existsSync(coverPath)) errors.push(`${entryLabel(entry)}: coverImage not found: ${entry.data.coverImage.src}.`);
			}
		}

		if (entry.data.visibility === 'private-summary') {
			if (entry.data.repository || entry.data.demo) {
				errors.push(`${entryLabel(entry)}: private-summary content must not expose repository or demo.`);
			}
			if ((entry.data.media ?? []).some((media) => media.visibility === 'private' && media.webSrc)) {
				errors.push(`${entryLabel(entry)}: private-summary content exposes a private media webSrc.`);
			}
		}
	}

	const byTranslationKey = Map.groupBy(collectionEntries, (entry) => entry.data.translationKey);
	for (const [translationKey, translations] of byTranslationKey) {
		const publicTranslations = translations.filter((entry) => entry.data.draft !== true);
		if (publicTranslations.length > 0) {
			const locales = new Set(translations.map((entry) => entry.data.locale));
			for (const locale of ['ko', 'en']) {
				if (!locales.has(locale)) errors.push(`${collection}/${translationKey}: public content is missing ${locale} translation.`);
			}
		}
		if (translations.length === 2) {
			const [left, right] = translations;
			for (const field of ['roleLenses', 'competencies', 'evidenceLevels', 'priority']) {
				if (JSON.stringify(left.data[field]) !== JSON.stringify(right.data[field])) {
					errors.push(`${collection}/${translationKey}: ${field} differs between locales.`);
				}
			}
		}
	}
}

const keySets = Object.fromEntries(collectionNames.map((collection) => [
	collection,
	new Set(byCollection[collection].map((entry) => entry.data.translationKey)),
]));

const referenceRules = {
	projects: {
		relatedProjects: 'projects',
		relatedPosts: 'posts',
		relatedChallenges: 'challenges',
		relatedExperiences: 'experiences',
	},
	posts: { relatedProjects: 'projects' },
	experiences: { relatedProjects: 'projects', relatedChallenges: 'challenges' },
	challenges: { relatedProject: 'projects', relatedPosts: 'posts' },
};

for (const entry of entries) {
	for (const [field, targetCollection] of Object.entries(referenceRules[entry.collection])) {
		const raw = entry.data[field];
		const references = Array.isArray(raw) ? raw : raw ? [raw] : [];
		for (const reference of references) {
			if (!keySets[targetCollection].has(reference)) {
				errors.push(`${entryLabel(entry)}: ${field} references missing ${targetCollection} key "${reference}".`);
			}
		}
	}
}

const projectsByKey = new Map(byCollection.projects.map((entry) => [entry.data.translationKey, entry]));
const postsByKey = new Map(byCollection.posts.map((entry) => [entry.data.translationKey, entry]));

for (const project of byCollection.projects) {
	for (const postKey of project.data.relatedPosts ?? []) {
		const post = postsByKey.get(postKey);
		if (post && !(post.data.relatedProjects ?? []).includes(project.data.translationKey)) {
			errors.push(`${entryLabel(project)}: related post "${postKey}" does not link back to project.`);
		}
	}
}

for (const post of byCollection.posts) {
	for (const projectKey of post.data.relatedProjects ?? []) {
		const project = projectsByKey.get(projectKey);
		if (project && !(project.data.relatedPosts ?? []).includes(post.data.translationKey)) {
			errors.push(`${entryLabel(post)}: related project "${projectKey}" does not link back to post.`);
		}
	}
}

for (const project of byCollection.projects) {
	const required = [
		'summary', 'period', 'status', 'role', 'team', 'overview', 'problem',
		'whyItMattered', 'context', 'user', 'contributions', 'process',
		'keyDecisions', 'technicalStructure', 'technologies', 'outcomes',
		'whatIWouldChange', 'learnings', 'visibility',
	];
	for (const field of required) {
		const value = project.data[field];
		if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
			errors.push(`${entryLabel(project)}: required Project section source "${field}" is empty.`);
		}
	}
	for (const section of project.data.portfolioSections ?? []) {
		for (const assetId of section.assetIds ?? []) {
			if (!(project.data.media ?? []).some((media) => media.id === assetId)) {
				errors.push(`${entryLabel(project)}: portfolioSections references missing media id "${assetId}".`);
			}
		}
	}
}

const counts = Object.fromEntries(collectionNames.map((collection) => [
	collection,
	{
		total: byCollection[collection].length,
		ko: byCollection[collection].filter((entry) => entry.data.locale === 'ko').length,
		en: byCollection[collection].filter((entry) => entry.data.locale === 'en').length,
		public: byCollection[collection].filter((entry) => entry.data.draft !== true).length,
		draft: byCollection[collection].filter((entry) => entry.data.draft === true).length,
	},
]));

if (warnings.length > 0) {
	console.warn(`Content validation warnings (${warnings.length}):`);
	warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length > 0) {
	console.error(`Content validation failed (${errors.length}):`);
	errors.forEach((error) => console.error(`- ${error}`));
	process.exitCode = 1;
} else {
	console.log('Content validation passed.');
	console.log(JSON.stringify(counts, null, 2));
}
