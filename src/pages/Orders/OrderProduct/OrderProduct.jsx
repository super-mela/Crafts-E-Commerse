import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { CrystalContext } from "../../../Contexts/CrystalProvider/CrystalProvider";
import useGetCrsytalSubTotal from "../../../Hooks/useGetCrystalSubTotal/useGetCrystalSubTotal";
import CrystalItem from "../../MyCart/CrystalItem/CrystalItem";
import EmptyCart from "../../MyCart/EmptyCart/EmptyCart";
import CustomCard from "../../../components/CustomCard/CustomCard";

const OrderProduct = ({ grandTotal, shippingCost, discount, setDiscount, customTotal, customData }) => {
    const { crystalItems, isLoading } = useContext(CrystalContext);
    const { user } = useContext(AuthContext);
    const [leastAmountError, setLeastAmountError] = useState("");

    const [subTotal] = useGetCrsytalSubTotal();
    const handleApplyDiscount = (e) => {
        setLeastAmountError("");
        e.preventDefault();
        axios
            .post(`/offers?email=${user?.email}`, {
                coupon: e.target.promo.value,
            })
            .then((res) => {
                if (res?.data?.message === "Valid") {
                    if (subTotal >= res.data?.leastAmount) {
                        setDiscount(
                            parseFloat(((res.data?.discount / 100) * subTotal)?.toFixed(2))
                        );
                        toast.success("Coupon Applied");
                    } else {
                        setLeastAmountError(
                            `Please shop at least for $${res.data?.leastAmount}`
                        );
                    }
                } else if (res?.data?.message === "Expired") {
                    toast.error("Sorry! Coupon Expired!");
                } else {
                    toast.error("Sorry! Coupon Invalid!");
                }
            });
    };
    return (
        <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border">
            <h4 className="tori-title text-gray-700 text-center">Order Summury</h4>
            <hr />
            <div className="h-[300px] overflow-y-scroll flex items-center flex-col">
                {isLoading ? (
                    <Loader />
                ) : crystalItems?.length ? (
                    crystalItems?.map((crystalItem) => (
                        <CrystalItem crystalItem={crystalItem} key={crystalItem?._id}></CrystalItem>
                    ))
                ) : (
                    <EmptyCart />
                )}
                {customData ? (<CustomCard customData={customData} />) : (<EmptyCart />)}
            </div>
            <form
                onSubmit={(e) => handleApplyDiscount(e)}
                className="flex gap-2 justify-center lg:px-5 px-2"
            >
                <input
                    name="promo"
                    type="text"
                    placeholder="Enter Discount Code"
                    className="tori-input w-full"
                />
                <button
                    disabled={discount}
                    type="submit"
                    className="tori-btn-secondary disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white"
                >
                    Apply
                </button>
            </form>
            {leastAmountError && (
                <div className="w-full flex justify-center">
                    <ValidationError message={leastAmountError}></ValidationError>
                </div>
            )}
            <div className="lg:px-5 px-2 flex flex-col gap-1 text-black/80 text-sm font-medium">
                <div className="flex justify-between ">
                    <p>Subtotal</p>
                    <p>${parseFloat(subTotal?.toFixed(2))}</p>
                </div>
                <div className="flex justify-between ">
                    <p>Customization</p>
                    <p>${parseFloat(customTotal?.toFixed(2))}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping Cost</p>
                    <p>${parseFloat(shippingCost)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Discount</p>
                    <p className="text-accent">${parseFloat(discount)}</p>
                </div>
                <hr />
                <div className="flex justify-between font-extrabold text-lg text-primary">
                    <p>Total</p>
                    <p>${parseFloat(grandTotal?.toFixed(2))}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;

