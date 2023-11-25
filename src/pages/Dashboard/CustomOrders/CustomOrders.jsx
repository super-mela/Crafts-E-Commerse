import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import EmptyOrders from "../../../components/EmptyOrders/EmptyOrders";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CustomOrders = () => {
    const { user } = useContext(AuthContext);
    const {
        isLoading,
        error,
        refetch,
        data: { data: customOrders } = [],
    } = useQuery({
        queryKey: ["customOrders"],
        queryFn: () => {
            return axios.get(`/customOrders?email=${user?.email}`);
        },
    });

    return (
        <div className="bg-white w-full flex flex-col gap-5 p-5">
            <Helmet>
                <title>Crafts - Dashboard</title>
                <meta name="description" content="User Dashboard" />
            </Helmet>
            {isLoading ? (
                <Loader></Loader>
            ) : customOrders?.length ? (
                <>
                    <h4 className="text-base text-gray-700 font-semibold leading-none">
                        My Crystal Orders
                    </h4>

                    <div className="overflow-x-auto text-gray-700 border text-center">
                        <table className="w-full">
                            {/* <!-- head --> */}
                            <thead className="bg-secondary">
                                <tr>
                                    <th>Invoice</th>
                                    <th>Date</th>
                                    <th>Method</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-xs">
                                {customOrders?.map((customOrder) => (
                                    <tr key={customOrder?._id}>
                                        <th>{customOrder?.invoice}</th>
                                        <td>{moment(customOrder?.date).format("DD/MM/YYYY")}</td>
                                        <td>{customOrder?.paymentMethod}</td>
                                        <td>
                                            {customOrder?.status === "paid" ? (
                                                <span className="text-primary">Paid</span>
                                            ) : (
                                                <span className="text-accent"> Pending</span>
                                            )}
                                        </td>
                                        ${parseFloat(((parseFloat(customOrder?.crystal?.price) + parseFloat(customOrder?.custom?.size) + parseFloat(customOrder?.custom?.rush) + parseFloat(customOrder?.custom?.LED) + parseFloat(customOrder?.custom?.line) + parseFloat(customOrder?.custom?.keychane) + parseFloat(customOrder?.custom?.cleaningKit) + parseFloat(customOrder?.custom?.background)) * parseFloat(customOrder?.crystal?.quantity)) + parseFloat(customOrder?.shippingCost)).toFixed(2)}
                                        <td>
                                            <Link
                                                to={`/orderinfo/${customOrder?.invoiceId}`}
                                                className="text-primary bg-primary/20 rounded-full px-2 py-[2px] hover:text-white hover:bg-primary"
                                            >
                                                Detials
                                            </Link>
                                        </td>
                                    </tr>
                                ))}

                                {/* <!-- row 1 --> */}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <EmptyOrders></EmptyOrders>
            )}
        </div>
    );
};

export default CustomOrders;
