import { convertAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Params {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export function ProductCard(product: Params) {
  return (
    <Link
      href={`/admin/products/${product.id}`}
      className="space-y-4 font-playfair"
    >
      <div className="relative w-[fit-content] cursor-pointer group">
        <Image
          src={product.image}
          height={200}
          width={200}
          alt={product.title}
          className="border border-primary rounded-lg"
        />

        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-primary/50 text-secondary p-5 
        opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg"
        >
          <p>{convertAmount(product.price)}</p>
          <p>{product.title}</p>
        </div>
      </div>
    </Link>
  );
}
