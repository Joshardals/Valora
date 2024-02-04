export interface InputProps {
  placeholder: string;
  type: string;
}

export interface IsMobileState {
  mobile: boolean | null; 
  setMobile: (mobile: IsMobileState["mobile"]) => void; 
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
  setActiveIndex: (
    activeIndex: UserActionActiveIndexState["activeIndex"]
  ) => void;
}

export interface UserActionRenderState {
  initialRender: null | boolean;
  setInitialRender: (wasClosed: UserActionRenderState["initialRender"]) => void;
}
