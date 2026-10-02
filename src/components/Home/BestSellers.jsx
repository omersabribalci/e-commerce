import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "../Product/ProductGrid";
import Container from "../ui/Container";
import { useEffect } from "react";
import { ensureProductList } from "../../store/actions/productActions";

const BestSellers = () => {
  const products = useSelector((state) => state.product.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) dispatch(ensureProductList());
  }, [dispatch, products.length]);

  const bestSellers = [...products]
    .sort((a, b) => Number(b.sell_count ?? 0) - Number(a.sell_count ?? 0))
    .slice(0, 8);

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
        <ProductGrid products={bestSellers} />
      </Container>
    </section>
  );
};

export default BestSellers;
