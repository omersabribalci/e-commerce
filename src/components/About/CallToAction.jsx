import ctaImg from "../../assets/about/cta.png";

const CallToAction = () => {
  return (
    <div className="bg-hover flex flex-row">
      <div className="flex-3/5 flex flex-col gap-6 px-22.5 lg:px-48.75 py-17.75 lg:py-50 text-text-light">
        <h5 className="text-h5 font-bold">WORK WITH US</h5>
        <h2 className="text-h3 font-bold">Now Lets grow Yours</h2>
        <p className="text-paragraph">
          he gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <button className="w-33 h-13 cursor-pointer rounded-md font-bold flex items-center justify-center transition-all border-2 text-btn hover:bg-white/10">
          Button
        </button>
      </div>
      <img className="flex-2/5 hidden lg:block" src={ctaImg} alt="cta" />{" "}
    </div>
  );
};

export default CallToAction;
