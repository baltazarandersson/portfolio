import { SECTION_CLASS } from "@constants/index";
import type { SectionType } from "types/index";

export const getNavSectionId = (section: SectionType) =>
  `nav-section-${section}`;

export const getNavSectionById = (section: SectionType): HTMLElement =>
  document.getElementById(getNavSectionId(section)) as HTMLElement;

export const getActiveNavSection = () => {
  let maxPercentage = 0;
  let mostVisibleSectionId: SectionType = "presentation";
  const sections = document.querySelectorAll<HTMLElement>(`.${SECTION_CLASS}`);

  // Iterate through each section in the 'sections' array
  sections.forEach((section) => {
    // Get the bounding box of the section, containing its position and size
    const { bottom, top } = section.getBoundingClientRect();

    // Calculate the height of the section that is visible within the viewport
    const visibleHeight =
      Math.min(bottom, window.innerHeight) - Math.max(top, 0);

    // Calculate the percentage of the section that is visible within the viewport
    const visiblePercentage = (visibleHeight / (bottom - top)) * 100;

    // If this section's visible percentage is greater than the current maximum,
    // update the maximum percentage and store this section's ID as the most visible section
    if (visiblePercentage > maxPercentage) {
      maxPercentage = visiblePercentage;
      mostVisibleSectionId = section.id as SectionType;
    }
  });

  return getNavSectionById(mostVisibleSectionId);
};
