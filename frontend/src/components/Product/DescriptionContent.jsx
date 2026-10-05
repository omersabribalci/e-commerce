import productImg from ".././../assets/products/product-detail-2.png";

const DescriptionContent = () => {
  // TODO: Replace this placeholder with product-specific content when the API provides it.
  return (
    <div className="py-6 flex flex-col lg:flex-row gap-7.5">
      <img src={productImg} alt="" className="object-contain" />
      <div className="py-6.25 flex flex-col gap-7.5">
        <h3 className="text-h3 text-text font-bold">
          the quick fox jumps over{" "}
        </h3>
        <p className="text-paragraph text-text-secondary">
          Explore this item from every angle and find the details that matter
          most to you. Compare its features and choose what suits you best. <br />
          <br /> Browse the collection to discover more styles and find the
          right fit for your everyday needs. <br />
          <br /> Take your time to review the available information before
          making your choice.
        </p>
      </div>
      <div className="py-6.25 flex flex-col gap-7.5">
        <h3 className="text-h3 text-text font-bold">
          the quick fox jumps over{" "}
        </h3>
        <p className="text-paragraph text-text-secondary">
          Explore this item from every angle and find the details that matter
          most to you. Compare its features and choose what suits you best. <br />
          <br /> Browse the collection to discover more styles and find the
          right fit for your everyday needs. <br />
          <br /> Take your time to review the available information before
          making your choice.
        </p>
      </div>
    </div>
  );
};

export default DescriptionContent;
