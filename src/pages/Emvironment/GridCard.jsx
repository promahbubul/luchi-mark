import React from "react";
import { avatar, gridCard } from "../../assets/images/Images";
import { AiOutlineMessage, IoEyeOutline } from "../../assets/Icons/Icons";

const GridCard = () => {
  return (
    <div className="border cursor-pointer border-card-border-1 rounded-3xl h-max">
      <div className="">
        <img src={gridCard} alt="" className="w-full  rounded-t-3xl" />
      </div>
      <div className="p-2">
        <h2 className="font-medium text-sm text-black-1 leading-5">
          Comments about Access Management
        </h2>
        <div className="mt-2 flex flex-col gap-2 md:gap-0  lg:flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <img src={avatar} alt="" className="md:w-auto w-5" />
            <p className="text-xs text-black-1 font-normal">Liam Trampota</p>
          </div>
          <select
            name=""
            id=""
            className="text-xs text-[#8E8E8E] font-normal bg-transparent"
          >
            <option value="" className="text-[#B2B2B2]">
              Not Shared
            </option>
          </select>
        </div>
        <div className="flex flex-col  lg:flex-row justify-between md:p-2 lg:mt-0 mt-2">
          <div className="flex flex-row justify-between md:gap-2">
            <button className="text-primary bg-primary-soft-2  rounded-full flex flex-row gap-1.5 px-3 py-1 items-center">
              <span className="md:text-base text-sm">3</span>
              <IoEyeOutline className="text-sm md:text-xl " />
            </button>
            <button className="text-primary bg-primary-soft-2  rounded-full flex flex-row gap-1.5 px-3 py-1 items-center">
              <span className="md:text-base text-sm">1</span>
              <AiOutlineMessage className="text-sm md:text-xl" />
            </button>
          </div>
          <p className="text-gray-text-5 text-xs font-medium leading-normal text-end mt-2 lg:mt-0">
            2 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
