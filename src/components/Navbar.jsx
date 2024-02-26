import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex md:w-[85%] justify-between w-[95%] py-5 mx-auto text-[var(--color-purple)] items-center">
      <div className="md:w-[65%]">
        <h1 className="md:text-[40px] text-[20px] font-custom1">OnCampus</h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className=" focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen
            ? " absolute bg-white right-0 top-0 w-[50%] py-5 px-5"
            : "hidden"
        } md:w-[35%] md:flex md:space-x-20 items-center justify-center text-[20px]`}
      >
        <button onClick={toggleMenu} className="md:hidden  focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        <NavLink
          className={`${
            isMenuOpen
              ? "block my-3 hover:text[var(--color-dark)] text-[var(--color-purple)]"
              : "text-black hover:text-[var(--color-purple)]"
          } `}
          to="/login"
          onClick={toggleMenu}
        >
          Login
        </NavLink>
        <NavLink
          className={`${
            isMenuOpen
              ? "block hover:text-[var(--color-dark)]"
              : "text-black bg-[#D8E3F4] hover:bg-transparent hover:text-[var(--color-dark)] hover:border border-[var(--color-dark)]  px-5 py-2 rounded-[16px]"
          } `}
          to="/sign-up"
          onClick={toggleMenu}
        >
          Sign Up
        </NavLink>
        {isMenuOpen ? <SearchBar /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
