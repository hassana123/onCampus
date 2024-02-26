import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../data/eventFormSlice";

import upload from "../assets/upload.svg";

const EventForm = ({ onSubmit, buttonText, initialValues }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.eventForm);
  console.log(formState);

  useEffect(() => {
    if (initialValues) {
      Object.entries(initialValues).forEach(([field, value]) => {
        dispatch(updateField({ field, value }));
      });

      if (initialValues.profilePicture) {
        setImagePreview(URL.createObjectURL(initialValues.profilePicture));
      }
    }
  }, [initialValues, dispatch]);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    dispatch(updateField({ field: "profilePicture", value: file }));
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form
      className="md:w-[80%] w-[95%] md:mx-10 mx-1 my-10 text-black"
      onSubmit={handleSubmit}
      action=""
    >
      <div className="my-10">
        <p className="font-bold md:text-[30px] text-[18px] my-5 text-[#212121]">
          Upload Your Event Picture
        </p>
        <div className="flex items-center gap-3">
          <img
            className=" cursor-pointer "
            onClick={handleUploadClick}
            src={upload}
            alt=""
          />
          <span
            onClick={handleUploadClick}
            className=" cursor-pointer #636262 font-semibold"
          >
            Upload
          </span>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
        </div>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Selected Preview"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
      </div>
      <div>
        <p className="font-bold md:text-[30px] text-[18px] my-5 text-[#212121]">
          Choose a name for your event
        </p>
        <span className="block">
          Choose a name that will give people a clear idea of what the event is
          about.
        </span>
        <textarea
          onChange={(e) => handleInputChange("eventName", e.target.value)}
          className="bg-transparent border-[#D9D9D9] w-[90%] border-[0.5px] my-2"
          name=""
          id=""
          cols=""
          rows="3"
        ></textarea>
      </div>
      <div>
        <p className="font-bold text-[18px]  md:text-[30px]  my-5 text-[#212121]">
          Describe Your Event
        </p>
        <span className="block">
          People will see this when we promote your event, but you’ll be able to
          update it later too
        </span>
        <textarea
          className="bg-transparent border-[#D9D9D9] w-[90%] border-[0.5px] my-2"
          name=""
          id=""
          cols=""
          rows="5"
          onChange={(e) =>
            handleInputChange("eventDescription", e.target.value)
          }
        ></textarea>
      </div>
      <div>
        <p className="font-bold md:text-[30px] text-[18px]  my-5 text-[#212121]">
          choose a venue for your Event
        </p>
        <span className="block">
          Choose a venue that will give people a clear idea of where the event
          is going to hold.
        </span>
        <textarea
          className="bg-transparent w-[90%] border-[#D9D9D9] border-[0.5px] my-2"
          name=""
          id=""
          cols=""
          rows="3"
          onChange={(e) => handleInputChange("eventVenue", e.target.value)}
        ></textarea>
      </div>
      <div>
        <p className="font-bold text-[18px] md:text-[30px] my-5 text-[#212121]">
          Choose a date and time for your Event
        </p>
        <span className="block">
          Choose a date and time that will give people a clear idea of when the
          event is going to hold.
        </span>
        <div className="md:flex md:gap-10 my-5">
          <div>
            <label className="font-bold mx-5 my-1 block ">
              <span>Select Date</span>
            </label>
            <input
              onChange={(e) => handleInputChange("eventDate", e.target.value)}
              type="date"
              id="datePicker"
              placeholder="select Date"
              className="cursor-pointer  bg-transparent outline-none   px-3 py-2  rounded-md gap-10  border-[#D9D9D9] border-[0.5px]"
            />
          </div>

          <div>
            <label htmlFor="startTime" className="block font-bold   mx-5 my-1">
              <span>Select Start Time</span>
            </label>

            <input
              onChange={(e) =>
                handleInputChange("eventStartTime", e.target.value)
              }
              className="cursor-pointer  bg-transparent outline-none   px-3 py-2  rounded-md gap-10  border-[#D9D9D9] border-[0.5px]"
              type="time"
              name=""
              id="startTime"
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block font-bold   mx-5 my-1">
              <span>Select End Time</span>
            </label>

            <input
              onChange={(e) =>
                handleInputChange("eventEndTime", e.target.value)
              }
              className="cursor-pointer    bg-transparent outline-none   px-3 py-2  rounded-md gap-10  border-[#D9D9D9] border-[0.5px]"
              type="time"
              name=""
              id="endTime"
            />
          </div>
        </div>
      </div>

      <button
        className="bg-[#C1D7F9]  block mx-auto text-[var(--color-dark)] font-semibold px-8 py-3 rounded-lg"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default EventForm;
