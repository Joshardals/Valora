import Link from "next/link";
import RegisterForm from "@/components/form/RegisterForm";

export default function page() {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 min-h-[100svh]">
      <div className="bg-secondary md:pl-28 px-5 py-10 text-primary flex items-center justify-between max-md:order-last">
        <div className="space-y-12 flex-1">
          <div className="space-y-8">
            <Link href="/" className="flex">
              <p className="uppercase linkHoverLight font-light">
                back to log in
              </p>
            </Link>
            <p className="text-pretty max-w-sm">
              Create an account to access your order history, checkout faster
              and save your Wishlist.
            </p>
          </div>
          <RegisterForm />
        </div>
        <div className="flex items-center max-md:hidden">
          <h2 className="font-playfair -rotate-90 text-3xl select-none">
            Create Account
          </h2>
        </div>
      </div>
      <div className="bg-gray-950">Background Picture</div>
    </section>
  );
}
