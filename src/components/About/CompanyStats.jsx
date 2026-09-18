const CompanyStats = () => {
  return (
    <div className="flex flex-col lg:flex-row py-36.25 lg:py-20 px-21.5 lg:px-48.75 gap-25 lg:gap-7.5 justify-center items-center text-center">
      <div className="px-17">
        <h1 className="text-h1 text-text font-bold">15K</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Happy Customers
        </h5>
      </div>
      <div className="px-17">
        <h1 className="text-h1 text-text font-bold">150K</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Monthly Visitors
        </h5>
      </div>
      <div className="px-17">
        <h1 className="text-h1 text-text font-bold">15</h1>
        <h5 className="text-h5 text-text-secondary font-bold">
          Countries Worldwide
        </h5>
      </div>
      <div className="px-17">
        <h1 className="text-h1 text-text font-bold">100+</h1>
        <h5 className="text-h5 text-text-secondary font-bold">Top Partners</h5>
      </div>
    </div>
  );
};

export default CompanyStats;
