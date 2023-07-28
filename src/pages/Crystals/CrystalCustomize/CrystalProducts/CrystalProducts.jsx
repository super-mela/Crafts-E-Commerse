import React, { useContext, useState, useEffect } from "react";
import { CrystalContext } from "../../../../Contexts/CrystalProvider/CrystalProvider";
import EmptyCart from "../../../MyCart/EmptyCart/EmptyCart";
import { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FreeMode, Thumbs } from "swiper";
import Loader from "../../../../components/Loader/Loader";

const StaticPath = process.env.REACT_APP_STATIC;

const CrystalProducts = () => {

    const { crystalItems, isLoading } = useContext(CrystalContext)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className=" w-full">{
            isLoading ? <Loader />
                : crystalItems?.length ? (
                    crystalItems?.map((crystalItem, key) => (
                        <div key={key}>
                            <img
                                src={thumbsSwiper}
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
                                        <img src={StaticPath + "product/" + crystalItem.image} alt="" className=" w-full " />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="border rounded-sm overflow-hidden">
                                        <img src={StaticPath + "product/" + crystalItem.image} alt="" className="h-full w-full " />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="border rounded-sm overflow-hidden">
                                        <img src={StaticPath + "product/" + crystalItem.image} alt="" className="h-full w-full " />
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
                                    <img src={StaticPath + "product/" + crystalItem.image} alt="" className="h-full w-full cursor-pointer" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={StaticPath + "product/" + crystalItem.image} alt="" className="h-full w-full cursor-pointer" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={StaticPath + "product/" + crystalItem.image} alt="" className="h-full w-full cursor-pointer" />
                                </SwiperSlide>

                                <button className="absolute prevThumb bottom-[26%] bg-primary w-6 rounded-r-md my-auto flex justify-center items-center h-7 z-10 lg:left-0 left-2">
                                    <BiChevronLeft className="w-6 h-6 text-white font-extrabold" />
                                </button>
                                <button className="absolute nextThumb bottom-[26%] bg-primary w-6 rounded-l-md my-auto flex justify-center items-center h-7 z-10 lg:right-0 right-2">
                                    <BiChevronRight className="w-6 h-6 text-white font-extrabold" />
                                </button>
                            </Swiper>
                        </div>
                    ))
                ) :
                    (<EmptyCart />)
        }

        </div >
    );
};

export default CrystalProducts;
