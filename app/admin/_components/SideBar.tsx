"use client";
import { AdminLinks } from "@/components/ui/Header/NavLinks";
import { adminSidebarToggle } from "@/lib/store/store";
import Logo from "@/components/ui/Header/Logo";
import { useEffect } from "react";

export function SideBar() {
  return (
    <aside className="fixed bg-primary text-secondary h-screen w-full md:w-[20rem] max-lg:hidden">
      <div className="space-y-10">
        <div className="p-5 flex justify-center items-center">
          <Logo />
        </div>
        <AdminLinks />
      </div>
    </aside>
  );
}

export function MobileSideBar() {
  const { adminMobileOpen } = adminSidebarToggle();

  useEffect(() => {
    if (adminMobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [adminMobileOpen]);

  return (
    <div
      className={`fixed top-0 left-0 min-h-screen bg-primary text-secondary lg:hidden p-5 w-full
    transition-transform duration-700 ${
      adminMobileOpen ? "-translate-x-0" : "translate-x-full"
    }`}
    >
      <div
        className={`${adminMobileOpen ? "fadeIn" : "opacity-0"} mt-[4.7rem]`}
      >
        <AdminLinks />
      </div>
    </div>
  );
}
