import { useQuery } from "@tanstack/react-query";
import React, { createContext, useRef, useState, useContext } from "react";
import axios from "../../AxiosInstance/AxiosInstance";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {
  addToWishlistDb,
  deleteWishlistCart,
  getStoredWishlist,
  removeFromWishlistDb,
} from "../../utils/fakeDb";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const wishlistSize = Object.values(getStoredWishlist()).reduce((a, b) => a + b, 0);
  const [numberOfWishlisttItems, setNumberOfWishlisttItems] = useState(wishlistSize);
  const successModal = useRef();
  const { user } = useContext(AuthContext);
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
    return addToWishlistDb(id, user);
  };

  const removeFromWishlist = (id) => {
    if (getStoredWishlist()[id]) {
      setNumberOfWishlisttItems(
        (numberOfWishlisttItems) => numberOfWishlisttItems - 1);
    }
    return removeFromWishlistDb(id, user);
  };

  // const existInCart = (id) => {
  //   return id in getStoredWishlist();
  // };


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
    checkWishllistExist,
    wishlistItems,
    refetchwish: refetch,
    isLoading,
    successModal,
    removeWishlistCart,
    setNumberOfWishlisttItems,
  };
  return (
    <WishlistContext.Provider value={wishlistInfo}>{children}</WishlistContext.Provider>
  );
};

export default WishlistProvider;
