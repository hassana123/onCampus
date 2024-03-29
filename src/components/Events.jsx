import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import bluearrow from "../assets/arrowblue.svg";
import arrow from "../assets/angle.svg";

const Events = ({ pageTitle }) => {
  const eventData = useSelector((state) => state.filter.eventData);
  const searchResults = useSelector((state) => state.filter.searchResults);
  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const selectedLocation = useSelector(
    (state) => state.filter.selectedLocation
  );

  console.log(searchResults);
  return (
    <section className="w-[85%] mx-auto">
      <div className="md:flex my-10">
        <h1 className="w-[70%] font-bold md:text-[25px]">{pageTitle}</h1>
        <div className=" md:flex  md:space-x-10">
          <button className="bg-[#C1D7F9]  block px-3  rounded-md">
            Event Type <img className="inline-block " src={bluearrow} alt="" />
          </button>
          <button className="bg-[#C1D7F9] my-5 md:my-0 px-3 block rounded-md">
            Campus <img className="inline-block " src={bluearrow} alt="" />
          </button>
        </div>
      </div>
      <div className="md:grid grid-cols-3 my-10 gap-5  rounded-md">
        {(searchResults.length > 0 || searchTerm !== ""
          ? searchResults
          : eventData
        ).map((event, index) => (
          <NavLink
            key={index}
            className=""
            to={`/event-details/${event.eventId}`}
          >
            <div className="bg-white relative rounded-md" key={index}>
              <img
                className="w-[100%]"
                src={event.eventFlyer}
                alt="Event Flyer"
              />
              <div className="md:flex my-10 mx-5 gap-5">
                <div className="text-[19px] text-center ">
                  <p className="text-[#189AE6]  my-5">{event.eventMonth}</p>
                  <p className="">{event.eventDate}</p>
                </div>
                <div className="">
                  <h2 className="my-5 text-[16px] font-bold">
                    {event.eventHeader}
                  </h2>
                  <p className="text-[13px]">{event.eventDesc}</p>
                </div>
              </div>
              <span className="absolute top-2 font-bold text-[20px] bg-white px-5 left-5 rounded-lg py-2 ">
                {event.eventStatus}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
      <div>
        <button className="bg-[#C1D7F9]  py-2  px-5 text-center mx-auto rounded text-[var(--color-dark)] block ">
          Load More Events <img className="w-[15%] inline" src={arrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Events;
