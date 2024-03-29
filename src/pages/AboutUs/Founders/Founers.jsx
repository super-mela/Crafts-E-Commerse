import React from "react";

const API = process.env.REACT_APP_STATIC;

const Founders = ({ founders }) => {

    return (
        <div>
            {/* Founder of crafts gift */}
            <div className="bg-gray-50 lg:py-20 py-10 text-gray-800">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
                    <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                        <div className="max-w-2xl">
                            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">Our Founder</h3>
                            <p className="mt-2 md:mt-3 font-normal block text-base">
                                We’re impartial and independent, and every day we create distinctive, world-class reintermediate backend supply programmes.
                            </p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
                        {founders?.map((item, i) => (
                            <div className="max-w-sm" key={i}>
                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', position: "relative", maxWidth: '100%' }}>
                                    <span style={{ boxSizing: 'border-box', display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                        <img
                                            alt=""
                                            aria-hidden="true"
                                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27420%27%20height=%27420%27/%3e"
                                            style={{ display: "block", maxWidth: '100%', width: "initial;", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                                    </span>
                                    <img
                                        alt="logo"
                                        src={API + "aboutus/founders/" + item.founderfilename}
                                        decoding="async"
                                        data-nimg="intrinsic"
                                        className="block rounded-lg"
                                        //    srcset={`${image1}w=640 q=75 1x, ${image1}w=1080 q=75 2x`}
                                        style={{ position: "absolute", inset: '0px', boxSizing: 'border-box', padding: '0px', border: "none", margin: "auto", display: "block", width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                </span>
                                <div className="py-4">
                                    <h5 className="text-lg font-semibold font-serif">{item.name}</h5>
                                    <span className="opacity-75 text-sm">{item.proffession}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founders;
