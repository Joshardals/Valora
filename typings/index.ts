export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface ScrolledDownState {
  scrolledDown: boolean;
  setScrolledDown: (isOpen: ScrolledDownState["scrolledDown"]) => void;
}
