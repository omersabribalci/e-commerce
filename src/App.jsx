import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:id" component={ProductDetailPage} />
        {/* /shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId */}
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
