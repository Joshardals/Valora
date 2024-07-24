import { Dashboard } from "./_components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - VALORA",
  description:
    "Admin dashboard for VALORA. Efficiently manage products, users, and orders with a streamlined interface designed for administrators.",
};

export default function AdminDashboard() {
  return (
    <>
      <Dashboard />
    </>
  );
}
