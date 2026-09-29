import ProductGrid from "../Product/ProductGrid";
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
      ) : (
        <ProductGrid products={products} view={view} />
      )}

      <Pagination />
    </Container>
  );
};

export default Products;
