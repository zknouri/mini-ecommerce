import useCartContext from "../hooks/useCartContext";

import CartItemCard from "./CartItemCard";

import type { CartDrawerProps } from "../utils/types";

export default function CartDrawer({ onCartClose }: CartDrawerProps) {
  const { cart, cartTotal } = useCartContext();

  return (
    <div className="z-10 bg-black/20 fixed top-0 right-3 h-full w-full">
      <div className="fixed top-0 right-0 h-[90%] w-79 bg-stone-200 overflow-y-auto overflow-x-hidden animate-cartdrawer-transform">
        <div className="z-10 bg-stone-200 sticky top-0 flex justify-between items-center p-2">
          <h3 className="text-[#001e58]">Phone Shop Cart</h3>
          <button
            onClick={onCartClose}
            className="size-10 text-xl border border-gray-400 pt-1 pb-2 rounded-xl hover:bg-red-500 hover:text-stone-50 text-[#001e58] cursor-pointer"
          >
            &#10008;
          </button>
        </div>
        <div className="flex flex-col items-center">
          {cart.map((product) => (
            <CartItemCard key={product.id} product={product} />
          ))}
        </div>

        <div className="z-20 fixed p-2 bottom-0 w-[90%] bg-gray-100">
          <div className="text-[#001e58]">
            <p>
              Number of items:{" "}
              {cart.reduce(
                (itemsNumber, product) => itemsNumber + product.quantity,
                0,
              )}{" "}
            </p>
            <p>Total price: {cartTotal} Dh</p>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={onCartClose}
              className="flex items-center gap-2 w-37 font-bold bg-[#001e58] hover:bg-[#0b7efd] active:bg-[#0b7efd] text-stone-50 rounded-md p-1 cursor-pointer"
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 111.85"
                className="fill-stone-50 size-10"
              >
                <title>cart</title>
                <path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z" />
              </svg>
              Continue shopping
            </button>
            <button className="flex items-center w-37 gap-2 font-bold border-2 border-[#001e58] hover:bg-[#0b7efd] hover:text-stone-50 hover:border-[#0b7efd] active:bg-[#0b7efd] active:text-stone-50 active:border-[#0b7efd] text-stone-[#001e58] rounded-md p-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512px"
                height="435px"
                version="1.1"
                viewBox="0 0 512 434.91"
                className="size-10 hover:fill-s"
              >
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer" />
                  <path
                    fill="black"
                    d="M15.31 43.96c-8.25,0 -15.31,-7.06 -15.31,-15.7 0,-8.24 7.06,-15.3 15.31,-15.3l21.19 0c0.39,0 1.18,0 1.57,0 14.13,0.39 26.69,3.14 37.29,9.8 20.54,13.02 24.19,31.61 29.44,52.6l170.15 0c-2.03,9.26 -3.1,18.87 -3.1,28.74l0.01 1.88 -158.43 0 34.94 131.49 247.67 0 0.06 -0.22c3.04,0.21 6.11,0.32 9.21,0.32 7.72,0 15.29,-0.66 22.65,-1.92l-5.23 21.06c-1.57,7.06 -7.85,11.77 -14.91,11.77l-251.21 0c5.49,20.41 10.99,31.4 18.45,36.51 9.02,5.88 24.73,6.27 51.02,5.88l0.4 0 177.41 0c8.64,0 15.31,7.07 15.31,15.31 0,8.64 -7.07,15.31 -15.31,15.31l-177.41 0c-32.58,0.39 -52.6,-0.4 -68.7,-10.99 -16.48,-10.99 -25.11,-29.83 -33.75,-63.98l-52.6 -199.01c0,-0.39 0,-0.39 -0.39,-0.78 -2.35,-8.64 -6.28,-14.52 -11.77,-17.66 -5.5,-3.54 -12.96,-5.11 -21.59,-5.11 -0.4,0 -0.79,0 -1.18,0l-21.19 0zm228.96 96.91c0,-4.84 4.78,-8.76 10.67,-8.76 5.9,0 10.68,3.92 10.68,8.76l0 59.2c0,4.84 -4.78,8.76 -10.68,8.76 -5.89,0 -10.67,-3.92 -10.67,-8.76l0 -59.2zm-63.94 0c0,-4.84 4.78,-8.76 10.67,-8.76 5.9,0 10.68,3.92 10.68,8.76l0 59.2c0,4.84 -4.78,8.76 -10.68,8.76 -5.89,0 -10.67,-3.92 -10.67,-8.76l0 -59.2zm177.64 218.67c20.8,0 37.68,16.88 37.68,37.69 0,20.8 -16.88,37.68 -37.68,37.68 -20.8,0 -37.68,-16.88 -37.68,-37.68 0,-20.81 16.88,-37.69 37.68,-37.69zm-165.25 0c20.8,0 37.68,16.88 37.68,37.69 0,20.8 -16.88,37.68 -37.68,37.68 -20.8,0 -37.68,-16.88 -37.68,-37.68 0,-20.81 16.88,-37.69 37.68,-37.69z"
                  />
                  <path
                    fill="#00A912"
                    d="M405.31 0c29.46,0 56.13,11.95 75.44,31.25 19.31,19.31 31.25,45.98 31.25,75.44 0,29.45 -11.94,56.13 -31.25,75.43 -19.31,19.31 -45.98,31.26 -75.44,31.26 -29.45,0 -56.13,-11.95 -75.44,-31.26 -19.3,-19.3 -31.25,-45.98 -31.25,-75.43 0,-29.46 11.95,-56.13 31.25,-75.44 19.31,-19.3 45.99,-31.25 75.44,-31.25z"
                  />
                  <path
                    fill="white"
                    d="M372.38 86.95l19.89 18.79 43.22 -43.86c3.9,-3.95 6.34,-7.13 11.14,-2.18l15.59 15.97c5.12,5.06 4.86,8.03 0.03,12.74l-61.08 60.03c-10.18,9.98 -8.41,10.59 -18.73,0.35l-36.3 -36.1c-2.15,-2.32 -1.92,-4.68 0.44,-7l18.09 -18.77c2.74,-2.88 4.92,-2.63 7.71,0.03z"
                  />
                </g>
              </svg>
              Confirm my cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
