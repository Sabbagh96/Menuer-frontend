import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import AddItem from "./AddItem";
import Sections from "./Sections";
import CreateNewItem from "./CreateNewItem";
import { getAuthUser } from "../../helper/Storage";

const StepSix = ({ nextPage }) => {
  const auth = getAuthUser();

  const [isOpen, setIsOpen] = useState({});
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [collections, setCollections] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchSections = () => {
    axios
      .get(`http://localhost:4000/user-business/collections`, {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((res) => {
        setCollections(res.data.collections);
        setItems(res.data.items);
      })
      .catch((err) => {
        console.error("Error fetching sections:", err);
      });
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleShow = (id) => {
    setSelectedItemId(id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItemId(null);
  };

  const handleCloseTwo = () => {
    setShowTwo(false);
  };

  const toggleCollection = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="bg-hero_section w-full h-screen overflow-auto relative">
      <div className="absolute w-[470px] h-[688px] z-20 p-12 bg-white rounded-3xl shadow border border-slate-500 border-opacity-20 flex flex-row items-start gap-6 justify-between right-32 top-5">
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
              Create Business
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

          <div className="w-[374px] h-[330px] overflow-y-scroll no-scrollbar flex-col justify-start items-center gap-6 inline-flex">
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

            {collections.map((collection) => (
              <div
                key={collection._id}
                className={`relative w-[374px] h-auto items-center my-10 p-4 place-content-center mx-1 bg-white rounded-2xl border border-slate-500 ${
                  isOpen[collection._id]
                    ? "border-b-transparent rounded-none transition-all duration-500"
                    : ""
                } border-opacity-20`}
              >
                <button
                  onClick={() => toggleCollection(collection._id)}
                  className="w-[213.50px] h-[10px] items-center flex justify-between"
                >
                  <div className="flex gap-1">
                    <div className="text-center text-zinc-900 text-sm font-normal leading-[21px]">
                      {collection.collection_name}
                    </div>
                    <div className="text-center text-pink-600 text-sm font-light leading-[21px]">
                      (
                      {
                        items.filter(
                          (item) => item.collection_id === collection._id
                        ).length
                      }
                      )
                    </div>
                  </div>
                  <div className="flex items-end -mx-28">
                    {!isOpen[collection._id] ? (
                      <IoMdArrowDropdown />
                    ) : (
                      <IoMdArrowDropup />
                    )}
                  </div>
                </button>
                {isOpen[collection._id] && (
                  <div className="absolute mt-2 top-12 left-0 w-full h-auto duration-300 flex flex-col border border-t-0">
                    {items
                      .filter((item) => item.collection_id === collection._id)
                      .map((item) => (
                        <div
                          key={item._id}
                          className="w-[345px] h-auto rounded-2xl inline-flex m-2 justify-between"
                        >
                          <div className="flex p-2 items-center gap-1 ">
                            <div className="relative">
                              <span
                                onClick={() => setIsOpenTwo((prev) => !prev)}
                                className="cursor-pointer"
                              >
                                <CiMenuKebab />
                              </span>
                              {isOpen[collection._id] && isOpenTwo && (
                                <div className="absolute -left-1 w-[196px] h-[90px] py-2 bg-white rounded-xl shadow border border-zinc-200 flex-col justify-start items-start flex">
                                  <button>Delete</button>
                                </div>
                              )}
                            </div>
                            <img
                              src={item.item_image}
                              alt={item.item_name}
                              className="w-9 h-[27.22px]"
                            />
                            <span className="text-zinc-800 text-sm font-normal leading-[21px]">
                              {item.item_name}
                            </span>
                          </div>
                          <div className="flex p-2 items-center">
                            <span className="items-center content-center">
                              <IoIosAddCircle />
                            </span>
                            <button onClick={() => handleShow(item._id)}>
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    <button onClick={() => setShowTwo(true)}>Create New</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className={
              "bg-[#E32B87] mb-6 text-white font-bold py-2 px-4 rounded-xl w-10/12 mt-5 mx-auto text-center "
            }
          >
            Continue
          </button>
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
          <AddItem itemId={selectedItemId} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default StepSix;
