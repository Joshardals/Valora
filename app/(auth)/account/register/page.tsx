import RegisterForm from "@/components/form/RegisterForm";
import Link from "next/link";

export default function page() {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 min-h-[100svh]">
      <div className="bg-secondary px-28 py-10 text-primary space-y-12">
        <div className="space-y-8">
          <Link href="/">
            <p className="uppercase linkHover font-light">back to log in</p>
          </Link>
          <p className=" font-normal text-pretty max-w-sm">
            Create an account to access your order history, checkout faster and
            save your Wishlist.
          </p>
        </div>
        <RegisterForm />
      </div>
      <div className="bg-gray-950">Background Picture</div>
    </section>
  );
}
