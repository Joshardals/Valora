import { links } from "@/lib/data";
import Link from "next/link";
import { userActionMobileSideBarToggle } from "@/lib/store/store";

export default function UserActionMobileSideBar() {
  const { isMobileOpen } = userActionMobileSideBarToggle();
  return (
    <section
      className={`fixed text-secondary top-0 right-0 bg-primary divide-y divide-secondary/20
    min-h-[100svh] w-full transition-transform duration-700 space-y-8 max-md:p-5 md:hidden
    ${isMobileOpen ? "-translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="mt-24">
        <ul className="space-y-12">
          {links.map((link) => {
            const { label, href } = link;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`${label === "Search" && "hidden"}`}
                >
                  <h1 className=" text-[2.5rem] font-light">{label}</h1>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>      
      <div>1</div>
    </section>
  );
}
