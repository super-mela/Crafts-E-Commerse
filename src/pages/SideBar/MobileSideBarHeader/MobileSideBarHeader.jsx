import React, { useContext } from "react";
import { AiOutlineDoubleLeft, AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const MobileSideBarHeader = () => {
  const { user } = useContext(AuthContext)
  return (
    <div
      className={`bg-secondary px-3 py-1 fixed w-full top-0 left-0 text-black flex justify-between items-center`}
    >
      <button className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        {user?.photoURL ?
          <div className="flex justify-center mb-2">
            <img className="h-[20px] w-[20px] rounded-full" src={user?.photoURL} alt="profile" />
          </div>
          : <AiOutlineUser />}
      </button>

      <h3 className="font-semibold text-base leading-9 flex gap-2 items-center">
        Crafts Gift
      </h3>
      <label htmlFor="mobile-drawer">
        <AiOutlineDoubleLeft className="icon" />
      </label>
    </div>
  );
};

export default MobileSideBarHeader;
