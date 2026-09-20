import { products } from "../../data/products";
import ProductGrid from "../Product/ProductGrid";
import Container from "../ui/Container";

const BestSellers = () => {
  return (
    <section className="bg-bg-light">
      <Container className="py-20">
        <div className="text-center flex flex-col gap-2.5 mb-12">
          <p className="text-h4 text-text-secondary">Featured Products</p>
          <h2 className="text-h3 text-text font-bold">BESTSELLER PRODUCTS</h2>
          <p className="text-paragraph text-text-secondary">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <ProductGrid products={products} />
      </Container>
    </section>
  );
};

export default BestSellers;
