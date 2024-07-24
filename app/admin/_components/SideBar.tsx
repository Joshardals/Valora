import Logo from "@/components/ui/Header/Logo";
import { AdminLinks } from "@/components/ui/Header/NavLinks";

export function SideBar() {
  return (
    // <asic className="bg-white fixed w-full py-5 px-8 max-md:px-5 select-none text-primary grid grid-cols-3">
    //   {/* <Logo /> */}

    //   {/* <AdminLinks /> */}
    // </header>

    <aside className="fixed bg-primary text-secondary h-screen w-full md:w-[28rem]">
      <div className="space-y-10">
        <div className="p-5 flex justify-center">
          <Logo />
        </div>
        <AdminLinks />
      </div>
    </aside>
  );
}
