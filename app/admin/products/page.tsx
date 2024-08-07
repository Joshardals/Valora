import { Metadata } from "next";
import ProductForm from "../_components/Products/ProductForm";

export const metadata: Metadata = {
  title: "Manage Product - VALORA",
  description:
    "Manage Product Section for VALORA. Efficiently manage products with a streamlined interface designed for administrators.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-5 lg:space-y-14">
      <h1 className="font-semibold text-2xl max-md:text-center">
        Manage Products
      </h1>

      <ProductForm />
    </div>
  );
}
