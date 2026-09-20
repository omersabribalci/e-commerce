import Footer from "./Footer";
import Header from "./Header";

const PageContent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageContent;
