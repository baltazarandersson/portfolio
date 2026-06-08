import type { TagKeys } from './tags'
import type { LocalizedText } from './index'

export type JobStackGroup = {
	label: string
	tags: TagKeys[]
}

export type JobStackGroupMock = Omit<JobStackGroup, 'label'> & {
	label: LocalizedText
}

/** Resolved job (single language) consumed by components. */
export type JobType = {
	position: string
	company: string
	type: string
	from: number
	to: number | null
	description: string
	stack?: TagKeys[]
	stackGroups?: JobStackGroup[]
	logo: ImageMetadata
}

/** Raw job in the mock, with localized copy resolved by `getJobs(lang)`. */
export type JobMock = Omit<JobType, 'type' | 'description' | 'stackGroups'> & {
	type: LocalizedText
	description: LocalizedText
	stackGroups?: JobStackGroupMock[]
}
