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

    const contextValue: ProductsContextType = {
        products,
    }

  return <ProductsContext value={contextValue}>{children}</ProductsContext>;
}
