import { products } from "../../data/products";
import ProductGrid from "../Product/ProductGrid";

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
      <ProductGrid products={products} />
    </div>
  );
};

export default BestSellers;
