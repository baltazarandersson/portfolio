import projectsMock from 'src/mocks/projects'
import { getTags } from './tags'
import type { ProjectType, ProjectWithKeysType } from 'types/projects'
import type { Lang } from '@i18n/ui'

export async function getProjects(lang: Lang): Promise<ProjectType[]> {
	const tagsObj = await getTags()

	const projects = projectsMock as ProjectWithKeysType[]

	return projects.map(({ tags, description, ...rest }) => ({
		...rest,
		description: description[lang],
		tags: tags.map((tag) => tagsObj[tag])
	}))
}
