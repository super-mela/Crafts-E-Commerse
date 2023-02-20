import { useQuery } from "@tanstack/react-query";
import React, { createContext, useRef, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";
import {
  addToWishlistDb,
  deleteWishlistCart,
  getStoredWishlist,
  reduceQuantityFromWishlistDb,
  removeFromWishlistDb,
} from "../../utils/fakeDb";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const wishlistSize = Object.values(getStoredWishlist()).reduce((a, b) => a + b, 0);
  const [numberOfWishlisttItems, setNumberOfWishlisttItems] = useState(wishlistSize);
  const successModal = useRef();

  const {
    isLoading,
    error,
    refetch,
    data: { data: wishlistItems } = [],
  } = useQuery({
    queryKey: ["wishlist-cart"],
    queryFn: () => {
      return axios.post("/wishlist-cart", getStoredWishlist());
    },
  });

  const addToWishlist = (id) => {
    setNumberOfWishlisttItems((numberOfWishlisttItems) => numberOfWishlisttItems + 1);
    return addToWishlistDb(id);
  };

  const removeFromWishlist = (id) => {
    setNumberOfWishlisttItems(
      (numberOfWishlisttItems) => numberOfWishlisttItems - getStoredWishlist()[id]
    );

    return removeFromWishlistDb(id);
  };

  // const existInCart = (id) => {
  //   return id in getStoredWishlist();
  // };

  const reduceQuantityFromWishlist = (id) => {
    setNumberOfWishlisttItems((numberOfWishlisttItems) => numberOfWishlisttItems - 1);
    return reduceQuantityFromWishlistDb(id);
  };

  const removeWishlistCart = () => {
    deleteWishlistCart();
    setNumberOfWishlisttItems(0);
    refetch();
  };

  const checkWishllistExist = (id) => {
    const WishlistCart = getStoredWishlist();
    if (id in WishlistCart) {
      return true;
    }
    return false;
  };

  const wishlistInfo = {
    addToWishlist,
    removeFromWishlist,
    numberOfWishlisttItems,
    reduceQuantityFromWishlist,
    checkWishllistExist,
    wishlistItems,
    refetchwish: refetch,
    isLoading,
    successModal,
    removeWishlistCart,
  };
  return (
    <WishlistContext.Provider value={wishlistInfo}>{children}</WishlistContext.Provider>
  );
};

export default WishlistProvider;
