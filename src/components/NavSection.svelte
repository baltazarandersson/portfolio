<script lang="ts">
  import { getActiveNavSection, getNavSectionId } from "@utils/getNavSection";
  import { throttle } from "@utils/throttle";
  import { closeDrawer } from "src/store/drawer";
  import type { SectionType } from "types/index";

  export let section: SectionType;
  const sectionId = getNavSectionId(section);
  const parseSection = (section: SectionType) =>
    section.charAt(0).toUpperCase() + section.slice(1);

  export let label: string = parseSection(section);

  let activeSectionId: SectionType;

  const updateActiveSection = throttle(() => {
    if (typeof document !== "undefined") {
      activeSectionId = getActiveNavSection().getAttribute("id") as SectionType;
    }
  });

  updateActiveSection();
</script>

<svelte:window
  on:scroll={updateActiveSection}
  on:resize={updateActiveSection}
/>

<a
  on:click={closeDrawer}
  href={`/#${section}`}
  class={`text-lg  transition dark:hover:text-orange-400 hover:text-orange-500 decoration-transparent hover:decoration-inherit ${
    activeSectionId === sectionId
      ? "text-orange-500 dark:text-orange-400"
      : "underline"
  }`}
  id={sectionId}
>
  {label}
</a>
