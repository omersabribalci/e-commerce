import { useState } from "react";
import OrderSummary, { SHIPPING_FEE } from "../components/Order/OrderSummary";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";
import AddressInfo from "../components/Order/AddressInfo";
import PaymentOptions from "../components/Order/PaymentOptions";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedProductsTotal } from "../utils/cartTotal";
import api from "../services/axiosInstance";
import {
  setAddress,
  setCart,
  setPayment,
} from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

const CreateOrderPage = () => {
  const [activeTab, setActiveTab] = useState("address");
  const [cardCcv, setCardCcv] = useState("");
  const dispatch = useDispatch();
  const [isPaying, setIsPaying] = useState(false);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const shippingAddress = useSelector(
    (state) => state.shoppingCart.address.shippingAddress,
  );

  const selectedCard = useSelector((state) =>
    state.client.creditCards.find(
      (card) => card.id === state.shoppingCart.payment.cardId,
    ),
  );

  const selectedTotal = getSelectedProductsTotal(cart);

  const canPay =
    selectedTotal > 0 &&
    !!shippingAddress?.id &&
    !!selectedCard &&
    /^\d{3,4}$/.test(cardCcv);

  const tabs = [
    { id: "address", label: "Address Information" },
    { id: "payment", label: "Payment Options" },
  ];

  const handlePayment = async () => {
    const products = cart
      .filter((item) => item.checked)
      .map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: "",
      }));

    const payload = {
      address_id: shippingAddress.id,
      order_date: new Date().toISOString().slice(0, 19),
      card_no: selectedCard.card_no,
      card_name: selectedCard.name_on_card,
      card_expire_month: selectedCard.expire_month,
      card_expire_year: selectedCard.expire_year,
      card_ccv: cardCcv,
      price: Number((selectedTotal + SHIPPING_FEE).toFixed(2)),
      products,
    };

    setIsPaying(true);

    try {
      console.log(payload);

      await api.post("/order", payload);

      dispatch(setCart([]));
      dispatch(setAddress({}));
      dispatch(setPayment({}));
      setCardCcv("");

      toast.success("Your order was placed successfully!");
    } catch {
      toast.error("Order could not be placed. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <PageContent>
      <section>
        <Container className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-col w-full flex-3/4 gap-4 rounded-md">
            <div className="flex flex-row justify-between">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md text-center border border-muted border-b-4 py-4 flex-1 cursor-pointer font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-primary"
                      : "text-text-secondary hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeTab === "address" && <AddressInfo />}
            {activeTab === "payment" && (
              <PaymentOptions cardCcv={cardCcv} setCardCcv={setCardCcv} />
            )}
          </div>
          <div className="flex-1/4">
            <OrderSummary
              action={
                <button
                  onClick={handlePayment}
                  type="button"
                  disabled={!canPay || isPaying}
                  className={`cursor-pointer mt-6 block w-full rounded-md px-4 py-3 text-center text-btn font-bold transition-colors duration-300 ${
                    canPay
                      ? "bg-primary text-text-light hover:bg-hover"
                      : "cursor-not-allowed bg-gray-300 text-text-secondary"
                  }`}
                >
                  {isPaying ? "Placing order..." : "Make a Payment"}
                </button>
              }
            />
          </div>
        </Container>
      </section>
    </PageContent>
  );
};

export default CreateOrderPage;
