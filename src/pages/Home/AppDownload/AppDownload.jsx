import React from "react";
import cart from "../../../assets/cart.png"
import shopping from "../../../assets/shopping.png"

const AppDownload = () => {
  return (
    <div className="bg-[#EEF2FF]">
      <div className="grid lg:grid-cols-3 lg:py-1 py-5">
        <div className="lg:flex items-center hidden">
          <img
            src={cart}
            alt=""
            className="w-4/5 mx-auto"
          />
        </div>
        <div className="text-gray-800 lg:text-center flex text-center flex-col justify-center gap-3 lg:p-0 p-2">
          <h1 className="lg:text-2xl text-xl font-bold">
            Get Your Daily Needs From Our Crafts Gift Store
          </h1>
          <p className="text-sm">
            There are many products you will find our shop, Choose your daily
            necessary product from our Crafts Gift Store and get some special
            offer.
          </p>
          {/* <div className="flex items-center justify-center gap-5 mt-2">
            <a
              rel="noreferrer"
              target={"_blank"}
              href={"https://www.apple.com/app-store/"}
            >
              <img
                src="https://kachabazar-store.vercel.app/app/app-store.svg"
                alt=""
                className="w-32"
              />
            </a>
            <a
              rel="noreferrer"
              target={"_blank"}
              href={"https://play.google.com/"}
            >
              <img
                src="https://kachabazar-store.vercel.app/app/play-store.svg"
                alt=""
                className="w-32"
              />
            </a>
          </div> */}
        </div>
        <div className="lg:flex items-center  hidden">
          <img
            src={shopping}
            alt=""
            className="w-4/5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
