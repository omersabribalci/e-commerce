import ProductGrid from "../Product/ProductGrid";
import ProductList from "../Product/ProductList";
import Pagination from "../ui/Pagination";
import Container from "../ui/Container";
import { useSelector } from "react-redux";
import Loading from "../ui/Loading";

const Products = ({ view }) => {
  const products = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);

  return (
    <Container className="py-20 lg:py-12 flex flex-col items-center">
      {fetchState === "FETCHING" ? (
        <Loading />
      ) : fetchState === "FAILED" ? (
        <p className="text-text-secondary">
          Products could not be loaded. Please try again.
        </p>
      ) : view === "list" ? (
        <ProductList products={products} />
      ) : (
        <ProductGrid products={products} />
      )}

      {fetchState === "FETCHED" && <Pagination />}
    </Container>
  );
};

export default Products;
