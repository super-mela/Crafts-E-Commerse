import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import Required from "../../../components/Required/Required";
import ValidationError from "../../../components/ValidationError/ValidationError";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { fileinstace } from "../../../AxiosInstance/AxiosInstance";

const StaticPath = process.env.REACT_APP_STATIC;

const UpdateProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const { user, updateUser } = useContext(AuthContext);

  const formData = new FormData();
  console.log(user)
  const handleUpdateProfile = (d) => {

    //   Upload Image
    formData.append("file", d?.photoURL[0], user?.uid);

    fileinstace
      .post(`/profileupdate?email=${user?.email}`, formData)
      .then((res) => {
        if (res?.data?.success) {
          const userData = {
            displayName: d.username,
            photoURL: StaticPath + "profile/" + res.data.url,
            phoneNumber: d.phone,
          };
          console.log(userData)
          updateUserData(userData);
        }
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });

    // axios({
    //   method: "post",
    //   url: `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_Image_Host_API}`,
    //   data: formData,
    // })
    //   .then((res) => {
    //     if (res?.data?.success) {
    //       const userData = {
    //         displayName: d.username,
    //         photoURL: res.data.data.url,
    //         phoneNumber: d.phone,
    //       };
    //       console.log(userData);
    //       updateUserData(userData);
    //     }
    //   })
    //   .catch((error) => console.error(error));
  };

  const updateUserData = (data) => {
    updateUser(data)
      .then((res) => toast.success("Profile Updated!"))
      .catch((err) => {
        console.error(err);
        return toast.error(err.message);
      });
  };

  return (
    <div className="bg-white w-full flex flex-col gap-5 p-5">
      <Helmet>
        <title>Crafts - Dashboard</title>
        <meta
          name="description"
          content="Place order by confirming payment and checkout."
        />
      </Helmet>
      <h4 className="text-base text-gray-700 font-semibold leading-none">
        Update Profile
      </h4>
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="lg:w-[80%] mx-auto border rounded-md p-5 flex flex-col gap-3 "
      >
        {/* Email */}
        <div>
          <label htmlFor="firstname" className="tori-label">
            Email <Required />
          </label>
          <div className="tori-input-wrapper">
            <MdEmail />
            <input
              readOnly
              type="email"
              defaultValue={user?.email}
              className="tori-input border-none"
              {...register("email")}
            />
          </div>
        </div>

        {/* name */}
        <div>
          <label htmlFor="firstname" className="tori-label">
            User Name <Required />
          </label>
          <div className="tori-input-wrapper">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="tori-input border-none"
              {...register("username")}
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="firstname" className="tori-label">
            Phone Number <Required />
          </label>
          <div className="tori-input-wrapper">
            <BiPhoneCall />
            <input
              type="text"
              defaultValue={user?.phoneNumber}
              placeholder="Your Phone Number"
              className="tori-input border-none"
              {...register("phone", {
                required: "Phone number is required!",
              })}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                  <ValidationError
                    key={type}
                    message={message}
                  ></ValidationError>
                ))
                : null;
            }}
          />
        </div>

        {/* Image */}
        <div>
          <label htmlFor="firstname" className="tori-label">
            Image <Required />
          </label>
          <div className="tori-input-wrapper">
            <HiOutlinePhotograph />
            <input
              type="file"
              placeholder="Your Photo"
              className="tori-input border-none"
              {...register("photoURL", {
                required: "Photo is required!",
              })}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="photoURL"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                  <ValidationError
                    key={type}
                    message={message}
                  ></ValidationError>
                ))
                : null;
            }}
          />
        </div>

        <div>
          <button type="submit" className="tori-btn-secondary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
