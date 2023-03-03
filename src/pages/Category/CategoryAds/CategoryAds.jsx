import React from "react";
import CategoryAd from "../CategoryAd/CategoryAd";
import kids from "../../../assets/kid-gift.png";
import wedding from "../../../assets/Gift-giving.png";
import retirement from "../../../assets/retirement-gifts.jpg"

const CategoryAds = () => {
  const ads = [
    {
      title: "Kids Gift",
      image: kids,
    },
    {
      title: "Wedding Gift",
      image: wedding,
    },
    {
      title: "Retirement Gift",
      image: retirement,
    },
  ];
  return (
    <div className="component flex gap-5 lg:flex-nowrap flex-wrap">
      {ads.map((ad, idx) => (
        <CategoryAd key={Math.random()} ad={ad}></CategoryAd>
      ))}
    </div>
  );
};

export default CategoryAds;
