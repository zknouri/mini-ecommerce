import fiveStarsIcon from "../assets/icons/reviews/five-star-rating-icon.svg";

export default function ProductCard() {
  return (
    <div className="bg-gray-100 rounded-4xl mt-6 border border-gray-300 w-90 h-98">
      <div className="relative flex flex-col items-center m-2 h-56 border border-x-0 border-t-0 border-b-gray-300">
        <img
          src="/images/samsung-galaxy-s26-ultra-1.png"
          alt="blue fairphone 6 plus"
          className="h-54"
        />
        <button className="absolute bg-[#0b7efd] rounded-full top-0 left-74 p-1 text-stone-50 text-2xl size-10 hover:text-pink-500 cursor-pointer">
          &#10084;
        </button>
        <p className="absolute text-stone-50 bg-red-500 top-46 right-68 p-1 rounded-md">
          10% off
        </p>
      </div>
      <div className="pb-6 px-4">
        <h4 className="">Fairphone 6+, 256GB 12GB RAM, Cobalt Blue</h4>
        <div className="flex gap-1">
          <img src={fiveStarsIcon} alt="five stars" className="w-20" />
          <p>5.0</p>
          <p className="text-stone-500">(23)</p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl">
              {Math.round(6999 - 6999 * 0.1)} MAD
            </p>
            <p className="line-through">6999 MAD</p>
          </div>

          <button className="flex items-center gap-2 bg-[#001e58] hover:bg-[#0b7efd] text-stone-50 rounded-md p-2 cursor-pointer">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 111.85"
              className="fill-stone-50 size-6"
            >
              <title>cart</title>
              <path d="M4.06,8.22A4.15,4.15,0,0,1,0,4.06,4.13,4.13,0,0,1,4.06,0h6A19.12,19.12,0,0,1,20,2.6c5.44,3.45,6.41,8.38,7.8,13.94h91a4.07,4.07,0,0,1,4.06,4.06,5,5,0,0,1-.21,1.25L112.06,64.61a4,4,0,0,1-4,3.13H41.51c1.46,5.41,2.92,8.32,4.89,9.67C48.8,79,53,79.08,59.93,79h47.13a4.06,4.06,0,0,1,0,8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17h0L18.94,14.46c0-.1,0-.1-.11-.21a7.26,7.26,0,0,0-3.12-4.68A10.65,10.65,0,0,0,10,8.22H4.06Zm80.32,25a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm-16.95,0a2.89,2.89,0,0,1,5.67,0V48.93a2.89,2.89,0,0,1-5.67,0V33.24Zm-16.94,0a2.89,2.89,0,0,1,5.66,0V48.93a2.89,2.89,0,0,1-5.66,0V33.24Zm41.72-8.58H30.07l9.26,34.86H105l8.64-34.86Zm2.68,67.21a10,10,0,1,1-10,10,10,10,0,0,1,10-10Zm-43.8,0a10,10,0,1,1-10,10,10,10,0,0,1,10-10Z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
