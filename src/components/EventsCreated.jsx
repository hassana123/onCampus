import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import vector from "../assets/purple.svg";
import { useSelector } from "react-redux";

const EventsCreated = () => {
  const eventData = useSelector((state) => state.filter.eventData);
  const slice = eventData.slice(0, 3);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDeleteClick = (event) => {
    setSelectedEvent(event);
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDelete = () => {
    // Perform delete logic here using selectedEvent
    console.log("Deleting event:", selectedEvent);

    // After deletion logic, show the success overlay
    setShowDeleteSuccess(true);

    // Close the confirmation modal
    setShowDeleteConfirmation(false);
  };

  useEffect(() => {
    // Use useEffect to automatically hide the success overlay after 5 seconds
    let timeoutId;
    if (showDeleteSuccess) {
      timeoutId = setTimeout(() => {
        setShowDeleteSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [showDeleteSuccess]);
  return (
    <>
      <section className="w-[90%] mx-auto my-10 items-center text-[#212121] text-[16px]">
        <h1 className="text-[20px] font-bold ">Your Events</h1>
        {slice.map((event, index) => (
          <section key={index} className="flex gap-10 my-10">
            <div className="flex gap-7 w-[50%]">
              <img
                className="w-[25%] rounded-md"
                src={event?.eventFlyer}
                alt=""
              />
              <div className="">
                <h1 className="font-bold my-1">{event?.eventHeader}</h1>
                <span className="text-[#636262] text-[13px]">
                  {event?.eventLocation}
                </span>
                <p className="font-bold my-2">
                  {event?.eventMonth} {event?.eventDate}, 2024
                </p>
                <p className="font-bold">{event?.eventTime}</p>
              </div>
            </div>
            <h1 className="font-bold">
              Registration: <span className=" mx-2 text-[#189AE6]">56</span>
            </h1>

            <div className=" text-black  mx-auto">
              <button
                onClick={() => handleDeleteClick(event)}
                className="bg-[#F56262] px-5  py-2  mx-5 rounded-md"
              >
                Delete
              </button>
              <NavLink
                to={{
                  pathname: `/update-event/${event.eventId}`, // Assuming event.id is the unique identifier
                  state: {
                    eventId: event.eventId,
                    initialData: event,
                  },
                }}
                className="bg-[#8EB7F6] px-5 py-2 mx-5 rounded-md"
              >
                Update
              </NavLink>
            </div>
          </section>
        ))}
        <button className="flex  items-center text-[22px] gap-3 mx-auto text-[var(--color-dark)] bg-[#C1D7F9] py-2  px-10 rounded-lg">
          Load more Events <img className="w-[8%]" src={vector} alt="" />
        </button>
        <div className="flex justify-center items-center">
          <NavLink
            className="text-[22px] bg-[var(--color-dark)] text-white my-4 py-2 px-10 inline-block  rounded-lg "
            to="/new-event"
          >
            Create a new event
          </NavLink>
        </div>
      </section>
      {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex items-center justify-center">
          <section className="w-[60%] py-10 mx-auto bg-[#D1E1FB] p-8 rounded-md">
            <h1 className="font-bold mb-4 text-[25px]">
              Are you sure you want to delete this event
            </h1>
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="font-bold my-1">{selectedEvent?.eventHeader}</h1>
                <span className="text-[#636262] text-[13px]">
                  {selectedEvent?.eventLocation}
                </span>
                <p className="font-bold my-2">
                  {selectedEvent?.eventMonth} {selectedEvent?.eventDate}, 2024
                </p>
                <p className="font-bold">{selectedEvent?.eventTime}</p>
              </div>
              <div>
                <button
                  className="bg-[#F56262] px-5 py-2 mx-5 rounded-md"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="bg-[#8EB7F6] px-5 py-2 mx-5 rounded-md"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
      {showDeleteSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1000] flex items-center justify-center">
          <div className="bg-[#D1E1FB] py-20  w-[60%]  mx-auto text-center rounded-md">
            <h1 className="font-bold text-[25px] mb-4">
              Event deleted successfully
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCreated;
