import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthUser, setAuthUser } from "../../helper/Storage";

const StepFive = () => {
  const [businessAddress, setBusinessAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [categoriesId, setCategoriesId] = useState("");
  const [businessMobile, setBusinessMobile] = useState([""]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuthUser();
    if (auth && auth.business) {
      setBusinessAddress(auth.business.business_address || "");
      setCategoriesId(auth.business.categories_id || "");
      setFacebook(auth.business.business_social_media.facebook || "");
      setInstagram(auth.business.business_social_media.instagram || "");
      setExternalLink(auth.business.business_social_media.externallink || "");
      setBusinessMobile(auth.business.business_mobile || [""]);
    }
  }, []);

  const updateAuthUser = (updates) => {
    const auth = getAuthUser();
    const updatedAuth = {
      ...auth,
      business: {
        ...auth.business,
        ...updates,
      },
    };
    setAuthUser(updatedAuth);
  };

  const handleBusinessMobileChange = (index, value) => {
    const newMobileNumbers = [...businessMobile];
    newMobileNumbers[index] = value;
    setBusinessMobile(newMobileNumbers);
    updateAuthUser({ business_mobile: newMobileNumbers });
  };

  const addBusinessMobile = () => {
    const newMobileNumbers = [...businessMobile, ""];
    setBusinessMobile(newMobileNumbers);
    updateAuthUser({ business_mobile: newMobileNumbers });
  };

  const removeBusinessMobile = (index) => {
    const newMobileNumbers = businessMobile.filter((_, i) => i !== index);
    setBusinessMobile(newMobileNumbers);
    updateAuthUser({ business_mobile: newMobileNumbers });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!businessAddress.trim()) {
      setErrorMessage("Please enter the business address.");
      return;
    }

    if (businessMobile.some((mobile) => !mobile.trim())) {
      setErrorMessage("Please enter valid mobile numbers.");
      return;
    }

    setErrorMessage("");

    const auth = getAuthUser();
    const formData = new FormData();

    // Append fields to formData
    formData.append("business_name", auth.business.business_name);
    formData.append("business_slogan", auth.business.business_slogan);
    formData.append("business_logo", auth.business.business_logo);
    formData.append("business_cover", auth.business.business_cover);
    formData.append("business_address", businessAddress);
    formData.append("categories_id", categoriesId);

    // Append each mobile number
    businessMobile.forEach((mobile, index) => {
      formData.append(`business_mobile[${index}]`, mobile);
    });

    // Append social media links
    formData.append("business_social_media[facebook]", facebook);
    formData.append("business_social_media[instagram]", instagram);
    formData.append("business_social_media[externallink]", externalLink);

    try {
      const response = await axios.post(
        "http://localhost:4000/business/create-business",
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      );
      console.log(response);
      navigate("/stepsix");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to create business.");
    }
  };

  const isDisabled =
    !businessAddress.trim() || businessMobile.some((mobile) => !mobile.trim());
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

          {/* Business Address Input */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Address
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Business Address"
            value={businessAddress}
            onChange={(e) => {
              setBusinessAddress(e.target.value);
              updateAuthUser({ business_address: e.target.value });
            }}
            required
          />

          {/* Mobile Numbers */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Business Mobile
              </div>
            </div>
            <button
              type="button"
              className="text-[#E32B87] text-sm font-normal font-['Alexandria'] leading-[21px]"
              onClick={addBusinessMobile}
            >
              + Add Mobile
            </button>
          </div>
          {businessMobile.map((mobile, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                className="w-[90%] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) =>
                  handleBusinessMobileChange(index, e.target.value)
                }
                required
              />
              {businessMobile.length > 1 && (
                <button
                  type="button"
                  className="text-red-500 ml-2"
                  onClick={() => removeBusinessMobile(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {/* Social Media Links */}
          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Facebook Link
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Facebook Link"
            value={facebook}
            onChange={(e) => {
              setFacebook(e.target.value);
              updateAuthUser({
                business_social_media: {
                  ...getAuthUser().business.business_social_media,
                  facebook: e.target.value,
                },
              });
            }}
          />

          <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
            <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
              <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Instagram Link
              </div>
            </div>
          </div>
          <input
            className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
            type="text"
            placeholder="Instagram Link"
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
              updateAuthUser({
                business_social_media: {
                  ...getAuthUser().business.business_social_media,
                  instagram: e.target.value,
                },
              });
            }}
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
            Create Business
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepFive;
