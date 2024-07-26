"use client";

import {
  mobileNavToggle,
  userActionMobileSideBarToggle,
} from "@/lib/store/store";
import { MouseEvent } from "react";

export default function NavToggle({ background }: { background: string }) {
  const { isMobileNavOpen, setIsMobileNavOpen } = mobileNavToggle();
  const { isMobileOpen, setIsMobileOpen } = userActionMobileSideBarToggle();

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <button
      type="button"
      className="navToggle"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` ${background} ${isMobileNavOpen && "active"}`}></span>
      <span className={` ${background} ${isMobileNavOpen && "active"}`}></span>
    </button>
  );
}
