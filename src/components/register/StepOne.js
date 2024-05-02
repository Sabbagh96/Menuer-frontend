import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

const StepOne = ({ nextPage, regEmail, setRegEmail }) => {
  const [emailError, setEmailError] = useState(null);

  const handleEmailChange = (e) => {
    setRegEmail(e.target.value);
    setEmailError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(regEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    axios
      .post("", { email: regEmail })
      .then((response) => {
        if (response.data.isValid) {
          nextPage();
        } else {
          setEmailError(response.data.message);
        }
      })
      .catch((error) => {
        setEmailError("An error occurred while validating the email.");
      });
    console.log(response.data.isValid);
  };

  return (
    <div className="relative w-full h-screen bg-hero_section ">
      <div className="bg-white w-[470px] h-[352px] flex-col justify-start items-start inline-flex border rounded-xl absolute right-32 top-20 z-50 shadow-lg">
        <div className="w-[374px] h-[50px] mt-[40px] mb-[8px] py-2 justify-start items-center gap-1 inline-flex">
          <div className=" flex ml-10 grow shrink basis-0 text-zinc-900 text-2xl font-bold font-['Alexandria'] leading-[33.60px]">
            Create Account
          </div>
        </div>
        <div className="font-semibold">
          <div className="flex mb-[24px] ml-10 text-sm ">
            Already Have Account?{" "}
            <Link to="/">
              <span className="ml-1 text-[#E32B87] underline"> Log In</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-[4px] flex text-sm justify-start ml-10 ">
            Email Address
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex -ml-4 mb-[24px]"
              type="email"
              value={regEmail}
              placeholder="example@gmail.com"
              onChange={handleEmailChange}
            />
            {emailError && (
              <div className="text-red-500 text-sm mt-1 ml-10">
                {emailError}
              </div>
            )}
            <button
              type="submit"
              className="bg-[#E32B87] text-white font-bold py-2 px-4 rounded-xl w-[374px] h-[52px] justify-center items-center text-center -ml-4 "
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
