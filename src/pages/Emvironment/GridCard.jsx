import React from "react";
import { avatar, gridCard } from "../../assets/images/Images";
import { AiOutlineMessage, IoEyeOutline } from "../../assets/Icons/Icons";

const GridCard = () => {
  return (
    <div className="border cursor-pointer border-card-border-1 rounded-3xl">
      <div className="">
        <img src={gridCard} alt="" className="w-full  rounded-t-3xl" />
      </div>
      <div className="p-2">
        <h2 className="font-medium text-sm text-black-1 leading-5">
          Comments about Access Management
        </h2>
        <div className="mt-2 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <img src={avatar} alt="" className="" />
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
        <div className="flex flex-row justify-between p-2">
          <div className="flex flex-row gap-2">
            <button className="text-primary bg-primary-soft-2  rounded-full flex flex-row gap-1.5 px-3 py-1 items-center">
              <span className="">3</span>
              <IoEyeOutline className="text-xl" />
            </button>
            <button className="text-primary bg-primary-soft-2  rounded-full flex flex-row gap-1.5 px-3 py-1 items-center">
              <span className="">1</span>
              <AiOutlineMessage className="text-xl" />
            </button>
          </div>
          <p className="text-gray-text-5 text-xs font-medium leading-normal">
            2 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
