import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useGetCrsytalSubTotal from "../../Hooks/useGetCrystalSubTotal/useGetCrystalSubTotal";
import PersonalInfo from './PersonalInfo/PersonalInfo'
import OrderProduct from "./OrderProduct/OrderProduct";
import { CrystalContext } from "../../Contexts/CrystalProvider/CrystalProvider";
import useGetCrystalQuantity from "../../Hooks/useGetCrystalQuantity/useGetCrystalQuantity";

const Order = () => {

  const location = useLocation();
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
  const { crystalItems } = useContext(CrystalContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal] = useGetCrsytalSubTotal();
  const [grandTotal, setGrandTotal] = useState(0);
  const [customTotal] = useState(parseFloat(localStorage.getItem("customTotal")))
  const [quantity] = useGetCrystalQuantity(crystalItems[0]?._id);

  useEffect(() => {
    setGrandTotal(
      parseFloat((subTotal - discount + shippingCost + (customTotal * quantity) || 0).toFixed(2))
    );

    return () => {
      // Clean up function
    };
  }, [subTotal, discount, shippingCost, quantity, customTotal]);

  return (
    <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
      <Helmet>
        <title>Crafts - Checkout</title>
        <meta
          name="description"
          content="Place order by confirming payment and checkout."
        />
      </Helmet>
      <div className="lg:w-[65%] bg-white rounded-md lg:order-1 order-2">
        <Elements stripe={stripePromise}>
          <PersonalInfo
            shippingCost={shippingCost}
            setShippingCost={setShippingCost}
            discount={discount}
            setDiscount={setDiscount}
            grandTotal={grandTotal}
            customData={location.state}
          ></PersonalInfo>
        </Elements>
      </div>
      <div className="lg:w-[30%] w-full relative transition-all delay-75 lg:order-2 order-1">
        <OrderProduct
          discount={discount}
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          grandTotal={grandTotal}
          customTotal={customTotal * quantity}
          customData={location.state}
        ></OrderProduct>
      </div>
    </div>
  );
};

export default Order;

