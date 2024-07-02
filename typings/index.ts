export interface InputProps {
  placeholder: string;
  type: string;
}

export interface IsMobileState {
  mobile: boolean | null;
  setMobile: (mobile: IsMobileState["mobile"]) => void;
}

export interface MobileNavToggleState {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (
    isMobileNavOpen: MobileNavToggleState["isMobileNavOpen"]
  ) => void;
}

export interface UserActionActiveIndexState {
  activeIndex: null | number;
  setActiveIndex: (
    activeIndex: UserActionActiveIndexState["activeIndex"]
  ) => void;
}

export interface UserActionMobileSideBarState {
  isMobileOpen: null | boolean;
  setIsMobileOpen: (
    isOpen: UserActionMobileSideBarState["isMobileOpen"]
  ) => void;
}

export interface UserActionRenderState {
  initialRender: null | boolean;
  setInitialRender: (wasClosed: UserActionRenderState["initialRender"]) => void;
}

export interface UserActionSideBarState {
  isOpen: null | boolean;
  setIsOpen: (isOpen: UserActionSideBarState["isOpen"]) => void;
}
