export default function HeroSection() {
  return (
    <div className="bgShadeLight bg-[url('/assets/HeroImg.jpg')] bg-cover w-full h-screen pt-[4.75rem] flex items-end lg:items-center">
      <div className="max-w-[1200px] mx-auto w-full p-5 space-y-4 z-10">
        <h1 className="font-playfair text-3xl font-light tracking-wider capitalize">
          back in stock
        </h1>
        <p className=" text-lg">
          A fusion of sophisticated suits and effortless styles.
        </p>
      </div>
    </div>
  );
}
