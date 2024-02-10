import { IconItems } from "@/lib/data";

export default function SecondSection() {
  const items = IconItems();
  return (
    <section className=" py-16">
      <ul className="space-y-2 text-2xl *:cursor-pointer *:w-[fit-content] grid grid-flow-row">
        <li className="order-first">Contact us</li>
        {items.map((item, index) => {
          const { label } = item;
          return (
            <li
              key={index}
              className={`cursor-pointer
            ${label === "search" && "hidden"}
            ${label === "cart" && "hidden"}
            ${label === "currency" && "order-1"}
            ${label === "account" && " order-last"}
            capitalize
          `}
            >
              {label}
              {label === "currency" && `: Usd($)`}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
