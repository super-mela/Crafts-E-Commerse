import React from "react";
import { HiShoppingBag } from "react-icons/hi";

const EmptyWishlist = () => {
  return (
    <div className="px-7 h-full flex flex-col justify-center items-center">
      <div className="rounded-full p-5 bg-primary/25">
        <HiShoppingBag className="w-10 h-10 text-primary" />
      </div>
      <div className="text-neutral text-center">
        <h5 className="font-bold">Your wishlist is Empty</h5>
        <p className="text-sm text-gray-500">
          Please add products in your wishlist.
        </p>
      </div>
    </div>
  );
};

export default EmptyWishlist;
