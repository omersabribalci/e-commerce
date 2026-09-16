import BrandSection from "../components/Shop/BrandSection";
import Categories from "../components/Shop/Categories";
import PageHeader from "../components/Shop/PageHeader";
import Products from "../components/Shop/Products";
import ShopToolbar from "../components/Shop/ShopToolbar";
import PageContent from "../layouts/PageContent";

const ShopPage = () => {
  return (
    <PageContent>
      <PageHeader />
      <Categories />
      <ShopToolbar />
      <Products />
      <BrandSection />
    </PageContent>
  );
};

export default ShopPage;
