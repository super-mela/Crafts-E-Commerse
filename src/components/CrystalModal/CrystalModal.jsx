import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductsProvider/ProductsProvider";
import CrystalDetailsCard from '../CrystalDetailCard/CrystalDetailsCard'

const CrystaltModal = () => {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="crystal-modal" className="modal-toggle" />
      <div className="modal bg-black/80">
        <div className="modal-box lg:w-9/12 max-w-5xl relative lg:p-7 p-2 rounded-sm">
          <label
            htmlFor="crystal-modal"
            className="absolute right-3 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>
          <CrystalDetailsCard
            selectedProduct={selectedProduct}
            display={"block"}
          ></CrystalDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default CrystaltModal;
