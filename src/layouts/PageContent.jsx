import Footer from "./Footer";
import Header from "./Header";

const PageContent = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContent;
