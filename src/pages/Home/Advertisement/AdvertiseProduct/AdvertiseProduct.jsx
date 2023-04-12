import React from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_STATIC

const AdvertiseProduct = ({ data }) => {
  console.log(data)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full py-5 lg:px-10 px-2 lg:h-[346px] bg-secondary rounded-md">
      <div className="lg:col-span-3 flex flex-col justify-center lg:gap-3 gap-2 lg:order-0 order-1">
        <h1 className="lg:text-3xl text-xl font-bold text-gray-900 ">
          {data.title}
        </h1>
        <p className="text-base tori-text-neutral">
          {data.subtitle}
        </p>
        <div className="mt-2">
          <Link className="tori-btn-secondary" to={"/order"}>Order Now</Link>
        </div>
      </div>
      <div className="lg:col-span-2 flex items-center lg:order-1 order-0">
        <img src={API + "slider/" + data.sliderfilename} alt="" className="lg:w-full lg:h-auto h-24" />
      </div>
    </div>
  );
};

export default AdvertiseProduct;
