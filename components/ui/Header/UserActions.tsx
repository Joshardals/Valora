import { CiUser, CiBookmark, CiShoppingCart } from "react-icons/ci";
export default function UserActions() {
  return (
    <ul className="flex items-center space-x-4 *:cursor-pointer link-list">
      <li>
        <CiUser size={20} aria-label="Profile Icon" />
      </li>
      <li>
        {" "}
        <CiBookmark size={20} aria-label="Wishlist" />
      </li>
      <li>
        {" "}
        <CiShoppingCart size={20} aria-label="Shopping Cart" />
      </li>
    </ul>
  );
}
