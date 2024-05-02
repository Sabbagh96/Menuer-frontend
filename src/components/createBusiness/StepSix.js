import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { IoMdArrowDropup } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";

import { IoMdArrowDropdown } from "react-icons/io";

const StepSix = ({ nextPage }) => {
  const [addSection, setAddSection] = useState(false);
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  console.log(addSection);

  const addSectionRef = useRef(null);

  // Function to handle clicks outside the add section
  const handleClickOutside = (e) => {
    if (addSectionRef.current && !addSectionRef.current.contains(e.target)) {
      setAddSection(false);
    }
  };

  // Add event listener for clicks outside the add section
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    margin: "30px",
  };
  return (
    <div className="bg-hero_section w-full h-screen overflow-auto relative">
      <div className="">
        {addSection && (
          <div className="h-screen w-full relative z-50 bg-opacity-100">
            <div
              ref={addSectionRef}
              className="w-2/5 h-2/5 bottom-32 z-50 left-80 rounded-2xl absolute bg-white flex flex-col"
            >
              <div className="font-bold p-5 flex justify-start">
                Create Menu Section
              </div>
              <div className="border-[1px] w-5/6  mx-auto border-gray-300 "></div>
              <div className="font-semibold text-sm flex justify-start p-5 mt-2">
                Section Name
              </div>
              <input
                className="w-11/12  h-[46px] bg-gray-100 rounded-xl p-3 mx-auto -mt-4 flex justify-start"
                placeholder="My New Section"
              />
              <div className="flex justify-end gap-2 mt-2 me-4">
                <button
                  onClick={() => setAddSection(false)}
                  className="w-[114px] h-[46px] px-5 py-3 bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
                >
                  Cancel
                </button>
                <button className="w-[114px] h-[46px] px-5 py-3 rounded-[20px] bg-pink-400 text-white border border-slate-500 border-opacity-20 text-center text-sm font-medium font-['Alexandria'] leading-[21px]">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute w-[470px] h-[688px]  z-20  p-12 bg-white rounded-3xl shadow border border-slate-500 border-opacity-20 flex flex-row items-start gap-6 justify-between right-32 top-5">
        <div className="relative">
          <div className="sticky">
            <div className="flex justify-between">
              <button className="text-start text-gray-500 text-sm font-medium font-['Alexandria'] leading-[21px] w-[187px] h-[20px]">
                Back
              </button>
              <button className="text-end text-gray-500 text-sm font-medium font-['Alexandria'] leading-[21px] w-[187px] h-[20px]">
                Add Later
              </button>
            </div>
            <div className="text-start w-[374px] my-[24px] text-zinc-900 text-2xl font-bold font-['Alexandria'] leading-[33.60px]">
              Create Bussiness
            </div>
            <div className="w-[374px] h-1.5 py-0.5 justify-center items-center inline-flex">
              <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
                <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
                <div className="w-[280.50px] h-0.5 bg-pink-600 rounded-full" />
              </div>
            </div>

            <div className="w-[374px] h-[38px] justify-start items-center gap-1 inline-flex mb-[24px] mt-[20px]">
              <div className="grow shrink basis-0 h-[27px] justify-start items-center gap-1 flex">
                <div className="text-zinc-800 text-lg font-medium font-['Alexandria'] leading-[27px]">
                  Modify Your Menu
                </div>
              </div>
            </div>
          </div>
          {/* no scroller under this  */}

          <div className="w-[374px] h-[330px] overflow-y-scroll no-scrollbar  flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[374px] flex justify-start text-zinc-800 text-base font-medium font-['Alexandria'] leading-normal">
              Menu Sections
            </div>
            <div className="slider-container mt-[12px] gap-6  ">
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

                <div className="w-[136px] h-[136px] mx-4 bg-white rounded-2xl border border-slate-500 border-opacity-20 items-start">
                  <div className="grid grid-cols-2 mx-auto ml-3  justify-center items-center">
                    <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
                    <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
                    <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
                    <div className="w-[60px] h-[50.22px] rounded-xl border border-gray-300 bg-red-500 m-2"></div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="w-[374px] h-[9px] py-1 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-px bg-zinc-200 rounded-[90px]" />
            </div>

            <div className="w-[374px] text-zinc-800 text-base font-medium font-['Alexandria'] leading-normal flex justify-start">
              Add Items
            </div>
            <div className="w-[374px] h-6 justify-start items-center gap-5 inline-flex">
              <div className="text-stone-300 text-sm font-normal font-['Alexandria'] leading-[21px]">
                Recommended
              </div>
              <div className="grow shrink basis-0 h-px bg-zinc-200 rounded-[90px]" />
            </div>
            {/* map on items here ----------------------------------------------------  */}
            <div
              className={`relative w-[374px] h-[218px] items-center p-4 place-content-center mx-1 bg-white rounded-2xl border border-slate-500 ${
                isOpen
                  ? "border-b-transparent rounded-none transition-all duration-500"
                  : ""
              } border-opacity-20`}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-[213.50px] h-[21px]  items-center flex justify-between"
              >
                <div className="flex gap-1">
                  <div className="text-center text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Created Items
                  </div>
                  <div className="text-center text-pink-600 text-sm font-light font-['Alexandria'] leading-[21px]">
                    ( 3 )
                  </div>
                </div>
                <div on className="flex items-end -mx-28">
                  {!isOpen ? (
                    <div className=" flex justify-end">
                      <span className=" flex justify-end">
                        <IoMdArrowDropdown />
                      </span>
                    </div>
                  ) : (
                    <div>
                      <IoMdArrowDropup />
                    </div>
                  )}
                </div>
              </button>
              {isOpen && (
                <div className="absolute top-12 left-0 w-full   h-auto duration-300 flex flex-col border border-t-0 ">
                  <div className="w-[342px] h-[9px] mx-auto py-1 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-px bg-zinc-200 rounded-[90px]" />
                  </div>
                  <div className="w-[345px] h-auto rounded-2xl inline-flex justify-between">
                    <div className="flex p-2 items-center gap-1 ">
                      <div className="relative">
                        <span
                          onClick={() => setIsOpenTwo((prev) => !prev)}
                          className="cursor-pointer"
                        >
                          <CiMenuKebab />
                        </span>
                        {isOpenTwo && (
                          <div className="absolute -left-1 w-[196px] h-[90px] py-2 bg-white rounded-xl shadow border border-zinc-200 flex-col justify-start items-start flex flex-col">
                            <button>h</button>
                          </div>
                        )}
                      </div>
                      <img className="w-9 h-[27.22px]" />
                      <span className="  text-zinc-800 text-sm font-normal font-['Alexandria'] leading-[21px]">
                        Name
                      </span>
                    </div>
                    <div className="flex p-2 items-center">
                      <button className="h-5 justify-start items-center inline-flex">
                        <span className="items-center content-center">
                          <IoIosAddCircle />
                        </span>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* no scroller finishes here  */}
        </div>
      </div>
    </div>
  );
};

export default StepSix;
