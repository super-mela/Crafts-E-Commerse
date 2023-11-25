import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PageBanner from "../../components/PageBanner/PageBanner";
import Email from "../../components/Email/Email";
import contactus from "../../assets/contact-us.webp"
import ReCAPTCHA from 'react-google-recaptcha';

import "./ContactUs.css";

const ContactUs = () => {
  const position = [51.505, -0.09];
  const [email, setEmail] = useState({ name: "", email: "", subject: "", message: "" });
  const [captcha, setCaptcha] = useState("");

  const handlChange = (event) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Captcha:', captcha);
    // Submit the form data to the server
  };


  return (
    <div>
      <Helmet>
        <title>Crafts - Contact</title>
        <meta
          name="description"
          content="Contact information of the authority."
        />
      </Helmet>
      <PageBanner title={"Contact Us"} />
      <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10 text-gray-800">
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
          <div className="border p-10 rounded-lg text-center">
            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
              <svg className="stroke-primary" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                </path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <h5 className="text-xl mb-2 font-bold">Email Us</h5>
            <p className="mb-0 text-base opacity-90 leading-7">
              <a href="mailto:craftsgift@gmail.com" className="text-emerald-500">craftsgift@gmail.com</a>
              Interactively grow empowered for process-centric total linkage.
            </p>
          </div>
          <div className="border p-10 rounded-lg text-center">
            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
              <svg className="stroke-primary" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg>
            </span>
            <h5 className="text-xl mb-2 font-bold">Call Us</h5>
            <p className="mb-0 text-base opacity-90 leading-7">
              <a href="tel:029-00124667" className="text-emerald-500">029-00124667</a>
              Distinctively disseminate focused solutions clicks-and-mortar ministate.
            </p>
          </div>
          <div className="border p-10 rounded-lg text-center">
            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
              <svg className="stroke-primary" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3">
                </circle>
              </svg>
            </span>
            <h5 className="text-xl mb-2 font-bold">Location</h5>
            <p className="mb-0 text-base opacity-90 leading-7">
              Cecilia Chapman, 561-4535 Nulla LA, United States 96522
            </p>
          </div>
        </div>
        {/* Map */}
        <div className="mt-24">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{position}</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* Contact form */}
        <Email />
      </div>
    </div>
  );
};

export default ContactUs;
