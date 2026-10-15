import ProductCard from "./ProductCard";
import useProductsContext from "../hooks/useProductsContext";

export default function ProductsGrid() {
  const { products } = useProductsContext();

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
