function ReceiptDetails() {
  return (
    <div className="max-w-sm mx-auto bg-white text-black rounded-xl shadow-lg p-6 border border-gray-300 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Receipt Details</h2>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium ">Client</label>
        <div className="flex items-center mt-1 border border-gray-200 p-2 rounded-xl">
          <img
            className="h-10 w-10 rounded-xl"
            src="https://placehold.co/40x40"
            alt="Client"
          />
          <span className="ml-3">Ahmed Mohamed</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium ">Dining</label>
        <select className="mt-1 block w-full p-3  text-base border border-gray-200  sm:text-sm rounded-xl bg-white  text-black ">
          <option>Dine In</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium ">Payment Method</label>
        <select className="  mt-1 block w-full p-3  text-base border border-gray-200  sm:text-sm rounded-xl bg-white  text-black ">
          <option>Visa</option>
        </select>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center text-sm font-medium ">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 " />
            <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 ">
              Items
            </span>
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between  ">
            <span>x4 Chicken Shawerma Fattah</span>
            <span>480 L.E.</span>
          </div>
          <div className="flex justify-between ">
            <span>x1 Old School Burger Sandwich</span>
            <span>150 L.E.</span>
          </div>
          <div className="flex justify-between ">
            <span>x2 Orange Juice</span>
            <span>120 L.E.</span>
          </div>
          <div className="flex justify-between ">
            <span>12% Service</span>
            <span>141 L.E.</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center text-lg font-semibold ">
        <span>Subtotal :</span>
        <span className="text-pink-500">1,321 L.E.</span>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button className="rounded-3xl btn-sm border border-gray-400">
          Close
        </button>
        <button className="btn background-cerise-10-a btn-sm">print</button>
      </div>
    </div>
  );
}

export default ReceiptDetails;
