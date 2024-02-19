import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDisplayName,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  resetForm,
} from "../data/authSlice";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const { displayName, username, email, password, confirmPassword } =
    useSelector((state) => state.auth);
  console.log(displayName, username, email, password, confirmPassword);

  const handleDisplayNameChange = (e) => {
    dispatch(setDisplayName(e.target.value));
  };

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(setConfirmPassword(e.target.value));
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    dispatch(resetForm());
  };
  return (
    <section className="text-[16px] bg-custom-image flex items-center justify-center  bg-cover w-[100%] h-screen">
      <div className="w-[70%] mx-auto max-[500px] ">
        <div className="text-center">
          <h1 className=" text-[40px] my-1 font-bold text-[var(--color-purple)]">
            OnCampus
          </h1>
          <p className="my-1 font-bold text-[22px]"> Sign Up</p>
          <span>
            Already a member?
            <NavLink className="mx-3  text-[var(--color-purple)] " to="/login">
              Login
            </NavLink>
          </span>
        </div>
        <form
          onSubmit={handleSignUpFormSubmit}
          className="my-10 w-[85%] mx-auto"
          action=""
        >
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block my-2 font-bold" htmlFor="">
                Display Name
              </label>
              <input
                className=" bg-transparent border w-[100%] "
                type="text"
                name="name"
                id=""
                value={displayName}
                onChange={handleDisplayNameChange}
              />
            </div>
            <div>
              <label className="block my-2 font-bold" htmlFor="">
                Username
              </label>
              <input
                className=" bg-transparent border w-[100%] "
                type="text"
                name=""
                id=""
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label className="block my-2 font-bold" htmlFor="">
                Email Address
              </label>
              <input
                className=" bg-transparent border w-[100%] "
                type="email"
                name=""
                id=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label className="block my-2 font-bold" htmlFor="">
                Choose a password
              </label>
              <input
                className=" bg-transparent border w-[100%] "
                type="password"
                name=""
                id=""
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <label className="block my-2 font-bold" htmlFor="">
                {" "}
                Re-enter Your Password
              </label>
              <input
                className=" bg-transparent border w-[100%] "
                type="password"
                name=""
                id=""
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>
          <div className="flex justify-center my-10 items-center">
            <button
              className="text-[var(--color-purple)] bg-[#D8E3F4]  py-2  px-10 rounded font-bold"
              type="submit"
            >
              Sign-up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
