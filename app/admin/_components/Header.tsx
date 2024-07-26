import Logo from "@/components/ui/Header/Logo";
import NavToggle from "./Dashboard/NavToggle";

export function Header() {
  return (
    <header className="fixed z-20 bg-primary w-full text-secondary lg:hidden p-5 flex items-center justify-between">
      <Logo />
      <div className="pt-1 max-h-5">
        <NavToggle background="bg-secondary" />
      </div>
    </header>
  );
}
