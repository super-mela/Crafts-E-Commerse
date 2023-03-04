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


    </>
  );
};

export default MyWishlist;
