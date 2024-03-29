import React from "react";
import fb from "../assets/Facebook.png";
import x from "../assets/TwitterX.png";
import ins from "../assets/Instagram.png";
const Footer = () => {
  return (
    <footer className="bottom-0 py-3  left-0 w-full bg-[var(--color-dark)] mt-[50px]  md:p-5  text-white">
      <div className="md:flex md:space-x-20 mx-10 mb-10 ">
        <div className="">
          <p className="font-bold my-3">your Account</p>
          <p className="my-2">sign in</p>
          <p className="my-2">help</p>
        </div>
        <div className="">
          <p className="font-bold my-3">Quick Links</p>
          <p>Event </p>
          <p>Topics</p>
          <p>Communties</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 md:gap-20">
        <div className="md:flex mx-5  my-3 md:my-0 md:mx-0 space-x-5">
          <p>@ 2023 OnCampus </p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex items-center  md:mx-0 mx-5 space-x-5">
          <p>Follow us</p>
          <img src={ins} alt="" />
          <img src={x} alt="" />
          <img src={fb} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
