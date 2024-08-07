import {
  fetchTotalProducts,
  fetchTotalUsers,
} from "@/app/admin/_actions/admin.actions";
import StatsCard from "./StatsCard";

export async function Stats() {
  const [totalUsers, totalProducts] = await Promise.all([
    await fetchTotalUsers(),
    await fetchTotalProducts(),
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="total users"
        content={totalUsers}
        footer="+100% from last month"
      />
      <StatsCard
        title="total products"
        content={totalProducts}
        footer="+100% from last month"
      />
      <StatsCard title="total orders" footer="+100% from last month" />
      <StatsCard title="total revenue" footer="+100% from last month" />
    </div>
  );
}
