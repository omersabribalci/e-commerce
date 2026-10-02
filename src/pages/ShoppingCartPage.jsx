import { useSelector } from "react-redux";
import Container from "../components/ui/Container";
import PageContent from "../layouts/PageContent";
import CartProduct from "../components/Cart/CartProduct";
import OrderSummary from "../components/Order/OrderSummary";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const itemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <PageContent>
      <section className="bg-gray-light-1 py-10 lg:py-14">
        <Container className="flex flex-col gap-6">
          <h1 className="border-b border-gray-light-2 pb-4 text-h3 font-bold text-text">
            My Cart ({itemCount} Items)
          </h1>
          <div className="grid gap-6 xl:grid-cols-3 xl:items-start">
            <div className="xl:col-span-2">
              {cart.length === 0 ? (
                <p className="rounded-md border border-gray-light-2 bg-bg-light p-8 text-center text-paragraph text-text-secondary">
                  Your cart is empty.
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <CartProduct key={item.product.id} cartProduct={item} />
                  ))}
                </div>
              )}
            </div>
            <OrderSummary
              action={
                <Link
                  to="/create-order"
                  className="mt-6 block w-full rounded-md bg-primary px-4 py-3 text-center text-btn font-bold text-text-light hover:bg-hover transition-colors duration-300"
                >
                  Confirm Cart
                </Link>
              }
            />
          </div>
        </Container>
      </section>
    </PageContent>
  );
};

export default ShoppingCartPage;
