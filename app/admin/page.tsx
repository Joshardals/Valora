"use client";
import { currentUser } from "@/lib/actions/auth/auth.action";
import { fetchUserRole } from "@/lib/actions/users/user.action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [user, setUser] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const userId = await currentUser();
        const role = await fetchUserRole(userId!);

        setUser(userId);

        if (role !== "admin") {
          setIsAdmin(!isAdmin);
          router.push("/");
        }

        console.log(role);
      } catch (error: any) {
        console.log(`Error fetching User... ${error.message}`);
      }
    };

    checkPermissions();
  }, [router]);

  return (
    <>
      {isAdmin ? (
        <div>Admin Page</div>
      ) : (
        <div>Access denied. You do not have permission to view this page.</div>
      )}
    </>
  );
}
