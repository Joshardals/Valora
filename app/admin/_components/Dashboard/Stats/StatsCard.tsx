import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatsCard({
  title,
  content,
  footer,
}: {
  title?: string;
  content?: any;
  footer?: string;
}) {
  return (
    <Card className="text-primary border-primary border-2">
      <CardHeader>
        <CardTitle className="text-md font-bold capitalize">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold">{content}</h2>
      </CardContent>
      <CardFooter>
        <p className="text-primary/70">{footer}</p>
      </CardFooter>
    </Card>
  );
}
