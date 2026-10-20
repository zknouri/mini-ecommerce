import type { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
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
  products: Product[];
  sortProducts: (sortingOption: string) => void;
  setFilters: (filter: string, values: PriceRange) => void;
  resetFilters: () => void;
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}

export interface ProductsContextProviderProps {
  children: ReactNode;
}

/////////////////////////////////////////////////
////////////////// Components ///////////////////
/////////////////////////////////////////////////

export interface ProductsPriceRangeProps {
  filtersRef?: RefObject<HTMLDivElement | null>;
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

export interface ProductCardProps {
  product: Product;
}

export interface CartItemCardProps {
  product: CartItem;
}

////////////////// ProductsPriceRange.tsx ///////////////////
export interface PriceRange {
  minimum: number;
  maximum: number;
}

export interface RangeValues {
  minValue: number;
  maxValue: number;
}

export interface InputValues {
  minInputValue: number;
  maxInputValue: number;
}