import { NavLink } from "react-router-dom";
import image from "../assets/header.png";
const Hero = () => {
  return (
    <>
      <section className="md:w-[90%] w-[95%] space-x-10 items-center rounded-md justify-center md:flex mx-auto py-20 bg-custom-image">
        <img className="md:hidden w-[70%] mx-auto" src={image} alt="" />
        <div className="md:w-[40%]">
          <h1 className="md:text-[36px] text-[18px] my-5 font-700">
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
        <img className="w-[30%] hidden md:block" src={image} alt="" />
      </section>
    </>
  );
};

export default Hero;
