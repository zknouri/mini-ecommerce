import ProductCard from "./ProductCard";
import useProductsContext from "../hooks/useProductsContext";

export default function ProductsGrid() {
  const { products } = useProductsContext();

  return (
    <div className="grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
