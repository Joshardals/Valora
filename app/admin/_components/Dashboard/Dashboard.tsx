import { fetchUserInfo } from "@/lib/actions/users/user.action";
import { RecentActivity } from "./Activity/RecentActivity";
import { Stats } from "./Stats/Stats";

export async function Dashboard() {
  const { userInfo } = await fetchUserInfo();
  const firstName = userInfo?.name.split(" ")[0];

  return (
    <>
      <div className="space-y-5 lg:space-y-14">
        <h1 className="font-semibold text-2xl max-md:text-center">
          Welcome, {firstName}!
        </h1>

        <Stats />
        <RecentActivity />
      </div>
    </>
  );
}
