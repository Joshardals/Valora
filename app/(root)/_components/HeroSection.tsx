import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bgShadeLight bg-[url('/assets/HeroImg.jpg')] bg-cover w-full max-lg:h-[90vh] h-screen pt-[4.75rem] flex items-end lg:items-center">
      <div className="max-w-[1200px] mx-auto w-full p-5 space-y-4 z-10">
        <h1 className="font-playfair text-3xl font-light tracking-wider capitalize">
          back in stock
        </h1>
        <div className="max-lg:flex max-lg:items-baseline">
          <p className="max-lg:flex-1 text-lg font-light mb-4">
            A fusion of sophisticated suits and effortless styles.
          </p>

          <Link href="#">
            <p className="uppercase md:linkHoverDark linkUnderline font-light w-[fit-content]">
              shop now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
