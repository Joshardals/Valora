import { create } from "zustand";
import {
  MobileNavToggleState,
  UserActionActiveIndexState,
  UserActionSideBarState,
} from "@/typings";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const userActionsSideBarToggle = create<UserActionSideBarState>(
  (set) => ({
    isOpen: null,
    setIsOpen: (isOpen) => set(() => ({ isOpen })),
  })
);

export const userActionActiveIndex = create<UserActionActiveIndexState>(
  (set) => ({
    activeIndex: null,
    setActiveIndex: (activeIndex) => set(() => ({ activeIndex })),
  })
);
