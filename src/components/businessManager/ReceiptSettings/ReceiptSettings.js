import React from "react";

const ReceiptSettings = () => {
  return (
    <div className="w-[870px] h-[140px] shadow-xl border px-6 pt-3 pb-6 rounded-3xl my-[24px] mx-20 ">
      <div className="flex flex-col ">
        <div className="mb-[5px] flex p-2  text-zinc-800 text-lg font-medium">
          Receipt Settings
        </div>
        <div className="flex justify-between">
          <div className="w-[395px] h-[50px] border rounded-2xl px-4 py-6 flex items-center justify-between">
            {" "}
            <div className="flex gap-2">
              <span>Icon</span>
              <div>Financial Settings</div>
            </div>
            <div>Icon</div>
          </div>
          <div className="w-[395px] h-[50px] border rounded-2xl px-4 py-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span>Icon</span>
              <div>Customize Design</div>
            </div>
            <div>Icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptSettings;
