import BestSellers from "../components/Home/BestSellers";
import EditorsPick from "../components/Home/EditorsPick";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import PromoSection from "../components/Home/PromoSection";
import Slider from "../components/ui/Slider";
import PageContent from "../layouts/PageContent";

const HomePage = () => {
  return (
    <PageContent>
      <Slider />
      <EditorsPick />
      <BestSellers />
      <Slider />
      <PromoSection />
      <FeaturedPosts />
    </PageContent>
  );
};

export default HomePage;
