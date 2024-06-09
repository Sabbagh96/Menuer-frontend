import React from "react";
import MenuBar from "../menuBar/MenuBar";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import StuffMembers from "./Stuff/StuffMembers";
import GeneralDetails from "./GeneralDetails/GeneralDetails";
import ReceiptSettings from "./ReceiptSettings/ReceiptSettings";

const BussinessManager = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex ">
        <div className="w-[304px] h-[796px]  ">
          <div className="">
            <MenuBar />
          </div>
        </div>

        <div className="flex-grow  ">
          <div className="flex flex-row mt-6 mx-20  text-zinc-800 text-lg font-medium p-2">
            <div className="">Bussiness Manager</div>
          </div>

          <div className="w-[870px] h-[140px] shadow-xl border px-6 pt-3 pb-6 rounded-3xl my-[24px] mx-20 ">
            <div className="flex flex-col ">
              <div className="mb-[5px] flex p-2  text-zinc-800 text-lg font-medium">
                Qr Code
              </div>
              <Link to="/qrdesign">
                {" "}
                <div className="w-[800px] h-[50px] border rounded-2xl px-4 py-6 flex items-center justify-between">
                  {" "}
                  <div className="flex gap-2">
                
                    <div>Customize Design</div>
                  </div>
                  
                </div>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <StuffMembers />
          </div>
          <div className="my-5">
            <GeneralDetails />
          </div>
          <div className="my-5">
            <ReceiptSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessManager;
