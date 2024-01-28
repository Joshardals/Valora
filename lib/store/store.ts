import { MobileNavToggleState, ScrolledDownState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const useScrolledDown = create<ScrolledDownState>((set) => ({
  scrolledDown: false,
  setScrolledDown: (scrolledDown) => set(() => ({ scrolledDown })),
}));
