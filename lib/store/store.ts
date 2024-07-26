import { create } from "zustand";
import {
  isAdminMobileState,
  IsMobileState,
  MobileNavToggleState,
  UserActionActiveIndexState,
  UserActionMobileSideBarState,
  UserActionRenderState,
  UserActionSideBarState,
} from "@/typings";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isMobileNavOpen: false,
  setIsMobileNavOpen: (isMobileNavOpen) => set(() => ({ isMobileNavOpen })),
}));

export const useIsMobile = create<IsMobileState>((set) => ({
  mobile: null,
  setMobile: (mobile) => set(() => ({ mobile })),
}));

export const userActionActiveIndex = create<UserActionActiveIndexState>(
  (set) => ({
    activeIndex: null,
    setActiveIndex: (activeIndex) => set(() => ({ activeIndex })),
  })
);

export const userActionInitialRender = create<UserActionRenderState>((set) => ({
  initialRender: true,
  setInitialRender: (initialRender) => set(() => ({ initialRender })),
}));

export const userActionMobileSideBarToggle =
  create<UserActionMobileSideBarState>((set) => ({
    isMobileOpen: null,
    setIsMobileOpen: (isMobileOpen) => set(() => ({ isMobileOpen })),
  }));

export const userActionSideBarToggle = create<UserActionSideBarState>(
  (set) => ({
    isOpen: null,
    setIsOpen: (isOpen) => set(() => ({ isOpen })),
  })
);

// Admin Store
// Store for the Admin MObile Sidebar
export const adminSidebarToggle = create<isAdminMobileState>((set) => ({
  adminMobileOpen: null,
  setAdminMobileOpen: (adminMobileOpen) => set(() => ({ adminMobileOpen })),
}));
