import { ListChecks, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import Container from "../ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/actions/productActions";

const options = [
  { value: "price:asc", label: "Price Asc ↑" },
  { value: "price:desc", label: "Price Desc ↓" },
  { value: "rating:asc", label: "Rating Asc ↑" },
  { value: "rating:desc", label: "Rating Desc ↓" },
];

const ShopToolbar = ({ sort, setSort }) => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.product.total);
  const filter = useSelector((state) => state.product.filter);
  const [searchText, setSearchText] = useState(filter);
  const [selectedSort, setSelectedSort] = useState(sort);

  const handleClick = () => {
    setSort(selectedSort);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setFilter(searchText.trim()));
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, searchText]);

  return (
    <Container className="gap-6 lg:gap-0 py-6 flex flex-col lg:flex-row justify-between text-center items-center">
      <h6 className="text-h6 text-text-secondary font-bold">
        Showing all {totalCount} results
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
      <div className="relative w-full sm:w-64 lg:w-52">
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="search"
          name="search"
          type="search"
          placeholder="Search products..."
          className="w-full rounded-[5px] border border-gray-light-2 bg-[#F9F9F9] py-2.5 pr-3 pl-9 text-paragraph text-text outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary/20"
        />
      </div>
      <div className="flex flex-row gap-3.75">
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          className="bg-[#F9F9F9] rounded-[5px] text-text-secondary text-h5 p-2.5 outline-primary focus:outline-1"
        >
          <option value="">Default</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleClick}
          className="bg-primary px-5 py-2.5 rounded-[5px] text-text-light text-h6 font-bold cursor-pointer transition-all duration-300 hover:bg-hover hover:scale-102"
        >
          Filter
        </button>
      </div>
    </Container>
  );
};

export default ShopToolbar;
