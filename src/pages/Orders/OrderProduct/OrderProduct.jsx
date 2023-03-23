import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { CartContext } from "../../../Contexts/CartProvider/CartProvider";
import useGetSubTotal from "../../../Hooks/useGetSubTotal/useGetSubTotal";
import CartItem from "../../MyCart/CartItem/CartItem";
import EmptyCart from "../../MyCart/EmptyCart/EmptyCart";
import placehoderImage from "../../../assets/logo_transparent.png"

const OrderProduct = ({ grandTotal, shippingCost, discount, setDiscount }) => {
    const { cartItems, isLoading } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [leastAmountError, setLeastAmountError] = useState("");
    const [count, setCount] = useState(0)
    const [subTotal] = useGetSubTotal();

    const handleApplyDiscount = (e) => {
        setLeastAmountError("");
        e.preventDefault();
        console.log(e.target.promo.value);
        axios
            .post(`/offers?email=${user?.email}`, {
                coupon: e.target.promo.value,
            })
            .then((res) => {
                console.log(res);
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

    const handleAddtoCart = () => {
        setCount(prev => prev + 1)
    };

    const handleReduceQuantity = () => {
        // Make this async function

        setCount(prev => prev - 1)
    };

    return (
        <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border text-gray-700">
            <h4 className="tori-title text-center">Image to be Crafted</h4>
            <hr />
            <div className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3">
                <div className="h-[300px] overflow-y-scroll ">
                    <img src={placehoderImage} alt="placeholder" className="w-full" />
                </div>
                <div className="flex">
                    <input type="file" accept="image/*" className="tori-btn-secondary disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white w-[100%]" />

                </div>
            </div>
        </div>
    );
};

export default OrderProduct;
