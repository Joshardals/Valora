"use client";
import WaitListForm from "../form/WaitListForm";
import { FooterLinks } from "../ui/Header/NavLinks";

export default function Footer() {
  return (
    <div className="bg-secondary text-primary py-10">
      <div
        className="max-w-[1200px] mx-auto grid max-lg:grid-cols-1 grid-cols-2 gap-4 items-end lg:py-20 p-5
      max-lg:space-y-12 "
      >
        <h1 className="font-playfair text-4xl font-light tracking-wider">
          A brand of the <br /> Transformative Kind.
        </h1>

        <div className="space-y-12 max-w-lg">
          {/* Demo Navlinks */}
          {/* <div className="grid max-lg:grid-cols-1 grid-cols-2 max-lg:space-y-12"> */}
          <div>
            {/* <div>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
            </div>
            <div>
              <p>NavLinks - Coming Soon!</p>
              <p>NavLinks - Coming Soon!</p>
            </div> */}
            <FooterLinks />
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
