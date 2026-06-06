import { getRelativeLocaleUrl } from 'astro:i18n'
import { ui, defaultLang, type Lang, type TranslationKey } from './ui'

export const isLang = (value: string | undefined): value is Lang => value === 'en' || value === 'es'

export const getLang = (locale: string | undefined): Lang => (isLang(locale) ? locale : defaultLang)

/** Returns a `t(key)` function bound to the given locale, falling back to the default language. */
export const useTranslations = (locale: string | undefined) => {
	const lang = getLang(locale)
	return (key: TranslationKey): string => ui[lang][key] ?? ui[defaultLang][key]
}

/** Strip a leading `/es` segment so we get a locale-agnostic path. */
const stripLocale = (pathname: string): string => pathname.replace(/^\/es(?=\/|$)/, '') || '/'

/**
 * Build `{ en, es }` URLs for the current page based on its path. Good for every
 * route except blog posts, whose slugs differ per language (those pass explicit
 * alternates computed from `translationKey`).
 */
export const getLocaleAlternates = (pathname: string): Record<Lang, string> => {
	const base = stripLocale(pathname)
	return {
		en: getRelativeLocaleUrl('en', base),
		es: getRelativeLocaleUrl('es', base)
	}
}
