import React from "react";
import { whtieLogo } from "../../assets/images/Images";

const Banner = () => {
  return (
    <div className="w-full md:w-8/12 rounded-3xl font-space-grotesk md:py-10 py-5  md:px-8  px-4 border border-[#FFFFFF1F] bg-gradient-to-r  from-[#d9d9d933] to-[#3876FE33] backdrop-blur-sm">
      <div className="flex flex-row gap-3 items-center justify-center md:justify-start ">
        <img src={whtieLogo} alt="" className="" />
        <h3 className="text-white text-4xl font-medium leading-[57px]">
          Lucidmark.
        </h3>
      </div>
      <h1
        className="justify-center md:justify-start mt-6 md:mt-10 text-3xl md:text-5xl lg:text-6xl font-normal
       md:leading-[88px] md:w-[550px]  leading-tight text-white  "
      >
        Enhance your worflow, today.
      </h1>
      <div className="h-max md:h-[calc(100vh-398.467px)]  flex justify-start items-end md:mt-0 mt-5">
        <div className=" w-20 h-20 md:w-44 md:h-44 rounded-full border border-[#d9d9d933] flex items-center justify-center">
          <div
            className="h-16 w-16 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gradient-to-r from-[#2C4477] to-[#3F6FD7] border border-[#ffffff1f]
        "
          >
            <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
