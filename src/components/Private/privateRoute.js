import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const privateRoute = ({ children, ...rest }) => {
  const email = sessionStorage.getItem("email");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default privateRoute;
