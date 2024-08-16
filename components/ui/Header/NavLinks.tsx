import { signOutUser } from "@/lib/actions/auth/auth.action";
import { adminlinks, footerLinks1, footerLinks2, links } from "@/lib/data";
import { adminSidebarToggle } from "@/lib/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Admin Links Component
export function AdminLinks() {
  const { adminMobileOpen, setAdminMobileOpen } = adminSidebarToggle();
  const pathname = usePathname();
  const manageProducts = pathname.startsWith("/admin/products");

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error: any) {
      console.error(`Error Logging Out: ${error.message}`);
    }
  };

  return (
    <nav>
      <ul className={`space-y-4 px-5 ${adminMobileOpen && "px-0"}`}>
        {adminlinks?.map((link) => {
          const { label, href } = link;
          return (
            <li
              key={label}
              className={`${
                pathname == href ||
                (label === "manage products" && manageProducts)
                  ? "bg-secondary text-primary"
                  : ""
              } py-2 px-5 hover:bg-secondary hover:text-primary
              transition-all duration-300 ease-linear rounded-md`}
              onClick={() => {
                if (adminMobileOpen) {
                  setAdminMobileOpen(false);
                }
              }}
            >
              <Link href={href} className={`uppercase font-light`}>
                <p> {label}</p>
              </Link>
            </li>
          );
        })}
        <li
          className="px-5 cursor-pointer w-[fit-content] underline"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
}

// Footer Links Component
export function FooterLinks() {
  return (
    <nav className="grid md:grid-cols-2 md:gap-4 max-md:gap-12">
      <ul className="linkList space-y-1">
        {footerLinks1?.map((link) => {
          const { label, href } = link;
          return (
            <li key={label}>
              <Link href={href} className={`uppercase font-light`}>
                <p> {label}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="linkList space-y-1">
        {footerLinks2?.map((link) => {
          const { label, href } = link;
          return (
            <li key={label}>
              <Link href={href} className={`uppercase font-light`}>
                <p> {label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Landing Page Header Links Component
export function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center space-x-10 linkList">
        {links?.map((link) => {
          const { label, href, icon } = link;
          return (
            <li key={label}>
              <Link
                href={href}
                className={`uppercase font-light ${
                  icon && "flex items-center space-x-1"
                }`}
              >
                {icon}
                <p> {label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
