import Image from "next/image";

export default function ProductCard() {
  return (
    <>
      <div className="relative before:content-none before:absolute before:h-full before:w-full before:bg-red-500 before:top-0 before:left-0">
        <Image
          src="/assets/products/product1.png"
          width={500}
          height={500}
          alt="Product 1"
          className=" aspect-square"
        />

        {/* <div className="absolute bg-black/20 h-full w-full top-0 left-0"></div> */}
      </div>
    </>
  );
}
