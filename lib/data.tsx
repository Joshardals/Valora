// storing data for the UserActions Component Start.
import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiCurrencyGbpLight } from "react-icons/pi";
import { useIsMobile } from "./store/store";
import useMobile from "./hooks/useMobile";

export const IconItems = () => {
  const { mobile } = useIsMobile();
  useMobile();

  const items = [
    {
      label: "currency",
      icon: <PiCurrencyGbpLight size={20} aria-label="Currency" />,
    },
    {
      label: "account",
      icon: <CiUser size={20} aria-label="Profile Icon" />,
    },
    {
      label: "wishlist",
      icon: <CiBookmark size={20} aria-label="Wishlist" />,
    },
    {
      label: "search",
      icon: <CiSearch size={mobile ? 25 : 20} aria-label="Search" />,
    },
    {
      label: "cart",
      icon: (
        <CiShoppingCart size={mobile ? 25 : 20} aria-label="Shopping Cart" />
      ),
    },
  ];

  return items;
};

// storing data for the UserActions Component End.

// Navigation Links that will be used throughout the site.
export const links = [
  { label: "New In", href: "#" },
  { label: "Shop", href: "#" },
  { label: "About us", href: "#" },
  { label: "Search", href: "#", icon: <CiSearch size={20} /> },
];

//Navigation Links for Footer
export const footerLinks1 = [
  { label: "contact us", href: "#" },
  { label: "delivery & returns", href: "#" },
  { label: "privacy policy", href: "#" },
  { label: "terms & conditions", href: "#" },
  { label: "manage cookies", href: "#" },
];

export const footerLinks2 = [
  { label: "facebook", href: "#" },
  { label: "instagram", href: "#" },
];
