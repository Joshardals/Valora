"use client";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import HeaderInfo from "../ui/Header/HeaderInfo";
import useScrollDirection from "@/lib/hooks/useScrollDirection";
import { useNoScroll } from "@/lib/store/store";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const { noScroll } = useNoScroll();

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? " max-md:-top-[100%] -top-24" : "top-0"
      } transition-all duration-200 z-10`}
    >
      <HeaderInfo />
      <div
        className={`grid grid-cols-3 items-center max-md:bg-secondary max-md:text-primary py-5 px-8 max-md:px-5 select-none
        justify-start headerHover ${
          scrollDirection === "up" && !noScroll
            ? "text-primary bg-secondary"
            : "text-secondary"
        } `}
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
