export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface NoScrollState {
  noScroll: boolean;
  setNoScroll: (isOpen: NoScrollState["noScroll"]) => void;
}
