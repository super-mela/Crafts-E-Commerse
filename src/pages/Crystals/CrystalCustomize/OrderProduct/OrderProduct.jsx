import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useQuery } from "@tanstack/react-query";
import axios from '../../../../AxiosInstance/AxiosInstance'

import ValidationError from "../../../../components/ValidationError/ValidationError";
import EmptyImage from "../EmptyImage/EmptyImage";
import Required from "../../../../components/Required/Required";
import { CrystalContext } from "../../../../Contexts/CrystalProvider/CrystalProvider";
import useGetCrystalQuantity from "../../../../Hooks/useGetCrystalQuantity/useGetCrystalQuantity";
import useGetCrsytalSubTotal from "../../../../Hooks/useGetCrystalSubTotal/useGetCrystalSubTotal";


const OrderProduct = ({ crystalItem }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues,
        watch
    } = useForm({
        criteriaMode: "all",
        defaultValues: {
            size: 0,
            rush: 0,
            LED: 0,
            line: 0,
            text: [],
            font: "Ariel",
            keychane: 0,
            cleaningKit: 0,
            background: 0
        }
    });
    const {
        data: { data: crystalOption } = [],
    } = useQuery({
        queryKey: ["crystalOption"],
        queryFn: () => {
            return axios.get("/setting/crystalOption");
        },
    });

    const navigate = useNavigate();
    const { addToCrystalCart, reduceQuantityFromCrystalCart } = useContext(CrystalContext)
    const [quantity] = useGetCrystalQuantity(crystalItem._id);
    const [subTotal] = useGetCrsytalSubTotal();
    const [preview, setPreview] = useState(null)
    const [crystalOptions, setCrystalOptions] = useState()
    const [textLine, setTextLine] = useState([])
    useEffect(() => {
        setCrystalOptions(crystalOption)
        setTextLine(crystalOption?.lines)
    }, [crystalOption])

    const [total, setTotal] = useState(subTotal);

    useEffect(() => {
        setTotal(parseFloat((subTotal
            + (getValues().rush
                + getValues().LED
                + getValues().line
                + getValues().size
                + getValues().keychane
                + getValues().cleaningKit
                + getValues().background
            ) * quantity).toFixed(2)))

        return () => {
            //clean up function
        }
    }, [subTotal, watch(), quantity])


    const fileUpload = (e) => {
        setValue("file", e.target.files)
        var objectUrl = URL.createObjectURL(e.target.files[0])
        setPreview(objectUrl);
    }

    const handleReduceQuantity = () => {
        if (quantity > 1) {
            reduceQuantityFromCrystalCart(crystalItem._id)
        }
    }

    const handleAddtoCart = () => {
        addToCrystalCart(crystalItem._id)
    }

    const handleChange = (e) => {
        if (e.target.name === "font") {
            setValue(e.target.name, e.target.value)
        }
        else if (e.target.name === "line") {
            if (isNaN(parseFloat(e.target.value))) {
                setValue("text", new Array(0).fill(''))
                setValue(e.target.name, parseFloat(textLine.find((content) => content.text === e.target.value).price))
            }
            else {
                setValue("text", new Array(parseInt(e.target.value)).fill(''))
                setValue(e.target.name, parseFloat(textLine.find((content) => content.text === e.target.value).price))
            }
        }
        else {
            setValue(e.target.name, parseFloat(e.target.value))
        }

    }

    const handelCheckbox = (e) => {
        if (e.target.checked) {
            setValue(e.target.name, parseFloat(e.target.value))
        } else {
            setValue(e.target.name, 0)
        }
    }

    const handleText = (e) => {
        var newArray = getValues().text;
        newArray[parseInt(e.target.name)] = e.target.value
        setValue('text', newArray)
    }


    const handleRoute = (data) => {
        const customTotal = (getValues().rush + getValues().LED + getValues().line + getValues().size + getValues().keychane + getValues().cleaningKit + getValues().background)
        localStorage.setItem("customTotal", customTotal)
        navigate('/order', { state: data })
    }
    return (
        <form onSubmit={handleSubmit(handleRoute)}>
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
                        <label htmlFor="size" className="tori-label">
                            Choose A Size: <Required />
                        </label>
                        <select
                            className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                            // {...register("size", {
                            //     required: "Size is required!",
                            //     valueAsNumber: true
                            // })}
                            defaultValue={getValues().size}
                            name="size"
                            onChange={(e) => handleChange(e)}
                        >
                            {crystalOptions?.sizes?.map((item, index) => (
                                <option key={item.id} value={item.price}>{item.text} {item.price ? `(+$${item.price})` : null} </option>
                            ))}
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="size"
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
                            defaultValue={getValues().rush}
                            name="rush"
                        >
                            {crystalOptions?.rushs?.map((item, index) => (
                                <option key={item.id} value={item.price} >{item.text}{item.price ? `(+$${item.price})` : null} </option>

                            ))}
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="firstname" className="tori-label">
                            Add On Lighted LED Base:
                        </label>
                        <select
                            className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                            defaultValue={getValues().LED}
                            name="LED"
                            onChange={(e => handleChange(e))}
                        >
                            {crystalOptions?.LEDs?.map((item, index) => (
                                <option key={item.id} value={item.price}>{item.text}{item.price ? `(+$${item.price})` : null}</option>
                            ))}
                        </select>

                    </div>
                    <div className="">
                        <label htmlFor="line" className="tori-label">
                            Add 1 or 2 Lines of Engraved Text:
                        </label>
                        <select
                            className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                            defaultValue={getValues().line}
                            name="line"
                            onChange={(e) => handleChange(e)}
                        >
                            {crystalOptions?.lines.map((item, index) => (
                                <option key={item.id} value={item.text}>{item.text}{item.price ? `(+$${item.price})` : null}</option>
                            ))}
                        </select>
                        {
                            getValues().text.map((item, index) => (
                                <input
                                    key={item + "-" + index}
                                    name={index}
                                    value={item}
                                    className="tori-input mt-2"
                                    placeholder={`Text Line ${index + 1}`}
                                    onChange={(e) => handleText(e)}
                                />
                            ))
                        }
                    </div>
                    <div className="">
                        <label htmlFor="firstname" className="tori-label">
                            3D Crystal Text Font:
                        </label>
                        <select
                            className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm"
                            defaultValue={getValues().font}
                            name="font"
                            onChange={(e) => handleChange(e)}
                        >
                            {crystalOptions?.fonts?.map((item, index) => (
                                <option key={item.id} value={item.text} >{item.text}</option>
                            ))}
                        </select>

                    </div>

                    <div className="">
                        <label htmlFor="firstname" className="tori-label">
                            Add Keychain:
                        </label>
                        <select
                            className="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            defaultValue={getValues().keychane}
                            name="keychane"
                            onChange={(e) => handleChange(e)}
                        >
                            {crystalOptions?.keychains?.map((item, index) => (
                                <option key={item.id} value={item.price}>{item.text}{item.price ? `(+$${item.price})` : null} </option>
                            ))}
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
                                        <span className="font-bold">+{" "}${crystalOptions?.cleaingKit?.price}</span>
                                    </small>
                                </div>
                            </div>
                            <input
                                id={'Cleaning Kit'}
                                type="checkbox"
                                name="cleaningKit"
                                onChange={(e) => handelCheckbox(e)}
                                value={crystalOptions?.cleaingKit?.price}
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
                                        <span className="font-bold">+{" "}${crystalOptions?.background?.price}</span>
                                    </small>
                                </div>
                            </div>
                            <input
                                id={'Backgound'}
                                type="checkbox"
                                name="background"
                                onChange={(e) => handelCheckbox(e)}
                                value={crystalOptions?.background?.price}
                                className="icon accent-primary"
                            />
                        </label>
                    </div>
                    <hr />
                    <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                        <div className="flex justify-start font-extrabold text-lg text-primary">
                            <p>Quantity</p>
                            <div className="border rounded-sm items-center flex ml-2">
                                <button
                                    type="button"
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
                                    type="button"
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
                        type="submit"
                        className="tori-btn-secondary"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    );
};

export default OrderProduct;
