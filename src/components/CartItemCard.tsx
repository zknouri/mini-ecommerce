import recycleBinIcon from "../assets/icons/red-trash-can-icon.svg";

export default function CartItemCard() {
  return (
    <>
      <div className="relative flex bg-gray-100 rounded-xl m-3 border border-gray-300 w-90 h-35">
        <div className="min-w-30 m-2 flex justify-center">
          <img
            src="/images/fairphone-6-plus-1.png"
            alt="blue fairphone 6 plus"
            className="h-30"
          />
        </div>
        <div>
          <h5 className="text-[#001e58]">Fairphone 6+, 256GB 12GB RAM, Cobalt Blue</h5>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-xl text-[#0b7efd]">
              {Math.round(6999 - 6999 * 0.1)} Dh
            </p>
            <p className="line-through text-stone-500">6999 Dh</p>
          </div>
          <p className="text-stone-500">Quantity: 1</p>
        </div>
        <div className="absolute bottom-2 right-2 border border-gray-300 p-2 rounded-xl hover:bg-red-300 cursor-pointer">
          <img src={recycleBinIcon} alt="recycle bin" className="size-4" />
        </div>
      </div>
      
    </>
  );
}
