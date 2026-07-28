export const locales = ['ko', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';
export const localeStorageKey = 'hamo-preferred-locale';

export const languageLabels: Record<Locale, string> = {
	ko: '한국어',
	en: 'English',
};

const dateLocales: Record<Locale, string> = {
	ko: 'ko-KR',
	en: 'en-US',
};

export const isLocale = (value: string | undefined): value is Locale => {
	return locales.includes(value as Locale);
};

export const getLocaleStaticPaths = () => {
	return locales.map((locale) => ({ params: { locale } }));
};

export const localizedPath = (locale: Locale, path = '') => {
	const normalizedPath = path.replace(/^\/+|\/+$/g, '');

	return normalizedPath ? `/${locale}/${normalizedPath}/` : `/${locale}/`;
};

export const formatDate = (date: Date, locale: Locale) => {
	return new Intl.DateTimeFormat(dateLocales[locale], {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
};

export type LocalePaths = Record<Locale, string>;
