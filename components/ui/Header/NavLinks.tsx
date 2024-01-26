import Link from "next/link";

const links = [
  {
    label: "Shop",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Search",
    href: "#",
    icon: "",
  },
];
export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center space-x-10">
        {links.map((link, index) => {
          const { label, href, icon } = link;
          return (
            <li key={index}>
              <Link href={href} className="uppercase font-light">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
