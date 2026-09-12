import { products } from "../../data/Products/products";
import ProductCard from "./ProductCard";

const BestSellers = () => {
  return (
    <div className="px-10.75 py-20 xl:px-48.75 bg-bg-light">
      <div className="text-center flex flex-col gap-2.5 mb-12">
        <h4 className="text-h4 text-text-secondary ">Featured Products</h4>
        <h3 className="text-h3 text-text font-bold">BESTSELLER PRODUCTS</h3>
        <p className="text-paragraph text-text-secondary">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
