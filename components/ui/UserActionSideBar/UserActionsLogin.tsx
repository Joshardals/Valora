import Link from "next/link";
import LoginForm from "@/components/form/LoginForm";
import {
  userActionActiveIndex,
  userActionInitialRender,
  userActionSideBarToggle,
} from "@/lib/store/store";
import { useEffect, useRef } from "react";

export default function UserActionsLogin() {
  const { activeIndex } = userActionActiveIndex();
  const { initialRender, setInitialRender } = userActionInitialRender();
  const { isOpen } = userActionSideBarToggle();
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (activeIndex === 1 && initialRender) {
        profileRef.current?.classList.add("fadeIn");
        setInitialRender(false);
      } else {
        profileRef.current?.classList.remove("fadeIn");
      }
    }
  }, [isOpen, activeIndex]);

  return (
    <div
      className={`px-8 ${isOpen ? "" : isOpen !== null && "fadeOut"} ${
        activeIndex === 1 ? "block" : "hidden"
      }`}
      ref={profileRef}
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2>Log In</h2>
          <p className=" font-light text-pretty max-w-full">
            Don&apos;t have an account?{" "}
            <span>
              <Link
                href="/account/register"
                className="md:linkHoverDark decoration-secondary linkUnderline"
              >
                Create an account
              </Link>{" "}
              to unlock your order history, checkout faster, and protect your
              Wishlist.
            </span>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
