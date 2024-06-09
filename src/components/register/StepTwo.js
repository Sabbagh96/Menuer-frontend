import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../../helper/Storage";

const StepTwo = ({ regEmail }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError(true);
      return; // Prevent form submission
    }

    // Prepare the payload

    // Send POST request
    axios
      .post("http://localhost:4000/auth/signup", {
        email: regEmail,
        first_name: firstName,
        last_name: lastName,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        console.log(res);
        navigate("/accountcreated");
        setAuthUser(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative w-full h-screen bg-hero_section overflow-auto">
      <div className=" bg-white w-1/3 border rounded-xl min-h-96 absolute right-32 top-10 z-50 shadow-lg ">
        <h1 className="mt-8 flex ml-10 text-xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-nowrap justify-around ">
              <div className="font-semibold flex text-sm  mr-16 ml-4 mt-6 ">
                First Name
              </div>
              <div className="font-semibold flex text-sm  mr-28 mt-6  ">
                Last Name
              </div>
            </div>
            <div className="flex mx-auto">
              <input
                className="flex border-[1px] outline-none border-gray-300 rounded-lg mt-1 ml-10 w-[150px] h-11 content-center text-nowrap px-2"
                type="text"
                placeholder="Mohamed"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                className="flex border-[1px] outline-none border-gray-300 rounded-lg mt-1 ml-10 w-[170px] h-11 content-center text-nowrap px-2 "
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Ibrahim"
              />
            </div>
            <div className="flex flex-nowrap flex-col justify-around mt-3">
              <div className="font-semibold text-sm text-start ml-10 ">
                Password
              </div>
              <input
                className="flex border-[1px] outline-none border-gray-300 rounded-lg mt-1 ml-10 w-10/12 h-11 content-center text-nowrap px-2"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold flex text-sm ml-10 mt-2">
                Confirm Password
              </div>

              <input
                className="flex border-[1px] outline-none border-gray-300 rounded-lg mt-1 ml-10 w-10/12 h-11 content-center text-nowrap px-2"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Enter your password again."
                onBlur={() => setIsTouched(true)}
              />
            </div>
            {passwordError && isTouched ? (
              <p className="text-red-500 text-sm mt-1 ml-10 ">
                Passwords do not match
              </p>
            ) : null}
            <div className="flex items-center mb-2 mt-2 ml-10">
              <input
                type="checkbox"
                id="agreeToTerms"
                className="w-4 h-4 outline-none text-[#E32B87] border-gray-300 rounded bg-[#E32B87]  "
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the{" "}
                <span className="text-[#E32B87]">Terms of Use</span> and{" "}
                <span className="text-[#E32B87]">Privacy Policy</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#E32B87] mb-6 w-10/12 mx-auto text-white font-bold py-2 px-4 rounded-xl   mt-2 mr-6 text-center "
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
