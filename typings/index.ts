export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface ScrollState {
  scroll: boolean;
  setScroll: (isOpen: ScrollState["scroll"]) => void;
}
