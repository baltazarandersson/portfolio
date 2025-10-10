import projectsMock from 'src/mocks/projects'
import { getTags } from './tags'
import type { ProjectType, ProjectWithKeysType } from 'types/projects'

export async function getProjects(): Promise<ProjectType[]> {
	const tagsObj = await getTags()

	const projects = projectsMock as ProjectWithKeysType[]

	return projects.map(({ tags, ...rest }) => ({ ...rest, tags: tags.map((tag) => tagsObj[tag]) }))
}
