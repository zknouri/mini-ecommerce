import ProductCard from "./ProductCard";
import useProductsContext from "../hooks/useProductsContext";

export default function ProductsGrid() {
  const { products } = useProductsContext();

  return (
    <div className="grid grid-cols-1 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
