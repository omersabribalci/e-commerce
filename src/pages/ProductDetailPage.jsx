import ProductDetail from "../components/Product/ProductDetail";
import BrandSection from "../components/Shop/BrandSection";
import ProductGrid from "../components/Product/ProductGrid";
import { products } from "../data/products";
import PageContent from "../layouts/PageContent";
import ProductInfoTabs from "../components/Product/ProductInfoTabs";
import BreadCrumb from "../components/ui/BreadCrumb";
import Container from "../components/ui/Container";

//import { useParams } from "react-router-dom";

const product = {
  id: 1,
  photo: "product1",
  title: "Graphic Design",
  subtitle: "English Department",
  price1: "$16.48",
  price2: "$6.48",
  colors: ["bg-primary", "bg-secondary-1", "bg-alert", "bg-bg-dark"],
};

const ProductDetailPage = () => {
  //const { id } = useParams();
  return (
    <PageContent>
      <div className="bg-gray-light-1">
        <Container
          className="gap-5 py-6 flex flex-col lg:flex-row lg:gap-0 items-center justify-between"
        >
          <BreadCrumb />
        </Container>
      </div>
      <ProductDetail product={product} />
      <ProductInfoTabs />
      <section>
        <Container className="py-12 flex flex-col gap-6">
          <h2 className="text-h3 text-text font-bold">BESTSELLER PRODUCTS</h2>
          <hr className="text-gray-light-2 lg:h-0.5" />
          <ProductGrid products={products} />
        </Container>
      </section>
      <BrandSection />
    </PageContent>
  );
};

export default ProductDetailPage;
