import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("", JSON.stringify({ user, pwd }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate("/home");
      {
        /*
         const hasBusiness = response?.data?.hasBusiness;
    if (hasBusiness) {
      // Navigate to the business page
      navigate("");
    } else {
      // Navigate to the create Menuer page 
      navigate("");
    } */
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="relative bg-hero_section h-screen w-full">
      <div className=" bg-white w-1/3 border rounded-xl min-h-96 absolute right-32 top-32  ">
        <h1 className="mt-8  flex ml-10 text-xl font-bold">Login</h1>
        <div className="font-semibold">
          <div className="flex ml-10 text-sm ">
            Doesn't have an account?
            <Link to="/register">
              <span className="ml-1 text-[#E32B87] underline">
                {" "}
                Create Account
              </span>
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="font-semibold flex text-sm justify-start ml-10 mt-6">
              Email Address
            </div>
            <input
              className="flex border-[1px] border-gray-300 rounded-2xl mt-1 ml-10 w-[374px] h-14 p-2  "
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              ref={userRef}
            />
            <div className="flex flex-nowrap flex-col justify-around mt-3">
              <div className="font-semibold text-sm text-start ml-10 ">
                Password
              </div>
              <input
                className="flex border-[1px] border-gray-300 mt-1 ml-10 w-[374px] h-14 rounded-2xl content-center text-nowrap px-2"
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#E32B87] text-white font-bold py-2 px-4 rounded-xl w-[374px] h-[52px] justify-center items-center inline-flex mt-5  text-center ml-6 "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
