import React, { useRef, useState } from "react";
import upload from "../assets/upload.svg";
import tip from "../assets/tip.svg";
import idea from "../assets/bulb.svg";
import { topicTags } from "../data/Topics";
import { useDispatch, useSelector } from "react-redux";
import { updateField, updateSelectedTopics } from "../data/communityFormSlice";

const CommunityForm = ({ onSubmit, buttonTexts }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.communityForm);
  console.log(formState);
  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleTagClick = (tag) => {
    const isSelected = formState.selectedTopics.includes(tag);

    if (isSelected) {
      // Tag is already selected, so remove it
      const updatedSelectedTopics = formState.selectedTopics.filter(
        (selectedTag) => selectedTag !== tag
      );
      dispatch(updateSelectedTopics(updatedSelectedTopics));
    } else {
      // Tag is not selected, so add it
      const updatedSelectedTopics = [...formState.selectedTopics, tag];
      dispatch(updateSelectedTopics(updatedSelectedTopics));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit function will be passed from the parent component
    onSubmit(formState);
  };
  const [imagePreview, setImagePreview] = useState(null);
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
  return (
    <form
      className="md:w-[90%] md:mx-5 w-[95%] mx-auto my-10 text-black"
      onSubmit={handleSubmit}
      action=""
    >
      <div className="md:flex items-center text-[18px] my-10">
        <div className="md:w-[70%]">
          <p className="font-bold md:text-[30px] my-5 text-[#212121]">
            Upload your Community Profile Picture
          </p>
          <div className=" cursor-pointer flex items-center gap-3">
            <img
              className="cursor-pointer "
              onClick={handleUploadClick}
              src={upload}
              alt=""
            />
            <span
              onClick={handleUploadClick}
              className="#636262 cursor-pointer  font-semibold"
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
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )}
          </div>
        </div>
        <div className="md:w-[30%] my-5 md:my-0 text-[12px] ">
          <p className="flex gap-2 my-2">
            <img src={tip} alt="" /> <span>Tip</span>
          </p>
          <p>You can edit this later if you change your mind.</p>
        </div>
      </div>
      <div className="md:flex items-center my-10">
        <div className="  md:w-[70%]">
          <p className="font-bold md:text-[30px] my-5 text-[#212121]">
            Choose a name for your Community
          </p>
          <span className="block">
            Choose a name that will give people a clear idea of what the
            community is about.
          </span>
          <textarea
            onChange={(e) => handleInputChange("communityName", e.target.value)}
            className=" w-[90%] bg-transparent border-[#D9D9D9] border-[0.5px] my-2"
            name=""
            id=""
            cols=""
            rows="3"
          ></textarea>
        </div>
        <div className="md:w-[30%] my-5 md:my-0 text-[12px] ">
          <p className="flex gap-2 my-2">
            <img src={tip} alt="" /> <span>Tip</span>
          </p>
          <p>You can edit this later if you change your mind.</p>
        </div>
      </div>
      <div className="md:flex items-center my-10">
        <div className="md:w-[70%]">
          <p className="font-bold md:text-[30px] my-5 text-[#212121]">
            choose Your Campus for your Community
          </p>

          <input
            onChange={(e) => handleInputChange("campus", e.target.value)}
            className="bg-white py-3 px-2 w-[90%]  border-[#D9D9D9] border-[0.8px]"
            name=""
            id=""
            placeholder="Bayero Univeristy Kano"
          />
        </div>
        <div className="text-[12px] md:w-[30%] my-5 md:my-0">
          <p className="flex gap-2">
            <img src={tip} alt="" /> <span>Tip</span>
          </p>
          <p>
            OnCampus groups meet locally, in person or online. This choice helps
            us to connect with people on your campus.
          </p>
        </div>
      </div>
      <div className="md:flex items-center my-10">
        <div className="md:w-[70%]">
          <p className="font-bold text-[30px]  my-5 text-[#212121]">
            Describe Your Community
          </p>
          <span className="block">
            People will see this when we promote your group, but you’ll be able
            to update it later too
          </span>
          <textarea
            onChange={(e) =>
              handleInputChange("communityDescription", e.target.value)
            }
            className="w-[90%] bg-transparent border-[#D9D9D9] border-[0.5px] my-2"
            name=""
            id=""
            cols=""
            rows="8"
          ></textarea>
        </div>
        <div className="md:w-[30%] my-5 md:my-0 text-[12px] ">
          <div className="mb-3">
            <p className="flex gap-2">
              <img src={tip} alt="" /> <span>Tip</span>
            </p>
            <div>
              Questions to consider:
              <ul className="list-disc mx-10">
                <li>What’s the group goal?</li>
                <li>Who are you hoping to meet?</li>
                <li> What will you do at your events?</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <img src={idea} alt="" /> <span>Example</span>
            </p>
            <p>
              “Welcome tech lovers far and wide! We’re an online and in person
              tech-enthusiast group hosting live speaking events on a range of
              tech topics. You can join us in person if possible or on one of
              our live streams. Look out for our virtual happy hours and other
              networking events.”
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex items-center my-10">
        <div className="md:w-[70%]">
          <p className="font-bold md:text-[30px] my-5 text-[#212121]">
            Choose Topics for your community
          </p>

          <input
            type="text"
            className="block my-5 bg-white py-3 px-2 w-[90%]  border-[#D9D9D9] border-[0.8px]"
            placeholder="search for topics"
          />
          <div className="w-[90%]">
            {topicTags.map((tag, index) => (
              <button
                onClick={() => handleTagClick(tag)}
                className={`border-[var(--color-dark)] border-[1.5px] px-3 rounded-lg py-2 mx-1 my-1 ${
                  formState.selectedTopics.includes(tag)
                    ? "bg-[var(--color-dark)] text-white"
                    : ""
                }`}
                key={index}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-[30%] my-5 md:my-0 text-[12px] ">
          <p className="flex gap-2">
            <img src={tip} alt="" /> <span>Tip</span>
          </p>
          <p>
            Be specific! This will help us promote your group to the right
            people. Try to select at least 3 topics before moving onto the next
            step.
          </p>
        </div>
      </div>
      <button
        className="bg-[#C1D7F9]  block mx-auto text-[var(--color-dark)] font-semibold px-8 py-3 rounded-lg"
        type="submit"
      >
        {buttonTexts}
      </button>
    </form>
  );
};

export default CommunityForm;
