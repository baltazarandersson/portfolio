import type { TagKeys, TagType } from './tags'
import type { LocalizedText } from './index'

export type ProjectWithKeysType = {
	thumbnail: ImageMetadata
	title: string
	description: LocalizedText
	repository: string
	deploy?: string
	tags: TagKeys[]
}

/** Resolved project (single language, tag objects) consumed by components. */
export interface ProjectType extends Omit<ProjectWithKeysType, 'tags' | 'description'> {
	tags: TagType[]
	description: string
}
