import type { TagKeys } from './tags'
import type { LocalizedText } from './index'

/** Resolved job (single language) consumed by components. */
export type JobType = {
	position: string
	company: string
	type: string
	from: number
	to: number | null
	description: string
	stack: TagKeys[]
	logo: ImageMetadata
}

/** Raw job in the mock, with localized copy resolved by `getJobs(lang)`. */
export type JobMock = Omit<JobType, 'type' | 'description'> & {
	type: LocalizedText
	description: LocalizedText
}
