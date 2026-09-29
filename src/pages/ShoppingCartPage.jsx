import { useSelector } from "react-redux";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";
import CartProduct from "../components/Cart/CartProduct";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);
  const selectedTotal = cart.reduce(
    (total, item) =>
      item.checked ? total + item.product.price * item.count : total,
    0,
  );

  return (
    <PageContent>
      <section className="bg-gray-light-1 py-10 lg:py-14">
        <Container className="flex flex-col gap-6">
          <h1 className="border-b border-gray-light-2 pb-4 text-h3 font-bold text-text">
            Sepetim ({itemCount} Ürün)
          </h1>
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
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-gray-light-2 bg-bg-light px-5 py-4">
            <span className="text-h6 font-bold text-text">
              Seçili ürünlerin toplamı
            </span>
            <strong className="text-h4 text-primary">
              {selectedTotal.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} TL
            </strong>
          </div>
        </Container>
      </section>
    </PageContent>
  );
};

export default ShoppingCartPage;
