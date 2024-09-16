import React, { useState } from "react";
import {
  BsFillPeopleFill,
  BsFillLockFill,
  BsFillGeoAltFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillHouseFill,
  BsFillPinMapFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserAddIcon } from "@heroicons/react/solid";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };
  // ============= Event Handler End here ===============

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      if (!city) {
        setErrCity("Enter your city name");
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
      }
      if (!zip) {
        setErrZip("Enter the zip code of your area");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center  ">
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-full px-6 py-4">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full flex flex-col items-center px-6 py-4 ">
            <div className="w-full h-full max-w-md flex flex-col justify-center  scrollbar-thin scrollbar-thumb-primeColor rounded-xl pt-10 pb-10 pr-10 pl-10 bg-slate-50">
              <div className="w-full h-full max-w-md flex flex-row justify-center space-x-8">
                <UserAddIcon className="h-9 w-9 text-primeColor" />
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                  Create your account
                </h1>
              </div>
              <div className="flex flex-col gap-4 w-full ">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-titleFont font-medium"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={clientName}
                      onChange={handleName}
                      placeholder="Enter your full name"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPeopleFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errClientName && (
                    <p className="text-red-600 text-sm">{errClientName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-titleFont font-medium"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Enter your email address"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillEnvelopeFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errEmail && (
                    <p className="text-red-600 text-sm">{errEmail}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-titleFont font-medium"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={handlePhone}
                      placeholder="Enter your phone number"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillTelephoneFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errPhone && (
                    <p className="text-red-600 text-sm">{errPhone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-titleFont font-medium"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePassword}
                      placeholder="Create a password"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillLockFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errPassword && (
                    <p className="text-red-600 text-sm">{errPassword}</p>
                  )}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="address"
                    className="text-sm font-titleFont font-medium"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={handleAddress}
                      placeholder="Enter your address"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillHouseFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errAddress && (
                    <p className="text-red-600 text-sm">{errAddress}</p>
                  )}
                </div>

                {/* City */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="city"
                    className="text-sm font-titleFont font-medium"
                  >
                    City <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={handleCity}
                      placeholder="Enter your city"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPinMapFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errCity && <p className="text-red-600 text-sm">{errCity}</p>}
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="country"
                    className="text-sm font-titleFont font-medium"
                  >
                    Country <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="country"
                      value={country}
                      onChange={handleCountry}
                      placeholder="Enter your country"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillGeoAltFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errCountry && (
                    <p className="text-red-600 text-sm">{errCountry}</p>
                  )}
                </div>

                {/* Zip Code */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="zip"
                    className="text-sm font-titleFont font-medium"
                  >
                    Zip Code <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="zip"
                      value={zip}
                      onChange={handleZip}
                      placeholder="Enter your zip code"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPinMapFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errZip && <p className="text-red-600 text-sm">{errZip}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="h-5 w-5"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-titleFont font-medium"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="w-full h-12 bg-slate-800 hover:bg-slate-600 rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:text-white duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
