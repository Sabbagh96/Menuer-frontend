import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { getAuthUser, removeAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom";
import { RiHome6Fill } from "react-icons/ri";
import { LuMenuSquare } from "react-icons/lu";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { SiGooglemybusiness } from "react-icons/si";

const MenuBar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const Logout = () => {
    removeAuthUser();
    navigate("/");
  };
  const auth = getAuthUser();

  const activeStyle = { backgroundColor: "pink" };
  const iconStyle = { color: "darkpink" }; // Adjust the pink color here

  return (
    <div className="">
      <div className="w-[304px] h-[796px] px-6 py-12 bg-white border-r border-gray-500 border-opacity-10 flex-col shadow-lg justify-between items-center inline-flex ">
        <div className="sticky top-4">
          <div className="w-64 h-[39px] mb-[24px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              {/* img from backend */}

              <div className="flex-col justify-center items-start inline-flex ">
                <div className="flex flex-col ml-8 text-pink-600-800 text-sm font-normal font-['Alexandria'] leading-[21px]">
                  <div className="m-1">
                    Welocme To
                    <span className="border rounded-3xl text-pink-500 m-1 ">
                      {" "}
                      Menuer
                    </span>{" "}
                  </div>
                  <div className="text-gray-500 text-3xs font-light font-['Alexandria'] leading-[18px] -mt-1">
                    {auth.data.data.first_name} {""} {auth.data.data.last_name}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 relative">
              <button className="cursor-pointer" onClick={() => setShow(!show)}>
                <IoIosArrowDropdown />
              </button>
            </div>
          </div>
          {show && (
            <div className="w-32 h-20 absolute right-0 top-7 cursor-default bg-white border border-gray-500 rounded-2xl ">
              <button onClick={Logout} className="w-full rounded-2xl p-2 ">
                Logout
              </button>
            </div>
          )}

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex rounded-full -mt-10 ">
            <NavLink
              to="/home"
              style={({ isActive }) =>
                isActive ? activeStyle : { border: "none" }
              }
              className="w-full h-full rounded-full no-border" // Added no-border class
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="" style={iconStyle}>
                    <RiHome6Fill />
                  </div>
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Home
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/allsections"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="w-full h-full rounded-full no-border"
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div
                    className="w-5 h-5 relative rounded-[5px]"
                    style={iconStyle}
                  >
                    <LuMenuSquare />
                  </div>
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Menu Manager
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/cash"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="w-full h-full rounded-full no-border"
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div
                    className="w-5 h-5 relative rounded-[5px]"
                    style={iconStyle}
                  >
                    <LiaCashRegisterSolid />
                  </div>
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Cash System
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/reports"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="w-full h-full rounded-full no-border"
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div
                    className="w-5 h-5 relative rounded-[5px]"
                    style={iconStyle}
                  >
                    <TbReportSearch />
                  </div>
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Reports
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/businessmanager"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="w-full h-full rounded-full no-border"
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div
                    className="w-5 h-5 relative rounded-[5px]"
                    style={iconStyle}
                  >
                    <SiGooglemybusiness />
                  </div>
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Business Manager
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MenuBar;
