import hero from "../../assets/promo-section/promo-section-hero.png";
import ButtonMd from "../ui/ButtonMd";
import Container from "../ui/Container";

const PromoSection = () => {
  return (
    <section className="bg-bg-light">
      <Container className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src={hero}
            alt="Neural Universe Promo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start justify-center gap-8.25 px-10 py-20 lg:py-0 lg:pl-16 lg:pr-0">
          <h5 className="text-h5 text-muted font-bold">WINTER 2027</h5>
          <h2 className="text-h2 text-text font-bold xl:w-[85%]">
            Part of the Neural Universe
          </h2>
          <h4 className="text-h4 text-text-secondary xl:w-[85%]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-col gap-6.25 lg:flex lg:flex-row lg:gap-2.5">
            <ButtonMd color="success">{"BUY NOW"}</ButtonMd>
            <ButtonMd variant="outlined" color="success">
              {"LEARN MORE"}
            </ButtonMd>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PromoSection;
