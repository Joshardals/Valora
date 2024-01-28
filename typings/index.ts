export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface ScrolledState {
  scrolled: number;
  setScrolled: (isOpen: ScrolledState["scrolled"]) => void;
}
