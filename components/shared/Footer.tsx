import WaitListForm from "../form/WaitListForm";

export default function Footer() {
  return (
    <div className="bg-secondary text-primary">
      <div
        className="max-w-[1200px] mx-auto grid max-lg:grid-cols-1 grid-cols-2 gap-4 items-end lg:py-20 p-5
      max-lg:space-y-12"
      >
        <h1 className="font-playfair text-4xl font-light tracking-wider">
          A brand of the <br /> Transformative Kind.
        </h1>

        <div className="space-y-12">
          {/* Demo Navlinks */}
          <div className="grid max-lg:grid-cols-1 grid-cols-2 max-lg:space-y-12">
            <div>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
            </div>
            <div>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="font-light">Stay in touch</h2>
            <WaitListForm />
          </div>
        </div>
      </div>
    </div>
  );
}
