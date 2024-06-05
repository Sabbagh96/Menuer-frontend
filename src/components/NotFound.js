import React from "react";
import "../../src/Menuer-Library.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-pink-500 notfound bg-cover bg-center  flex flex-col justify-center items-center h-screen gap-4 backdrop-blur-md">
      <h1 className="text-4xl font-bold text-style-heading-h-4">404 Error</h1>
      <p className="text-2xl font-bold text-style-heading-h-1">
        Page Not Found
      </p>
      <Link
        to={"/home"}
        className="btn btn-md btn-primary-solid border  border-gray-600"
      >
        Back To Menuer
      </Link>
    </div>
  );
};

export default NotFound;
