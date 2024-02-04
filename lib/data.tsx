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
      label: "profile",
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
