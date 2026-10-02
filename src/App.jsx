import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Bounce, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { verifyToken } from "./store/actions/clientActions";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateOrderPage from "./pages/CreateOrderPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [checkingAuth, setCheckingAuth] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );

  useEffect(() => {
    dispatch(verifyToken()).finally(() => {
      setCheckingAuth(false);
    });
  }, [dispatch]);

  // Sayfa değiştiğinde önceki sayfanın kaydırma konumunu taşımayalım.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          component={ProductDetailPage}
        />
        <Route
          exact
          path="/shop/:gender/:categoryName/:categoryId"
          component={ShopPage}
        />
        <Route path="/cart" component={ShoppingCartPage} />
        <ProtectedRoute path="/create-order" checkingAuth={checkingAuth}>
          <CreateOrderPage />
        </ProtectedRoute>
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default App;
