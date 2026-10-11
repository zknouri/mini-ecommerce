import type { ReactNode, RefObject } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number,
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  cartTotal: number;
}

export interface CartContextProviderProps {
  children: ReactNode;
}

export interface ProductPriceRangeProps {
  minimum: number;
  maximum: number;
  filtersRef: RefObject<HTMLDivElement | null>;
}

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export interface CartDrawerProps {
  onCartClose: () => void;
}

export interface NavbarProps {
  onCartOpen: () => void;
}

export interface StorefrontProps {
  sortRef: RefObject<HTMLUListElement | null>;
  filtersRef: RefObject<HTMLDivElement | null>;
}

export interface ProductCardProps {
  product: Product,

}