export interface InputProps {
  placeholder: string; 
  type: string; 
}

export interface MobileNavToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: MobileNavToggleState["isOpen"]) => void;
}

export interface UserActionSideBarState {
  isOpen: null | boolean;
  setIsOpen: (isOpen: UserActionSideBarState["isOpen"]) => void;
}

export interface UserActionActiveIndexState {
  activeIndex: null | number;
  setActiveIndex: (index: UserActionActiveIndexState["activeIndex"]) => void;
}
