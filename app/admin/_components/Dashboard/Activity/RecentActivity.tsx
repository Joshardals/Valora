import { Sales } from "./Sales";
import { SignUps } from "./SignUps";

export function RecentActivity() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SignUps />
      <Sales />
    </div>
  );
}
