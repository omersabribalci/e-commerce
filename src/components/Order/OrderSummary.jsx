import { useSelector } from "react-redux";

const SHIPPING_FEE = 29.99;
const DISCOUNT = 0;

const formatPrice = (value) =>
  `${value.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL`;

const OrderSummary = ({ action }) => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const selectedCount = cart.reduce(
    (total, item) => total + (item.checked ? item.count : 0),
    0,
  );
  const productsTotal = cart.reduce(
    (total, item) =>
      item.checked ? total + item.product.price * item.count : total,
    0,
  );
  // TODO: Replace the flat shipping fee when the backend provides shipping costs.
  const shippingFee = selectedCount > 0 ? SHIPPING_FEE : 0;
  const grandTotal = productsTotal + shippingFee - DISCOUNT;

  return (
    <aside className="rounded-md border border-gray-light-2 bg-bg-light p-5 shadow-light xl:sticky xl:top-6">
      <h2 className="border-b border-gray-light-2 pb-4 text-h5 font-bold text-text">
        Order Summary
      </h2>
      <dl className="mt-4 flex flex-col gap-3 text-paragraph text-text-secondary">
        <div className="flex justify-between gap-3">
          <dt>Products total</dt>
          <dd className="whitespace-nowrap text-text">
            {formatPrice(productsTotal)}
          </dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Shipping (flat rate)</dt>
          <dd className="whitespace-nowrap text-text">
            {formatPrice(shippingFee)}
          </dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>Discount</dt>
          <dd className="whitespace-nowrap text-text">
            {formatPrice(DISCOUNT)}
          </dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-light-2 pt-4 font-bold text-text">
          <dt>Grand total</dt>
          <dd className="whitespace-nowrap text-primary">
            {formatPrice(grandTotal)}
          </dd>
        </div>
      </dl>
      {action}
    </aside>
  );
};

export default OrderSummary;
