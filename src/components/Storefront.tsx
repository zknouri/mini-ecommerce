import { useRef, useState } from "react";

import ProductsGrid from "./ProductsGrid";

export default function Storefront() {
  const [sortOption, setSortOption] = useState("Sort"); // Selected option state
  const sortRef = useRef<HTMLUListElement>(null); // For sort menu toggling

  function sortMenuToggleHandler() {
    sortRef.current?.classList.toggle("hidden");
  }

  // Selected option new state
  function sortOptionsHandler(option: string) {
    setSortOption(option);
  }

  return (
    <section>
      <div className="flex justify-end gap-4">
        <div>
          <button className="flex items-center gap-2 bg-[#001e58] hover:bg-[#0b7efd] text-stone-50 rounded-md p-2 cursor-pointer ">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="122.88px"
              height="107.128px"
              viewBox="0 0 122.88 107.128"
              className="fill-stone-50 size-4"
            >
              <g>
                <path d="M2.788,0h117.297c1.544,0,2.795,1.251,2.795,2.795c0,0.85-0.379,1.611-0.978,2.124l-46.82,46.586v39.979 c0,1.107-0.643,2.063-1.576,2.516l-22.086,12.752c-1.333,0.771-3.039,0.316-3.812-1.016c-0.255-0.441-0.376-0.922-0.375-1.398 h-0.006V51.496L0.811,4.761C-0.275,3.669-0.27,1.904,0.822,0.819c0.544-0.541,1.255-0.811,1.966-0.811V0L2.788,0z M113.323,5.591 H9.493L51.851,48.24c0.592,0.512,0.966,1.27,0.966,2.114v49.149l16.674-9.625V50.354h0.008c0-0.716,0.274-1.432,0.822-1.977 L113.323,5.591L113.323,5.591z" />
              </g>
            </svg>
            Filters
          </button>
        </div>
        <div>
          <button
            onClick={sortMenuToggleHandler}
            className="flex items-center gap-2 w-44 bg-[#001e58] hover:bg-[#0b7efd] text-stone-50 rounded-md p-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 322 511.21"
              className="fill-stone-50 size-4"
            >
              <path
                d="M295.27 211.54H26.71c-6.23-.02-12.48-2.18-17.54-6.58-11.12-9.69-12.29-26.57-2.61-37.69L144.3 9.16c.95-1.07 1.99-2.1 3.13-3.03 11.36-9.4 28.19-7.81 37.58 3.55l129.97 157.07a26.65 26.65 0 0 1 7.02 18.06c0 14.76-11.97 26.73-26.73 26.73zM26.71 299.68l268.56-.01c14.76 0 26.73 11.97 26.73 26.73 0 6.96-2.66 13.3-7.02 18.06L185.01 501.53c-9.39 11.36-26.22 12.95-37.58 3.55-1.14-.93-2.18-1.96-3.13-3.03L6.56 343.94c-9.68-11.12-8.51-28 2.61-37.69 5.06-4.4 11.31-6.56 17.54-6.57z"
              />
            </svg>
            {sortOption}
          </button>
          <ul
            ref={sortRef}
            className="hidden absolute z-10 bg-[#001e58] w-44 text-stone-50 p-2 mt-0.5 rounded-md"
          >
            <li
              onClick={() => sortOptionsHandler("The most popular")}
              className="hover:bg-[#0b7efd] rounded-md p-1 cursor-pointer"
            >
              The most popular
            </li>
            <li
              onClick={() => sortOptionsHandler("Newest")}
              className="hover:bg-[#0b7efd] rounded-md p-1 cursor-pointer"
            >
              Newest
            </li>
            <li
              onClick={() => sortOptionsHandler("Increasing price")}
              className="hover:bg-[#0b7efd] rounded-md p-1 cursor-pointer"
            >
              Increasing price
            </li>
            <li
              onClick={() => sortOptionsHandler("Decresing price")}
              className="hover:bg-[#0b7efd] rounded-md p-1 cursor-pointer"
            >
              Decresing price
            </li>
          </ul>
        </div>
      </div>
      <ProductsGrid />
    </section>
  );
}
