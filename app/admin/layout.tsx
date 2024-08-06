import { fetchUserRole } from "@/lib/actions/users/user.action";
import { Header } from "./_components/Header";
import { MobileSideBar, SideBar } from "./_components/SideBar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/auth/auth.action";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await fetchUserRole();
  const currentUser = await getCurrentUser();

  if (!role.admin && currentUser) {
    redirect("/account");
  } else if (!role.admin) {
    redirect("/");
  }

  return (
    <>
      <main className="bg-secondary text-primary min-h-[100svh]">
        <Header />
        <div className="flex lg:space-x-[20rem]">
          <SideBar />
          <MobileSideBar />
          <div className="p-5 flex-1 max-lg:mt-[4.7rem]">{children}</div>
        </div>
      </main>
    </>
  );
}
