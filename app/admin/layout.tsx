"use client";
import { currentUser } from "@/lib/actions/auth/auth.action";
import { Dashboard } from "./_components/Dashboard";
import { fetchUserRole } from "@/lib/actions/users/user.action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./_components/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const userId = await currentUser();
        setUser(userId);

        const role = await fetchUserRole(userId!);
        if (role !== "admin") {
          setIsAdmin(false);
          router.push("/");
        } else {
          setIsAdmin(true);
        }
      } catch (error: any) {
        console.log(`Error fetching User... ${error.message}`);
      } finally {
        setLoading(false);
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
          <div>
            <Header />
            {children}
          </div>
        )}
      </main>
    </>
  );
}
