import { AdminLinks } from "@/components/ui/Header/NavLinks";
import Logo from "@/components/ui/Header/Logo";

export function SideBar() {
  return (
    <aside className="fixed bg-primary text-secondary h-screen w-full md:w-[20rem] max-lg:hidden">
      <div className="space-y-10">
        <div className="p-5 flex md:justify-center justify-between items-center">
          <Logo />
          <div className="md:hidden">X</div>
        </div>
        <AdminLinks />
      </div>
    </aside>
  );
}

export function MobileSideBar() {
  return <></>;
}
