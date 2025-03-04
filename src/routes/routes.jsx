import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cards from "../components/Cards";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      {
        path: "/details/:id",
        loader: () => fetch("../data.json"),
        element: <Details></Details>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
              path: 'wishlist',
              element: <Wishlist></Wishlist>
            }
        ]
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

export default routes;
