import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import { ProductContext } from "../../Contexts/ProductsProvider/ProductsProvider";
import RatingsStars from "../RatingsStars/RatingsStars";
import StatusTag from "../StatusTag/StatusTag";
import "./Product.css";

const StaticPath = process.env.REACT_APP_STATIC;

const Product = ({
  product,
  product: { name, image, price, status, subCategory, net, _id },
}) => {
  const navigate = useNavigate()
  const { setSelectedProduct } = useContext(ProductContext);

  return (
    <div className="text-black/90 flex flex-col justify-between gap-1 overflow-hidden bg-white  rounded-sm p-2 product relative">
      {/* Offers */}
      {product?.discount && (
        <span
          className={`bg-accent rounded-sm rounded-r-full text-[13px] font-medium py-[2px] z-10 absolute text-white px-2 top-2 left-0`}
        >
          {product?.discount}% Off
        </span>
      )}

      {/* Image */}
      <label
        onClick={() => setSelectedProduct(product)}
        htmlFor="crystal-modal"
        // to={`/product/${_id}`}
        className="cursor-pointer flex justify-center items-center border-b relative overflow-hidden"
      >
        <img src={StaticPath + "product/" + image} alt="" className="w-28 h-28 image z-0" />

      </label>

      {/* Text */}
      <div className="text-sm font-medium z-10 mt-1">
        <div className="flex justify-end items-center">
          <StatusTag
            color={status?.toLowerCase() === "in stock" ? true : false}
          >
            Avaliable
            {/* {status} */}
          </StatusTag>
        </div>
        <p className="text-black/80">{name}</p>
      </div>

      {product?.ratings > 0 ? (
        <RatingsStars ratings={product?.ratings}></RatingsStars>
      ) : (
        <span className="text-gray-400 text-xs leading-none">
          Not Reviewed Yet!
        </span>
      )}

      {/* Price */}
      <div className="flex justify-end items-end mt-[2px]">
        {/* Add Cart Button */}
        {status?.toLowerCase() === "in stock" &&

          <button
            onClick={() => navigate('/order')}
            className="border border-primary flex justify-center items-center p-2 cursor-pointer transition-all delay-[30ms] hover:bg-primary hover:text-white rounded-sm text-primary"
          >
            <BsBagFill className="w-4 h-4" />
          </button>
        }
      </div>
    </div>
  );
};

export default Product;
