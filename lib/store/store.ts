import { MobileNavToggleState, ScrolledState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const useScrolled = create<ScrolledState>((set) => ({
  scrolled: false,
  setScrolled: (scrolled) => set(() => ({ scrolled })),
}));
