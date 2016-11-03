export const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
export const CLOSE_AUTH_MODAL = "CLOSE_AUTH_MODAL";
export const OPEN_SIDE_DRAWER = "OPEN_SIDE_DRAWER";
export const CLOSE_SIDE_DRAWER = "CLOSE_SIDE_DRAWER";

export const openSideDrawer = () => ({
  type: OPEN_SIDE_DRAWER
});

export const closeSideDrawer = () => ({
  type: CLOSE_SIDE_DRAWER
});

export const openAuthModal = () => ({
  type: OPEN_AUTH_MODAL
});

export const closeAuthModal = () => ({
  type: CLOSE_AUTH_MODAL
});
