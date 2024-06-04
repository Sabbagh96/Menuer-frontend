import React, { useState, useRef } from "react";
import axios from "axios";
import logo from "../../assets/AddLogo.png";
import cover from "../../assets/cover.png";
import { useNavigate } from "react-router-dom";

const Alert = ({ message }) => {
  return (
    <div
      className="bg-red-200 border border-red-400 text-red-700 px-4 py-2 rounded relative"
      role="alert"
    >
      {message}
    </div>
  );
};

const StepFour = ({ nextPage }) => {
  const [businessName, setBusinessName] = useState("");
  const [businessSlogan, setBusinessSlogan] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);

  const handleImageOneClick = () => {
    inputRefOne.current.click();
  };

  const handleImageTwoClick = () => {
    inputRefTwo.current.click();
  };

  const handleImageOneChange = (event) => {
    const file = event.target.files[0];
    setImageOne(file);
  };

  const handleImageTwoChange = (event) => {
    const file = event.target.files[0];
    setImageTwo(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if businessName is empty
    if (!businessName.trim()) {
      setErrorMessage("Please enter the business name.");
      return;
    }

    // Check if at least one image is selected
    if (!imageOne && !imageTwo) {
      setErrorMessage("Please select at least one image.");
      return;
    }

    // Clear any previous error message
    setErrorMessage("");

    const formData = new FormData();
    formData.append("businessName", businessName);

    // Append business slogan if it's not empty
    if (businessSlogan.trim()) {
      formData.append("businessSlogan", businessSlogan);
    }

    // Make sure imageOne and imageTwo are not null before appending
    if (imageOne) {
      formData.append("imageOne", imageOne);
    }

    if (imageTwo) {
      formData.append("imageTwo", imageTwo);
    }
    console.log("Form Data:", Object.fromEntries(formData.entries()));
    axios
      .post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle success
        console.log("Response:", response);
        navigate("/stepfive");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const isDisabled = !businessName.trim() || !imageOne || !imageTwo;

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full h-screen bg-hero_section overflow-auto ">
        <div className="bg-white w-4/12 border rounded-xl min-h-96 absolute right-32 top-5 z-50 shadow-lg my-4">
          <div className="w-[374px] text-zinc-900 text-2xl font-bold font-['Alexandria'] leading-[33.60px] my-1 mx-auto  ">
            Create Business
          </div>
          <div className="w-[374px] h- py-0.5 justify-center items-center inline-flex">
            <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
              <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
              <div className="w-[93.50px] h-0.5 bg-pink-600 rounded-full" />
            </div>
          </div>

          {/* Business Name Input */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Name
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />

          {/* Business Slogan Input */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Slogan
              </div>
            </div>
            <div className="justify-center items-center gap-1 flex">
              <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
                Optional
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Business Slogan"
            value={businessSlogan}
            onChange={(e) => setBusinessSlogan(e.target.value)}
          />

          {/* Image One Input */}
          <div className="flex flex-col ">
            <div
              onClick={handleImageOneClick}
              className="flex flex-col w-32 mt-2 ml-6"
            >
              {imageOne ? (
                <img
                  className="w-32 border rounded-xl"
                  src={URL.createObjectURL(imageOne)}
                  alt=""
                />
              ) : (
                <img className="w-32" src={logo} alt="Logo" />
              )}
              <input
                type="file"
                ref={inputRefOne}
                onChange={handleImageOneChange}
                className="hidden"
              />
            </div>

            {/* Image Two Input */}
            <div
              onClick={handleImageTwoClick}
              className="flex flex-col w-96 mt-2 ml-6"
            >
              {imageTwo ? (
                <img
                  className="w-96 h-36 border rounded-xl"
                  src={URL.createObjectURL(imageTwo)}
                  alt=""
                />
              ) : (
                <img className="w-11/12 " src={cover} alt="Cover" />
              )}
              <input
                type="file"
                ref={inputRefTwo}
                onChange={handleImageTwoChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-[#E32B87] mb-2 text-white font-bold py-2 px-4 rounded-xl w-10/12 mx-auto mt-5 text-center ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}
          >
            Continue
          </button>

          {/* Error Alert */}
          {errorMessage && <Alert message={errorMessage} />}
        </div>
      </div>
    </form>
  );
};

export default StepFour;
