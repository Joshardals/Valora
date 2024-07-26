import Logo from "@/components/ui/Header/Logo";
import NavToggle from "./Dashboard/NavToggle";

export function Header() {
  return (
    <header className="fixed bg-primary w-full text-secondary lg:hidden p-5 flex items-center justify-between">
      <Logo />
      <NavToggle background="bg-secondary" />
    </header>
  );
}
