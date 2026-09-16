import { products } from "../../data/products";
import ProductGrid from "../Product/ProductGrid";
import Pagination from "../ui/Pagination";

const Products = () => {
  return (
    <div className="px-10.75 py-20 lg:py-12 lg:px-49 flex flex-col items-center">
      <ProductGrid products={products} />
      <Pagination />
    </div>
  );
};

export default Products;
