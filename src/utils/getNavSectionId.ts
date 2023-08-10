import type { SectionType } from "types/index";

export const getNavSectionId = (section: SectionType) =>
  `nav-section-${section}`;
