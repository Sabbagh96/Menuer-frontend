import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "react-bootstrap/Modal";

import axios from "axios";
import SectionItemsById from "./SectionItemsById";

const Sections = () => {
  const [addSection, setAddSection] = useState(false);
  const [sectionName, setSectionName] = useState("");
  const [getSections, setGetSections] = useState([]);
  const [modeldata, setModeldata] = useState([]);
  const [show, setShow] = useState(false);
  const addSectionRef = useRef(null);

  const handleShow = (id) => {
    setShow(true);
    axios
      .get(`/${id}`)
      .then((response) => {
        // Assuming setShow is a state setter function
        setModeldata(response.data); // Assuming setModelData is a state setter function
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleClickOutside = (e) => {
    if (addSectionRef.current && !addSectionRef.current.contains(e.target)) {
      setAddSection(false);
    }
  };
  useEffect(() => {
    if (addSection) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addSection]);

  /* add new section */
  useEffect(() => {
    axios
      .post("", { sectionName })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: "30px",
  };
  return (
    <div className="">
      {addSection && (
        <div className=" h-screen w-full relative z-50 ">
          <div
            ref={addSectionRef}
            className="w-full h-3/5  z-50 rounded-2xl absolute bg-white flex flex-col"
          >
            <div className="font-bold p-5 flex justify-start">
              Create Menu Section
            </div>
            <div className="border-[1px] w-5/6 -mt-5  mx-auto border-gray-300 "></div>
            <div className="font-semibold text-sm flex justify-start -mt-5 p-5 ">
              Section Name
            </div>
            <input
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              className="w-11/12  h-[46px] bg-gray-100 rounded-xl p-3 mx-auto -mt-4 flex justify-start"
              placeholder="My New Section"
            />
            <div className="flex justify-end gap-2 mt-4 me-4">
              <button
                onClick={() => setAddSection(false)}
                className="w-[114px] h-[46px]  bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
              >
                Cancel
              </button>
              <button className="w-[114px] h-[46px] rounded-[20px] bg-pink-400 text-white border border-slate-500 border-opacity-20 text-center text-sm font-medium font-['Alexandria'] leading-[21px]">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="slider-container -mt- gap-6  ">
        <Slider {...settings} className="w-[374px] h-[161px] gap-6   ">
          <button
            onClick={() => setAddSection(!addSection)}
            className="w-[176px] h-[136px] px-6 py-4 gap-8  bg-pink-600 bg-opacity-10 rounded-2xl  border border-slate-500 border-opacity-20 justify-center items-center  inline-flex"
          >
            <div className="grow  shrink basis-0 flex-col justify-center items-center inline-flex">
              <IoIosAddCircle />

              <div className="self-stretch text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                Create New
              </div>
            </div>
          </button>

          <div
            onClick={handleShow}
            className="w-[136px] h-[136px] mx-4 bg-white rounded-2xl border border-slate-500 border-opacity-20 items-start"
          >
            <div className="grid grid-cols-2 mx-auto ml-3  justify-center items-center">
              <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
              <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
              <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
              <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
            </div>
            <div>Section Name</div>
          </div>
        </Slider>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <SectionItemsById />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sections;
