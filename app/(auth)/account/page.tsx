import type { Metadata } from "next";
import { AccountPage } from "./_components/AccountPage";

export const metadata: Metadata = {
  title: "Account - VALORA",
  description:
    "Manage your VALORA account effortlessly with our comprehensive account overview, featuring secure login, registration, and personalized user information.",
};

export default function UserAccountPage() {
  return (
    <>
      <AccountPage />
    </>
  );
}
