<script lang="ts">
  import { SECTION_CLASS } from "@constants/index";
  import { getNavSectionId } from "@utils/getNavSectionId";
  import { throttle } from "@utils/throttle";
  import type { SectionType } from "types/index";

  let barWidth = 0;
  let barLeft = 0;
  let prevActiveNavEl: Element;
  let activeNavEl: Element;

  const activeElTextColor = "text-orange-400";

  function updateActiveNavEl() {
    let maxPercentage = 0;
    let mostVisibleSectionId: SectionType = "presentation";
    const sections = document.querySelectorAll<HTMLElement>(
      `.${SECTION_CLASS}`
    );

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

    const navBarElementId = getNavSectionId(mostVisibleSectionId);
    activeNavEl = document.getElementById(navBarElementId) as HTMLElement;
  }

  function updateNavBar(): void {
    if (activeNavEl) {
      const { width, left } = activeNavEl.getBoundingClientRect();

      barLeft = Math.floor(left);
      barWidth = Math.floor(width);
    }
  }

  const handleUpdateNav = throttle(() => {
    updateActiveNavEl();
    updateNavBar();
  }, 300);

  $: if (prevActiveNavEl !== activeNavEl) {
    if (prevActiveNavEl) {
      prevActiveNavEl && prevActiveNavEl.classList.toggle(activeElTextColor);
      prevActiveNavEl && prevActiveNavEl.classList.toggle("underline");
    }

    activeNavEl.classList.toggle(activeElTextColor);
    activeNavEl.classList.toggle("underline");

    prevActiveNavEl = activeNavEl;
  }

  handleUpdateNav();
</script>

<svelte:window on:scroll={handleUpdateNav} on:resize={handleUpdateNav} />

<div
  style="--width:{barWidth}px; --left:{barLeft}px;"
  class="absolute h-1 bottom-0 w-40 bg-orange-400 rounded-t-sm duration-150"
/>

<style>
  div {
    width: var(--width);
    left: var(--left);
  }
</style>
