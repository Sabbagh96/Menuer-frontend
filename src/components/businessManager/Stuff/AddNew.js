import React, { useState } from "react";
import axios from "axios";

const AddNew = () => {
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [allowedPages, setAllowedPages] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setAllowedPages((prev) =>
      prev.includes(value)
        ? prev.filter((page) => page !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    const requestData = {
      email,
      job_title: jobTitle,
      allowed_pages: allowedPages,
    };

    console.log("Request Data:", requestData);

    try {
      const response = await axios.post("", requestData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[56.5px] flex justify-between mx-auto px-4 ">
        <div className=" text-zinc-800  text-lg font-medium font-['Alexandria'] leading-[27px]">
          Add New Member
        </div>
        <button
          className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </div>

      <div className="w-[960px] border shadow-xl rounded-xl h-[330px] mt-[56.5px] flex justify-between mx-auto px-4 flex-col">
        <div>
          <div className="flex p-4">New Member Details</div>
          <div className="flex justify-between">
            <div className="flex flex-col p-3 ml-1">
              <div className="flex">Email Address</div>
              <input
                className="w-[626px] h-11 mt-1 bg-white rounded-xl border border-zinc-200"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start p-3">
              <div className="flex">Job Title</div>
              <input
                className="mt-1  w-[262px] h-11 p-3 bg-white rounded-xl border border-zinc-200"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[912px] h-6 mt-[25.5px] mb-[25.5px] justify-start items-center gap-5 inline-flex">
            <div className="text-neutral-400 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Allowed Pages
            </div>
            <div className="grow shrink basis-0 h-px bg-zinc-200 rounded-[90px]" />
          </div>
          <div className="flex flex-wrap">
            {[
              "Menu Manager",
              "Cash System",
              "Reports",
              "Statistics",
              "Business Manager",
            ].map((page, index) => (
              <label key={index} className="mr-4">
                <input
                  type="checkbox"
                  value={index + 1}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {page}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
