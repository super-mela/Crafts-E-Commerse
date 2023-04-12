import React from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_STATIC;

const CategoryAd = ({ ad: { title, subtitle, categoryfilename } }) => {
  return (
    <div
      className={`text-center rounded-md border hover:shadow-lg transition-all delay-75 overflow-hidden relative`}
    >
      <img src={API + 'catadvert/' + categoryfilename} alt="" className="w-full h-full" />
      <div className="absolute text-white font-semibold inset-0 flex flex-col gap-1 items-center justify-center">
        <p className="text-sm">Crafts of</p>

        <h3 className="text-2xl">{title}</h3>
        <small className="text-xs leading-none">{subtitle}</small>

        <Link className="tori-btn-primary mt-3" to={"/order"}>Order Now</Link>
      </div>
    </div>
  );
};

export default CategoryAd;
