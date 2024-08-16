import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Params {
  title: string;
  description: string;
  image: string;
}

export function ProductCard(product: Params) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          height={500}
          width={500}
          alt={product.title}
        />
      </CardContent>
    </Card>
  );
}
