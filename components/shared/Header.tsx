"use client";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";
import UserActions from "../ui/Header/UserActions";
import { useScrolledDown } from "@/lib/store/store";
import HeaderInfo from "../ui/Header/HeaderInfo";
import useScrollPos from "@/lib/hooks/useScrollPos";

export default function Header() {
  const { scrolledDown } = useScrolledDown();
  const scroll = useScrollPos();

  return (
    <header className={`${!scrolledDown ? "block" : "hidden"}`}>
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
