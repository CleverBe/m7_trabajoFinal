import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import { LandingPage } from "../screens/LandingPage";

const basename =
  import.meta.env.NODE_ENV === "production" ? "/m7_trabajoFinal" : "/";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/default",
          element: <Default />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
  ],
  {
    basename: basename,
  }
);

export default routes;
