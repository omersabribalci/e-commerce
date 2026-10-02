import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/ui/Loading";

const ProtectedRoute = ({ children, checkingAuth, ...rest }) => {
  const user = useSelector((state) => state.client.user);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (checkingAuth) return <Loading />;

        return user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
