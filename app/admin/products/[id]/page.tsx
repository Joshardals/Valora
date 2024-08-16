import { convertAmount } from "@/lib/utils";
import { fetchProductsById } from "../../_actions/product.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product } = await fetchProductsById(id);

  // A Small utility function to format the description
  const formatDescription = (text: string) => {
    return text.split("\n").map((line: any, index: any) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  if (!product) return null;

  return (
    <div className="max-md:space-y-4">
      <Link href="/admin/products" className="flex space-x-1 items-center">
        <IoArrowBackOutline />
        <span>Back</span>
      </Link>
      <div className="flex items-center justify-center min-h-screen lg:max-w-[1200px] lg:mx-auto">
        <div className="md:flex md:gap-10 max-md:space-y-4">
          <div className="h-[400px]">
            <Image
              src={product.image}
              width={300}
              height={300}
              alt={product.title}
              className="rounded-lg h-full"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-playfair text-2xl">{product.name}</h1>
            <p className="max-w-md text-pretty">
              {formatDescription(product.description)}
            </p>
            <h1 className="text-2xl font-playfair">
              {convertAmount(product.price)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
