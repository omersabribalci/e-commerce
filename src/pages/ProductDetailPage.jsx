import ProductDetail from "../components/Product/ProductDetail";
import BrandSection from "../components/Shop/BrandSection";
import ProductGrid from "../components/Product/ProductGrid";
import { products } from "../data/products";
import PageContent from "../layouts/PageContent";
import ProductInfoTabs from "../components/Product/ProductInfoTabs";
import Breadcrumb from "../components/ui/BreadCrumb";
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
      <nav className="gap-5 py-6 flex flex-col lg:flex-row lg:px-50 lg:gap-0 items-center justify-between bg-gray-light-1">
        <Breadcrumb />
      </nav>
      <ProductDetail product={product} />
      <ProductInfoTabs />
      <div className="px-10 lg:px-48.75 py-12 flex flex-col gap-6">
        <h3 className="text-h3 text-text font-bold">BESTSELLER PRODUCTS</h3>
        <hr className="text-gray-light-2 lg:h-0.5" />
        <ProductGrid products={products} />
      </div>
      <BrandSection />
    </PageContent>
  );
};

export default ProductDetailPage;
