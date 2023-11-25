import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../../AxiosInstance/AxiosInstance";

const API = process.env.REACT_APP_STATIC;

const PageBanner = ({ title }) => {
  const {
    data: { data: banner } = [],
  } = useQuery({
    queryKey: ["banner"],
    queryFn: () => {
      return axios.get("/setting/banner");
    },
  });

  return (
    <div className="relative">
      <img src={API + "bannerimage/" + banner?.bannerfilename} alt="" className="h-48 w-full" />
      <div className="absolute flex items-center justify-center text-gray-800 inset-0">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default PageBanner;
