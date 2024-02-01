import LoginForm from "@/components/form/LoginForm";
import {
  userActionActiveIndex,
  userActionsSideBarToggle,
} from "@/lib/store/store";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserActionsLogin() {
  const { isOpen } = userActionsSideBarToggle();
  const { activeIndex } = userActionActiveIndex();
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    profileRef.current?.classList.remove("fadeIn");
    console.log("Profile Ref Active.")
  }, [activeIndex]);

  return (
    <div
      className={`px-8 space-y-12 ${
        isOpen ? "fadeIn" : isOpen !== null && "fadeOut"
      } ${activeIndex === 1 ? "block" : "hidden"}`}
      ref={profileRef}
    >
      <div className="space-y-4">
        <h2>Log In</h2>
        <p className=" font-thin text-pretty max-w-full">
          Don&apos;t have an account?{" "}
          <span>
            <Link href="/register" className="linkHover">
              Create an account
            </Link>{" "}
            to unlock your order history, checkout faster, and protect your
            Wishlist.
          </span>
        </p>
      </div>

      <LoginForm />
    </div>
  );
}
