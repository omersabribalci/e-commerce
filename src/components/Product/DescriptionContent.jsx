import productImg from ".././../assets/products/product-detail-2.png";

const DescriptionContent = ({ product }) => {
  return (
    <div className="py-6 flex flex-col lg:flex-row gap-7.5">
      <img src={productImg} alt="" className="object-contain" />
      <div className="py-6.25 flex flex-col gap-7.5">
        <h3 className="text-h3 text-text font-bold">
          the quick fox jumps over{" "}
        </h3>
        <p className="text-paragraph text-text-secondary">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met. <br />
          <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do met
          sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
          venial consequent sent nostrum met. <br />
          <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do met
          sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
          venial consequent sent nostrum met.
        </p>
      </div>
      <div className="py-6.25 flex flex-col gap-7.5">
        <h3 className="text-h3 text-text font-bold">
          the quick fox jumps over{" "}
        </h3>
        <p className="text-paragraph text-text-secondary">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met. <br />
          <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do met
          sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
          venial consequent sent nostrum met. <br />
          <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do met
          sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
          venial consequent sent nostrum met.
        </p>
      </div>
    </div>
  );
};

export default DescriptionContent;
