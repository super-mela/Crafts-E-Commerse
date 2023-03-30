import React, { useState, useContext } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import axios from '../../AxiosInstance/AxiosInstance'
import toast from "react-hot-toast";

const EmailModal = () => {
  const { user } = useContext(AuthContext);
  const [compose, setCompose] = useState({ name: user.displayName, email: user.email, subject: "", message: "" });
  const [captcha, setCaptcha] = useState("");

  const handlChange = (event) => {
    setCompose({ ...compose, [event.target.name]: event.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    compose.name = user?.displayName
    compose.email = user?.email
    // Submit the form data to the server
    axios
      .post(`/customEmail?email=${user?.email}`, compose)
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
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="email-modal" className="modal-toggle" />
      <div className="modal bg-black/80 text-gray-700">
        <div className="modal-box lg:w-9/12 max-w-5xl relative lg:p-7 p-2 rounded-sm">
          <label
            htmlFor="email-modal"
            className="absolute right-3 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>
          <div className="px-0  mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            {/* Contact form */}
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                  For any support just send your query
                </h3>
                <p className="text-base opacity-90 leading-7">
                  Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.
                </p>
              </div>
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form className="w-full mx-auto flex flex-col justify-center" onSubmit={handleSubmit}>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Name</label>
                      <div className="relative">
                        <input
                          readOnly
                          name="name"
                          type="text"
                          placeholder="Inter Your Name"
                          // required
                          className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                          value={user.displayName}
                        // onChange={(e) => handlChange(e)}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Email</label>
                      <div className="relative">
                        <input
                          readOnly
                          name="email"
                          type="email"
                          placeholder="Inter Your Email"
                          // required
                          className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                          value={user.email}
                        // onChange={(e) => handlChange(e)}
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
                        value={compose.subject}
                        onChange={(e) => handlChange(e)}
                      />
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Message</label>
                    <textarea
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autocomplete="off"
                      spellcheck="false"
                      rows="4"
                      required
                      value={compose.message}
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
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
