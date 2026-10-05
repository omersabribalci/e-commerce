import useOpenProduct from "../../hooks/useOpenProduct";
import ProductRating from "./ProductRating";

const ProductList = ({ products }) => {
  const openProduct = useOpenProduct();

  return (
    <div className="flex w-full flex-col gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => openProduct(product)}
          className="flex w-full flex-col overflow-hidden rounded-md border border-gray-light-2 bg-bg-light cursor-pointer transition-shadow hover:shadow-accentued sm:flex-row"
        >
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="h-64 w-full object-contain sm:h-56 sm:w-56 sm:shrink-0"
          />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-left">
            <h2 className="text-h5 font-bold text-primary">{product.name}</h2>
            <ProductRating rating={product.rating} sellCount={product.sell_count} />
            <span className="text-h5 font-bold text-secondary-1">
              ₺{product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
