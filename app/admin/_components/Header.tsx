import Logo from "@/components/ui/Header/Logo";
import { AdminLinks } from "@/components/ui/Header/NavLinks";

export function Header() {
  return (
    <header className="bg-white fixed w-full py-2 px-8 max-md:px-5 select-none text-primary">
      {/* <Logo /> */}
      <AdminLinks />
    </header>
  );
}
