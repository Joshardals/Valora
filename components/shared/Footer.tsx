import WaitListForm from "../form/WaitListForm";

export default function Footer() {
  return (
    <div className="bg-secondary h-[85vh] px-8 py-20 text-primary flex max-lg:flex-col justify-between">
      <div className="flex-1 relative">
        <h1 className="font-playfair text-4xl font-light tracking-wider lg:absolute lg:bottom-0">
          A brand of the <br /> Transformative Kind.
        </h1>
      </div>
      <div className="flex-1">
        <div className="flex flex-col h-full pr-40">
          <h1 className="flex-1">NavLinks - Coming Soon!</h1>
          <div className="space-y-12">
            <h2 className="font-light">Stay in touch</h2>
            <WaitListForm />
          </div>
        </div>
      </div>
    </div>
  );
}
