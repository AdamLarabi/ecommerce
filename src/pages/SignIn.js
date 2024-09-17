import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {successMsg ? (
          <div className="flex flex-col items-center">
            <p className="text-green-500 font-medium text-lg mb-4">
              {successMsg}
            </p>
            <Link to="/signup">
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300 pt-2 pb-2 pr-8 pl-8"
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <h1 className="font-titleFont text-3xl font-semibold text-center mb-6">
              Sign In
            </h1>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-base font-semibold text-gray-600"
              >
                Work Email
              </label>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-12 px-4 text-base rounded-md border border-gray-300 outline-none"
                type="email"
                id="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-semibold">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-base font-semibold text-gray-600"
              >
                Password
              </label>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-12 px-4 text-base rounded-md border border-gray-300 outline-none"
                type="password"
                id="password"
                placeholder="Your password"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-semibold">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-600 text-gray-200 hover:text-white cursor-pointer w-full h-12 rounded-md text-base font-medium duration-300"
            >
              Sign In
            </button>
            <p className="text-sm text-center font-medium ">
              Don't have an Account?{" "}
              <Link to="/signup">
                <span className="text-blue-600 hover:underline">Sign Up</span>
              </Link>
            </p>
          </form>
        )}
      </div>
      <button
        className="absolute top-3 left-4 bg-slate-500 hover:bg-slate-700 text-gray-200 hover:text-white cursor-pointer w-20 h-10 rounded-md text-sm font-medium flex items-center justify-center gap-2 duration-300"
        onClick={handleNavigate}
      >
        <FaArrowLeft />
        Home
      </button>
    </div>
  );
};

export default SignIn;
