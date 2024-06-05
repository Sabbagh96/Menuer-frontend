import React from "react";

const AccountCreated = () => {
  return (
    <div className="relative w-full h-screen bg-hero_section flex items-center justify-center">
      <div className="bg-white w-1/3 border rounded-xl h-auto shadow-lg">
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="font-bold text-center mt-8">Create Account</h1>
          <div className="flex items-center justify-center mt-2">
            <div className="h-2.5 w-2.5 bg-pink-500 rounded-full mt-4 mb-4"></div>
          </div>
          <h3 className="text-xl text-pink-600 font-semibold mt-4">
            You’re all done!
          </h3>
          <p className="text-gray-500 mt-2">
            Your Account was created successfully.
          </p>

          <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-xl w-10/12 mt-5">
            Create Your Business
          </button>

          <button className="text-gray-500 mt-4">Go To Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;
