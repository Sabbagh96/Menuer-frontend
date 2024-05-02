import React from "react";
import MenuBar from "./menuBar/MenuBar";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex ">
        <div className="w-[304px] h-[796px]  ">
          <div className="">
            <MenuBar />
          </div>
        </div>

        <div className="flex-grow  ">
          <div className="w-full h-[100px] rounded-3xl justify-center items-center inline-flex relative mt-[80px]">
            <img className="w-[870px] h-[200px] rounded-3xl absolute" src="" />
            <div className="absolute inline-flex">
              <div className="w-16 h-16 rounded-xl absolute -top-14 -inset-80 -right-20 z-50 bg-red-900 ">
                dsa
              </div>
              <img className=" w-16 h-16 bg-red-800 rounded-2xl " />
              <div className="h-16 pt-5 ml-2">Name</div>
            </div>
          </div>
          <div className=" h-[37px] w-[870px] mx-auto  items-center content-center flex mt-[60px]">
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
          </div>

          <div className="w-[870px] h-[46px] inline-flex justify-start mx-auto mt-[20px] gap-2">
            <input
              className="w-[642px] h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
              placeholder="Search for an item"
            />
            <button className="w-[114px] h-[46px] px-5 py-3 bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
              Sort by
            </button>
            <button className="w-[114px] h-[46px] px-5 py-3 bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
              Filter
            </button>
          </div>
          {/*Do the map here under this on items */}

          <div className="w-[870px] grid grid-cols-2 mx-auto gap-4 mt-[36px]">
            <div className="w-[400] h-44 p-6 bg-white rounded-3xl border border-slate-500 border-opacity-20 inline-flex justify-start items-start">
              {/*Put the image here under this of an item */}
              <div className="w-32 h-32 rounded-2xl bg-red-600"></div>
              <div className="flex flex-col">
                <div className="w-full text-zinc-800 text-base p-3 -mt-3 font-normal font-['Alexandria'] leading-normal">
                  Chicken Shawerma Fattah
                </div>
                <div className="w-[230px] h-[56px] text-gray-500 text-sm font-light font-['Alexandria'] leading-[21px]">
                  {"Chicken Shawerma Fattah".substring(0, 20)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
