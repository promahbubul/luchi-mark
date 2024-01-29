import React, { useState } from "react";
import { blackLogo } from "../../assets/images/Images";
import {
  IoEyeOffSharp,
  IoEyeOutline,
  FcGoogle,
} from "../../assets/Icons/Icons";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

const LoginForm = () => {
  const [typeChange, setTypeChange] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    alert(`Login Successfully \n Emial: ${email} \n Password: ${password}`);
  };
  return (
    <div className="border w-full md:w-4/12 bg-white rounded-3xl px-4 py-3 lg:py-8 lg:px-12 flex flex-col justify-between">
      {/* top */}
      <div className="">
        <div className="text-center mx-auto mt-8 md:mt-10">
          <img src={blackLogo} alt="" className=" mx-auto" />
          <h1 className="text-4xl leading-8 font-normal mt-6">Welcome</h1>
          <p className="text-dark-gray  mt-3 leading-8 text-sm font-normal">
            Please enter your details
          </p>
        </div>
        <form onSubmit={handleLogin} className="mt-5 md:mt-7">
          <div className="">
            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-input-border py-2 outline-none px-6 my-0.5 placeholder:text-black-1 text-black-1 text-sm font-medium leading-8"
            />
          </div>
          <div className="mt-3 relative">
            <input
              name="password"
              required
              type={typeChange ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-md border border-gray-input-border py-2 outline-none px-6 my-0.5 placeholder:text-black-1 text-black-1 text-sm font-medium leading-8"
            />

            {typeChange ? (
              <IoEyeOffSharp
                onClick={() => {
                  setTypeChange(!typeChange);
                }}
                className="text-primary text-2xl absolute top-[14px] cursor-pointer hover:text-primary right-3"
              />
            ) : (
              <IoEyeOutline
                onClick={() => {
                  setTypeChange(!typeChange);
                }}
                className="text-dark-gray text-2xl absolute top-[14px] cursor-pointer hover:text-primary right-3"
              />
            )}
          </div>
          <Link
            to={""}
            className="text-dark-gray hover:text-primary block mt-2 text-xs font-medium leading-8 text-right"
          >
            Forgot Password?
          </Link>

          <input
            type="submit"
            value="Log In"
            className="text-white py-3 rounded-lg bg-primary w-full mt-7 leading-8 font-medium text-sm cursor-pointer"
          />
          <button className="bg-secondary w-full rounded-lg flex flex-row gap-3 items-center py-3 justify-center mt-3 leading-8 text-sm text-black-2 font-medium">
            <FcGoogle className="text-2xl" />
            Log in with Google
          </button>
        </form>
      </div>
      {/* bottom */}
      <div className="">
        <p className="mt-4 text-center text-black-2 text-sm font-normal leading-8">
          Don´t have an account?{" "}
          <Link to={""} className="font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
