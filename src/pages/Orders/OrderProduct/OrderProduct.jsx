import React, { useState } from "react";
import ValidationError from "../../../components/ValidationError/ValidationError";
import EmptyImage from "../EmptyImage/EmptyImage";
import { ErrorMessage } from "@hookform/error-message";
import Required from "../../../components/Required/Required";

const OrderProduct = ({ register, errors, setValue }) => {

    const [preview, setPreview] = useState(null)

    const fileUpload = (e) => {
        setValue("file", e.target.files)
        var objectUrl = URL.createObjectURL(e.target.files[0])
        setPreview(objectUrl);
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
            </div>
        </div>
    );
};

export default OrderProduct;
