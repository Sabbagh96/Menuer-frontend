import React from "react";

const ManageItem = () => {
  return (
    <div className="w-[300px] h-[300px] border border-gray-500 rounded-xld">
      <div className="flex ">
        <div>
          <div className="w-20 h-20  border bg-red-700 ">
            <div className="">img</div>
          </div>
          <div className="  ">Name</div>
        </div>
        <div className="flex-grow  ">
          <div className="flex flex-col">
            <div>Display Name</div>
            <input />
            <div>Menu Section </div>
            {/* Here you will get the sections name from backend  */}
            <input />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div>Default Variant</div>
              <input className="mt-1" type="text" />
            </div>
            <div className="flex flex-col justify-start">
              <div>Price</div>
              <input className="mt-1" type="text" />
            </div>
          </div>
          <button>Add </button>
          <div className="flex flex-col">
            <div>Description</div>
            <input />
          </div>
          <div className="flex justify-end">
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
