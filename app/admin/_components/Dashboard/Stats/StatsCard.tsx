import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatsCard() {
  return (
    <Card className="text-primary border-primary border-2">
      <CardHeader>
        <CardTitle className="text-md font-bold">Total Users</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold">500</h2>
      </CardContent>
      <CardFooter>
        <p className="text-primary/70">+20.01% from last month</p>
      </CardFooter>
    </Card>
  );
}
