import Logo from "@/components/ui/Header/Logo";
import { AdminLinks } from "@/components/ui/Header/NavLinks";

export function SideBar() {
  return (
    <aside className="fixed bg-primary text-secondary h-screen w-full md:w-[20rem]">
      <div className="space-y-10">
        <div className="p-5 flex justify-center">
          <Logo />
        </div>
        <AdminLinks />
      </div>
    </aside>
  );
}
