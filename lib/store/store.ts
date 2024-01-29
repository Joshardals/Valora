import { MobileNavToggleState, ScrollState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const useScroll = create<ScrollState>((set) => ({
  scroll: false,
  setScroll: (scroll) => set(() => ({ scroll })),
}));
