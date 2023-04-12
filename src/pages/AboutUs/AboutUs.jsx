import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import axios from "../../AxiosInstance/AxiosInstance"
import PageBanner from "../../components/PageBanner/PageBanner";
import Founders from "./Founders/Founers";
import spoon from '../../assets/spoon.png'
import weddinggift from '../../assets/wedding-gift.png'

const API = process.env.REACT_APP_STATIC;

const AboutUs = () => {
  const {
    data: { data: aboutus } = [],
  } = useQuery({
    queryKey: ["aboutus"],
    queryFn: () => {
      return axios.get("/setting/aboutus");
    },
  });
  return (
    <div>
      <Helmet>
        <title>Crafts - About Us</title>
        <meta name="description" content="About us." />
      </Helmet>
      <PageBanner title={"About Us"} />
      <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10 text-gray-800">
        <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          <div className="">
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">{aboutus?.title}</h3>
            <div className="mt-3 text-base opacity-90 leading-7">
              <p>               {aboutus?.paragraph1}              </p>
              <p>              {aboutus?.paragraph1}              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
              <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">{aboutus?.card1.title}</span>
                <h4 className="text-lg font-serif font-bold mb-1">{aboutus?.card1.subtitle}</h4>
                <p className="mb-0 opacity-90 leading-7">{aboutus?.card1.paragraph} </p>
              </div>
              <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">{aboutus?.card2.title}</span>
                <h4 className="text-lg font-serif font-bold mb-1">{aboutus?.card2.subtitle}</h4>
                <p className="mb-0 opacity-90 leading-7">{aboutus?.card2.paragraph} </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', position: "relative", maxWidth: '100%' }}>
              <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27920%27%20height=%27750%27/%3e"
                  style={{ display: "block", maxWidth: '100%', width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
              </span>
              <img
                alt='logo'
                src={API + "aboutus/" + aboutus?.sidefilename}
                decoding="async" data-nimg="intrinsic"
                srcset={`${API + "aboutus/" + aboutus?.sidefilename} w=108 q=75 1x, ${API + "aboutus/" + aboutus?.sidefilename}w=1920 q=75 2x`}
                style={{ position: "absolute", inset: '0px', boxSizing: 'border-box', padding: '0px', border: "none", margin: "auto", display: "block", width: '0px', height: '0px', minWidth: '100%', maxWidth: '100', minHeight: '100%', maxHeight: '100%' }} />
            </span>
          </div>
        </div>
        <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
          <p> {aboutus?.paragraph3} </p>
          <p>   {aboutus?.paragraph4}  </p>
        </div>
        <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
          <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', position: "relative", maxWidth: '100%' }}>
            <span style={{ boxSizing: 'border-box', display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271920%27%20height=%27570%27/%3e"
                style={{ display: "block", maxWidth: '100%', width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
            </span>
            <img
              alt="logo"
              src={API + "aboutus/" + aboutus?.bannerfilename}
              decoding="async"
              data-nimg="intrinsic"
              className="block rounded-lg"
              srcset={`${API + "aboutus/" + aboutus?.bannerfilename}w=1920 q=75 1x, ${API + "aboutus/" + aboutus?.bannerfilename}w=3840 q=75 2x`}
              style={{ position: "absolute", inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: "auto", display: "block", width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
          </span>
        </div>
      </div>
      {/* Founder of crafts gift */}
      <Founders />
    </div>
  );
};

export default AboutUs;
