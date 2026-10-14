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

/////////////////////////////////////////////////
////////////////// CartContext //////////////////
/////////////////////////////////////////////////

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  cartTotal: number;
}

export interface CartContextProviderProps {
  children: ReactNode;
}

/////////////////////////////////////////////////
//////////////// ProductsContext ////////////////
/////////////////////////////////////////////////

export interface ProductsContextType {
  products : Product[];
}

export interface ProductsContextProviderProps {
  children: ReactNode;
}

/////////////////////////////////////////////////
////////////////// Components ///////////////////
/////////////////////////////////////////////////

export interface ProductPriceRangeProps {
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

export interface CartItemCardProps {
  product: CartItem;
}

// State in ProductsPriceRange.tsx
export interface PriceRange {
  minimum: number;
  maximum: number;
}