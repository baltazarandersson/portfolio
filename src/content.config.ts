import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		readingTime: z.union([z.number(), z.string()]).optional(),
		language: z.enum(['en', 'es']).default('en'),
		translationKey: z.string().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		version: z.string().optional(),
		heroImage: z.string().optional()
	})
})

export const collections = { blog }
