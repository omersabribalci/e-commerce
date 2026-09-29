import { ArrowLeft, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useHistory } from "react-router-dom";
import Container from "../ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions/shoppingCartActions";

const ProductDetail = ({ product }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const totalStars = 5;
  const history = useHistory();
  const cartCount = cart.find((item) => item.product.id === product?.id)?.count ?? 0;
  const atStockLimit = !product || cartCount >= product.stock;

  const handleClick = () => {
    if (atStockLimit) return;

    const updatedCart = cart.some((item) => item.product.id === product.id)
      ? cart.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item,
        )
      : [...cart, { count: 1, checked: true, product }];

    dispatch(setCart(updatedCart));
  };

  return (
    <section className="bg-gray-light-1">
      <Container className="pt-6">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="inline-flex items-center gap-2 rounded-md border border-gray-light-2 px-4 py-2 text-link font-bold text-primary cursor-pointer transition-colors hover:bg-bg-light"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </Container>
      <Container className="flex flex-col lg:flex-row gap-7.5 py-12 lg:pb-12 lg:pt-0">
        <img
          src={product?.images?.[0]?.url}
          alt={product?.name ?? ""}
          className="h-80 w-full object-contain lg:h-112.5 lg:max-w-125"
        />
        <div className="px-6 py-2.75 gap-5.5 lg:px-5.5 lg:gap-6.75 flex flex-col">
          <h1 className="text-text text-h4">{product?.name}</h1>
          <div className="flex flex-row">
            {Array.from({ length: totalStars }).map((_, index) => (
              <Star
                key={index}
                strokeWidth={0.3}
                className={
                  index < product?.rating ? "fill-[#F3CD03]" : "fill-bg-light"
                }
              />
            ))}
            <span className="ml-2 text-h6 text-text-secondary font-bold">
              10 reviews
            </span>
          </div>
          <span className="text-h3 text-text font-bold">
            {product?.price} TL
          </span>
          <div className="flex flex-row gap-2">
            <span className="text-h6 text-text-secondary font-bold">
              Availability :
            </span>
            <span className="text-h6 text-primary font-bold">
              {product?.stock > 0 ? "In Stock" : "Not Available"}
            </span>
          </div>
          <p className="text-paragraph text-text-secondary">
            {product?.description}
          </p>
          <hr className="text-muted" />
          {/* <div className="flex flex-row gap-1.5">
            {product?.colors.map((color, index) => (
              <button
                key={index}
                className={`${color} w-7.5 h-7.5 rounded-full cursor-pointer hover:scale-110 transition-transform`}
              />
            ))}
          </div> */}
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
            <button
              type="button"
              onClick={handleClick}
              disabled={atStockLimit}
              className="border rounded-full p-2 border-muted cursor-pointer transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
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
