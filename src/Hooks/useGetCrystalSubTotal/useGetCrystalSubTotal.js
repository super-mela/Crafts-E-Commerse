import { useContext, useMemo, useRef } from "react";
import { CrystalContext } from "../../Contexts/CrystalProvider/CrystalProvider";
import { getStoredCrystalCart } from "../../utils/fakeDb";

const useGetCrsytalSubTotal = () => {
    const { crystalItems } = useContext(CrystalContext);
    const crsytalCart = getStoredCrystalCart();
    const subtotalRef = useRef(0);

    const subtotal = useMemo(() => {
        subtotalRef.current = crystalItems?.reduce(
            (prev, curr) =>
                prev +
                parseFloat(
                    (curr?.discount
                        ? curr?.price - curr?.price * (curr?.discount / 100)
                        : curr?.price) * crsytalCart[curr?._id]
                ),
            0
        );
        return subtotalRef.current;
    }, [crsytalCart, crystalItems]);

    useMemo(() => {
        return () => {
            subtotalRef.current = 0;
        };
    }, []);

    return [subtotal];
};

export default useGetCrsytalSubTotal;
