import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

const EmptyImage = () => {
    return (
        <div className="px-7 h-full flex flex-col justify-center items-center">
            <div className="rounded-full p-5 bg-primary/25">
                <HiOutlinePhotograph className="w-10 h-10 text-primary" />
            </div>
            <div className="text-neutral text-center">
                <h5 className="font-bold">There is no image selected</h5>
                <p className="text-sm text-gray-500">
                    Please Upload image to be Craft.
                </p>
            </div>
        </div>
    );
};

export default EmptyImage;
