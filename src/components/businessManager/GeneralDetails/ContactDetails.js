import axios from "axios";
import React, { useState, useEffect } from "react";
import { getAuthUser } from "../../../helper/Storage";
import { useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const navigate = useNavigate();

  const [businessAddress, setBusinessAddress] = useState("");
  const [numbers, setNumbers] = useState([""]);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [externalLinks, setExternalLinks] = useState([""]);
  const auth = getAuthUser();

  useEffect(() => {
    console.log("Fetching business details...");
    axios
      .get(
        "http://localhost:4000/menuer/business/dashboard/businessManger/contact-details",
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((response) => {
        const data = response.data.business;
        console.log("Fetched data:", data);
        console.log("Fetched dataaaaaaaaaaaa:", response);
        setBusinessAddress(data.business_address.join(", "));
        setNumbers(data.business_mobile);
        setFacebook(data.business_social_media.facebook);
        setInstagram(data.business_social_media.instagram);
        setExternalLinks([data.business_social_media.externallink]);
      })
      .catch((error) => {
        console.error("Error fetching business details:", error);
      });
  }, [auth.data.token]);

  const handleAddNumber = () => {
    setNumbers([...numbers, ""]);
  };

  const handleAddLink = () => {
    setExternalLinks([...externalLinks, ""]);
  };

  const handleNumberChange = (index, value) => {
    const updatedNumbers = [...numbers];
    updatedNumbers[index] = value;
    setNumbers(updatedNumbers);
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...externalLinks];
    updatedLinks[index] = value;
    setExternalLinks(updatedLinks);
  };

  const handleSaveChanges = () => {
    const updatedData = {
      business_address: businessAddress.split(", "),
      business_mobile: numbers,
      business_social_media: {
        facebook,
        instagram,
        externallink: externalLinks.join(", "),
      },
    };

    axios
      .put(
        "http://localhost:4000/menuer/business/dashboard/businessManger/contact-details",
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((response) => {
        navigate("/businessmanager");
        console.log("Business details updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating business details:", error);
      });
  };

  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[20px] flex justify-between mx-auto px-4 ">
        <div className="text-zinc-800 text-lg font-medium font-['Alexandria'] leading-[27px]">
          General Details - Business Details
        </div>
        <button
          onClick={handleSaveChanges}
          className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
        >
          Save Changes
        </button>
      </div>

      <div className="w-[960px] border shadow-xl rounded-xl h-auto mt-[35px] mb-6 flex justify-between mx-auto px-4 flex-col p-8">
        <div className="w-full h-[21px] px-1 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
            <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Business Address
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
              Optional
            </div>
          </div>
        </div>
        <input
          className="w-full h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          placeholder="Enter Business Address"
          value={businessAddress}
          onChange={(e) => setBusinessAddress(e.target.value)}
        />

        <div className="w-full h-[21px] px-1 justify-between items-start inline-flex mt-4">
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
            className="w-full h-[21px] m-2 px-1 justify-between items-start inline-flex mt-4"
          >
            <input
              className="w-full h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
              placeholder="+02 101000000"
              value={number}
              onChange={(e) => handleNumberChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-center text-lg mt-2 ">
          <button
            onClick={handleAddNumber}
            className="text-center text-pink-600 mt-1 text-sm font-medium font-['Alexandria'] leading-[21px]"
          >
            Add Number
          </button>
        </div>

        <div className="w-full h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            Facebook
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>
        <input
          className="w-full h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          placeholder="FB.com/Cavas"
          value={facebook}
          onChange={handleFacebookChange}
        />

        <div className="w-full h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            Instagram
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>
        <input
          className="w-full h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          placeholder="Instagram.com/Cavas"
          value={instagram}
          onChange={handleInstagramChange}
        />

        <div className="w-full h-[21px] px-1 justify-between items-start inline-flex mt-4">
          <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
            External Links
          </div>
          <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
            Optional
          </div>
        </div>
        {externalLinks.map((link, index) => (
          <div
            key={index}
            className="w-full h-[21px] m-2 px-1 justify-between items-start inline-flex mt-4"
          >
            <input
              className="w-full h-10 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
              placeholder="https://example.com"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="flex justify-center text-lg mt-2 mb-3">
          <button
            onClick={handleAddLink}
            className="text-center text-pink-600 text-sm m-1 font-medium font-['Alexandria'] leading-[21px]"
          >
            Add Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
