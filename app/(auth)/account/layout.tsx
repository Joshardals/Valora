"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/clientFirebase";
import { Loading } from "./_components/Loading";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authUser, setAuthUser] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
        router.push("/");
      }
    });

    // Cleanup the subscription to avoid memory leaks
    return () => unsubscribe();
  }, [router]);
  return (
    <div className="">
      {authUser ? null : <Loading />}
      {authUser ? (
        <main className="bg-gray-950 min-h-[100svh]">{children}</main>
      ) : null}
    </div>
  );
}
