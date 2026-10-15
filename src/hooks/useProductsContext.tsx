import { useContext } from "react";

import { ProductsContext } from "../store/ProductsContext";

import type { ProductsContextType } from "../utils/types";

export default function useProductsContext() {
  const context = useContext<ProductsContextType | undefined>(ProductsContext);

  if (context === undefined) {
    throw new Error(
      "useProductsContext must be used between <ProductsContextProvider>",
    );
  }

  return context;
}
