import { brandLogos } from "../../data/Shop/brands";

const BrandSection = () => {
  return (
    <div className=" text-text-secondary flex flex-col  py-10 gap-15 lg:flex-row  lg:py-12.5 lg:gap-7.5 justify-between items-center w-full">
      {brandLogos.map((brand) => (
        <img
          key={brand.id}
          src={brand.src}
          alt={brand.name}
          className="h-20 lg:h-10 object-contain"
        />
      ))}
    </div>
  );
};

export default BrandSection;
