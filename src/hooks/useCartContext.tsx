import { useContext } from "react";

import { CartContext } from "../store/CartContext";

import type { CartContextType } from "../utils/types";

export default function useCartContext() {
  const context = useContext<CartContextType | undefined>(CartContext);

  if (context === undefined) {
    throw new Error("useContext must be used between <CartContextProvider>");
  }

  return context;
}
