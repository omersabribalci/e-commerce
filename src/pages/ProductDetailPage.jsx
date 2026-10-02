import ProductDetail from "../components/Product/ProductDetail";
import BrandSection from "../components/Shop/BrandSection";
import BestSellers from "../components/Home/BestSellers";
import PageContent from "../layouts/PageContent";
import ProductInfoTabs from "../components/Product/ProductInfoTabs";
import BreadCrumb from "../components/ui/BreadCrumb";
import Container from "../components/ui/Container";
import { useParams } from "react-router-dom";
import { getProductById } from "../store/actions/productActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/ui/Loading";

const ProductDetailPage = () => {
  const product = useSelector((state) => state.product.product);
  const fetchState = useSelector((state) => state.product.fetchState);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  return (
    <PageContent>
      <div className="bg-gray-light-1">
        <Container className="gap-5 py-6 flex flex-col lg:flex-row lg:gap-0 items-center justify-between">
          <BreadCrumb />
        </Container>
      </div>

      {fetchState === "FAILED" ? (
        <Container className="py-12 text-center text-paragraph text-text-secondary">
          Product could not be loaded. Please try again.
        </Container>
      ) : fetchState === "FETCHING" || !product || String(product.id) !== productId ? (
        <Container className="py-12">
          <Loading className="h-80 w-full" />
        </Container>
      ) : (
        <ProductDetail product={product} />
      )}

      <ProductInfoTabs />
      <BestSellers />
      <BrandSection />
    </PageContent>
  );
};

export default ProductDetailPage;
