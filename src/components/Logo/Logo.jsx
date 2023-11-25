import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <img src={logo} alt="" className="w-7" />
      <div className="flex-col items-start flex ">
        <span className="text-xl leading-none font-bold">Crafts Gift</span>
        <small className="text-xs leading-none">Find Your Gifts Here</small>
      </div>
    </div>
  );
};

export default Logo;
