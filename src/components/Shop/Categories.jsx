import { Link } from "react-router-dom";
import { categories } from "../../data/Shop/categories";

const Categories = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-3.75 bg-gray-light-1 px-10 py-6 lg:px-44 lg:pb-12 justify-center">
      {categories.map((category, index) => (
        <Link
          to={category?.link}
          key={index}
          className="relative transition-transform duration-300 hover:scale-105"
        >
          <img
            src={category?.image}
            alt={category?.name}
            className="w-full h-75 lg:h-55 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h5 className="text-h5 text-text-light font-bold">
              {category?.name}
            </h5>
            <p className="text-paragraph text-text-light">
              {category?.itemCount} items
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
