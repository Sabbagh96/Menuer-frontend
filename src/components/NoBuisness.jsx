import React from "react";
import { Link } from "react-router-dom";
function NoBuisness() {
  return (
    <div className="text-black bg-cover bg-center  flex flex-col justify-center items-center h-screen gap-4 ">
      <img
        src="https://source.unsplash.com/random/100x100"
        className="rounded-full"
        alt=""
      />
      <h1 className=" text-style-text-small-regular">
        You are not managing any Bussiness!
      </h1>
      <p className=" font-bold text-style-text-small-light text-gray-500">
        Create Your own Bussiness, or ask your Bussiness Admin to add you as a
        Stuff Member to be able to use Menuer.
      </p>
      <Link to={"/stepthree"} className="btn background-cerise-10-a btn-md border ">
        Create New Bussiness
      </Link>
    </div>
  );
}

export default NoBuisness;
