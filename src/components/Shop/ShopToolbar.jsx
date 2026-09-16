import { ListChecks } from "lucide-react";
import { useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";

const options = [
  { value: "popularity", label: "Popularity" },
  { value: "priceAsc", label: "Price Asc ↑" },
  { value: "priceDesc", label: "Price Desc ↓" },
  { value: "rating", label: "Rating" },
];

const ShopToolbar = () => {
  const [filter, setFilter] = useState("popularity");

  return (
    <div className="gap-6 lg:gap-0 px-20 py-6 lg:px-48.75 flex flex-col lg:flex-row justify-between text-center items-center">
      <h6 className="text-h6 text-text-secondary font-bold">
        Showing all 12 results
      </h6>
      <div className="flex flex-row gap-4 items-center">
        <h6 className="text-h6 text-text-secondary font-bold">Views:</h6>
        <button className="border-gray-light-2 border text-text p-2 rounded-[5px] cursor-pointer">
          <RiLayoutGridFill className="h-4 w-4" />
        </button>
        <button className="border-gray-light-2 border text-text p-2 rounded-[5px] cursor-pointer">
          <ListChecks className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-row gap-3.75">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#F9F9F9] rounded-[5px] text-text-secondary text-h5 p-2.5 outline-primary focus:outline-1"
        >
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button className="bg-primary px-5 py-2.5 rounded-[5px] text-text-light text-h6 font-bold cursor-pointer transition-all duration-300 hover:bg-hover hover:scale-102">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ShopToolbar;
