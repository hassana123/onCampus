import React from "react";
import { useSelector } from "react-redux";

const CommunityEvents = () => {
  const eventData = useSelector((state) => state.filter.eventData);
  const topThree = eventData.slice(0, 3);
  console.log(eventData);
  return (
    <section className="w-[85%] mb-20 mx-auto my-5">
      <h1 className="font-bold text-[20px]">Your Next Events</h1>
      <div>
        {topThree.map((event, index) => (
          <div
            className="md:grid text-[13px] md:grid-cols-5 mb-10 mt-5  md:items-center "
            key={index}
          >
            <img className="" src={event.eventFlyer} alt="" />
            <div className=" md:w-[120%] md:ml-10  ">
              <h1 className="text-[17px] font-bold my-5">
                {event.eventHeader}
              </h1>
              <p>{event.eventDesc}</p>
            </div>

            <div className=" text-[18px] mr-0 mx-auto text-center">
              <p className="text-[#189AE6]">{event.eventMonth}</p>
              <p className="font-bold"> {event.eventDate}</p>
            </div>
            <p className="font-bold mx-auto">9:00 - 12:00</p>
            <p className="mx-auto">{event.eventLocation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityEvents;
