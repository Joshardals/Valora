import { links } from "@/lib/data";
import Link from "next/link";

export default function NavLinks() {
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
