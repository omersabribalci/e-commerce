import { useSelector } from "react-redux";
import BrandSection from "../components/Shop/BrandSection";
import Categories from "../components/Shop/Categories";
import PageHeader from "../components/Shop/PageHeader";
import Products from "../components/Shop/Products";
import ShopToolbar from "../components/Shop/ShopToolbar";
import PageContent from "../layouts/PageContent";

const ShopPage = () => {
  const categories = useSelector((state) => state.product.categories);
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <PageContent>
      <PageHeader />
      <Categories categories={topCategories} />
      <ShopToolbar />
      <Products />
      <BrandSection />
    </PageContent>
  );
};

export default ShopPage;
