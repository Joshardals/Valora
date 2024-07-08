"use client";

import { AccountPage } from "./_components/AccountPage";
import { auth } from "@/lib/firebase/clientFirebase";
import { Loading } from "./_components/Loading";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserAccountPage() {
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
    <>
      {authUser ? null : <Loading />}
      {authUser ? <AccountPage /> : null}
    </>
  );
}
