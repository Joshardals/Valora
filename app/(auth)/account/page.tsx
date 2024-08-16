import { getCurrentUser } from "@/lib/actions/auth/auth.action";
import { AccountPage } from "./_components/AccountPage";
import { fetchUserInfo } from "@/lib/actions/users/user.action";
import { redirect } from "next/navigation";

export default async function UserAccountPage() {
  const [user, userInfo] = await Promise.all([
    await getCurrentUser(),
    await fetchUserInfo(),
  ]);
  if (!user) redirect("/");

  return <AccountPage {...userInfo?.userInfo} />;
}
