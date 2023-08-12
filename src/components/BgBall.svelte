<script lang="ts">
  const getCoords = () => ({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
  });

  let coords = getCoords();
  let innerWidth: number;
  let isMobileDevice = false;

  const updateCoords = ({ x, y }: Record<string, number> = {}) => {
    if (x !== undefined && y !== undefined) {
      coords = { left: x, top: y };
    } else {
      coords = getCoords();
    }
  };

  updateCoords();

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (isMobileDevice) return;

    updateCoords({ x: clientX, y: clientY });
  };

  setInterval(() => {
    if (isMobileDevice) updateCoords();
  }, 5000);

  $: isMobileDevice = innerWidth < 1024;
</script>

<svelte:window on:mousemove={handleMouseMove} bind:innerWidth />

<div
  style="--left:{coords.left}px; --top:{coords.top}px; transition:{isMobileDevice
    ? 'left 7s ease-in-out, top 7s ease-in-out'
    : ''}"
  class="fixed w-64 h-64 overflow-hidden rounded-full opacity-50 pointer-events-none blur-2xl -z-10 bg-gradient-to-br from-amber-200 via-orange-200 to-red-300 dark:from-amber-300 dark:via-orange-400 dark:to-amber-700 dark:opacity-10"
/>

<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  div {
    animation: spin 10s linear infinite;
    left: var(--left);
    top: var(--top);
  }
</style>
