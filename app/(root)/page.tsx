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
        <div className="">
          <div className="max-w-md bg-primary mx-auto">
            Some Content Goes Here
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
