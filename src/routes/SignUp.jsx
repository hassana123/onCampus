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
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    // Basic validation checks
    if (!displayName || !username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      setLoading(true);
    }

    const userDetails = {
      displayName,
      username,
      email,
      password,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    dispatch(resetForm());
    setError(null);
    navigate("/user-dashboard");
    dispatch(resetForm());
  };
  return (
    <section className="text-[16px] bg-custom-image flex  items-center md:justify-center  bg-cover w-[100%] h-screen">
      <div className="md:w-[70%] mx-auto md:max-[500px] ">
        <div className="text-center">
          <h1 className="font-custom1 text-[40px] my-1 font-bold text-[var(--color-purple)]">
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
          className="my-10 md:w-[85%] w-[95%] mx-auto"
          action=""
        >
          <div className="md:grid md:grid-cols-2 md:gap-10">
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
              {loading ? "Processing" : "Sign Up"}
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
