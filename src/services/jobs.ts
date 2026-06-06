import jobs from 'src/mocks/jobs'
import type { JobType } from 'types/jobs'
import type { Lang } from '@i18n/ui'

export async function getJobs(lang: Lang): Promise<JobType[]> {
	return jobs.map((job) => ({
		...job,
		type: job.type[lang],
		description: job.description[lang]
	}))
}
