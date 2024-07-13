import WaitListForm from "../form/WaitListForm";

export default function Footer() {
  return (
    <div className="bg-secondary text-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 items-end py-20">
        <div>
          <h1 className="font-playfair text-4xl font-light tracking-wider">
            A brand of the <br /> Transformative Kind.
          </h1>
        </div>
        <div className="space-y-12">
          {/* Demo Navlinks */}
          <div className="grid grid-cols-2">
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
            <p>NavLinks - Coming Soon!</p>
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
