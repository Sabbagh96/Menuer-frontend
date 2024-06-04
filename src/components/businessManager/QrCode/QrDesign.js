import React from "react";

const QrDesign = () => {
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

      <div className="w-[960px] border shadow-xl rounded-xl h-[230px] mt-[56.5px] mb-[56.5px] flex justify-between mx-auto px-4 flex-col">
        <div className="flex p-4">Choose Your Favourite Style</div>
        <div className="px-4 py-6 flex justify-start gap-6">
          <button className="w-[176px] h-[136px]  gap-8  bg-pink-600 bg-opacity-10 rounded-2xl  border border-slate-500 border-opacity-20 justify-center items-center  inline-flex">
            <div className="grow  shrink basis-0 flex-col justify-center items-center inline-flex">
              <img className="w-[80px] h-[60px] rounded-2xl" />

              <div className="self-stretch text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                Style (1)
              </div>
            </div>
          </button>
          <button className="w-[176px] h-[136px]  gap-8  bg-pink-600 bg-opacity-10 rounded-2xl  border border-slate-500 border-opacity-20 justify-center items-center  inline-flex">
            <div className="grow  shrink basis-0 flex-col justify-center items-center inline-flex">
              <img className="w-[80px] h-[60px] rounded-2xl" />

              <div className="self-stretch text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                Style (1)
              </div>
            </div>
          </button>
          <button className="w-[176px] h-[136px]  gap-8  bg-pink-600 bg-opacity-10 rounded-2xl  border border-slate-500 border-opacity-20 justify-center items-center  inline-flex">
            <div className="grow  shrink basis-0 flex-col justify-center items-center inline-flex">
              <img className="w-[80px] h-[60px] rounded-2xl" />

              <div className="self-stretch text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                Style (1)
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrDesign;
