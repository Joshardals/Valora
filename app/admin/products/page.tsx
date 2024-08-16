import { fetchProducts } from "../_actions/product.actions";
import { Metadata } from "next";
import { ProductCard } from "../_components/Products/ProductCard";
import ProductForm from "../_components/Products/ProductForm";

export const metadata: Metadata = {
  title: "Manage Product - VALORA",
  description:
    "Manage Product Section for VALORA. Efficiently manage products with a streamlined interface designed for administrators.",
};

export default async function ManageProducts() {
  const { products } = await fetchProducts();
  console.log(products);
  return (
    <div className="space-y-5 lg:space-y-14">
      <h1 className="font-semibold text-2xl max-md:text-center">
        Manage Products
      </h1>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
        {products?.map((item, index) => (
          <ProductCard
            key={index}
            id={item.$id}
            title={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      <ProductForm />
    </div>
  );
}
