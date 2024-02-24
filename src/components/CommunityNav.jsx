import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import community from "../assets/friends.png";
const CommunityNav = () => {
  const [showprofile, setShowProfile] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const toggleProfile = () => {
    setShowProfile(!showprofile);
  };
  return (
    <>
      <nav className="text-black py-2 mx-auto grid grid-cols-2 mb-20  w-[85%]">
        <h1 className="font-custom1 text-[45px] text-[var(--color-purple)]">
          OnCampus
        </h1>

        <div className=" mr-5 mx-auto flex gap-10 items-center">
          <p className="text-center">Bayero University Business Club</p>
          <img
            className="rounded-[50%] cursor-pointer h-[52px] w-[50px]"
            src={community}
            onClick={toggleProfile}
            alt=""
          />
        </div>
      </nav>
      {showprofile ? (
        <div className="z-[10] absolute text-[#1E1E1E] right-20 top-[15%] px-5 rounded-lg bg-[#D8E3F4] py-10">
          <div className="mb-10 mt-5 font-bold">
            <h1 className="my-3">
              Followers <span className="font-normal">500</span>
            </h1>
            <h1 className=" "> Update Community Profile</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CommunityNav;
