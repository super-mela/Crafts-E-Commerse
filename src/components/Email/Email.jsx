import React, { useState } from "react";
import contactus from "../../assets/contact-us.webp"
import ReCAPTCHA from 'react-google-recaptcha';
import axios from '../../AxiosInstance/AxiosInstance'
import toast from "react-hot-toast";
// import "./ContactUs.css";

const Email = () => {
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
        // Submit the form data to the server
        axios
            .post(`/feedback`, email)
            .then((res) => {
                if (res?.data) {
                    toast.success(res.data.msg);
                    // setProccessing(false)
                    //  successModal.current.checked = true;
                }
            })
            .catch((err) => {
                toast.error("Something went wrong");
            });
    };


    return (
        <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            {/* Contact form */}
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', position: "relative", maxWidth: '100%' }}>
                    <span style={{ boxSizing: 'border-box', display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27874%27%20height=%27874%27/%3e"
                            style={{ display: "block", maxWidth: '100%', width: "initial", height: "initial", background: "none", opacity: 1, border: '0px', margin: '0px', padding: '0px' }} />
                    </span>
                    <img
                        alt="logo"
                        src={contactus}
                        decoding="async"
                        data-nimg="intrinsic"
                        className="block w-auto"
                        // srcset="/_next/image?url=%2Fcontact-us.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fcontact-us.png&amp;w=1920&amp;q=75 2x"
                        style={{ position: "absolute", inset: '0px', boxSizing: 'border-box', padding: '0px', border: "none", margin: "auto", display: "block", width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                </span>
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                <form className="w-full mx-auto flex flex-col justify-center" onSubmit={handleSubmit}>
                    <div className="mb-12">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                            For any support just send your query
                        </h3>
                        <p className="text-base opacity-90 leading-7">
                            Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                            <div className="w-full md:w-1/2 ">
                                <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Name</label>
                                <div className="relative">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Inter Your Name"
                                        required
                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                        value={email.name}
                                        onChange={(e) => handlChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                                <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Email</label>
                                <div className="relative">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Inter Your Email"
                                        required
                                        className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                        value={email.email}
                                        onChange={(e) => handlChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative">
                            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Subject</label>
                            <div className="relative">
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Inter Your Subject"
                                    required
                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                    value={email.subject}
                                    onChange={(e) => handlChange(e)}
                                />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Message</label>
                            <textarea
                                name="message"
                                className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                                autoComplete="off"
                                spellCheck="false"
                                rows="4"
                                required
                                value={email.message}
                                onChange={(e) => handlChange(e)}
                                placeholder="Write your message here">
                            </textarea>
                        </div>
                        <ReCAPTCHA sitekey='6LemOf0kAAAAAL4YxfGsLroOMIaGEVhhEfH1oIH4' onChange={handleCaptchaChange} />
                        <div className="relative">
                            <button type="submit" disabled={!captcha} data-variant="flat" className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-primary text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Email;
