import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import SidebarHeader from "../../../components/SidebarHeader/SidebarHeader";
import { WishlistContext } from "../../../Contexts/WishlistProvider/WishlistProvider";
import useGetSubTotal from "../../../Hooks/useGetSubTotal/useGetSubTotal";
import WishlisttItem from "../WishlistItem/WishlistItem";
import EmptyWishlist from "../EmptyWishlist/EmptyWishlist";

const MyWishlist = () => {
  const location = useLocation();

  const { wishlistItems, isLoading } = useContext(WishlistContext);
  const [subTotal] = useGetSubTotal();
  const navigate = useNavigate();
  console.log(wishlistItems)
  return (
    <>
      {/* Top section */}
      <SidebarHeader
        title={"My Wishlist"}
        position={"right-0"}
        drawer={"wishlist-drawer"}
      >
        <BsChevronDoubleRight className="icon" />
      </SidebarHeader>
      {/* Top section end */}

      {/* Cart Items */}
      <div className="my-[60px] overflow-y-scroll w-[350px] h-full">
        {isLoading ? (
          <Loader></Loader>
        ) : wishlistItems?.length ? (
          wishlistItems?.map((wishlistItem) => (
            <WishlisttItem wishlistItem={wishlistItem} key={wishlistItem?._id}></WishlisttItem>
          ))
        ) : (
          <EmptyWishlist></EmptyWishlist>
        )}
      </div>
      {/* Cart Items End */}

      {/* checkout */}
      {wishlistItems?.length && (
        <div className="px-2 flex justify-center items-center fixed right-0 left-0 bottom-2">
          <label
            onClick={() => navigate("/checkout", { state: { from: location } })}
            htmlFor="wishlist-drawer"
            // to={"/checkout"}
            // state={{ from: location }}
            className="btn-primary cursor-pointer text-white w-full rounded-sm p-2 flex items-center justify-between"
          >
            <div className="bg-white text-primary font-bold px-2 rounded-sm">
              {subTotal ? (
                `$ ${subTotal.toFixed(2)}`
              ) : (
                <span className="text-xs">Calculating...</span>
              )}
            </div>
            <span className="flex items-center gap-1 uppercase text-sm font-semibold">
              Checkout <AiOutlineArrowRight />
            </span>
          </label>
        </div>
      )}
    </>
  );
};

export default MyWishlist;
