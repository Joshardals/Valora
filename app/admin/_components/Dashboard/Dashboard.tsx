"use client";
import { RecentActivity } from "./Activity/RecentActivity";
import { Stats } from "./Stats/Stats";
import { useFetchUser } from "@/lib/hooks/userQueries";

export function Dashboard() {
  const { data: user, isLoading, error } = useFetchUser();
  const firstName = user?.name.split(" ")[0];

  return (
    <>
      <div className="space-y-14">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <h1 className="font-semibold text-2xl">Welcome, {firstName}!</h1>
        )}
        <Stats />
        <RecentActivity />
      </div>
    </>
  );
}
