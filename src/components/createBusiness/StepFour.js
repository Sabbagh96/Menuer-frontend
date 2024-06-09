import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUser, setAuthUser } from "../../helper/Storage";

const StepFour = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessSlogan, setBusinessSlogan] = useState("");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [initialImageOne, setInitialImageOne] = useState("");
  const [initialImageTwo, setInitialImageTwo] = useState("");
  const navigate = useNavigate();

  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);

  useEffect(() => {
    const auth = getAuthUser();
    if (auth && auth.business) {
      setBusinessName(auth.business.business_name || "");
      setBusinessSlogan(auth.business.business_slogan || "");
      if (auth.business.business_logo) {
        setInitialImageOne(auth.business.business_logo);
      }
      if (auth.business.business_cover) {
        setInitialImageTwo(auth.business.business_cover);
      }
    }
  }, []);

  const handleImageOneClick = () => {
    inputRefOne.current.click();
  };

  const handleImageTwoClick = () => {
    inputRefTwo.current.click();
  };

  const handleImageOneChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageOne(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setInitialImageOne(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please select a valid image file.");
    }
  };

  const handleImageTwoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageTwo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setInitialImageTwo(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please select a valid image file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!businessName.trim()) {
      setErrorMessage("Please enter the business name.");
      return;
    }

    if (!imageOne && !imageTwo) {
      setErrorMessage("Please select at least one image.");
      return;
    }

    setErrorMessage("");

    const auth = getAuthUser();
    const updatedBusiness = {
      business_name: businessName,
      business_slogan: businessSlogan,
      business_logo: initialImageOne,
      business_cover: initialImageTwo,
      business_address: auth.business.business_address || "",
      business_mobile: auth.business.business_mobile || [],
      business_social_media: auth.business.business_social_media || {
        facebook: "",
        instagram: "",
        externallink: "",
      },
      categories_id: auth.business.categories_id || "",
    };

    const updatedAuth = {
      ...auth,
      business: updatedBusiness,
    };

    setAuthUser(updatedAuth);
    navigate("/stepfive");
  };

  const isDisabled = !businessName.trim() || !imageOne || !imageTwo;

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full h-screen bg-hero_section overflow-auto">
        <div className="bg-white w-4/12 border rounded-xl min-h-96 absolute right-32 top-5 z-50 shadow-lg my-4">
          <div className="w-[374px] text-zinc-900 text-2xl font-bold font-['Alexandria'] leading-[33.60px] my-1 mx-auto">
            Create Business
          </div>
          <div className="w-[374px] h- py-0.5 justify-center items-center inline-flex">
            <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
              <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
              <div className="w-[93.50px] h-0.5 bg-pink-600 rounded-full" />
            </div>
          </div>

          {/* Business Name Input */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Name
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
          />

          {/* Business Slogan Input */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Slogan
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Business Slogan"
            value={businessSlogan}
            onChange={(e) => setBusinessSlogan(e.target.value)}
          />

          {/* Logo Upload */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Logo
              </div>
            </div>
          </div>
          <div
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-center flex cursor-pointer"
            onClick={handleImageOneClick}
          >
            {initialImageOne ? (
              <img
                src={initialImageOne}
                alt="Business Logo"
                className="h-14 w-auto"
              />
            ) : (
              <span>Upload Logo</span>
            )}
          </div>
          <input
            type="file"
            ref={inputRefOne}
            style={{ display: "none" }}
            onChange={handleImageOneChange}
          />

          {/* Cover Upload */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Cover
              </div>
            </div>
          </div>
          <div
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-center flex cursor-pointer"
            onClick={handleImageTwoClick}
          >
            {initialImageTwo ? (
              <img
                src={initialImageTwo}
                alt="Business Cover"
                className="h-14 w-auto"
              />
            ) : (
              <span>Upload Cover</span>
            )}
          </div>
          <input
            type="file"
            ref={inputRefTwo}
            style={{ display: "none" }}
            onChange={handleImageTwoChange}
          />

          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-[#E32B87] mb-6 text-white font-bold py-2 px-4 rounded-xl w-10/12 mt-5 mx-auto text-center ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepFour;
