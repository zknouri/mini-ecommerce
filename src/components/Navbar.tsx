import appLogo from "../assets/img/phone-shop-logo.png";
import cartLogo from "../assets/icons/bag-icon.svg";

export default function Navbar() {
  return (
    <>
      <div></div>
      <div className="flex items-center">
        <img src={appLogo} alt="app logo" className="h-18" />
      </div>

      <div className="relative">
        <img
          src={cartLogo}
          alt="cart logo"
          className="size-10 cursor-pointer"
        />
        <p className="text-xs absolute top-0.5 left-6 bg-[#0b7efd] rounded-full size-4 text-center text-stone-50 ">
          5
        </p>
      </div>
    </>
  );
}
