import ButtonMd from "../ui/ButtonMd";
import heroImg from "../../assets/about/about-hero.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-36 justify-center">
      <div className="pt-20 px-17.5 flex flex-col gap-8.75 lg:pl-48.75 text-center lg:text-left lg:py-28 items-center lg:items-baseline-last">
        <h5 className="text-h5 text-text font-bold">ABOUT COMPANY</h5>
        <h1 className="text-h1 text-text font-bold">ABOUT US</h1>
        <h4 className="text-h4 text-text-secondary">
          We know how large objects will act,
          <br />
          but things on a small scale
        </h4>
        <ButtonMd>Get Quote Now</ButtonMd>
      </div>
      <img src={heroImg} alt="hero" />
    </div>
  );
};

export default AboutUs;
