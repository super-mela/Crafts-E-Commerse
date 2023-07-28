import { useContext, useEffect, useState } from "react";
import { CrystalContext } from "../../Contexts/CrystalProvider/CrystalProvider";

// Get Item quantity
const useGetCrystalQuantity = (id) => {
    const { getQuantityOfItem } = useContext(CrystalContext);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const qntity = getQuantityOfItem(id);
            setQuantity(qntity);
        }

        return () => {
            isMounted = false;
        };
    }, [getQuantityOfItem, id]);

    return [quantity];
};

export default useGetCrystalQuantity;
