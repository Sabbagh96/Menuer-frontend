import React from 'react'

const Login = () => {

  return (
    <div className="relative">
      <div className=" bg-white w-1/3 border rounded-xl min-h-96 absolute right-32 top-32  ">
        <h1 className="mt-8 flex ml-10 text-xl font-bold">Login</h1>
        <div className='font-semibold'>
          <div className="flex ml-10 text-sm ">
            Doesn't have an account?
            <span className="ml-1 text-[#E32B87] underline"> Create Account</span>
          </div>
        </div>
        <div>
          <div className="font-semibold flex text-sm justify-start ml-10 mt-6">
            Email Address
          </div>
          <input
            className="flex border-[1px] border-gray-300 rounded-lg mt-1 ml-10 w-3/4 h-11 p-2 "
            type="email"
            placeholder="example@gmail.com"
           
          />
          <div className="flex flex-nowrap flex-col justify-around mt-3">
            <div className="font-semibold text-sm text-start ml-10 ">
              Password
            </div>
            <input
              className="flex border-[1px] border-gray-300 rounded-lg mt-1 ml-10 w-3/4 h-11 content-center text-nowrap px-2"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          
          <button
            
        
            className="bg-[#E32B87] text-white font-bold py-2 px-4 rounded-xl  w-3/4 mt-5 mr-6 text-center "
          >
            Login
          </button>
          
        </div>
      </div>
    </div>
  );
}



export default Login
