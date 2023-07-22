import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import useGetSubTotal from "../../../Hooks/useGetSubTotal/useGetSubTotal";
import OrderProduct from "./OrderProduct/OrderProduct";
import SuccessModal from "../../../components/SuccessModal/SuccessModal";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { fileinstace } from '../../../AxiosInstance/AxiosInstance'
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

const CrystalCustomize = () => {

    const [shippingCost, setShippingCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [subTotal] = useGetSubTotal();
    const [grandTotal, setGrandTotal] = useState(0);
    const [processing, setProccessing] = useState(false);
    const [uniqueId, setUniqueId] = useState("");
    const { user } = useContext(AuthContext);

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm({
        criteriaMode: "all",
    });

    useEffect(() => {
        setGrandTotal(
            parseFloat((subTotal - discount + shippingCost || 0).toFixed(2))
        );

        return () => {
            // Clean up function
        };
    }, [subTotal, discount, shippingCost]);

    const handleOrder = (data) => {

        setProccessing(true)
        const unique_id = uuid() + "." + data.file[0].type.split("/")[1];
        setUniqueId(unique_id);
        const formdata = new FormData()
        formdata.append("orderId", unique_id)
        formdata.append("address", data.address)
        formdata.append("city", data.city)
        formdata.append("country", data.country)
        formdata.append("email", data.email)
        formdata.append("file", data.file[0], unique_id)
        formdata.append("firstname", data.firstname)
        formdata.append("lastname", data.lastname)
        formdata.append("phone", data.phone)
        formdata.append("zip", data.zip)
        formdata.append("description", data.description)

        // Send to Db
        fileinstace
            .post(`/customOrder?email=${user?.email}`, formdata)
            .then((res) => {
                if (res?.data?.acknowledged) {
                    toast.success("order Complites");
                    setProccessing(false)
                    //  successModal.current.checked = true;
                }
            })
            .catch((err) => {
                toast.error("Something went wrong");
            });
    }
    return (
        <form
            onSubmit={handleSubmit(handleOrder)}
        >
            <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
                <Helmet>
                    <title>Crafts - Order</title>
                    <meta name="description" content="Custom Order of Craft Gifts." />
                </Helmet>

                <div className="lg:w-[50%] bg-white rounded-md lg:order-1 order-1">
                    <PersonalInfo
                        discount={discount}
                        shippingCost={shippingCost}
                        setShippingCost={setShippingCost}
                        grandTotal={grandTotal}
                        register={register}
                        errors={errors}
                        processing={processing}
                    ></PersonalInfo>
                </div>
                <div className="lg:w-[50%] w-full relative transition-all delay-75 lg:order-2 order-2">
                    <OrderProduct
                        shippingCost={shippingCost}
                        setShippingCost={setShippingCost}
                        discount={discount}
                        setDiscount={setDiscount}
                        grandTotal={grandTotal}
                        errors={errors}
                        register={register}
                        setValue={setValue}
                    ></OrderProduct>
                </div>
                <SuccessModal
                    unique_id={uniqueId}
                    trasactionId={"Pending"}
                ></SuccessModal>
            </div >
        </form>

    );
};

export default CrystalCustomize;
