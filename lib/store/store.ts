import { MobileNavToggleState, ScrollState } from "@/typings";
import { create } from "zustand";

export const mobileNavToggle = create<MobileNavToggleState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));
