import React from "react";
import "../../src/Menuer-Library.css";

const NotFound = () => {
  return (
    <div className="text-pink-500 notfound bg-cover bg-center  flex flex-col justify-center items-center h-screen gap-4 backdrop-blur-md">
      <h1 className="text-4xl font-bold text-style-heading-h-4">404 Error</h1>
      <p className="text-2xl font-bold text-style-heading-h-1">
        Page Not Found
      </p>
      <button className="btn btn-md btn-primary-solid border  border-gray-600">Back To Menue</button>
    </div>
  );
};

export default NotFound;
