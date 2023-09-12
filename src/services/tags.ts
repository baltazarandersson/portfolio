import tags from 'src/mocks/tags'
import type { TagKeys, TagType } from 'src/types/tags'

export async function getTags(): Promise<Record<TagKeys, TagType>> {
	return tags
}

export async function parseTags({ tags = [] }: { tags: TagKeys[] }): Promise<TagType[]> {
	const tagsObj = await getTags()

	return tags.map((tag) => tagsObj[tag])
}
