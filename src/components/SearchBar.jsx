import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  setSelectedLocation,
  performSearch,
} from "../data/filterSlice";

import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
const SearchBar = ({ bgColor, textColor }) => {
  const [showLocations, setShowLocations] = useState(false);
  const eventData = useSelector((state) => state.filter.eventData);

  const dispatch = useDispatch();
  const { searchTerm, selectedLocation } = useSelector((state) => state.filter);
  console.log(selectedLocation, searchTerm);
  const handleSearchTermChange = (val) => {
    dispatch(setSearchTerm(val));
  };
  const handleLocationChange = (location) => {
    dispatch(setSelectedLocation(location));
    setShowLocations(false);
  };

  const handleSearch = () => {
    dispatch(performSearch({ searchTerm, selectedLocation }));
  };

  return (
    <section
      className={`items-center px-2  md:gap-0 justify-between  py-4 md:px-10 mt-[-25px] rounded-[15px]  flex text-${textColor} bg-[${bgColor}] md:w-[85%] w-[95%] mx-auto`}
    >
      <div className="md:flex md:space-x-20 md:w-[90%]">
        <div className="">
          <p>Looking For</p>
          <input
            className="bg-transparent py-1 border-b border-gray-400"
            type="text"
            placeholder="Web Development Class"
            value={searchTerm}
            onChange={(e) => {
              handleSearchTermChange(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <div>
          <p>in</p>
          <div className="relative">
            <input
              className="text-white py-1 bg-transparent border-b border-gray-400"
              type="text"
              placeholder="Select Location"
              value={selectedLocation}
              readOnly={true}
              onClick={() => setShowLocations(!showLocations)}
            />
            <img
              className="w-[15%] cursor-pointer  absolute top-0  right-[-6%]"
              src={arrow}
              onClick={() => setShowLocations(!showLocations)}
              alt=""
            />
            {showLocations && (
              <select
                className="text-black z-[6] absolute bg-white py-2 border border-gray-400 top-0 left-0 rounded-[5px]  w-full"
                onChange={(e) => handleLocationChange(e.target.value)}
                value={selectedLocation}
              >
                {eventData.map((location, index) => (
                  <option key={index} value={location.eventLocation}>
                    {location.eventLocation}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="bg-white py-2 px-5 rounded-[10px]"
      >
        <img className=" mx-auto" src={search} alt="" />
      </button>
    </section>
  );
};

export default SearchBar;
