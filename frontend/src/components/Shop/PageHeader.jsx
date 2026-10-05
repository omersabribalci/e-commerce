import BreadCrumb from "../ui/BreadCrumb";
import Container from "../ui/Container";

const PageHeader = () => {
  return (
    <div className="bg-gray-light-1">
      <Container
        as="header"
        className="gap-5 py-6 flex flex-col lg:flex-row lg:gap-0 items-center justify-between"
      >
        <h1 className="text-h3 font-bold text-text py-6 lg:py-0">Shop</h1>
        <BreadCrumb />
      </Container>
    </div>
  );
};

export default PageHeader;

//
