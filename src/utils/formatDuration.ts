import { useTranslations } from '@i18n/utils'
import type { Lang } from '@i18n/ui'

export const formatDuration = (months: number, lang: Lang): string => {
	const t = useTranslations(lang)
	const years = Math.floor(months / 12)
	const remainingMonths = months % 12

	const parts: string[] = []

	if (years > 0) {
		parts.push(`${years} ${years > 1 ? t('duration.years') : t('duration.year')}`)
	}

	if (remainingMonths > 0) {
		parts.push(
			`${remainingMonths} ${remainingMonths > 1 ? t('duration.months') : t('duration.month')}`
		)
	}

	return parts.length > 0 ? parts.join(' ') : `0 ${t('duration.months')}`
}
