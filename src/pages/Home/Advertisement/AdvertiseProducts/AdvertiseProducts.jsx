import React from "react";
import { Autoplay } from "swiper";
import { useQuery } from "@tanstack/react-query";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import axios from "../../../../AxiosInstance/AxiosInstance"

// Import Swiper styles

// import required modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const AdvertiseProducts = () => {
  const {
    data: { data: slider } = [],
  } = useQuery({
    queryKey: ["slider"],
    queryFn: () => {
      return axios.get("/setting/slider");
    },
  });
  return (
    <div className="swiper-container lg:col-span-3 col-span-1">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        className="categoriesSwipper"
      >
        {slider?.sliders.map((item, i) => (
          <SwiperSlide key={i}>
            <AdvertiseProduct data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertiseProducts;
