<script lang="ts">
  import { MOBILE_WIDTH } from "@constants/index";

  let innerWidth: number;

  const getCoords = () => ({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
  });

  let coords = { left: window.innerWidth / 2, top: window.innerHeight };
  let isMobileDevice = window.innerWidth < MOBILE_WIDTH;
  let divElement: HTMLDivElement;

  const updateCoords = ({ x, y }: Record<string, number> = {}) => {
    if (x !== undefined && y !== undefined) {
      coords = { left: x, top: y };
    } else {
      coords = getCoords();
    }
  };

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (isMobileDevice) return;

    updateCoords({
      x: clientX + divElement.clientWidth / 2,
      y: clientY + divElement.clientHeight / 2,
    });
  };

  if (isMobileDevice) {
    setTimeout(() => {
      updateCoords();

      setInterval(() => {
        if (isMobileDevice) updateCoords();
      }, 5000);
    }, 1500);
  } else {
    updateCoords();
  }

  $: isMobileDevice = innerWidth < MOBILE_WIDTH;
</script>

<svelte:window on:mousemove={handleMouseMove} bind:innerWidth />

<div
  bind:this={divElement}
  style="--left:{coords.left}px; --top:{coords.top}px; transition:{isMobileDevice
    ? 'left 5s ease-in-out, top 5s ease-in-out'
    : ''}"
  class="fixed w-64 h-64 overflow-hidden rounded-full opacity-50 pointer-events-none blur-2xl -z-10 bg-gradient-to-br from-amber-200 via-orange-200 to-red-300 dark:from-orange-500 dark:via-amber-600 dark:to-amber-400 dark:opacity-20"
/>

<style>
  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  div {
    animation: spin 10s linear infinite;
    left: var(--left);
    top: var(--top);
  }
</style>
