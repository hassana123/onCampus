import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsername,
  setPassword,
  setRememberMe,
  resetForm,
} from "../data/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { username, password, rememberMe } = useSelector((state) => state.auth);
  console.log(username, password, rememberMe);
  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleRememberMeChange = () => {
    dispatch(setRememberMe(!rememberMe));
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <section className="text-[16px] bg-custom-image flex items-center justify-center  bg-cover w-[100%] h-screen">
      <div className="w-[50%] mx-auto max-[500px] ">
        <div className="text-center">
          <h1 className=" text-[40px] my-1 font-bold text-[var(--color-purple)]">
            OnCampus
          </h1>
          <p className="my-1 font-bold text-[22px]">Log In</p>
          <span className="">
            Not a member yet?
            <NavLink className="mx-3  text-[var(--color-purple)]" to="/sign-up">
              Sign Up
            </NavLink>
          </span>
        </div>
        <form onSubmit={handleLoginFormSubmit} className="w-[65%] mx-auto">
          <label className="block my-3 font-bold" htmlFor="">
            Username
          </label>
          <input
            className=" bg-transparent border w-[100%] "
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />

          <div className="grid grid-cols-2 space-x-[60px]  my-3  ">
            <label className="font-bold" htmlFor="">
              Password
            </label>
            <NavLink
              to="/recover "
              className="text-[13px] text-[var(--color-purple)]"
            >
              Forgot password
            </NavLink>
          </div>
          <input
            className=" bg-transparent border   w-[100%]"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="flex justify-center my-5 gap-2">
            <input
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className=""
              type="checkbox"
              name="checkbox"
              id=""
            />
            <span>Keep me signed in</span>
          </div>
          <div className="w-[100%] mx-auto">
            <button
              type="submit"
              className="text-[var(--color-purple)] bg-[#D8E3F4]  py-2  w-full rounded font-bold"
            >
              Log In{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
