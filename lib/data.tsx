// storing data for the UserActions Component Start.

import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiCurrencyGbpLight } from "react-icons/pi";

export const items = [
  {
    label: "currency",
    icon: <PiCurrencyGbpLight size={20} aria-label="Currency" />,
  },
  {
    label: "profile",
    icon: <CiUser size={20} aria-label="Profile Icon" />,
  },
  {
    label: "wishlist",
    icon: <CiBookmark size={20} aria-label="Wishlist" />,
  },
  {
    label: "search",
    icon: <CiSearch size={20} aria-label="Search" className="max-md:size-7" />,
  },
  {
    label: "cart",
    icon: (
      <CiShoppingCart
        size={20}
        aria-label="Shopping Cart"
        className="max-md:size-7"
      />
    ),
  },
];

// storing data for the UserActions Component End.
