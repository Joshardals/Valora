import HeroSection from "./_components/HeroSection";
import ProductCard from "./_components/ProductCard";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <div className="grid grid-cols-4">
        <ProductCard />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </main>
  );
}
