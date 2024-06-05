import axios from "axios";
import React, { useState, useEffect } from "react";
const FinancialSettings = () => {
  const [receipt, setreceipt] = useState({
    minimumCharge: 0,
    service: 0,
    taxes: 0,
    vats: 0,
  });

    useEffect(() => {

    handleSubmit();
  }, []);

    const handleSubmit = (e) => {
      
    axios
      .post(
        "http://localhost:4000/menuer/business/dashboard/businessManger/receipt-setting/set-financial",
        { receipt } , 
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <form onClick={handleSubmit}>
      <div className="relative w-full h-screen bg-gray-100 flex items-start justify-center pt-12">
        <div className="bg-white w-2/3 border rounded-xl h-auto shadow-lg p-6">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">
              Receipt Settings - Financial Settings
            </h1>
            <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg">
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
                  setreceipt({ ...receipt, minimumCharge: e.target.value })
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
                  setreceipt({ ...receipt, service: e.target.value })
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
                  setreceipt({ ...receipt, vats: e.target.value })
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
                  setreceipt({ ...receipt, taxes: e.target.value })
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
