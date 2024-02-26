import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsername,
  setPassword,
  setRememberMe,
  resetForm,
} from "../data/authSlice";

const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  //console.log(JSON.parse(localStorage.getItem("userDetails")));
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    // Get user details from local storage
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    // Basic validation checks
    if (!username || !password) {
      setError("Both username and password are required");
      return;
    }

    // Check if entered username and password match stored details
    setLoading(true);
    if (
      storedUserDetails &&
      username === storedUserDetails.username &&
      password === storedUserDetails.password
    ) {
      resetForm();
      // Navigate to user dashboard (you can replace this with your actual route)
      navigate("/user-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="text-[16px] bg-custom-image flex items-center justify-center  bg-cover w-[100%] h-screen">
      <div className="md:w-[50%] mx-auto max-[500px] ">
        <div className="text-center">
          <h1 className=" font-custom1 text-[40px] my-1 font-bold text-[var(--color-purple)]">
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
        <form
          onSubmit={handleLoginFormSubmit}
          className="md:w-[65%] w-[95%] mx-auto"
        >
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
              required
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
              {loading ? "processing" : " Log In"}
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

export default Login;
