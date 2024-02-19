import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import image from "../assets/header.png";
const Hero = () => {
  return (
    <>
      <section className="w-[90%] space-x-10 items-center rounded-md justify-center flex mx-auto py-20 bg-custom-image">
        <div className="w-[40%]">
          <h1 className="text-[36px] my-5 font-700">
            OnCampus— Connecting Campuses. Turning interests to
            <span className="text-[var(--color-purple)]"> friendships</span>.
          </h1>
          <p className="text-[16px] my-5 mb-[50px]">
            Your new community is waiting for you. Hundreds of students have
            chosen OnCampus to make real connections over shared interests.
            Start a group today.
          </p>
          <NavLink
            className="text-[16px] px-10 py-5 rounded text-white bg-[var(--color-dark)]"
            to=""
          >
            Start a Community
          </NavLink>
        </div>
        <img className="w-[30%]" src={image} alt="" />
      </section>
      <SearchBar />
    </>
  );
};

export default Hero;
