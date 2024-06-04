import React from "react";

const AddNew = () => {
  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[56.5px] flex justify-between mx-auto px-4 ">
        <div className=" text-zinc-800  text-lg font-medium font-['Alexandria'] leading-[27px]">
          Qr Code - Customize Design
        </div>
        <button className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
          Save Changes
        </button>
      </div>

      <div className="w-[960px] border shadow-xl rounded-xl h-[230px] mt-[56.5px]  flex justify-between mx-auto px-4 flex-col">
        <div>
          <div className="flex p-4">New Member Details</div>
          <div className="flex justify-between">
            <div className="flex flex-col p-3 ml-1">
              <div className="flex">Email Address</div>
              <input
                className="w-[626px] h-11 mt-1 bg-white rounded-xl border border-zinc-200"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-start p-3">
              <div className="flex">Job Title</div>
              <input
                className="mt-1  w-[262px] h-11 p-3 bg-white rounded-xl border border-zinc-200"
                type="text"
              />
            </div>
          </div>
          <div className="w-[912px] h-6 mt-[25.5px] mb-[25.5px] justify-start items-center gap-5 inline-flex">
            <div className="text-neutral-400 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Allowed Pages
            </div>
            <div className="grow shrink basis-0 h-px bg-zinc-200 rounded-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
