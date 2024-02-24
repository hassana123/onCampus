import React from "react";
import map from "../assets/map.svg";
import { topicTags } from "../data/Topics";
import gdg from "../assets/gdg.png";
const CommunityDetails = () => {
  const slice = topicTags.slice(0, 6);
  return (
    <>
      <section className="w-[90%] px-20 items-center rounded-md justify-center flex  gap-20 mx-auto py-20 bg-custom-image my-10">
        <img className="w-[50%] mx-auto" src={gdg} alt="" />
        <div className=" mx-auto">
          <h1 className="text-[36px] my-5 font-700">
            Google Developer Students Clubs, Bayero University Kano{" "}
          </h1>
          <p className="text-[16px] flex gap-2 my-5 mb-[50px]">
            <img src={map} alt="" />
            Bayero University, Kano Kano, Nigeria
          </p>
          <button className="text-[16px] px-10 py-5 rounded text-white bg-[var(--color-dark)]">
            Follow
          </button>
        </div>
      </section>
      <section className="w-[90%] gap-10 mx-auto flex items-center">
        <div className="w-[50%]">
          <h1 className="text-[23px] my-5 font-bold">Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolores ex saepe rem. Iure voluptatem ut non iusto nostrum illum? Ut
            doloremque, fuga officia repudiandae est aliquid provident,
            voluptate officiis, quaerat perferendis fugiat architecto
            blanditiis! Provident ipsum eaque ratione, commodi voluptatibus sint
            porro autem dolorem itaque! Rem qui neque consectetur!
          </p>
        </div>
        <div className="w-[40%] mx-auto mr-0">
          <h1 className="inline-block border-[var(--color-dark)] bg-[var(--color-dark)] text-white border-[1.5px] px-3 rounded-lg py-2 mx-1 my-1 ">
            Tags
          </h1>
          <br />
          {slice.map((tag, index) => (
            <button
              key={index}
              className="border-[var(--color-dark)]  text-[var(--color-dark)] border-[1.5px] px-3 rounded-lg py-2 mx-1 my-1 "
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunityDetails;
