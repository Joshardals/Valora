"use client";
import { useEffect } from "react";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import { useScrolled } from "@/lib/store/store";
import HeaderInfo from "../ui/Header/HeaderInfo";

export default function Header() {
  const { scrolled, setScrolled } = useScrolled();
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 50) {
        console.log(scroll.toFixed(), "Header can now disappear");
      } else if (scroll < 50) {
        console.log(scroll.toFixed());
      }
    };

    window.addEventListener("scroll", handleScroll as any);
    return () => window.removeEventListener("scroll", handleScroll as any);
  }, []);

  return (
    <header>
      <HeaderInfo />
      <div
        className="grid grid-cols-3 items-center text-secondary max-md:bg-secondary max-md:text-primary py-5 px-8 max-md:px-5 select-none
    justify-start headerHover"
      >
        <Logo />
        <div className="justify-self-center max-md:hidden">
          <NavLinks />
        </div>
        <div className="justify-self-end max-md:col-span-2">
          <UserActions />
        </div>
      </div>
    </header>
  );
}
