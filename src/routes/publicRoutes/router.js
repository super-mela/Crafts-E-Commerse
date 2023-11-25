import { createBrowserRouter, createHashRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import Order from "../../pages/Orders/Order";
import Category from "../../pages/Category/Category/Category";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import ContactUs from "../../pages/ContactUs/ContactUs";
import ChangePassword from "../../pages/Dashboard/ChangePassword/ChangePassword";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import CustomOrders from "../../pages/Dashboard/CustomOrders/CustomOrders";
import UpdateProfile from "../../pages/Dashboard/UpdateProfile/UpdateProfile";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Home from "../../pages/Home/Home/Home";
import Invoice from "../../pages/Invoice/Invoice/Invoice";
import OrderInfo from "../../pages/OrderInfo/OrderInfo/OrderInfo";
import Offers from "../../pages/Offers/Offers/Offers";
import PrivacyPolicy from "../../pages/privacyPolicy/PrivacyPolicy";
import ProductDetails from "../../pages/ProductDetails/ProductDetails/ProductDetails";
import SearchResult from "../../pages/SearchResult/SearchResult";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import TermsCondition from "../../pages/termscondition/TermsCondition";
import Crystals from "../../pages/Crystals/home/home";
import CrystalDetails from "../../pages/Crystals/CrystalDetails/CrystalDetails";
import CrystalCustomize from "../../pages/Crystals/CrystalCustomize/CrystalCustomize"
import CrystalInvoice from "../../pages/CrystalInvoice/Invoice/Invoice";

export const router = createHashRouter([
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
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsCondition />,
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
        path: "/crystalinvoice/:uid",
        element: <CrystalInvoice />,
      },
      {
        path: "/orderinfo/:uid",
        element: <OrderInfo />,
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
        path: "/3dCrystals",
        element: <Crystals />,
      },
      {
        path: "/3dCrystals/customize",
        element: <CrystalCustomize />,
      },
      {
        path: "/3dCrystals/:id",
        element: <CrystalDetails />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            <Order />
          </PrivateRoutes>),
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
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
            path: "/user/dashboard/customorders",
            element: <CustomOrders />,
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
