import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import CrystalDetailsCard from "../../../components/CrystalDetailCard/CrystalDetailsCard";
import DescriptionOrReview from "../DescriptionOrReview/DescriptionOrReview";
import ProductFeature from "../ProductFeature/ProductFeature";

const CrystalDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const from = location?.state?.Navigatedfrom?.pathname;

  const {
    isLoading,
    error,
    refetch,
    data: { data: selectedProduct } = [],
  } = useQuery({
    queryKey: [id, "crystal"],
    queryFn: () => {
      return axios.get(`/crystal/${id}`);
    },
  });

  return (
    <div className="bg-[#F9FAFB] text-black sub-section">
      <Helmet>
        <title>Crafts - Crystal Details</title>
        <meta name="description" content="Explore details of a product" />
      </Helmet>
      {/* Bread Cumbs */}
      <div className="text-[16px] breadcrumbs">
        <ul>
          <li>
            <Link to={"/"} className="tori-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={`${from}?3dCrystals`} className="tori-link">
              3dCrystals
            </Link>
          </li>
          <li>{selectedProduct?.name}</li>
        </ul>
      </div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <CrystalDetailsCard
          display={"hidden"}
          selectedProduct={selectedProduct}
        >
          <ProductFeature />
        </CrystalDetailsCard>
      )}
      {/* Description / Review */}
      <DescriptionOrReview
        selectedProduct={selectedProduct}
      ></DescriptionOrReview>
    </div>
  );
};

export default CrystalDetails;
