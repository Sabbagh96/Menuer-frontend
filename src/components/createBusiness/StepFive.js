



import React, { useState } from "react";
import axios from "axios";



const StepFive = ({ nextPage }) => {
  const [numbers, setNumbers] = useState([""]);
  const [links, setLinks] = useState([""]);

  const handleAddNumber = () => {
    setNumbers([...numbers, ""]);
  };

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const handlePostData = async () => {
    try {
      // Post numbers
      await axios.post("/api/addNumbers", { numbers });

      // Post links
      await axios.post("/api/addLinks", { links });

      // Continue to the next step
      nextPage();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="relative w-full h-screen bg-hero_section overflow-auto">
      <div className="bg-white w-1/3 border rounded-xl min-h-auto max-h-auto absolute right-32 top-1 inset-50 z-50 shadow-lg">
        <div className="mt-8 flex ml-10 text-xl font-bold mx-auto">
          Create Account
        </div>
        <div className="w-1/3 h-1.5 py-0.5 justify-center items-center inline-flex">
          <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
            <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
            <div className="w-[187px] h-0.5 bg-pink-600 rounded-full" />
          </div>
        </div>
        <div className="w-[374px] h-9 justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 h-[27px] justify-start items-center gap-1 flex">
            <div className="text-zinc-800 text-lg font-medium font-['Alexandria'] leading-[27px]">
              Add Contact Details
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="p-2 rounded-3xl justify-center items-center gap-2 flex">
              <div className="w-[31px] justify-center items-center gap-1 flex">
                <div className="text-center text-gray-500 text-sm font-medium font-['Alexandria'] leading-[21px]">
                  Skip
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
            <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Bussiness Address
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
              Optional
            </div>
          </div>
        </div>
        <input
          className="w-[374px] h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          placeholder="New Cairo"
        />

        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            Mobile Number
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>

        {numbers.map((number, index) => (
          <div
            key={index}
            className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-4"
          >
            <input
              className="w-[374px] h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
              placeholder="+02 101000000"
              value={number}
              onChange={(e) => handleNumberChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-center  text-lg mt-2 ">
          <button
            onClick={handleAddNumber}
            className="text-center text-pink-600 text-sm font-medium font-['Alexandria'] leading-[21px] "
          >
            Add Number
          </button>
        </div>
        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            Facebook
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>
        <input
          className="w-[374px] h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          placeholder="FB.com/Cavas"
        />
        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            Instagram
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>
        {links.map((link, index) => (
          <div
            key={index}
            className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-4"
          >
            <input
              className="w-[374px] h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
              placeholder="Instagram.com/Cavas"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-center  text-lg mt-2 mb-3">
          <button
            onClick={handleAddLink}
            className="text-center text-pink-600 text-sm font-medium font-['Alexandria'] leading-[21px] "
          >
            Add Link
          </button>
        </div>

        <button
          onClick={handlePostData}
          className="bg-[#E32B87] mb-6 text-white font-bold py-2 px-4 rounded-xl  w-10/12 mt-5 mx-auto text-center "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFive;
