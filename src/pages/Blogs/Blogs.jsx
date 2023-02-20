import React from "react";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Crafts - Blogs</title>
        <meta name="description" content="Latest news and blog by the shop." />
      </Helmet>
      <ComingSoon></ComingSoon>
    </div>
  );
};

export default Blogs;
