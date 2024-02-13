"use client";

import {
  mobileNavToggle,
  userActionMobileSideBarToggle,
} from "@/lib/store/store";
import { MouseEvent } from "react";

export default function NavToggle({ background }: { background: string }) {
  const { isOpen, setIsMobileNavOpen } = mobileNavToggle();
  const { isMobileOpen, setIsMobileOpen } = userActionMobileSideBarToggle();

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsMobileNavOpen(!isOpen);
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <button
      type="button"
      className="navToggle"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` ${background} ${isOpen && "active"}`}></span>
      <span className={` ${background} ${isOpen && "active"}`}></span>
    </button>
  );
}
