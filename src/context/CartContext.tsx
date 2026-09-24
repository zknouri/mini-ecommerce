import { createContext, useState } from "react";

import type {
  Product,
  CartItem,
  CartContextType,
  CartContextProviderProps,
} from "../utils/types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product): void {
    setCart((prevCart) => {
      const isProductInCart: boolean = prevCart.some(
        (cartItem) => cartItem.id === product.id,
      );

      if (isProductInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: string): void {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  }

  const cartTotal = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}
