"use client";
import { useEffect } from "react";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import { useScrolled } from "@/lib/store/store";

export default function Header() {
  const { scrolled, setScrolled } = useScrolled();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scroll = window.scrollY;

  //     if (scroll > 50) {
  //       console.log(scroll.toFixed());
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll as any);
  // }, [window]);
  return (
    <header
      className="grid grid-cols-3 items-center text-secondary py-5 px-8 max-md:px-5 select-none
    justify-start"
    >
      <Logo />
      <div className="justify-self-center max-md:hidden">
        <NavLinks />
      </div>
      <div className="justify-self-end max-md:col-span-2">
        <UserActions />
      </div>
    </header>
  );
}
