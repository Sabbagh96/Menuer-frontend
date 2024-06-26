import React from "react";
import { Link } from "react-router-dom";

const StuffMembers = () => {
  return (
    <div className="w-[870px] h-[140px] shadow-xl border px-6 pt-3 pb-6 rounded-3xl my-[24px] mx-20 ">
      <div className="flex flex-col ">
        <div className="mb-[5px] flex p-2  text-zinc-800 text-lg font-medium">
          Stuff Members
        </div>
        <div className="flex justify-between">
          <Link to={"/activemembers"}>
            <div className="w-[395px] h-[50px] border rounded-2xl px-4 py-6 flex items-center justify-between">
              {" "}
              <div className="flex gap-2">
                
                <div>View Active Members</div>
              </div>
              
            </div>
          </Link>
          <Link to={"/addnew"}>
            <div className="w-[395px] h-[50px] border rounded-2xl px-4 py-6 flex items-center justify-between">
              <div className="flex gap-2">
                
                <div>Add New Member</div>
              </div>
              
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StuffMembers;
