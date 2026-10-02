import useOpenProduct from "../../hooks/useOpenProduct";

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
        <h5 className="text-h5 font-bold text-text">
          {product.name ?? product.title}
        </h5>
        <p className="text-text-secondary font-bold text-link">
          {product.description ?? product.subtitle}
        </p>
        <div className="flex flex-row justify-center gap-2">
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
