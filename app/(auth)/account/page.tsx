"use client";
import { AccountPage } from "./_components/AccountPage";
import { currentUser } from "@/lib/actions/auth/auth.action";
import { Loading } from "./_components/Loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserAccountPage() {
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await currentUser();
        if (!user) {
          router.push("/");
          setAuthUser(false);
        } else {
          setAuthUser(true);
          setUserId(user);
        }
      } catch (error: any) {
        console.log(`Error fetching User... ${error.message}`);
      }
    };

    fetchCurrentUser();
  }, [router]);

  return (
    <>
      {authUser ? null : <Loading />}
      {authUser ? <AccountPage userId={userId!} /> : null}
    </>
  );
}
