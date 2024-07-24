"use client";
import { useFetchUser } from "@/lib/hooks/useEetchUser";

export function Dashboard() {
  const { data: user, isLoading, isFetched, error } = useFetchUser();
  const firstName = user?.name.split(" ")[0];

  return (
    <>
      <div>
        {isLoading ? <p>Loading...</p> : <h2>Welcome, {firstName}!</h2>}
      </div>
    </>
  );
}
