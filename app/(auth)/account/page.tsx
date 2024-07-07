import type { Metadata } from "next";
import { AccountPage } from "./_components/AccountPage";
// import { getUser } from "@/lib/actions/auth/auth.action";

export const metadata: Metadata = {
  title: "Account - VALORA",
  description:
    "Manage your VALORA account effortlessly with our comprehensive account overview, featuring secure login, registration, and personalized user information.",
};

export default async function UserAccountPage() {
  // const user = await getUser();
  return (
    // <>{user ? <AccountPage /> : <div>No user information available</div>}</>
    <>
      <AccountPage />
    </>
  );
}
