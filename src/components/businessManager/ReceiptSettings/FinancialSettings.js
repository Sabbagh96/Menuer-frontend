import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../../../helper/Storage";

const FinancialSettings = () => {
  const auth = getAuthUser();
  const navigate = useNavigate();
  const [receipt, setReceipt] = useState({
    minimumCharge: 0,
    service: 12,
    taxes: 0,
    vats: 0,
  });

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/menuer/business/dashboard/businessManger/receipt-setting/get-financial",
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.receipt;
        setReceipt({
          minimumCharge: data.minimum_charge,
          service: data.service,
          taxes: data.taxes,
          vats: data.vats,
        });
      })
      .catch((err) => console.error(err));
  }, [auth.data.token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      service: receipt.service,
      taxes: receipt.taxes,
      vats: receipt.vats,
      minimum_charge: receipt.minimumCharge,
    };

    axios
      .put(
        "http://localhost:4000/menuer/business/dashboard/businessManger/receipt-setting/update-financial",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/businessmanager"); // Navigate to a success page or wherever necessary
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full h-screen bg-gray-100 flex items-start justify-center pt-12">
        <div className="bg-white w-2/3 border rounded-xl h-auto shadow-lg p-6">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">
              Receipt Settings - Financial Settings
            </h1>
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg"
            >
              Save Changes
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Minimum Charge</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="0 L.E."
                value={receipt.minimumCharge}
                onChange={(e) =>
                  setReceipt({ ...receipt, minimumCharge: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Service</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="12%"
                value={receipt.service}
                onChange={(e) =>
                  setReceipt({ ...receipt, service: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-2">VATs</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="0%"
                value={receipt.vats}
                onChange={(e) =>
                  setReceipt({ ...receipt, vats: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Taxes</label>
              <input
                type="text"
                className="border rounded-lg p-2"
                placeholder="0%"
                value={receipt.taxes}
                onChange={(e) =>
                  setReceipt({ ...receipt, taxes: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FinancialSettings;
