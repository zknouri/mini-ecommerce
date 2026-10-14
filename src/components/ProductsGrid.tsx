import ProductCard from "./ProductCard";
import { productsData } from "../lib/products";

export default function ProductsGrid() {
  return (
    <div className="flex flex-col items-center">
      {productsData.map((product) => (
        <ProductCard key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
