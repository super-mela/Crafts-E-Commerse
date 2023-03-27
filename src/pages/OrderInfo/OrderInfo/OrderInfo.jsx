import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { BsPrinter, BsEnvelope } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import Logo from "../../../components/Logo/Logo";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

// import SuccessMessage from "../SuccessMessage/SuccessMessage";
import "./OrderInfo.css";

const StaticPath = process.env.REACT_APP_STATIC;

const OrderInfo = () => {
  const ref = useRef();
  const { uid } = useParams();
  const { user } = useContext(AuthContext);


  const {
    isLoading,
    error,
    refetch,
    data: { data: orderinfo } = [],
  } = useQuery({
    queryKey: ["customOrders", uid],
    queryFn: () => {
      return axios.get(`/customOrders/${uid}?email=${user?.email}`);
    },
  });

  return (
    <div className="sub-section bg-[#F9FAFB]">
      <Helmet>
        <title>Crafts - OrderInfo</title>
        <meta
          name="description"
          content="Order details with confirmation of the user."
        />
      </Helmet>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {/* <SuccessMessage /> */}

          <div className="bg-white my-5 text-[17px]" ref={ref}>
            <div className="bg-[#EEF2FF] rounded-t-md lg:p-5 p-2 text-black">
              <div className="flex lg:flex-nowrap flex-wrap justify-between">
                <h1 className="text-3xl uppercase font-bold">Order Information</h1>
                <div className="lg:text-right text-left flex flex-col items-end">
                  <div className="border flex justify-center w-max bg-primary text-white rounded-full px-2 py-1">
                    <Logo></Logo>
                  </div>
                  <p>
                    Cecilia Chapman, 561-4535 Nulla LA, <br /> United States
                    96522
                  </p>
                </div>
              </div>
              <hr className="bg-white border-white my-2" />
              <div className="flex lg:flex-nowrap flex-wrap justify-between text-[17px]">
                <div>
                  <p className="font-bold">Date</p>
                  <p>{moment(orderinfo?.date).format("Do MMMM, YYYY")}</p>
                </div>

                <div className="text-center">
                  <p className="font-bold">OrderInfo No</p>
                  <p>{orderinfo?.orderId}</p>
                </div>

                <div className="lg:text-right">
                  <p className=" font-bold">OrderInfo to</p>
                  <p>
                    {orderinfo?.firstname} {orderinfo?.lastname}
                  </p>
                  <p>{orderinfo?.address}</p>
                  <p>
                    {orderinfo?.city}, {orderinfo?.country}, {orderinfo?.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:p-5 p-2">
              <div className="overflow-x-auto text-black text-center  ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className=" ">
                    <img className="shadow-lg " src={StaticPath + "customorder/" + orderinfo?.image} alt="ordered image" />
                  </div>
                  <div className={`border-2 rounded-lg ${orderinfo?.status === "Pending" ? "border-warning" : "border-primary"}`}>
                    <label className="tori-label rounded-t-lg !text-base !font-bold bg-primary/10 py-2 !text-black">Description</label>
                    <p className="bg-primary/5 rounded-b-lg lg:p-5 p-2 text-black mt-2 h-[90%] text-left" >{orderinfo?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-nowrap flex-wrap justify-between">
            <div className="sub-section ">
              <label
                htmlFor="email-modal"
                className="tori-btn-secondary w-[100%] flex justify-center items-center gap-1 ">
                <BsEnvelope className="  text-white" /> Email
              </label>
            </div>
            <div className="sub-section ">
              <ReactToPrint
                trigger={() => (
                  <button className="tori-btn-secondary w-[100%] flex justify-center items-center gap-1 ">
                    <BsPrinter className="  text-white" /> Print
                  </button>
                )}
                content={() => ref.current}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderInfo;
