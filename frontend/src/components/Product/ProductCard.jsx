import useOpenProduct from "../../hooks/useOpenProduct";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const openProduct = useOpenProduct();

  return (
    <div
      className="flex flex-col flex-wrap md:flex-row border border-gray-light-2 transition-transform duration-300 hover:scale-105 justify-center cursor-pointer"
      onClick={() => openProduct(product)}
    >
      <img
        src={product.images?.[0]?.url ?? product.photo}
        alt={product.name ?? product.title ?? ""}
        className="w-full h-106.75 object-cover"
      />
      <div className="flex flex-col px-6.25 pt-6.25 pb-8.75 text-center gap-2.5">
        <h5 className="text-h5 font-bold text-primary">{product.name}</h5>
        <div className="flex justify-center">
          <ProductRating rating={product.rating} sellCount={product.sell_count} />
        </div>
        <div className="flex flex-row justify-center gap-2">
          <span className="text-h5 text-secondary-1 font-bold">
            ₺{product.price}
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
