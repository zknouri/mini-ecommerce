import recycleBinIcon from "../assets/icons/red-trash-can-icon.svg";
import useCartContext from "../hooks/useCartContext";

import type { CartItemCardProps } from "../utils/types";

export default function CartItemCard({ product }: CartItemCardProps) {
  const { removeFromCart } = useCartContext();

  return (
    <>
      <div className="relative flex bg-gray-100 rounded-xl m-3 border border-gray-300 w-90 h-35">
        <div className="min-w-30 m-2 flex justify-center">
          <img
            src={product.image}
            alt="blue fairphone 6 plus"
            className="h-30"
          />
        </div>
        <div>
          <h5 className="text-[#001e58]">{product.name}</h5>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-xl text-[#0b7efd]">
              {product.discount > 0 ? Math.round(product.price - product.price * product.discount / 100) : product.price}
               Dh
            </p>
            {product.discount > 0 ? <p className="line-through text-stone-500">{product.price} Dh</p> : ''}
            
          </div>
          <p className="text-stone-500">Quantity: {product.quantity}</p>
        </div>
        <div onClick={()=> removeFromCart(product.id)} className="absolute bottom-2 right-2 border border-gray-300 p-2 rounded-xl hover:bg-red-300 cursor-pointer">
          <img src={recycleBinIcon} alt="recycle bin" className="size-4" />
        </div>
      </div>
      
    </>
  );
}
