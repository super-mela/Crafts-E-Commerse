import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "../../../AxiosInstance/AxiosInstance";
import Loader from "../../../components/Loader/Loader";
import NotFound from "../../../components/NotFound/NotFound";
import Pagination from "../../../components/Pagination/Pagination";
import Product from "../../../components/crystalProduct/Product";
// import Categories from "../../Category/Categories/Categories";
// import CategoryAds from "../CategoryAds/CategoryAds";
// import TotalProduct from "../TotalProduct/TotalProduct";

const Crystals = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const subCat = searchParams.get("subcategory");
    const [sort, setSort] = useState("default");
    const [size, setSize] = useState(12);
    const [page, setPage] = useState(0);

    // Fetch Products
    const {
        data: { data } = [],
        error,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [id, subCat, sort, page, size],
        queryFn: () => {
            return axios.get(
                `/crystal`
            );
        },
    });
    const products = data;
    const pages = Math.ceil(data?.dataCount / size) || 0;

    return (
        <div className="bg-[#F9FAFB] section">
            <Helmet>
                <title>Crafts - Crystals</title>
                <meta
                    name="description"
                    content="Explore a All Craft crystals on the shop"
                />
            </Helmet>
            <div className="grid lg:grid-cols-6 grid-cols-2 sub-section gap-3">
                {isLoading ? (
                    <Loader></Loader>
                ) : products?.length ? (
                    products?.map((product) => (
                        <Product key={product?._id} product={product}></Product>
                    ))
                ) : (
                    <NotFound></NotFound>
                )}
            </div>
            {products?.length && (
                <Pagination page={page} setPage={setPage} pages={pages}></Pagination>
            )}

            {/* Pagination */}
        </div>
    );
};

export default Crystals;
