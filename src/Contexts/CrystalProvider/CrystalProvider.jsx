import { useQuery } from "@tanstack/react-query";
import React, { createContext, useRef, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";
import {
    addToCrystalDb,
    deleteCrystalCart,
    getStoredCrystalCart,
    reduceQuantityFromCrystalDb,
    removeFromCrystalDb,
    addNewCrystalDb
} from "../../utils/fakeDb";

export const CrystalContext = createContext();

const CrystalProvider = ({ children }) => {
    const cartSize = Object.values(getStoredCrystalCart()).reduce((a, b) => a + b, 0);
    const [numberOfCrystalItems, setNumberOfCrystalItems] = useState(cartSize);
    const successModal = useRef();
    const {
        isLoading,
        error,
        refetch,
        data: { data: crystalItems } = [],
    } = useQuery({
        queryKey: ["crystal-cart"],
        queryFn: () => {
            return axios.post("/crystal-cart", getStoredCrystalCart());
        },
    });

    const addToCrystalCart = (id) => {
        setNumberOfCrystalItems((numberOfCrystalItems) => numberOfCrystalItems + 1);
        return addToCrystalDb(id);
    };
    const addnewCrystalCart = (id) => {
        addNewCrystalDb(id);
        refetch()
        return
    };

    const removeFromCrystalCart = (id) => {
        setNumberOfCrystalItems(
            (numberOfCrystalItems) => numberOfCrystalItems - getStoredCrystalCart()[id]
        );

        return removeFromCrystalDb(id);
    };

    const reduceQuantityFromCrystalCart = (id) => {
        setNumberOfCrystalItems((numberOfCrystalItems) => numberOfCrystalItems - 1);
        return reduceQuantityFromCrystalDb(id);
    };

    const removeCrystalCart = () => {
        deleteCrystalCart();
        setNumberOfCrystalItems(0);
        refetch();
    };

    const getQuantityOfItem = (id) => {
        const shoppingCart = getStoredCrystalCart();
        if (id in shoppingCart) {
            return shoppingCart[id];
        }
        return 0;
    };

    const crystalInfo = {
        addToCrystalCart,
        addnewCrystalCart,
        removeFromCrystalCart,
        numberOfCrystalItems,
        reduceQuantityFromCrystalCart,
        getQuantityOfItem,
        crystalItems,
        refetch,
        isLoading,
        successModal,
        removeCrystalCart,
    };
    return (
        <CrystalContext.Provider value={crystalInfo}>{children}</CrystalContext.Provider>
    );
};

export default CrystalProvider;
