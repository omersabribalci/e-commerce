import ButtonMd from "../ui/ButtonMd";
import heroImg from "../../assets/about/about-hero.png";
import Container from "../ui/Container";

const AboutUs = () => {
  return (
    <section>
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center">
        <div className="flex flex-1 flex-col gap-8.75 py-20 text-center lg:text-left lg:py-28 items-center lg:items-baseline-last">
          <h5 className="text-h5 text-text font-bold">ABOUT COMPANY</h5>
          <h1 className="text-h1 text-text font-bold">ABOUT US</h1>
          <h4 className="text-h4 text-text-secondary">
            We know how large objects will act,
            <br />
            but things on a small scale
          </h4>
          <ButtonMd>Get Quote Now</ButtonMd>
        </div>
        <img
          src={heroImg}
          alt="hero"
          className="w-full min-w-0 flex-1 object-contain"
        />
      </Container>
    </section>
  );
};

export default AboutUs;
