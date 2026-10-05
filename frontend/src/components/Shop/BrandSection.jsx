import { brandLogos } from "../../data/Shop/brands";
import Container from "../ui/Container";

const BrandSection = () => {
  return (
    <Container className="text-text-secondary flex flex-col py-10 gap-15 lg:flex-row lg:py-12.5 lg:gap-7.5 justify-between items-center">
      {brandLogos.map((brand) => (
        <img
          key={brand.id}
          src={brand.src}
          alt={brand.name}
          className="h-20 lg:h-10 object-contain"
        />
      ))}
    </Container>
  );
};

export default BrandSection;
