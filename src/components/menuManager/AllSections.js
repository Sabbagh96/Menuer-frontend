import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
const AllSections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const auth = getAuthUser();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/menuer/business/dashboard/menuManger`, {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <div className="flex justify-between p-6 w-[800px] mx-auto">
        <div>Menu Manager</div>
        <div>
          <button className="bg-pink-400 w-[100px] rounded-2xl h-[40px]">
            Add Items
          </button>
        </div>
      </div>
      <div className="w-[800px] h-[450px] bg-white border border-gray-100 shadow-lg rounded-xl flex mx-auto p-3 gap-2 flex-col">
        <input
          onChange={handleSearch}
          className="w-[290px] h-[46px] mx-2 bg-gray-100 rounded-xl p-3 flex justify-start"
          placeholder="Search for Menu Section"
        />

        <div className="grid grid-cols-4 gap-4">
          <div className="w-[136px] h-[136px] mx-6 gap-2  bg-white rounded-2xl border border-slate-500 border-opacity-20 items-start ">
            <Link to={"/sectiondetails"}>
              {" "}
              <div className="grid grid-cols-2 mx-auto ml-3 gap-2 p-2 justify-center items-center">
                <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 "></div>
                <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 "></div>
                <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 "></div>
                <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 "></div>
              </div>
              <div className="mt-2">Section Name</div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSections;
