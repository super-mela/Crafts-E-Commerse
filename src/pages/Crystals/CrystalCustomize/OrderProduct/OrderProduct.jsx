import React, { useState, useEffect } from "react";
import ValidationError from "../../../../components/ValidationError/ValidationError";
import EmptyImage from "../EmptyImage/EmptyImage";
import { ErrorMessage } from "@hookform/error-message";
import Required from "../../../../components/Required/Required";
import { useNavigate } from "react-router-dom";

const OrderProduct = ({ register, errors, setValue }) => {

    const navigate = useNavigate()

    const [preview, setPreview] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const subTotal = 500;
    const [total, setTotal] = useState(subTotal);
    const [value, setValues] = useState({
        size: 0,
        rush: 0,
        LED: 0,
        line: 0,
        font: "Ariel",
        keychane: 0,
        cleaningKit: 0,
        background: 0
    });
    const [prevValue, setPrevValue] = useState({
        size: 0,
        rush: 0,
        LED: 0,
        line: 0,
        font: "Ariel",
        keychane: 0,
        cleaningKit: 0,
        background: 0
    });

    useEffect((props) => {
        setTotal(parseFloat(((quantity * subTotal)
            - prevValue.rush + value.rush
            - prevValue.LED + value.LED
            - prevValue.line + value.line
            - prevValue.size + value.size
            - prevValue.keychane + value.keychane
            - prevValue.cleaningKit + value.cleaningKit
            - prevValue.background + value.background
        ).toFixed(2)))
    }, [quantity])

    useEffect(() => {
        setTotal(parseFloat((total - prevValue.rush + value.rush).toFixed(2)))
    }, [value.rush])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.LED + value.LED).toFixed(2)))
    }, [value.LED])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.line + value.line).toFixed(2)))
    }, [value.line])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.size + value.size).toFixed(2)))
    }, [value.size])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.keychane + value.keychane).toFixed(2)))
    }, [value.keychane])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.cleaningKit + value.cleaningKit).toFixed(2)))
    }, [value.cleaningKit])
    useEffect(() => {
        setTotal(parseFloat((total - prevValue.background + value.background).toFixed(2)))
    }, [value.background])


    const fileUpload = (e) => {
        setValue("file", e.target.files)
        var objectUrl = URL.createObjectURL(e.target.files[0])
        setPreview(objectUrl);
    }

    const handleReduceQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddtoCart = () => {
        setQuantity(quantity + 1)
        setTotal(quantity * subTotal)
    }

    const handleChange = (e) => {
        setPrevValue({ ...prevValue, [e.target.name]: value[e.target.name] })
        setValues({ ...value, [e.target.name]: parseFloat(e.target.value) })
    }

    const handelCheckbox = (e) => {
        switch (e.target.name) {
            case 'background':
                if (e.target.checked) {
                    setPrevValue({ ...prevValue, [e.target.name]: value[e.target.name] })
                    setValues({ ...value, [e.target.name]: parseFloat(e.target.value) })
                }
                break;
            case "cleaningKit":
                if (e.target.checked) {
                    setPrevValue({ ...prevValue, [e.target.name]: value[e.target.name] })
                    setValues({ ...value, [e.target.name]: parseFloat(e.target.value) })
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="py-3 sticky top-0 bg-white rounded-md flex flex-col gap-3 border text-gray-700">
            <h4 className="tori-title text-center">Image to be Crafted <Required /></h4>
            <hr />
            <div className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3">
                <div className="h-[300px] overflow-y-scroll ">
                    {!preview ?
                        <EmptyImage />
                        : <img src={preview} alt="placeholder" className="w-full" />
                    }
                </div>
                <div className="flex">
                    <input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={fileUpload}
                        className="tori-btn-secondary disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white w-[100%]"
                    />
                    <input
                        type="hidden"
                        {...register("file", {
                            required: "Image is required!",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="file"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <ValidationError
                                        key={type}
                                        message={message}
                                    ></ValidationError>
                                ))
                                : null;
                        }}
                    />
                </div>
                <hr />
                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        Choose A Size: <Required />
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                        {...register("size", {
                            required: "Size is required!",
                        })}
                        defaultValue={"0"}
                        name="size"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value={"0"} disabled unselectable>Please Select</option>
                        <option value={0}>Small Heart (Up to 2 People) 3" x 2.8"</option>
                        <option value={70.00}>Medium Heart (Up to 2 People) 3.9" x 3.5" (+$70.00)</option>
                        <option value={140.00}>Large Heart (Up to 3 People) 4.9" x 4.1" (+$140.00)</option>
                    </select>
                    <ErrorMessage
                        errors={errors}
                        name="firstname"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <ValidationError
                                        key={type}
                                        message={message}
                                    ></ValidationError>
                                ))
                                : null;
                        }}
                    />
                </div>
                <div className="">
                    <label htmlFor="rush" className="tori-label">
                        Rush My Item:
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                        onChange={(e) => handleChange(e)}
                        defaultValue={'No Thankyou'}
                        name="rush"
                    >
                        <option value={0} >No Thankyou</option>
                        <option value={12.95}>Rush - Produced Next Business Day (+$12.95)</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        Add On Lighted LED Base:
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                        defaultValue={0}
                        name="LED"
                        onChange={(e => handleChange(e))}
                    >
                        <option value={0}>No Thankyou</option>
                        <option value={44.95}>Lighted Base For Small or Medium Heart (+$44.95)</option>
                        <option value={54.95}>Lighted Base For Large Heart (+$54.95)</option>
                        <option value={39.95}>Round Rotating Lighted Base For Small or Medium Heart (+$39.95)</option>
                        <option value={39.95}>Round Rotating Color Changing LED Base for Medium Heart (+$39.95)</option>
                    </select>

                </div>
                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        Add 1 or 2 Lines of Engraved Text:
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                        defaultValue={'No Thankyou'}
                        name="line"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value={0} >No Thankyou</option>
                        <option value={6.95}>1{" "}(+6.95)</option>
                        <option value={9.95}>2{" "}(+9.95)</option>
                    </select>

                </div>
                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        3D Crystal Text Font:
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                        defaultValue={value.font}
                        name="font"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value={"Arial"} >Arial</option>
                        <option value={"Monotype Corsiva"}>Monotype Corsiva</option>
                        <option value={"Script MT Bold"}>Script MT Bold</option>
                        <option value={"Times New Roman"}>Times New Roman</option>
                    </select>

                </div>

                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        Add Keychain:
                    </label>
                    <select
                        className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        defaultValue={0}
                        name="keychane"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value={0} >No Thankyou</option>
                        <option value={19.75}>Heart Shape{" "} $19.75</option>
                        <option value={14.75}>Rectangle Shape{" "}$14.75</option>
                    </select>

                </div>
                <div className="">
                    <label
                        htmlFor={'Cleaning Kit'}
                        className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
                    >
                        <div className="flex gap-3 items-center">
                            <div>
                                <span className="text-sm"> Add A Crystal Cleaning Kit</span>
                                <small className="block">
                                    Price{" "}
                                    <span className="font-bold">+{" "}${'7.95'}</span>
                                </small>
                            </div>
                        </div>
                        <input
                            id={'Cleaning Kit'}
                            type="checkbox"
                            name="cleaningKit"
                            onChange={(e) => handelCheckbox(e)}
                            value={7.95}
                            className="icon accent-primary"
                        />
                    </label>
                </div>
                <div className="">
                    <label
                        htmlFor={'Backgound'}
                        className="text-sm flex items-center justify-between gap-2 px-2 py-1 border rounded-md w-full"
                    >
                        <div className="flex gap-3 items-center">
                            <div>
                                <span className="text-sm"> Keep the Backgound</span>
                                <small className="block">
                                    Price{" "}
                                    <span className="font-bold">+{" "}${'25'}</span>
                                </small>
                            </div>
                        </div>
                        <input
                            id={'Backgound'}
                            type="checkbox"
                            name="background"
                            onChange={(e) => handelCheckbox(e)}
                            value={25}
                            className="icon accent-primary"
                        />
                    </label>
                </div>
                <hr />
                <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                    <div className="flex justify-start font-extrabold text-lg text-primary">
                        <p>Quantity</p><Required />
                        <div className="border rounded-sm items-center flex ml-2">
                            <button
                                onClick={() =>
                                    quantity && handleReduceQuantity()
                                }
                                className="px-2 "
                            // onClick={() => handleReduceQuantity(_id, name)}
                            >
                                {" "}
                                -{" "}
                            </button>
                            <span className="text-sm mx-1">{quantity}</span>
                            <button
                                onClick={() => handleAddtoCart()}
                                className="px-2 "
                            // onClick={() => handleAddtoCart(_id, name)}
                            >
                                {" "}
                                +{" "}
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between font-extrabold text-lg text-primary">
                            <p>Total</p>
                            <p>${parseFloat(total.toFixed(2))}</p>
                        </div>
                        {/* <label htmlFor="firstname" className="tori-label">
                        Total <Required />
                    </label> */}
                    </div>
                </div>
                <button
                    onClick={() => navigate("/order")}
                    className="tori-btn-secondary"
                //   disabled={!stripe || !clientSecret || !processing}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OrderProduct;
