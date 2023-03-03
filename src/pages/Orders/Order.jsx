import React from "react";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>Crafts - Order</title>
        <meta name="description" content="Custom Order of Craft Gifts." />
      </Helmet>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default Order;
