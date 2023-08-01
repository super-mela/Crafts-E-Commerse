// import React, { useState } from "react";
// import ValidationError from "../../../components/ValidationError/ValidationError";
// import EmptyImage from "../EmptyImage/EmptyImage";
// import { ErrorMessage } from "@hookform/error-message";
// import Required from "../../../components/Required/Required";

// const OrderProduct = ({ register, errors, setValue }) => {

//     const [preview, setPreview] = useState(null)

//     const fileUpload = (e) => {
//         setValue("file", e.target.files)
//         var objectUrl = URL.createObjectURL(e.target.files[0])
//         setPreview(objectUrl);
//     }

//     return (
//         <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border text-gray-700">
//             <h4 className="tori-title text-center">Image to be Crafted <Required /></h4>
//             <hr />
//             <div className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3">
//                 <div className="h-[300px] overflow-y-scroll ">
//                     {!preview ?
//                         <EmptyImage />
//                         : <img src={preview} alt="placeholder" className="w-full" />
//                     }
//                 </div>
//                 <div className="flex">
//                     <input
//                         id="file"
//                         type="file"
//                         accept="image/*"
//                         onChange={fileUpload}
//                         className="tori-btn-secondary disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white w-[100%]"

//                     />
//                     <input
//                         type="hidden"
//                         {...register("file", {
//                             required: "Image is required!",
//                         })}
//                     />
//                     <ErrorMessage
//                         errors={errors}
//                         name="file"
//                         render={({ messages }) => {
//                             return messages
//                                 ? Object.entries(messages).map(([type, message]) => (
//                                     <ValidationError
//                                         key={type}
//                                         message={message}
//                                     ></ValidationError>
//                                 ))
//                                 : null;
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderProduct;
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

