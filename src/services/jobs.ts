import jobs from 'src/mocks/jobs'
import type { JobType } from 'types/jobs'

export async function getJobs(): Promise<JobType[]> {
	return jobs
}
