import React from "react";
import pageBanner from "../../assets/page-header-bg_gift_pc.jpg";
const PageBanner = ({ title }) => {
  return (
    <div className="relative">
      <img src={pageBanner} alt="" className="h-48 w-full" />
      <div className="absolute flex items-center justify-center text-gray-800 inset-0">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default PageBanner;
