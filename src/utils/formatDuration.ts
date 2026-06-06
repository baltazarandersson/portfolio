export const formatDuration = (months: number): string => {
	const years = Math.floor(months / 12)
	const remainingMonths = months % 12

	const parts: string[] = []

	if (years > 0) {
		parts.push(`${years} year${years > 1 ? 's' : ''}`)
	}

	if (remainingMonths > 0) {
		parts.push(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`)
	}

	return parts.length > 0 ? parts.join(' ') : '0 months'
}
