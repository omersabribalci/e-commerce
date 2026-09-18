import AboutIntro from "../components/About/AboutIntro";
import AboutUs from "../components/About/AboutUs";
import CallToAction from "../components/About/CallToAction";
import CompanyStats from "../components/About/CompanyStats";
import Team from "../components/About/Team";
import Video from "../components/About/Video";
import BrandSection from "../components/Shop/BrandSection";
import PageContent from "../layouts/PageContent";

const AboutPage = () => {
  return (
    <PageContent>
      <AboutUs />
      <AboutIntro />
      <CompanyStats />
      <Team />,
      <div className="bg-gray-light-2 py-30 lg:py-20 px-10.5 lg:px-48.75 flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-7.5 justify-center text-center items-center">
          <h2 className="text-h2 text-text font-bold">
            Big Companies Are Here
          </h2>
          <p className="text-paragraph text-text-secondary">
            Problems trying to resolve the conflict between
            <br className="hidden lg:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </div>
        <BrandSection />
      </div>
      ,
      <Video />
      <CallToAction />
    </PageContent>
  );
};

export default AboutPage;
