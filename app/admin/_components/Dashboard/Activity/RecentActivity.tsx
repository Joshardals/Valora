import { Sales } from "./Sales";
import { SignUps } from "./SignUps";

export function RecentActivity() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SignUps />
      <Sales />
    </div>
  );
}
