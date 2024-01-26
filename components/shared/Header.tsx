import Link from "next/link";
import Logo from "../ui/Header/Logo";
import NavLinks from "../ui/Header/NavLinks";

export default function Header() {
  return (
    <section className="flex items-center justify-between bg-secondary text-primary p-5 select-none">
      <Logo />
      <NavLinks />
      <div>header</div>
    </section>
  );
}
