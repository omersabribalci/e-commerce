import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { getSelectedProductsTotal } from "../utils/cartTotal";

const ProtectedRoute = ({
  children,
  checkingAuth,
  requireSelectedCart = false,
  ...rest
}) => {
  const user = useSelector((state) => state.client.user);
  const selectedTotal = useSelector((state) =>
    getSelectedProductsTotal(state.shoppingCart.cart),
  );

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (checkingAuth) return <Loading />;

        if (!user?.email) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }

        if (requireSelectedCart && selectedTotal <= 0) {
          return <Redirect to="/cart" />;
        }

        return children;
      }}
    />
  );
};

export default ProtectedRoute;
