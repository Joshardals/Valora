import Image from "next/image";

export function Sales() {
  return (
    <div className="border-2 border-primary rounded-lg p-5 space-y-4">
      <div>
        <p className="font-bold">Recent Sales</p>
        <p className="text-primary/70">You made 265 sales this month</p>
      </div>

      <SalesCard />
      <SalesCard />
      <SalesCard />
      <SalesCard />
      <SalesCard />
    </div>
  );
}

export function SalesCard() {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="rounded-full">
        <Image
          alt="Avatar"
          className="rounded-full size-10"
          height={50}
          src="/assets/avatars/avatar-f.png"
          width={50}
        />
      </div>
      <div className="flex-1">
        <p className="font-bold">Olivia Martin</p>
        <p className="text-primary/70">olivia.martin@email.com</p>
      </div>
      <h2 className="text-xl font-bold">+$1,990</h2>
    </div>
  );
}
