import ProductCard from "./ProductCard";
import { products } from "../lib/products";

export default function ProductsGrid() {
  return (
    <div className="flex flex-col items-center">
      {products.map((product) => (
        <ProductCard key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
