import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsBagPlusFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../../Contexts/CartProvider/CartProvider";
import useGetQuantity from "../../../Hooks/useGetQuantity/useGetQuantity";
import { WishlistContext } from "../../../Contexts/WishlistProvider/WishlistProvider";

const WishlisttItem = ({ wishlistItem }) => {

  const [quantity] = useGetQuantity(wishlistItem?._id);

  const { addToCart, reduceQuantityFromCart, refetch } = useContext(CartContext);
  const { removeFromWishlist, refetchwish } = useContext(WishlistContext)

  // reduce
  const handleReduceQuantity = (id, product) => {
    // Make this async function

    reduceQuantityFromCart(id);
    if (quantity === 1) {
      toast.success(`${product} Removed from cart`);
      refetch();
    }
  };

  // Add to cart
  const handleAddtoCart = (id) => {
    addToCart(id);
  };

  // Delete

  const handleRemoveWishlist = (id, name) => {
    removeFromWishlist(id);
    toast.success(`${name} Removed from wishlist`);
    refetchwish();
  };

  return (
    <div className="flex w-full gap-3 border-b text-[#374151] items-center justify-center px-3 py-2  hover:bg-slate-50 cursor-pointer">
      <div className="">
        <img src={wishlistItem?.image} alt="" className="w-14 rounded-lg" />
      </div>

      <div className="flex flex-col w-full">
        <h5 className="text-sm font-medium">{wishlistItem?.name}</h5>
        <p className="text-xs  text-gray-500">
          Item Price: $
          {wishlistItem?.discount
            ? (
              wishlistItem?.price -
              (wishlistItem?.discount / 100) * wishlistItem?.price
            ).toFixed(2)
            : wishlistItem?.price}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold text-sm">
            $
            {wishlistItem?.discount
              ? (
                (wishlistItem?.price -
                  (wishlistItem?.discount / 100) * wishlistItem?.price) *
                quantity
              ).toFixed(2)
              : (wishlistItem?.price * quantity).toFixed(2)}
          </span>

          <div className="border rounded-sm items-center flex">
            {quantity ? (
              <div>
                <button
                  onClick={() =>
                    quantity && handleReduceQuantity(wishlistItem?._id, wishlistItem?.name)
                  }
                  className="px-2 "
                // onClick={() => handleReduceQuantity(_id, name)}
                >
                  {" "}
                  -{" "}
                </button>
                <span className="text-sm mx-1">{quantity}</span>
                <button
                  onClick={() => handleAddtoCart(wishlistItem?._id)}
                  className="px-2 "
                // onClick={() => handleAddtoCart(_id, name)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>)
              : (
                <button
                  onClick={() => handleAddtoCart(wishlistItem?._id, wishlistItem?.name)}
                  className="border border-primary flex justify-center items-center p-2 cursor-pointer transition-all delay-[30ms] hover:bg-primary hover:text-white rounded-sm text-primary"
                >
                  <BsBagPlusFill className="w-4 h-4" />
                </button>
              )}
          </div>

          {/* Delete */}

          <button
            onClick={() =>
              handleRemoveWishlist(wishlistItem?._id, wishlistItem?.name)
            }
            className="bg-warning/5 hover:bg-warning/20 hover:shadow-md p-2 rounded-full"
          >
            <FaRegTrashAlt className="text-warning" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlisttItem;
