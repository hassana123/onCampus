import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  setSelectedLocation,
  performSearch,
} from "../data/filterSlice";

import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
const SearchBar = () => {
  const [showLocations, setShowLocations] = useState(false);
  const eventData = useSelector((state) => state.event.eventData);

  const dispatch = useDispatch();
  const { searchTerm, selectedLocation } = useSelector((state) => state.filter);

  const handleSearchTermChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  const handleLocationChange = (location) => {
    dispatch(setSelectedLocation(location));
    setShowLocations(false);
  };

  const handleSearch = () => {
    dispatch(performSearch({ searchTerm, selectedLocation }));
  };
  // const locations = [
  //   "Bayero University Kano",
  //   "Baba Ahmed",
  //   "AKTH",
  //   "KUST Wudil",
  // ];
  return (
    <section className="items-center  py-2 px-20 mt-[-25px] rounded-[15px] text-white flex   bg-[var(--color-dark)] w-[85%] mx-auto">
      <div className="flex space-x-20 w-[90%]">
        <div className="">
          <p>Looking For</p>
          <input
            className="bg-transparent py-1 border-b border-gray-400"
            type="text"
            placeholder="Web Development Class"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div>
          <p>in</p>
          <div className="relative">
            <input
              className=" text-white py-1 bg-transparent border-b border-gray-400"
              type="text"
              placeholder={selectedLocation}
              value={selectedLocation}
              onChange={handleLocationChange}
            />
            <img
              className="w-[15%] cursor-pointer  absolute top-0  right-[-6%]"
              src={arrow}
              onClick={() => setShowLocations(!showLocations)}
              alt=""
            />
            {showLocations && (
              <div className="text-black z-[6] absolute bg-white py-1 border border-gray-400 rounded-[5px] mt-2">
                {eventData.map((location, index) => (
                  <input
                    key={index}
                    type="text"
                    className="cursor-pointer text-black  bg-white py-2 px-4 hover:bg-gray-200 w-full border-none outline-none focus:outline-none"
                    value={location.eventLocation}
                    onClick={() => handleLocationChange(location.eventLocation)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button className="bg-white py-2 px-5 rounded-[10px]">
        <img className=" mx-auto" src={search} alt="" />
      </button>
    </section>
  );
};

export default SearchBar;
