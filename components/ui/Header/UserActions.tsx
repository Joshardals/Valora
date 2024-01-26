import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
export default function UserActions() {
  return (
    <div className="flex items-center space-x-4 *:cursor-pointer">
      <CiUser size={20} aria-label="Profile Icon" />
      <CiBookmark size={20} aria-label="Wishlist" />
      <CiShoppingCart size={20} aria-label="Shopping Cart"/>
    </div>
  );
}
