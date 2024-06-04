import React from "react";
import axios from "axios";
import logo from "../../../assets/AddLogo.png";
import cover from "../../../assets/cover.png";
import { useRef, useState } from "react";
const BusinessDetails = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessSlogan, setBusinessSlogan] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  console.log(imageOne, imageTwo);

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
    console.log(file);
    setImageOne(file);
  };
  const handleImageTwoChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImageTwo(file);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("businessName", businessName);
    formData.append("businessSlogan", businessSlogan);
    formData.append("imageOne", imageOne);
    formData.append("imageTwo", imageTwo);

    axios
      .post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle success
        console.log("Response:", response);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[20px] flex justify-between mx-auto px-4 ">
        <div className=" text-zinc-800  text-lg font-medium font-['Alexandria'] leading-[27px]">
          General Details - Business Details
        </div>
        <button className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
          Save Changes
        </button>
      </div>

      <div className="w-[960px] border shadow-xl rounded-xl h-auto mt-[35px] mb-6  flex justify-between mx-auto px-4 flex-col">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex flex-col px-6 py-3">
              <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
                <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Business Name
                  </div>
                </div>
              </div>

              <input
                className="w-full h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />

              <div className="w-full h-[21px] px-1 justify-between items-start inline-flex mt-3">
                <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Business Slogan
                  </div>
                </div>
                <div className=" items-center gap-1 flex">
                  <div className="text-center  text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
                    Optional
                  </div>
                </div>
              </div>

              <input
                className="w-full h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
                type="text"
                placeholder="Business Slogan"
                value={businessSlogan}
                onChange={(e) => setBusinessSlogan(e.target.value)}
              />
            </div>

            <div className="flex flex-col py-5">
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
                  <img className="w-32" src={logo} />
                )}
                <input
                  type="file"
                  ref={inputRefOne}
                  onChange={handleImageOneChange}
                  className="hidden"
                />
              </div>

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
                  <img className="w-11/12 " src={cover} />
                )}
                <input
                  type="file"
                  ref={inputRefTwo}
                  onChange={handleImageTwoChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetails;
