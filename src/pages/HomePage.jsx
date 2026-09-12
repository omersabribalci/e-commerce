import BestSellers from "../components/Home/BestSellers";
import EditorsPick from "../components/Home/EditorsPick";
import Slider from "../components/ui/Slider";
import PageContent from "../layouts/PageContent";

const HomePage = () => {
  return (
    <PageContent>
      <Slider />
      <EditorsPick />
      <BestSellers />
      <Slider />
    </PageContent>
  );
};

export default HomePage;
