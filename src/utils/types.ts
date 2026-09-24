import type { ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product : Product) => void;
    removeFromCart: (productId : string) => void;
    cartTotal: number;
}

export interface CartContextProviderProps{
  children: ReactNode;
}