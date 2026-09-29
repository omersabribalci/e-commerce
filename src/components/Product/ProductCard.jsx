import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { slugify } from "../../utils/slugify";

const ProductCard = ({ product, view = "grid" }) => {
  const history = useHistory();
  const categories = useSelector((state) => state.product.categories);
  const matchedCategory = categories.find((c) => c.id === product.category_id);
  const handleClick = () => {
    if (!matchedCategory?.code || !product.name) return;

    const gender = matchedCategory.code.startsWith("k") ? "kadin" : "erkek";
    const categoryName = matchedCategory.code.split(":")[1];

    history.push(
      `/shop/${gender}/${categoryName}/${product.category_id}/${slugify(product.name)}/${product.id}`,
    );
  };

  return (
    <div
      className={
        view === "list"
          ? "flex w-full flex-col overflow-hidden rounded-md border border-gray-light-2 bg-bg-light cursor-pointer transition-shadow hover:shadow-accentued sm:flex-row"
          : "flex flex-col flex-wrap md:flex-row transition-transform duration-300 hover:scale-105 justify-center cursor-pointer"
      }
      onClick={handleClick}
    >
      <img
        src={product.images?.[0]?.url ?? product.photo}
        alt={product.name ?? product.title ?? ""}
        className={
          view === "list"
            ? "h-64 w-full object-contain sm:h-56 sm:w-56 sm:shrink-0"
            : "w-full h-106.75 object-cover"
        }
      />
      <div
        className={
          view === "list"
            ? "flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-left"
            : "flex flex-col px-6.25 pt-6.25 pb-8.75 text-center gap-2.5"
        }
      >
        <h5 className="text-h5 font-bold text-text">
          {product.name ?? product.title}
        </h5>
        <p
          className={
            view === "list"
              ? "line-clamp-3 text-paragraph text-text-secondary"
              : "text-text-secondary font-bold text-link"
          }
        >
          {product.description ?? product.subtitle}
        </p>
        <div className={view === "list" ? "flex gap-2" : "flex flex-row justify-center gap-2"}>
          {/* <span className="text-h5 text-muted font-bold">{product?.price}</span> */}
          <span className="text-h5 text-secondary-1 font-bold">
            {product.price != null ? `${product.price} TL` : product.price2}
          </span>
        </div>
        {/* <div className="flex items-center justify-center gap-1.5 mt-2.5">
          {product?.colors.map((color, index) => (
            <button
              key={index}
              className={`${color} w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition-transform`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
