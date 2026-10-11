import useCartContext from "../hooks/useCartContext";

import appLogo from "../assets/img/phone-shop-logo.png";
import cartLogo from "../assets/icons/bag-icon.svg";
import type { NavbarProps } from "../utils/types";

export default function Navbar({onCartOpen}: NavbarProps) {
  const { cart } = useCartContext(); // CartItem[]

  // Total number of Items in the Cart
  const cartItemsCount = cart.length;

  return (
    <>
      <div></div>
      <div className="flex items-center">
        <img src={appLogo} alt="app logo" className="h-18" />
      </div>

      <div onClick={onCartOpen} className="relative">
        <img
          src={cartLogo}
          alt="cart logo"
          className="size-10 cursor-pointer"
        />
        {cartItemsCount > 0 ? (
          <p className="text-xs absolute top-0.5 left-6 bg-[#0b7efd] rounded-full size-4 text-center text-stone-50 animate-fade-in">
            {cartItemsCount}
          </p>
        ) : ''}
      </div>
    </>
  );
}
