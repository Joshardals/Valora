"use client";

import { mobileNavToggle } from "@/lib/store/store";
import { MouseEvent } from "react";

export default function NavToggle() {
  const { isOpen, setIsOpen } = mobileNavToggle();

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <button
      type="button"
      className="navToggle"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` bg-primary ${isOpen && "active"}`}></span>
      <span className={` bg-primary ${isOpen && "active"}`}></span>
    </button>
  );
}
