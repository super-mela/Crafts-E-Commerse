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
                <h1 className="text-3xl uppercase font-bold">Invoice</h1>
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
                  <p className="font-bold">Invoice No</p>
                  <p>{orderinfo?.invoice}</p>
                </div>

                <div className="lg:text-right">
                  <p className=" font-bold">Invoice to</p>
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
                <table className="w-full">
                  {/* <!-- head --> */}
                  <thead className="bg-secondary">
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Item Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td>{orderinfo?.crystal?.name}</td>
                      <td>{orderinfo?.crystal?.quantity}</td>
                      <td>${parseFloat(orderinfo?.crystal?.price).toFixed(2)}</td>
                      <td>${(parseFloat(orderinfo?.crystal?.price) * parseFloat(orderinfo?.crystal?.quantity)).toFixed(2)}</td>
                    </tr>

                    {/* <!-- row 1 --> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-primary/10 rounded-b-md text-black/80 sub-section lg:flex lg:flex-nowrap flex-wrap justify-between text-center">
              <div>
                <p className="text-base font-bold">{orderinfo?.optionCaption?.size}</p>
                <p>{parseFloat(orderinfo?.custom?.size).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">{orderinfo?.optionCaption?.rush}</p>
                <p>${parseFloat(orderinfo?.custom?.rush).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">{orderinfo?.optionCaption?.LED}</p>
                <p>${parseFloat(orderinfo?.custom?.LED).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Texts</p>
                <p>${parseFloat(orderinfo?.custom?.line).toFixed(2)}</p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-b-md text-black/80 sub-section lg:flex lg:flex-nowrap flex-wrap justify-between text-center">
              <div>
                <p className="text-base font-bold">{orderinfo?.optionCaption?.keychane}</p>
                <p>${parseFloat(orderinfo?.custom?.keychane).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Font</p>
                <p>{orderinfo?.custom?.font}</p>
              </div>
              <div>
                <p className="text-base font-bold">Cleaning Kit</p>
                <p>${parseFloat(orderinfo?.custom?.cleaningKit).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Background</p>
                <p>${parseFloat(orderinfo?.custom?.background).toFixed(2)}</p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-b-md text-black/80 sub-section lg:flex lg:flex-nowrap flex-wrap justify-between text-center">
              <div>
                <p className="text-base font-bold">Payment Method</p>
                <p>{orderinfo?.paymentMethod}</p>
              </div>
              <div>
                <p className="text-base font-bold">Shipping</p>
                <p>${parseFloat(orderinfo?.shippingCost).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-base font-bold">Total</p>
                <p className="text-lg font-bold text-warning">
                  ${parseFloat(((parseFloat(orderinfo?.crystal?.price) + parseFloat(orderinfo?.custom?.size) + parseFloat(orderinfo?.custom?.rush) + parseFloat(orderinfo?.custom?.LED) + parseFloat(orderinfo?.custom?.line) + parseFloat(orderinfo?.custom?.keychane) + parseFloat(orderinfo?.custom?.cleaningKit) + parseFloat(orderinfo?.custom?.background)) * parseFloat(orderinfo?.crystal?.quantity)) + parseFloat(orderinfo?.shippingCost)).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="sub-section flex justify-end">
            <ReactToPrint
              trigger={() => (
                <button className="tori-btn-secondary w-[20%] flex justify-center items-center gap-1 ">
                  <BsPrinter className="  text-white" /> Print
                </button>
              )}
              content={() => ref.current}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OrderInfo;
