import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { IoMdArrowDropup } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
// import { SectionContext } from "../../context/SectionsProvider";
import AddItem from "./AddItem";
import Sections from "./Sections";
import CreateNewItem from "./CreateNewItem";
const StepSix = ({ nextPage }) => {
  // const { items } = useContext(SectionContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  /*Here you will get products  */
  const [products, setProducts] = useState([]);
  const [modeldata, setModeldata] = useState([]);

  /* get products from backend */
  const getData = () => {
    fetch("")
      .then((resposne) => resposne.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    getData();
  }, []);

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
  const handleCloseTwo = () => {
    setShowTwo(false);
  };

  // Function to handle clicks outside the add section

  // Add event listener for clicks outside the add section

  return (
    <div className="bg-hero_section w-full h-screen overflow-auto relative">
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
            <div>
              <Sections />
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
              className={`relative w-[374px] h-[57px] items-center p-4 place-content-center mx-1 bg-white rounded-2xl border border-slate-500 ${
                isOpen
                  ? "border-b-transparent rounded-none transition-all duration-500"
                  : ""
              } border-opacity-20`}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-[213.50px] h-[10px]  items-center flex justify-between"
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
                <div className="absolute mt-2 top-12 left-0 w-full   h-auto duration-300 flex flex-col border border-t-0 ">
                  <div className="w-[345px]  h-auto rounded-2xl inline-flex justify-between">
                    <div className="flex p-2 items-center gap-1 ">
                      <div className="relative">
                        <span
                          onClick={() => setIsOpenTwo((prev) => !prev)}
                          className="cursor-pointer"
                        >
                          <CiMenuKebab />
                        </span>
                        {isOpen && isOpenTwo && (
                          <div className="absolute -left-1 w-[196px] h-[90px] py-2 bg-white rounded-xl shadow border border-zinc-200 flex-col justify-start items-start flex ">
                            <button>Delete</button>
                          </div>
                        )}
                      </div>
                      <img className="w-9 h-[27.22px]" />
                      <span className="  text-zinc-800 text-sm font-normal font-['Alexandria'] leading-[21px]">
                        Name
                      </span>
                    </div>
                    <div className="flex p-2 items-center">
                      <span className="items-center content-center">
                        <IoIosAddCircle />
                      </span>
                      <button onClick={handleShow}>Add</button>
                    </div>
                  </div>
                  <button onClick={() => setShowTwo(true)}>Create New</button>
                </div>
              )}
            </div>
          </div>
          {/* no scroller finishes here  */}
        </div>
      </div>
      <Modal size="md" show={showTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <CreateNewItem />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AddItem />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default StepSix;
