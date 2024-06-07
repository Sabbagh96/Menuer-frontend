import React, { useState, useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";
import CurrentShift from "./CurrentShift";
import ShiftOrders from "./ShiftOrders";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getAuthUser } from "../../helper/Storage";

const CashSystem = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cashIn, setcashIn] = useState(null);
  const [cashOut, setcashOut] = useState(null);
  const [startedAt, setstartedAt] = useState(null);
  const [currentCash, setcurrentCash] = useState("");

  const auth = getAuthUser();

  useEffect(() => {
    axios
      .get("http://localhost:4000/menuer/business/dashboard/cashsystem/shift", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        setData(response);
        console.log(response.data, "Dataaaaa");
        setcashIn(response.data.shift.cashIn);
        setcashOut(response.data.shift.cashOut);
        setcurrentCash(response.data.shift.currentCash);
        setstartedAt(response.data.shift.startedAt);

        if (response.status === "fail") {
          navigate("/startnewshift");
        } else {
          navigate("/cash");
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
            <Link to={"/productlist"}>
              <button>New Receipt</button>
            </Link>
          </div>
          <CurrentShift
            cashIn={cashIn}
            cashOut={cashOut}
            currentCash={currentCash}
            startedAt={startedAt}
          />
          <ShiftOrders />
        </div>
      </div>
    </div>
  );
};

export default CashSystem;
