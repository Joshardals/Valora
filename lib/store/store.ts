import { MobileNavToggleState, NoScrollState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));

export const useNoScroll = create<NoScrollState>((set) => ({
  noScroll: false,
  setNoScroll: (noScroll) => set(() => ({ noScroll })),
}));
