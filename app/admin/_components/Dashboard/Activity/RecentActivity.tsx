import { Sales } from "./Sales";

export function RecentActivity() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">Recent Products</div>
      <Sales />
    </div>
  );
}
