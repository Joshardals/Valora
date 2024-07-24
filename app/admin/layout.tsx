"use client";
import { currentUser } from "@/lib/actions/auth/auth.action";
import { fetchUserRole } from "@/lib/actions/users/user.action";
import { useEffect, useState } from "react";
import { SideBar } from "./_components/SideBar";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const userId = await currentUser();

        const role = await fetchUserRole(userId!);
        if (role !== "admin") {
          setIsAdmin(false);
          router.push("/");
        } else {
          setIsAdmin(true);
        }
      } catch (error: any) {
        console.log(`Error fetching User... ${error.message}`);
      }
    };

    checkPermissions();
  }, [router]);
  return (
    <>
      <main className="bg-secondary text-primary min-h-[100svh]">
        {isAdmin === null ? (
          <p>Loading...</p>
        ) : !isAdmin ? (
          <p>Access denied. You do not have permission to view this page.</p>
        ) : (
          <div className="flex space-x-[20rem]">
            <SideBar />
            <div className="p-5">{children}</div>
          </div>
        )}
      </main>
    </>
  );
}
