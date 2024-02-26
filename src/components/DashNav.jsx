import React, { useState } from "react";
import bell from "../assets/notification.svg";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import community from "../assets/friends.png";
const DashNav = () => {
  const [showprofile, setShowProfile] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const toggleProfile = () => {
    setShowProfile(!showprofile);
  };
  return (
    <>
      <nav className="text-black py-2 mx-auto md:grid md:grid-cols-2 mb-20 justify-between flex items-center  w-[85%]">
        <h1 className="font-custom1 text-[20px] md:text-[45px] text-[var(--color-purple)]">
          OnCampus
        </h1>

        <div className=" mr-5 mx-auto flex gap-5 md:gap-10">
          <p className="text-center">
            <img
              className="cursor-pointer mx-auto mt-[15px] md:mt-0 w-[70%] mt-5 mb-1"
              src={bell}
              alt=""
            />
            <span className="hidden md:block">Notification</span>
          </p>
          <img
            className="rounded-[50%] cursor-pointer md:w-[65px] md:h-[65px] md:mt-[15px] h-[52px] w-[50px]"
            src={user}
            onClick={toggleProfile}
            alt=""
          />
        </div>
      </nav>
      {showprofile ? (
        <div className="z-[10] absolute text-[#1E1E1E] right-20 top-[15%] px-5 rounded-lg bg-[#D8E3F4] py-10">
          <div className="mb-10 mt-5">
            <h1 className="font-bold my-1">{userDetails?.displayName}</h1>
            <p className="text-[#777777] "> {userDetails?.email}</p>
          </div>
          <div>
            <h1 className="font-bold my-5"> Community Pages</h1>
            <NavLink
              to="/community-page"
              className="flex items-center gap-5 mb-10"
            >
              <img className=" cursor-pointer" src={community} alt="" />
              <p className="text-[#777777]  cursor-pointer">
                Bayer University Business Club
              </p>
            </NavLink>
            <div className="grid gap-3 font-bold">
              <NavLink to="/new-community">Create a Commmunity</NavLink>
              <NavLink to="edit-profile">Edit Profile</NavLink>
              <NavLink to="logout">Logout</NavLink>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DashNav;
