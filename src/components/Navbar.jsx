import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex w-[75%] py-5  mx-auto  text-[var(--color-purple)] justify-center ">
      <div className="w-[65%]">
        <h1 className="text-[40px] font-custom1">OnCampus</h1>
      </div>
      <div className="w-[35%]   flex space-x-20 items-center justify-center text-[20px]">
        <NavLink className="text-black" to="/login">
          Login
        </NavLink>
        <NavLink
          className="bg-[#D8E3F4] px-5 py-2 rounded-[16px]"
          to="/sign-up"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
