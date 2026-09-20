import Container from "../ui/Container";

const AboutIntro = () => {
  return (
    <Container className="py-20 gap-15 lg:py-6 flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-1 flex-col py-6 gap-6 lg:text-left text-center">
        <p className="text-paragraph text-danger">Problems trying</p>
        <h3 className="text-text text-h3 font-bold px-14 lg:px-0">
          Met minim Mollie non desert <br className="hidden lg:block" /> Alamo
          est sit cliquey dolor do <br className="hidden lg:block" />
          met sent.
        </h3>
      </div>
      <div className="flex-1 lg:py-18.5 px-[37.5px]">
        <p className="text-text-secondary text-paragraph">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </Container>
  );
};

export default AboutIntro;
