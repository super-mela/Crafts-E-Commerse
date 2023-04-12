import { ErrorMessage } from "@hookform/error-message";
import React, { useContext } from "react";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";
import Required from "../../../components/Required/Required";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const PersonalInfo = ({
    register,
    errors,
    processing
}) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3">
            <h4 className="tori-title">01. Personal Details</h4>
            <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                {/* Name */}
                <div className="">
                    <label htmlFor="firstname" className="tori-label">
                        First name <Required />
                    </label>
                    <input
                        id="firstname"
                        type="text"
                        placeholder="First name"
                        className="tori-input"
                        {...register("firstname", {
                            required: "Firstname is required!",
                        })}
                    />
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
                    <label htmlFor="lastname" className="tori-label">
                        Last name <Required />
                    </label>
                    <input
                        id="lastname"
                        type="text"
                        placeholder="Last name"
                        className="tori-input"
                        {...register("lastname", {
                            required: "Last Name is required!",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="lastname"
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

                {/* Email */}
                <div className="">
                    <label htmlFor="email" className="tori-label">
                        Email <Required />
                    </label>
                    <input
                        readOnly
                        id="email"
                        type="email"
                        defaultValue={user?.email}
                        className="tori-input"
                        {...register("email", {
                            required: "Email is required!",
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid email!",
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
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

                {/* Phone */}
                <div className="">
                    <label htmlFor="phone" className="tori-label">
                        Phone <Required />
                    </label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Your Phone Number"
                        className="tori-input"
                        {...register("phone", {
                            required: "Phone number is required!",
                        })}
                    />

                    <ErrorMessage
                        errors={errors}
                        name="phone"
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

            <h4 className="tori-title">02. Shipping Details</h4>
            <div className="flex flex-col lg:gap-3 gap-y-3">
                <div className="">
                    <label htmlFor="address" className="tori-label">
                        Address <Required />
                    </label>
                    <textarea
                        id="address"
                        type="text"
                        placeholder="Address"
                        className="tori-input"
                        {...register("address", {
                            required: "Address is required!",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="address"
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

                <div className="flex justify-between lg:flex-nowrap flex-wrap gap-3">
                    <div className="w-full">
                        <label htmlFor="city" className="tori-label">
                            City <Required />
                        </label>
                        <input
                            id="city"
                            type="text"
                            placeholder="City"
                            className="tori-input"
                            {...register("city", {
                                required: "City  is required!",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="city"
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
                    <div className="w-full">
                        <label htmlFor="country" className="tori-label">
                            Country <Required />
                        </label>
                        <input
                            id="country"
                            type="text"
                            placeholder="Country"
                            className="tori-input"
                            {...register("country", {
                                required: "Country  is required!",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="country"
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
                    <div className="w-full">
                        <label htmlFor="zip" className="tori-label">
                            Zip Code <Required />
                        </label>
                        <input
                            id="zip"
                            type="number"
                            placeholder="Zip Code"
                            className="tori-input"
                            {...register("zip", {
                                required: "Zip  is required!",
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="zip"
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
                <div className="">
                    <label htmlFor="description" className="tori-label">
                        Description <Required />
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        placeholder="Description"
                        className="tori-input"
                        {...register("description", {
                            required: "Description is required!",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="description"
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
            <div className="flex lg:gap-5 gap-2 lg:flex-nowrap flex-wrap">
                <button className="tori-btn-accent">Continue Shopping</button>
                <button
                    // onClick={() => navigate("/invoice")}
                    className="tori-btn-secondary"
                    disabled={processing}
                    type="submit"
                >
                    Confirm{processing && <ButtonLoader />}
                </button>
            </div>

        </div>
    );
};

export default PersonalInfo;
