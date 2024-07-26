"use client";

import { adminSidebarToggle } from "@/lib/store/store";
import { MouseEvent } from "react";

export default function NavToggle({ background }: { background: string }) {
  const { adminMobileOpen, setAdminMobileOpen } = adminSidebarToggle();

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setAdminMobileOpen(!adminMobileOpen);
  };
  return (
    <button
      type="button"
      className="navToggle"
      onClick={handleClick}
      aria-label="Toggle Navigation"
    >
      <span className={` ${background} ${adminMobileOpen && "active"}`}></span>
      <span className={` ${background} ${adminMobileOpen && "active"}`}></span>
    </button>
  );
}
