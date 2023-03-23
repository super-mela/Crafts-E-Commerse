import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import useGetSubTotal from "../../Hooks/useGetSubTotal/useGetSubTotal";
import OrderProduct from "./OrderProduct/OrderProduct";

const Order = () => {

  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal] = useGetSubTotal();
  const [grandTotal, setGrandTotal] = useState(0);
  // const grandTotal = parseFloat(
  //   (subTotal - discount + shippingCost || 0).toFixed(2)
  // );

  useEffect(() => {
    setGrandTotal(
      parseFloat((subTotal - discount + shippingCost || 0).toFixed(2))
    );

    return () => {
      // Clean up function
    };
  }, [subTotal, discount, shippingCost]);

  return (
    <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
      <Helmet>
        <title>Crafts - Order</title>
        <meta name="description" content="Custom Order of Craft Gifts." />
      </Helmet>

      <div className="lg:w-[65%] bg-white rounded-md lg:order-1 order-2">
        <PersonalInfo
          discount={discount}
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          grandTotal={grandTotal}
        ></PersonalInfo>
      </div>
      <div className="lg:w-[35%] w-full relative transition-all delay-75 lg:order-2 order-1">
        <OrderProduct
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
          discount={discount}
          setDiscount={setDiscount}
          grandTotal={grandTotal}
        ></OrderProduct>
      </div>
    </div>
  );
};

export default Order;
