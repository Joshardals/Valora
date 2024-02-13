import { links } from "@/lib/data";
import Link from "next/link";
import { userActionMobileSideBarToggle } from "@/lib/store/store";
import SecondSection from "./SecondSection";

export default function UserActionMobileSideBar() {
  const { isMobileOpen } = userActionMobileSideBarToggle();

  return (
    <div
      className={`fixed text-secondary top-0 right-0 bg-primary divide-y divide-secondary/20
    min-h-[100svh] w-full transition-transform duration-700 space-y-8 max-md:p-5 md:hidden
    ${isMobileOpen ? "-translate-x-0" : "translate-x-full"}
    `}
    >
      <div className={`${isMobileOpen ? "fadeIn" : "opacity-0"}`}>
        <section className="pt-24 pb-2">
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
        </section>

        {/* Second Section */}
        <SecondSection />
      </div>
    </div>
  );
}
