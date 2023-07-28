import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import CrystalProducts from "./CrystalProducts/CrystalProducts";
import OrderProduct from "./OrderProduct/OrderProduct";
import { CrystalContext } from "../../../Contexts/CrystalProvider/CrystalProvider";
import Loader from "../../../components/Loader/Loader";
import EmptyCart from "../../MyCart/EmptyCart/EmptyCart";

const CrystalCustomize = () => {

    const { crystalItems, isLoading } = useContext(CrystalContext);

    return (
        <div className="sub-section bg-[#F9FAFB] flex lg:flex-nowrap flex-wrap justify-between gap-5">
            <Helmet>
                <title>Crafts - Crystal Custom</title>
                <meta name="description" content="Custom Order of Craft Gifts." />
            </Helmet>

            <div className="lg:w-[50%] bg-white rounded-md lg:order-1 order-1">
                <CrystalProducts />
            </div>
            <div className="lg:w-[50%] w-full relative transition-all delay-75 lg:order-2 order-2">
                {isLoading ? (
                    <Loader />)
                    :
                    crystalItems?.length ? (
                        crystalItems?.map((crystalItem, index) => (
                            <OrderProduct
                                key={index}
                                crystalItem={crystalItem}
                            />
                        ))
                    ) : (
                        <EmptyCart />
                    )
                }

            </div>
        </div >
    );
};

export default CrystalCustomize;
