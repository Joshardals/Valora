import { MobileNavToggleState, ScrolledState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const useScrolled = create<ScrolledState>((set) => ({
  scrolled: 0,
  setScrolled: (scrolled) => set(() => ({ scrolled })),
}));
