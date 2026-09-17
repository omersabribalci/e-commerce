import BreadCrumb from "../ui/BreadCrumb";

const PageHeader = () => {
  return (
    <nav className="gap-5 py-6 flex flex-col lg:flex-row lg:px-50 lg:gap-0 items-center justify-between bg-gray-light-1">
      <h3 className="text-h3 font-bold text-text py-6 lg:py-0">Shop</h3>
      <BreadCrumb />
    </nav>
  );
};

export default PageHeader;

//
