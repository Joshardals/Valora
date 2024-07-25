import StatsCard from "./StatsCard";

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard />
      <StatsCard />
      <StatsCard />
      <StatsCard />
    </div>
  );
}
