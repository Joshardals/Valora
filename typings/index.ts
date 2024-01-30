export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface UserActionSideBarState {
  isOpen: boolean;
  setIsOpen: (isOpen: UserActionSideBarState["isOpen"]) => void;
}
