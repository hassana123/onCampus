import React from "react";
import bell from "../assets/notification.svg";
import user from "../assets/user.png";
const DashNav = () => {
  return (
    <nav className="text-black py-2 mx-auto grid grid-cols-2 mb-10  w-[85%]">
      <h1 className="text-[45px] text-[var(--color-purple)]">OnCampus</h1>

      <div className=" mr-3 mx-auto flex gap-10 items-center">
        <img className="cursor-pointer" src={bell} alt="" />
        <img
          className="rounded-[50%] cursor-pointer h-[52px] w-[50px]"
          src={user}
          alt=""
        />
      </div>
    </nav>
  );
};

export default DashNav;
