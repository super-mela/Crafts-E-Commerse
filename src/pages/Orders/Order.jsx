import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useGetCrsytalSubTotal from "../../Hooks/useGetCrystalSubTotal/useGetCrystalSubTotal";
import PersonalInfo from './PersonalInfo/PersonalInfo'
import OrderProduct from "./OrderProduct/OrderProduct";
import { CrystalContext } from "../../Contexts/CrystalProvider/CrystalProvider";
import useGetCrystalQuantity from "../../Hooks/useGetCrystalQuantity/useGetCrystalQuantity";
import axios from '../../AxiosInstance/AxiosInstance'

const Order = () => {
  const { data: { data: crystalOption } = [] } = useQuery({ queryKey: ["crystalOption"], queryFn: () => { return axios.get("/setting/crystalOption"); }, });
  const location = useLocation();
  const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
  const { crystalItems } = useContext(CrystalContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subTotal] = useGetCrsytalSubTotal();
  const [grandTotal, setGrandTotal] = useState(0);
  const [crystalDataOptions, setCrystalDataOptions] = useState()
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

  useEffect(() => {
    var CrystalDataOptions = {};
    var LEDOptions = crystalOption?.LEDs.filter((option) => parseFloat(option.price) === location.state.LED || option.text === location.state.LED)
    var rushOptions = crystalOption?.rushs.filter((option) => parseFloat(option.price) === location.state.rush || option.text === location.state.rush)
    var sizeOptions = crystalOption?.sizes.filter((option) => parseFloat(option.price) === location.state.size || option.text === location.state.size)
    var keyOptions = crystalOption?.keychains.filter((option) => parseFloat(option.price) === location.state.keychane || option.text === location.state.keychane)
    var lineOptions = crystalOption?.lines.filter((option) => parseFloat(option.price) === location.state.line || option.text === location.state.line)
    LEDOptions?.map((item) => CrystalDataOptions.LED = item.text)
    rushOptions?.map((item) => CrystalDataOptions.rush = item.text)
    sizeOptions?.map((item) => CrystalDataOptions.size = item.text)
    keyOptions?.map((item) => CrystalDataOptions.keychane = item.text)
    lineOptions?.map((item) => CrystalDataOptions.line = item.text)
    CrystalDataOptions.background = location.state.background ? "Yes" : "No Thankyou"
    CrystalDataOptions.cleaningKit = location.state.cleaningKit ? "Yes" : "No Thankyou"
    CrystalDataOptions.text = location.state.text
    CrystalDataOptions.font = location.state.font
    CrystalDataOptions.file = location.state.file
    setCrystalDataOptions(CrystalDataOptions)
  }, [crystalOption])

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
            customcaptionData={crystalDataOptions}
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
          customData={crystalDataOptions}
        ></OrderProduct>
      </div>
    </div>
  );
};

export default Order;

