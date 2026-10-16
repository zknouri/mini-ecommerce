import { createContext, useState } from "react";
import type {
  ProductsContextType,
  ProductsContextProviderProps,
  Product,
  PriceRange,
} from "../utils/types";

import { productsData } from "../lib/products";

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [sortOption, setSortOption] = useState<string>("Sort"); // Selected option state

  function sortProducts(sortingOption: string) {
    if (sortingOption === "increasing") {
      setProducts(
        products.toSorted((product1, product2) =>
          product1.price > product2.price ? 1 : -1,
        ),
      );
    } else if (sortingOption === "decreasing") {
      setProducts(
        products.toSorted((product1, product2) =>
          product1.price < product2.price ? 1 : -1,
        ),
      );
    }
    {
      /* else if(sortingOption === 'newest'){

    } else if(sortingOption === 'popular'){

    } */
    }
  }

  function setFilters(filter: string, values: PriceRange) {
    if (filter === "price-range") {
      setProducts(
        // Important: filter the data(productsData), not the state(products)
        productsData.filter(
          (product) =>
            product.price >= values.minimum && product.price <= values.maximum,
        ),
      );
    }

    setSortOption('Sort');
  }

  function resetFilters(): void{
    setProducts(productsData);
    setSortOption('Sort');
  }

  const contextValue: ProductsContextType = {
    products,
    sortProducts,
    setFilters,
    resetFilters,
    sortOption,
    setSortOption,
  };

  return <ProductsContext value={contextValue}>{children}</ProductsContext>;
}
