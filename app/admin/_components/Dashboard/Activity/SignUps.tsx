import { fetchRecentSignups } from "@/app/admin/_actions/admin.actions";
import Image from "next/image";

export async function SignUps() {
  const { recentSignups, total } = await fetchRecentSignups();
  return (
    <div className="border-2 border-primary rounded-lg p-5 space-y-4 bg-white">
      <div>
        <p className="font-bold">Recent Sign-ups</p>
        <p className="text-primary/70">You had {total} sign-ups this month</p>
      </div>

      <SignupCard recentSignups={recentSignups!} />
    </div>
  );
}

export function SignupCard({ recentSignups }: { recentSignups: any[] }) {
  return (
    <>
      {recentSignups?.map((recent: any, index: number) => (
        <div key={index} className="flex justify-start items-center gap-4">
          <div className="rounded-full">
            <Image
              alt="Avatar"
              className="rounded-full size-10"
              height={50}
              src="/assets/avatars/avatar-m.png"
              width={50}
            />
          </div>

          <div className="flex-1">
            <p className="font-bold">{recent.name}</p>
            <p className="text-primary/70">{recent.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}
