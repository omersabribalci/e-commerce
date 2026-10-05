import Container from "../ui/Container";

const CompanyStats = () => {
  return (
    <Container className="flex flex-col lg:flex-row py-36.25 lg:py-20 gap-25 lg:gap-7.5 justify-center items-center text-center">
      <div className="w-full flex-1">
        <h1 className="text-h1 text-text font-bold">15K</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Happy Customers
        </h5>
      </div>
      <div className="w-full flex-1">
        <h1 className="text-h1 text-text font-bold">150K</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Monthly Visitors
        </h5>
      </div>
      <div className="w-full flex-1">
        <h1 className="text-h1 text-text font-bold">15</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Countries Worldwide
        </h5>
      </div>
      <div className="w-full flex-1">
        <h1 className="text-h1 text-text font-bold">100+</h1>
        <h5 className="text-h5 text-text-secondary font-bold">Top Partners</h5>
      </div>
    </Container>
  );
};

export default CompanyStats;
