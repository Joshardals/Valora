import { fetchTotalUsers } from "@/app/admin/_actions/admin.actions";
import StatsCard from "./StatsCard";

export function Stats() {
  const totalUsers = fetchTotalUsers();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="total users"
        content={totalUsers}
        footer="+100% from last month"
      />
      <StatsCard title="total products" footer="+100% from last month" />
      <StatsCard title="total orders" footer="+100% from last month" />
      <StatsCard title="total revenue" footer="+100% from last month" />
    </div>
  );
}
