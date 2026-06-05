import { SECTION_CLASS } from '@constants/index'
import type { SectionType } from 'types/index'

export const getNavSectionId = (section: SectionType) => `nav-section-${section}`

export const getNavSectionById = (section: SectionType): HTMLElement | null =>
	typeof document === 'undefined' ? null : document.getElementById(getNavSectionId(section))

export const getActiveNavSection = () => {
	if (typeof document === 'undefined' || typeof window === 'undefined') return null

	let maxPercentage = 0
	let mostVisibleSectionId: SectionType = 'presentation'
	const sections = document.querySelectorAll<HTMLElement>(`.${SECTION_CLASS}`)
	if (sections.length === 0) return null

	sections.forEach((section) => {
		const { bottom, top } = section.getBoundingClientRect()
		const visibleHeight = Math.max(0, Math.min(bottom, window.innerHeight) - Math.max(top, 0))
		const visiblePercentage = (visibleHeight / (bottom - top)) * 100

		if (visiblePercentage > maxPercentage) {
			maxPercentage = visiblePercentage
			mostVisibleSectionId = section.id as SectionType
		}
	})

	return getNavSectionById(mostVisibleSectionId)
}
