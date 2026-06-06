import { getCollection, type CollectionEntry } from 'astro:content'
import { getRelativeLocaleUrl } from 'astro:i18n'
import type { Lang } from './ui'

export const getPostSlug = (id: string) => id.replace(/\.md$/, '')

export const getPublishedPosts = async () =>
	(await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
	)

export const getPostsByLang = async (lang: Lang) =>
	(await getPublishedPosts()).filter((post) => post.data.language === lang)

/** One static route per post in the given language; ES posts are served under /es/blog. */
export const getBlogStaticPaths = async (lang: Lang) => {
	const posts = await getPostsByLang(lang)
	return posts.map((post) => ({ params: { slug: getPostSlug(post.id) }, props: { post } }))
}

/** `{ en, es }` URLs for a post, resolved through its translationKey. Falls back to
    the locale's blog index when a translation does not exist. */
export const getPostAlternates = async (
	post: CollectionEntry<'blog'>
): Promise<Record<Lang, string>> => {
	const all = await getPublishedPosts()
	const findFor = (lang: Lang) => {
		if (post.data.language === lang) return post
		if (!post.data.translationKey) return undefined
		return all.find(
			(candidate) =>
				candidate.data.translationKey === post.data.translationKey &&
				candidate.data.language === lang
		)
	}

	const localizedPostUrl = (lang: Lang, entry: CollectionEntry<'blog'> | undefined) =>
		entry
			? getRelativeLocaleUrl(lang, `/blog/${getPostSlug(entry.id)}/`)
			: getRelativeLocaleUrl(lang, '/blog/')

	return {
		en: localizedPostUrl('en', findFor('en')),
		es: localizedPostUrl('es', findFor('es'))
	}
}
