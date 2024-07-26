"use client";
import { Header } from "./_components/Header";
import { SideBar } from "./_components/SideBar";
import { useEffect } from "react";
import { useFetchRole } from "@/lib/hooks/userQueries";
import { useRouter } from "next/navigation";

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
          <>
            <Header />
            <div className="flex lg:space-x-[20rem]">
              <SideBar />
              <div className="p-5 flex-1 max-lg:mt-[4.7rem]">{children}</div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
