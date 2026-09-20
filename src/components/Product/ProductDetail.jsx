import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import productImg from "../../assets/products/product-detail-1.jpg";
import Container from "../ui/Container";

const ProductDetail = ({ product }) => {
  const totalStars = 5;
  const rating = 5;
  return (
    <section className="bg-gray-light-1">
      <Container className="flex flex-col lg:flex-row gap-7.5 py-12 lg:pb-12 lg:pt-0">
        <img src={productImg} alt="" className="object-contain" />
        <div className="px-6 py-2.75 gap-5.5 lg:px-5.5 lg:gap-6.75 flex flex-col">
          <h4 className="text-text text-h4">Floating Phone</h4>
          <div className="flex flex-row">
            {Array.from({ length: totalStars }).map((_, index) => (
              <Star
                key={index}
                strokeWidth={0.3}
                className={
                  index < rating ? "fill-[#F3CD03]" : "fill-bg-light"
                }
              />
            ))}
            <span className="ml-2 text-h6 text-text-secondary font-bold">
              10 reviews
            </span>
          </div>
          <span className="text-h3 text-text font-bold">$1,139.33</span>
          <div className="flex flex-row gap-2">
            <span className="text-h6 text-text-secondary font-bold">
              Availability :
            </span>
            <span className="text-h6 text-primary font-bold">In Stock</span>
          </div>
          <p className="text-paragraph text-text-secondary">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="text-muted" />
          <div className="flex flex-row gap-1.5">
            {product?.colors.map((color, index) => (
              <button
                key={index}
                className={`${color} w-7.5 h-7.5 rounded-full cursor-pointer hover:scale-110 transition-transform`}
              />
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-2.5">
            <select
              name=""
              id=""
              className="bg-primary rounded-[5px] px-5 py-2.5"
            >
              <option value="" label="Select Options"></option>
            </select>
            <button className="border rounded-full p-2 border-muted cursor-pointer transition-transform hover:scale-105">
              <Heart strokeWidth={1} className="text-text" />
            </button>
            <button className="border rounded-full p-2 border-muted cursor-pointer transition-transform hover:scale-105">
              <ShoppingCart strokeWidth={1} className="text-text" />
            </button>
            <button className="border rounded-full p-2 border-muted cursor-pointer transition-transform hover:scale-105">
              <Eye strokeWidth={1} className="text-text" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;
