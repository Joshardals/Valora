import Image from "next/image";

export function SignUps() {
  return (
    <div className="border-2 border-primary rounded-lg p-5 space-y-4">
      <div>
        <p className="font-bold">Recent Sign-ups</p>
        <p className="text-primary/70">You had 265 sign-ups this month</p>
      </div>

      <SignupCard />
      <SignupCard />
      <SignupCard />
      <SignupCard />
      <SignupCard />
    </div>
  );
}

export function SignupCard() {
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
    </div>
  );
}
