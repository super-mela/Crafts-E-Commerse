import React, { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";

const StaticPath = process.env.REACT_APP_STATIC;

const CustomCard = ({ customData }) => {
  const { LED, background, cleaningKit, file, font, keychane, line, rush, size, text } = customData;
  const [preview, setPreview] = useState();

  useEffect(() => {
    var objectUrl = URL.createObjectURL(file[0])
    setPreview(objectUrl);
  }, [])
  return (
    <div
      className="grid lg:grid-cols-6 bg-white px-2 py-3 cursor-pointer rounded-sm text-sm text-black/80 hover:text-primary shadow-sm hover:shadow-2xl transition-all delay-[30ms]"
    >
      <div className="flex items-center justify-center lg:col-span-2">
        <img src={preview} alt="" className="lg:w-[50%]" />
      </div>
      <div className="lg:col-span-4 text-center lg:text-left">
        <h6 className="mb-1 text-sm">Customizations</h6>
        <div className="flex flex-col gap-1 lg:items-start items-center">
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Size:{" "}{size}
          </span>
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Rush:{" "}{rush}
          </span>
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> LED:{" "}{LED}
          </span>
          {line ? text.map((_text, i) => (
            <span key={i} className="tori-link flex items-center gap-1 text-xs text-black/70" >
              <BiChevronRight /> Text:{" "}{_text}
            </span>
          )) : <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Text: NONE
          </span>}
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Font:{" "}{font}
          </span>
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Keychain:{" "}{keychane}
          </span>
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Cleaning Kit:{" "}{cleaningKit}
          </span>
          <span className="tori-link flex items-center gap-1 text-xs text-black/70" >
            <BiChevronRight /> Background:{" "}{background}
          </span>

        </div>
      </div>
    </div>
  );
};

export default CustomCard;
