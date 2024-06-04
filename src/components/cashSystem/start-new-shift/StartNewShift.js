import React from "react";
import "./main_style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StartNewShift = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/menuer/business/dashboard/cashsystem/startShift",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // Empty body
        }
      );
      if (response) {
        // If the response is OK, navigate to the desired route
        navigate("/cash"); // Replace with your actual route
      } else {
        console.error("Failed to start new shift:");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="container inline-flex min-w-[520px] max-w-[1080px] flex-col justify-center items-center gap-6 p-6 rounded-2xl background-naturals-white effect-style-box-shadow-sm text-naturals-gray-10-a">
      <img
        src="https://source.unsplash.com/random/100x100"
        className="rounded-full"
        alt=""
      />
      <h1 className="text-style-text-small-regular text-gray-800">
        No Shift is active!
      </h1>
      <p className="font-bold text-style-text-small-light text-gray-500">
        You are not managing any shift now. Start A New Shift to be able to
        start using Cash System.
      </p>
      <button
        className="border border-gray-300 rounded-xl w-[150px] h-[40px] bg-pink-200 text-pink-500"
        onClick={handleClick}
      >
        Start New Shift
      </button>
    </div>
  );
};

export default StartNewShift;
