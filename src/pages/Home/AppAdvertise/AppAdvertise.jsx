import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "../../../AxiosInstance/AxiosInstance";

const API = process.env.REACT_APP_STATIC;

const AppAdvertise = () => {
  const {
    data: { data: advertbanner } = [],
  } = useQuery({
    queryKey: ["advertbanner"],
    queryFn: () => {
      return axios.get("/setting/advertbanner");
    },
  });
  return (
    <div className="bg-[#F9FAFB] sub-section">
      <div className="w-full rounded-md bg-primary lg:p-10 p-3 text-black">
        <div className="bg-white grid lg:grid-cols-6 rounded-md ">
          <div className="lg:col-span-4 p-7 lg:order-1 order-2 flex flex-col gap-2">
            <span className="lg:text-xl">{advertbanner?.moto}</span>
            <h1 className="font-bold  lg:text-2xl text-xl">
              {advertbanner?.title}
            </h1>
            <p className="lg:text-sm text-xs">
              {advertbanner?.description}
            </p>
            <div>
              <a
                rel="noreferrer"
                target={"_blank"}
                href={advertbanner?.link}
                className="tori-btn-primary mt-5"
              >
                {advertbanner?.caption}
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 lg:order-2 order-1 flex justify-center items-center p-3">
            <img
              src={API + "advertbanner/" + advertbanner?.advertbannerfilename}
              alt=""
              className="lg:w-full w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAdvertise;
