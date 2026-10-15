import { useEffect, useRef, useState, type ChangeEvent } from "react";

import type { PriceRange, ProductPriceRangeProps } from "../utils/types";
import { productsData } from "../lib/products";

export default function ProductPriceRange({
  filtersRef,
}: ProductPriceRangeProps) {
  const rangeRef = useRef<HTMLDivElement>(null); // Range width and position change

  const [minValue, setMinValue] = useState<number>(1000); // Min range slider value
  const [maxValue, setMaxValue] = useState<number>(20000); // Max   //    //    //

  const [minInputValue, setMinInputValue] = useState<number>(1000); // Min number input value
  const [maxInputValue, setMaxInputValue] = useState<number>(20000); // Max   //    //    //

  const [priceRange, setPriceRange] = useState<PriceRange>({
    minimum: 0,
    maximum: 1000,
  });

  useEffect(() => {
    // Maximum Price
    const maximumPrice: number = productsData?.reduce(
      (maximum, item) => (item.price > maximum ? item.price : maximum),
      0,
    );

    // Minimum Price
    const minimumPrice: number = productsData?.reduce(
      (minimum, item) =>
        item.price - (item.price * item.discount) / 100 < minimum
          ? item.price - (item.price * item.discount) / 100
          : minimum,
      maximumPrice,
    );

    setPriceRange((prevPriceRange) => ({
      ...prevPriceRange,
      minimum: minimumPrice,
      maximum: maximumPrice,
    }));
    setMinValue(minimumPrice);
    setMinInputValue(minimumPrice);
    setMaxValue(maximumPrice);
    setMaxInputValue(maximumPrice);
  }, []);

  // onChange event of min range slider and min number input
  function minValueChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    const value: number = +event.target.value;

    // Update the state of the min input value
    setMinInputValue(value);

    // Min input value must be between the minimum price and max value to be valid
    if (value >= priceRange.minimum && value < maxValue) {
      // Update the state of the minValue
      setMinValue(Math.min(value, maxValue - 1));

      // Calculate percentage value between the minimum price and the min value
      // ((min value - minimum price) / (minimum price - maximum price)) * 100
      const minPercentage: number =
        ((value - priceRange.minimum) /
          (priceRange.maximum - priceRange.minimum)) *
        100;
      // // between the max value and the maximum price
      // ((max value - minimum price) / (minimum price - maximum price)) * 100
      const maxPercentage: number =
        ((maxValue - priceRange.minimum) /
          (priceRange.maximum - priceRange.minimum)) *
        100;

      if (rangeRef && rangeRef.current) {
        // Update the range width in percentage
        rangeRef.current.style.width = maxPercentage - minPercentage + "%";
        // Update the range position to the left
        rangeRef.current.style.left = minPercentage + "%";
      }
    }
  }

  // onChange event of max range slider and max number input
  function maxValueChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    const value: number = +event.target.value;

    // Update the state of the max input value
    setMaxInputValue(value);

    // Max input value must be between the maximum price and min value to be valid
    if (value > minValue && value <= priceRange.maximum) {
      // Update the state of the maxValue
      setMaxValue(Math.max(value, minValue + 1));

      const minPercentage: number =
        ((minValue - priceRange.minimum) /
          (priceRange.maximum - priceRange.minimum)) *
        100;
      // We used value instead of maxValue, because the maxValue state is not updated yet
      const maxPercentage: number =
        ((value - priceRange.minimum) /
          (priceRange.maximum - priceRange.minimum)) *
        100;

      if (rangeRef && rangeRef.current) {
        rangeRef.current.style.width = maxPercentage - minPercentage + "%";
      }
    }
  }

  return (
    <div
      ref={filtersRef}
      className=" hidden absolute z-10 bg-[#001e58] w-46 text-stone-50 p-2 mt-0.5 rounded-md animate-fade-in"
    >
      <label>Price range</label>
      <div className="flex items-center relative my-4">
        <input
          type="range"
          min={priceRange.minimum}
          max={priceRange.maximum}
          value={minValue}
          className="absolute z-5 w-full appearance-none h-0 outline-0 pointer-events-none [&::-webkit-slider-thumb:hover]:scale-110 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#0b7efd] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-stone-50 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb:hover]:scale-110 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-[#0b7efd] [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-stone-50 [&::-moz-range-thumb]:cursor-pointer"
          onChange={minValueChangeHandler}
        />
        <input
          type="range"
          min={priceRange.minimum}
          max={priceRange.maximum}
          value={maxValue}
          className="absolute z-4 w-full appearance-none h-0 outline-0 pointer-events-none [&::-webkit-slider-thumb:hover]:scale-110 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#0b7efd] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-stone-50 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb:hover]:scale-110 [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-[#0b7efd] [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-stone-50 [&::-moz-range-thumb]:cursor-pointer"
          onChange={maxValueChangeHandler}
        />

        <div className="absolute h-2 w-full rounded-md bg-[#cceffc] z-1"></div>
        <div
          ref={rangeRef}
          className="absolute h-2 w-full left-[0%] rounded-md bg-[#0b7efd] z-2"
        ></div>
      </div>

      <div className="flex gap-1 mb-2">
        <div>
          <label htmlFor="min-value">From</label>
          <input
            value={minInputValue}
            onChange={minValueChangeHandler}
            min={priceRange.minimum}
            max={priceRange.maximum}
            type="number"
            id="min-value"
            className="w-20 bg-stone-50 text-black rounded-md p-1"
          />
        </div>
        <div>
          <label htmlFor="max-value">To</label>
          <input
            value={maxInputValue}
            onChange={maxValueChangeHandler}
            min={priceRange.minimum}
            max={priceRange.maximum}
            type="number"
            id="max-value"
            className="w-20 bg-stone-50 text-black rounded-md p-1"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="p-1.5 border-2 border-stone-50 rounded-md hover:bg-[#0b7efd] cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
}
