import { createContext, useState } from "react";
import type {
  ProductsContextType,
  ProductsContextProviderProps,
  Product,
} from "../utils/types";

import { productsData } from "../lib/products";

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(productsData);

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

  const contextValue: ProductsContextType = {
    products,
    sortProducts,
  };

  return <ProductsContext value={contextValue}>{children}</ProductsContext>;
}
