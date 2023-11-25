import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../../../AxiosInstance/AxiosInstance";
import CategoryAd from "../CategoryAd/CategoryAd";

const CategoryAds = () => {
  const {
    data: { data: category } = [],
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      return axios.get("/setting/category");
    },
  });
  return (
    <div className="component flex gap-5 lg:flex-nowrap flex-wrap">
      {category?.catadverts.map((ad, idx) => (
        <CategoryAd key={Math.random()} ad={ad}></CategoryAd>
      ))}
    </div>
  );
};

export default CategoryAds;
