import React from "react";
import { linkRound } from "../assets/LinkRound.jpg";
const StepFive = ({ nextPage }) => {
  return (
    <div className="relative">
      <div className="bg-white w-1/3 border rounded-xl min-h-96 absolute right-32 top-20 z-50 shadow-lg">
        <div className="mt-8 flex ml-10 text-xl font-bold mx-auto">
          Create Account
        </div>
        <div className="w-1/3 h-1.5 py-0.5 justify-center items-center inline-flex">
          <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
            <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
            <div className="w-[187px] h-0.5 bg-pink-600 rounded-full" />
          </div>
        </div>
        <div className="w-[374px] h-9 justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 h-[27px] justify-start items-center gap-1 flex">
            
            <div className="text-zinc-800 text-lg font-medium font-['Alexandria'] leading-[27px]">
              Add Contact Details
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="p-2 rounded-3xl justify-center items-center gap-2 flex">
              <div className="w-[31px] justify-center items-center gap-1 flex">
                <div className="text-center text-gray-500 text-sm font-medium font-['Alexandria'] leading-[21px]">
                  Skip
                </div>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default StepFive;
