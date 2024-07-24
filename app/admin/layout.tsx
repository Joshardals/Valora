"use client";
import { SideBar } from "./_components/SideBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetchRole } from "@/lib/hooks/userQueries";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading, error } = useFetchRole();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && error) {
      router.push("/"); // Redirect to homepage if not an admin.
    }
  }, [isLoading, error, router]);

  return (
    <>
      <main className="bg-secondary text-primary min-h-[100svh]">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Access denied. You do not have permission to view this page.</p>
        ) : (
          <div className="flex space-x-[20rem]">
            <SideBar />
            <div className="p-5 flex-1">{children}</div>
          </div>
        )}
      </main>
    </>
  );
}
