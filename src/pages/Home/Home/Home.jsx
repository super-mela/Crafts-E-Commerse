import React from "react";
import { Helmet } from "react-helmet-async";
import Advertisements from "../Advertisement/Advertisement/Advertisements";
import AppAdvertise from "../AppAdvertise/AppAdvertise";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories/FeaturedCategories";
import LatestDiscounts from "../LatestDiscounts/LatestDiscounts";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Crafts - Home</title>
        <meta name="description" content="An online gift shop" />
        <meta
          name="keywords"
          content="Ecommerce, gift, online shop, vegetables"
        />
      </Helmet>
      <Advertisements />
      <FeaturedCategories />
      <PopularProducts />
      <AppAdvertise />
      <LatestDiscounts />
    </div>
  );
};

export default Home;
