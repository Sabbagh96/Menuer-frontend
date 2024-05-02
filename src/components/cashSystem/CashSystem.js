import React from "react";
import MenuBar from "../menuBar/MenuBar";
import CurrentShift from "./CurrentShift";
import ShiftOrders from "./ShiftOrders";

const CashSystem = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex ">
        <div className="w-[304px] h-[796px]  ">
          <div className="">
            <MenuBar />
          </div>
        </div>

        <div className="flex-grow ">
          <div className="flex flex-row justify-around -mx-36 p-2">
            <div>Cash System</div>
            <button>New Receipt</button>
          </div>
          <CurrentShift />
          <ShiftOrders />
        </div>
      </div>
    </div>
  );
};

export default CashSystem;
