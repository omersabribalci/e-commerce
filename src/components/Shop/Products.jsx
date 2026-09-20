import { products } from "../../data/products";
import ProductGrid from "../Product/ProductGrid";
import Pagination from "../ui/Pagination";
import Container from "../ui/Container";

const Products = () => {
  return (
    <Container className="py-20 lg:py-12 flex flex-col items-center">
      <ProductGrid products={products} />
      <Pagination />
    </Container>
  );
};

export default Products;
