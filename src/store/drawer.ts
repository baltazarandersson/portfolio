import { throttle } from "@utils/throttle";
import { get, writable } from "svelte/store";

export const drawerStore = writable(false);

export const openDrawer = () => {
  drawerStore.update(() => true);
  document.body.classList.add("overflow-hidden");
};

export const closeDrawer = () => {
  drawerStore.update(() => false);
  document.body.classList.remove("overflow-hidden");
};

export const toggleDrawer = throttle(() => {
  const isDrawerOpen = get(drawerStore);

  isDrawerOpen ? closeDrawer() : openDrawer();
}, 500);
