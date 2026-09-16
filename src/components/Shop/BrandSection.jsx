import { brandLogos } from "../../data/Shop/brands";

const BrandSection = () => {
  return (
    <div className="bg-gray-light-2 text-text-secondary flex flex-col px-32.75 py-40 gap-15 lg:flex-row lg:px-48.75 lg:py-12.5 lg:gap-7.5 justify-between items-center">
      {brandLogos.map((brand) => (
        <img
          key={brand.id}
          src={brand.src}
          alt={brand.name}
          className="h-20 lg:h-10 object-contain hover:opacity-100 transition-all duration-300"
        />
      ))}
    </div>
  );
};

export default BrandSection;
