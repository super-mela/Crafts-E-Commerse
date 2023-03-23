import React from 'react'

function ProductDetail() {
    return (
        <div className="text-gray-700 lg:p-5 px-2 py-5 flex flex-col gap-3">
            <div className="h-[300px] overflow-y-scroll ">

                <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                    {/* Name */}
                    <div className="">
                        <label htmlFor="firstname" className="tori-label" style={{ width: "100%" }}>
                            Category
                        </label>
                        <div style={{ width: "100%" }}>
                            <select className="tori-input">
                                <option >1</option>
                                <option>2 </option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="lastname" className="tori-label">
                            SubCategory
                        </label>
                        <select className="tori-input">
                            <option>1</option>
                            <option selected>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <h4 className="tori-title mt-5"> Product Details</h4>
                <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3">
                    {/* Name */}
                    <div className="w-[100%] px-3">
                        <label htmlFor="firstname" className="tori-label mb-2" >
                            Size
                        </label>
                        <div className="flex justify-between mb-2" >
                            <label htmlFor="firstname" className="tori-label mr-5 " >Sm</label>
                            <div className="border rounded-sm items-center flex text-black">
                                <button
                                    onClick={() =>
                                        count && handleReduceQuantity()
                                    }
                                    className="px-2 "
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <span className="text-sm mx-1">{count}</span>
                                <button
                                    onClick={() => handleAddtoCart()}
                                    className="px-2 "
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between mb-2" >
                            <label htmlFor="firstname" className="tori-label mr-5 " >M</label>
                            <div className="border rounded-sm items-center flex text-black">
                                <button
                                    onClick={() =>
                                        count && handleReduceQuantity()
                                    }
                                    className="px-2 "
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <span className="text-sm mx-1">{count}</span>
                                <button
                                    onClick={() => handleAddtoCart()}
                                    className="px-2 "
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between mb-2" >
                            <label htmlFor="firstname" className="tori-label mr-5 " >L</label>
                            <div className="border rounded-sm items-center flex text-black">
                                <button
                                    onClick={() =>
                                        count && handleReduceQuantity()
                                    }
                                    className="px-2 "
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <span className="text-sm mx-1">{count}</span>
                                <button
                                    onClick={() => handleAddtoCart()}
                                    className="px-2 "
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between mb-2" >
                            <label htmlFor="firstname" className="tori-label mr-5 " >XL</label>
                            <div className="border rounded-sm items-center flex text-black">
                                <button
                                    onClick={() =>
                                        count && handleReduceQuantity()
                                    }
                                    className="px-2 "
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <span className="text-sm mx-1">{count}</span>
                                <button
                                    onClick={() => handleAddtoCart()}
                                    className="px-2 "
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between mb-2" >
                            <label htmlFor="firstname" className="tori-label mr-5 " >XXL</label>
                            <div className="border rounded-sm items-center flex text-black">
                                <button
                                    onClick={() =>
                                        count && handleReduceQuantity()
                                    }
                                    className="px-2 "
                                >
                                    {" "}
                                    -{" "}
                                </button>
                                <span className="text-sm mx-1">{count}</span>
                                <button
                                    onClick={() => handleAddtoCart()}
                                    className="px-2 "
                                >
                                    {" "}
                                    +{" "}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <label htmlFor="lastname" className="tori-label">
                            Color
                        </label>
                        <div className="flex">
                            <input type="color" value='#ffffff' className="mr-4 w-5 " />
                            <input type="color" value='#ff0000' className="mr-4 w-5" />
                            <input type="color" value='#882557' className="mr-4 w-5" />
                            <input type="color" value='#fff894' className="mr-4 w-5" />
                            <input type="color" value='#545a65' className="mr-4 w-5" />

                        </div>
                    </div>
                </div>
                {/* {isLoading ? (
        <Loader />
    ) : cartItems?.length ? (
        cartItems?.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem?._id}></CartItem>
        ))
    ) : (
        <EmptyCart />
    )} */}
            </div>
            <div className="flex">
                <input type="file" accept="image/*" className="tori-btn-secondary disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white w-[50%]" />
                <div>
                    <img src={placehoderImage} alt="placeholder" className="w-[120px]" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail