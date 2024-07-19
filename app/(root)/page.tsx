import HeroSection from "./_components/HeroSection";
import ProductCard from "./_components/ProductCard";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <section className="grid lg:grid-cols-2 gap-2">
        <div className="bg-primary h-screen">1</div>
        <div className="p-5 md:py-20 bg-white">
          <div className="md:max-w-lg md:mx-auto text-primary space-y-8">
            <p className="uppercase">tatiana korasakova</p>
            <h1 className="font-playfair text-3xl">
              Miami Summer – Discover the latest Founders Edit
            </h1>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
