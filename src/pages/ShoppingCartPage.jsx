import { useSelector } from "react-redux";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";
import CartProduct from "../components/Cart/CartProduct";

const SHIPPING_FEE = 29.99;
const DISCOUNT = 0;
const formatPrice = (value) =>
  `${value.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TL`;

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);
  const selectedCount = cart.reduce(
    (total, item) => total + (item.checked ? item.count : 0),
    0,
  );
  const productsTotal = cart.reduce(
    (total, item) =>
      item.checked ? total + item.product.price * item.count : total,
    0,
  );
  // TODO: Kargo ücreti backend'den geldiğinde sabit sipariş ücretini kaldır.
  const shippingFee = selectedCount > 0 ? SHIPPING_FEE : 0;
  const grandTotal = productsTotal + shippingFee - DISCOUNT;

  return (
    <PageContent>
      <section className="bg-gray-light-1 py-10 lg:py-14">
        <Container className="flex flex-col gap-6">
          <h1 className="border-b border-gray-light-2 pb-4 text-h3 font-bold text-text">
            Sepetim ({itemCount} Ürün)
          </h1>
          <div className="grid gap-6 xl:grid-cols-3 xl:items-start">
            <div className="xl:col-span-2">
              {cart.length === 0 ? (
                <p className="rounded-md border border-gray-light-2 bg-bg-light p-8 text-center text-paragraph text-text-secondary">
                  Sepetiniz boş.
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <CartProduct key={item.product.id} cartProduct={item} />
                  ))}
                </div>
              )}
            </div>
            <aside className="rounded-md border border-gray-light-2 bg-bg-light p-5 shadow-light">
              <h2 className="border-b border-gray-light-2 pb-4 text-h5 font-bold text-text">
                Sipariş Özeti
              </h2>
              <dl className="mt-4 flex flex-col gap-3 text-paragraph text-text-secondary">
                <div className="flex justify-between gap-3">
                  <dt>Ürünlerin toplamı</dt>
                  <dd className="whitespace-nowrap text-text">{formatPrice(productsTotal)}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Kargo (sabit)</dt>
                  <dd className="whitespace-nowrap text-text">{formatPrice(shippingFee)}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>İndirim</dt>
                  <dd className="whitespace-nowrap text-text">{formatPrice(DISCOUNT)}</dd>
                </div>
                <div className="flex justify-between gap-3 border-t border-gray-light-2 pt-4 font-bold text-text">
                  <dt>Genel toplam</dt>
                  <dd className="whitespace-nowrap text-primary">{formatPrice(grandTotal)}</dd>
                </div>
              </dl>
              <button
                type="button"
                disabled
                className="mt-6 w-full rounded-md bg-primary px-4 py-3 text-btn font-bold text-text-light opacity-60 cursor-not-allowed"
              >
                Sipariş Oluştur
              </button>
            </aside>
          </div>
        </Container>
      </section>
    </PageContent>
  );
};

export default ShoppingCartPage;
