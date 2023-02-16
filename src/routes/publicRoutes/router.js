import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Category from "../../pages/Category/Category/Category";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import ContactUs from "../../pages/ContactUs/ContactUs";
import ChangePassword from "../../pages/Dashboard/ChangePassword/ChangePassword";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import UpdateProfile from "../../pages/Dashboard/UpdateProfile/UpdateProfile";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FaQ/FAQ";
import Home from "../../pages/Home/Home/Home";
import Invoice from "../../pages/Invoice/Invoice/Invoice";
import Offers from "../../pages/Offers/Offers/Offers";
import ProductDetails from "../../pages/ProductDetails/ProductDetails/ProductDetails";
import SearchResult from "../../pages/SearchResult/SearchResult";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "/invoice/:uid",
        element: <Invoice />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoutes>
            <DashboardLayout />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/user/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/user/dashboard/myorders",
            element: <MyOrders />,
          },
          {
            path: "/user/dashboard/updateProfile",
            element: <UpdateProfile />,
          },
          {
            path: "/user/dashboard/changepassword",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
]);
