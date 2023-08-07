import React, { useContext } from "react";
import { CrystalContext } from "../../../Contexts/CrystalProvider/CrystalProvider";
import useGetCrystalQuantity from "../../../Hooks/useGetCrystalQuantity/useGetCrystalQuantity";

const StaticPath = process.env.REACT_APP_STATIC;

const CrystalItem = ({ crystalItem }) => {
    const [quantity] = useGetCrystalQuantity(crystalItem?._id);

    const { addToCrystalCart, reduceQuantityFromCrystalCart } =
        useContext(CrystalContext);

    // reduce
    const handleReduceQuantity = (id, product) => {
        // Make this async function

        if (quantity > 1) {
            reduceQuantityFromCrystalCart(id);
        }
    };

    // Add to cart
    const handleaddToCrystalCart = (id) => {
        addToCrystalCart(id);
    };


    return (
        <div className="flex w-full gap-3 border-b text-[#374151] items-center justify-center px-3 py-2  hover:bg-slate-50 cursor-pointer">
            <div className="">
                <img src={crystalItem ? StaticPath + "crystal/" + crystalItem.image : ""} alt="" className="w-14 rounded-lg" />
            </div>

            <div className="flex flex-col w-full">
                <h5 className="text-sm font-medium">{crystalItem?.name}</h5>
                <p className="text-xs  text-gray-500">
                    Crystal Price: $
                    {crystalItem?.discount
                        ? (
                            crystalItem?.price -
                            (crystalItem?.discount / 100) * crystalItem?.price
                        ).toFixed(2)
                        : crystalItem?.price}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold text-sm">
                        $
                        {crystalItem?.discount
                            ? (
                                (crystalItem?.price -
                                    (crystalItem?.discount / 100) * crystalItem?.price) *
                                quantity
                            ).toFixed(2)
                            : (crystalItem?.price * quantity).toFixed(2)}
                    </span>

                    <div className="border rounded-sm items-center flex">
                        <button
                            onClick={() =>
                                quantity - 1 && handleReduceQuantity(crystalItem?._id, crystalItem?.name)
                            }
                            className="px-2 "
                        // onClick={() => handleReduceQuantity(_id, name)}
                        >
                            {" "}
                            -{" "}
                        </button>
                        <span className="text-sm mx-1">{quantity}</span>
                        <button
                            onClick={() => handleaddToCrystalCart(crystalItem?._id)}
                            className="px-2 "
                        // onClick={() => handleaddToCrystalCart(_id, name)}
                        >
                            {" "}
                            +{" "}
                        </button>
                    </div>

                    {/* Delete */}
                    {/* 
          <button
            onClick={() =>
              handleDeleteItemsFromCart(crystalItem?._id, crystalItem?.name)
            }
            className="bg-warning/5 hover:bg-warning/20 hover:shadow-md p-2 rounded-full"
          >
            <FaRegTrashAlt className="text-warning" />
          </button> */}
                </div>
            </div>
        </div>
    );
};

export default CrystalItem;
