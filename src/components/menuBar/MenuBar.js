import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { getAuthUser, removeAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const Logout = () => {
    removeAuthUser();
    navigate("/");
  };
  const auth = getAuthUser();
  console.log(auth);

  return (
    <div className="">
      <div className="w-[304px] h-[796px] px-6 py-12 bg-white border-r border-gray-500 border-opacity-10 flex-col shadow-lg justify-between items-center inline-flex ">
        <div className="sticky top-4">
          <div className="w-64 h-[39px] mb-[24px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              {/* img from backend */}
              <img src="" className="w-[39px] h-[39px] relative" />
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-zinc-800 text-sm font-normal font-['Alexandria'] leading-[21px]"></div>
                <div className="text-gray-500 text-xs font-light font-['Alexandria'] leading-[18px]">
                  {auth.data.first_name } {" "} 
                  {auth.data.last_name}
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

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex rounded-full ">
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "pink" } : {};
              }}
              className="w-full h-full rounded-full "
            >
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative" />
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Home
                  </div>
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="text-white text-[11px] font-medium font-['Inter'] leading-none">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/allsections"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "pink" } : {};
              }}
              className="w-full h-full rounded-full"
            >
              {" "}
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative rounded-[5px]" />
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Menu Manager
                  </div>
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="text-white text-[11px] font-medium font-['Inter'] leading-none">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/cash"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "pink" } : {};
              }}
              className="w-full h-full rounded-full"
            >
              {" "}
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative rounded-[5px]" />
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Cash System
                  </div>
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="text-white text-[11px] font-medium font-['Inter'] leading-none">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/reports"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "pink" } : {};
              }}
              className="w-full h-full rounded-full"
            >
              {" "}
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative rounded-[5px]" />
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Reports
                  </div>
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="text-white text-[11px] font-medium font-['Inter'] leading-none">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="w-64 h-[45px] flex-col justify-center items-center inline-flex">
            <NavLink
              to="/businessmanager"
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "pink" } : {};
              }}
              className="w-full h-full rounded-full"
            >
              {" "}
              <div className="self-stretch h-[45px] px-4 py-3 rounded-xl flex-col justify-center items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative rounded-[5px]" />
                  <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
                    Business Manager
                  </div>
                  <div className="w-4 h-4 bg-pink-600 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="text-white text-[11px] font-medium font-['Inter'] leading-none">
                      2
                    </div>
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
