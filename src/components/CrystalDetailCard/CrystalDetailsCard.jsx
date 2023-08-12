import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CrystalDetailsCard.css";
import { CrystalContext } from "../../Contexts/CrystalProvider/CrystalProvider";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdOutlineMore } from "react-icons/md";
import { FreeMode, Thumbs } from "swiper";
import RatingsStars from "../RatingsStars/RatingsStars";

const StaticPath = process.env.REACT_APP_STATIC;

const CrystalDetailsCard = ({
  children,
  display,
  selectedProduct,
  selectedProduct: { image, tags, name, price, status, desc, _id, net },
}) => {
  const { addnewCrystalCart } = useContext(CrystalContext)
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();

  const handleCrystal = () => {
    addnewCrystalCart(_id);
    setTimeout(() => {
      navigate('/3dCrystals/customize')
    }, 200);
  }

  return (
    <div className="flex lg:gap-5 text-[16px] text-gray-700 lg:flex-nowrap flex-wrap">
      {/* Image */}
      <div className="lg:w-[30%] w-full">
        <img
          src={StaticPath + "crystal/" + image}
          alt=""
          className="w-full rounded-sm lg:hidden block mx-auto"
        />
        <Swiper
          spaceBetween={10}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 lg:mb-5 px-1 md:block hidden"
        >
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={StaticPath + "crystal/" + image} alt="" className=" w-full " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={StaticPath + "crystal/" + image} alt="" className="h-full w-full " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border rounded-sm overflow-hidden">
              <img src={StaticPath + "crystal/" + image} alt="" className="h-full w-full " />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          navigation={{
            prevEl: ".prevThumb",
            nextEl: ".nextThumb",
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper p-2 bg-secondary relative md:block hidden"
        >
          <SwiperSlide>
            <img src={StaticPath + "crystal/" + image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={StaticPath + "crystal/" + image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={StaticPath + "crystal/" + image} alt="" className="h-full w-full cursor-pointer" />
          </SwiperSlide>

          <button className="absolute prevThumb bottom-[26%] bg-primary w-6 rounded-r-md my-auto flex justify-center items-center h-7 z-10 lg:left-0 left-2">
            <BiChevronLeft className="w-6 h-6 text-white font-extrabold" />
          </button>
          <button className="absolute nextThumb bottom-[26%] bg-primary w-6 rounded-l-md my-auto flex justify-center items-center h-7 z-10 lg:right-0 right-2">
            <BiChevronRight className="w-6 h-6 text-white font-extrabold" />
          </button>
        </Swiper>
      </div>

      {/* Intro */}
      <div className="border flex bg-white flex-col gap-2 rounded-sm lg:w-[70%] p-5">
        {/* tags */}
        <div className="flex gap-2">
          {tags?.map((tag, idx) => (
            <Link
              className="border rounded-full px-2 bg-primary/20"
              key={Math.random()}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Name */}
        <h5 className="text-xl text-gray-700">{name}</h5>

        {selectedProduct?.ratings > 0 ? (
          <RatingsStars ratings={selectedProduct?.ratings}></RatingsStars>
        ) : (
          <span className="text-gray-400 text-xs leading-none">
            Not Reviewed Yet!
          </span>
        )}

        {/* Pice */}
        <h6 className="text-2xl text-primary font-bold">
          {selectedProduct?.discount && (
            <span className="text-accent ml-3">
              Save {selectedProduct?.discount}%
            </span>
          )}
        </h6>

        {/* Tax & Brand */}
        <div className="flex flex-col gap-1">
          <p>
            Availability:{" "}
            <span
              className={`${status?.toLowerCase() === "in stock"
                ? "text-primary/80"
                : "text-warning/80"
                }`}
            >
              {status}
            </span>
          </p>
        </div>

        {/* Description */}
        <div className="border-t border-b py-5 my-2">
          <p>{desc}</p>
        </div>

        {/* Button */}
        {status?.toLowerCase() === "in stock" && (
          <div className="flex lg:justify-start justify-center items-center lg:gap-5 my-3 gap-2 lg:flex-nowrap flex-wrap">
            <div className="lg:w-[30%] w-[70%]">
              <button
                onClick={() => handleCrystal()}
                className="tori-btn-secondary w-full"
              >
                Order Now
              </button>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex justify-center gap-5">
          <div className={`${display}`}>
            <label
              onClick={() =>
                navigate(`/3dCrystals/${_id}`, {
                  state: { Navigatedfrom: location },
                })
              }
              htmlFor="crystal-modal"
              className={"text-sm text-accent tori-link"}
            >
              More Info <MdOutlineMore />
            </label>
          </div>
          {children}
        </div>
      </div>

      {/* *************** */}
    </div>
  );
};

export default CrystalDetailsCard;
