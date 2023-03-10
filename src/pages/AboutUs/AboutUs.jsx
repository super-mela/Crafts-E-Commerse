import React from "react";
import { Helmet } from "react-helmet-async";
import PageBanner from "../../components/PageBanner/PageBanner";
import Founders from "./Founders/Founers";
import spoon from '../../assets/spoon.png'
import weddinggift from '../../assets/wedding-gift.png'
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image (3).webp'
import image4 from '../../assets/image (4).webp'
import image5 from '../../assets/image (5).webp'
import image6 from '../../assets/image (6).webp'


const AboutUs = () => {
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
            <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">Welcome to our Crafts Gift</h3>
            <div className="mt-3 text-base opacity-90 leading-7">
              <p>
                Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or
                "organic" sources before effective scenarios. Progressively incentivize state of the art applications
                for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas.
                Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
              </p>
              <p>
                Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide
                experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures.
                Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic
                theme areas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
              <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">10K</span>
                <h4 className="text-lg font-serif font-bold mb-1">Listed Products</h4>
                <p className="mb-0 opacity-90 leading-7">Dynamically morph team driven partnerships after vertical. </p>
              </div>
              <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">8K</span>
                <h4 className="text-lg font-serif font-bold mb-1">Lovely Customer</h4>
                <p className="mb-0 opacity-90 leading-7">Competently productize virtual models without performance. </p>
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
                src={weddinggift}
                decoding="async" data-nimg="intrinsic"
                srcset={`${weddinggift} w=108 q=75 1x, ${weddinggift}w=1920 q=75 2x`}
                style={{ position: "absolute", inset: '0px', boxSizing: 'border-box', padding: '0px', border: "none", margin: "auto", display: "block", width: '0px', height: '0px', minWidth: '100%', maxWidth: '100', minHeight: '100%', maxHeight: '100%' }} />
            </span>
          </div>
        </div>
        <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
          <p>
            Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or
            "organic" sources before effective scenarios. Progressively incentivize state of the art applications
            for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge
            schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
            Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded
            array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7
            functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely
            maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web
            services for e-business imperatives.
          </p>
          <p>
            Appropriately visualize market-driven data before one-to-one scenarios.
            Collaboratively productize multifunctional ROI through intuitive supply chains.
            Enthusiastically seize revolutionary value and process-centric services.
            Competently harness intuitive information after interoperable markets.
            Interactively revolutionize future-proof value before granular sources.
            Dynamically embrace diverse customer service and installed base paradigms.
            Credibly seize enterprise-wide experiences for end-to-end data. Professionally
            brand flexible alignments and cost effective architectures. Enthusiastically
            incentivize seamless communities with seamlessly facilitate revolutionary
            metrics with strategic theme areas.
          </p>
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
              src={spoon}
              decoding="async"
              data-nimg="intrinsic"
              className="block rounded-lg"
              srcset={`${spoon}w=1920 q=75 1x, ${spoon}w=3840 q=75 2x`}
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
