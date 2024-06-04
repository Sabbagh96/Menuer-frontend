import React, { useState, useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";
import CurrentShift from "./CurrentShift";
import ShiftOrders from "./ShiftOrders";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CashSystem = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/menuer/business/dashboard/cashsystem/shift")
      .then((response) => {
        if (response.status === "fail") {
          navigate("/startnewshift");
        } else {
          navigate("/cash");
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
