import React from "react";
import {
  avatarThree,
  avatarTwo,
  taskCardImage,
} from "../../assets/images/Images";
import { GrAttachment, MdOutlineComment } from "../../assets/Icons/Icons";

const TaskCard = () => {
  return (
    <div className="bg-white p-2 rounded-md cursor-pointer">
      {/* top */}
      <div className="flex flex-row gap-2">
        <span className="bg-[#FEF3E4]  text-[#F49F21] font-medium text-xs  py-1 px-3 rounded-md">
          Medium
        </span>
        <span className="bg-[#218FF41F] text-primary font-medium text-xs  py-1 px-3 rounded-md">
          Dev
        </span>
      </div>
      <h2 className="text-sm font-medium text-black-1 mt-3">
        Not able to manage default access
      </h2>
      <img
        src={taskCardImage}
        alt=""
        className="w-full rounded-md h-[150px] mt-3 border"
      />
      <div className="flex flex-row justify-between mt-3">
        {/* left */}
        <div className=" text-gray-text-4 flex flex-row gap-2">
          <div className="flex flex-row gap-1 items-center">
            <GrAttachment className="text-sm" />
            <span className="text-xs font-medium leading-4">4</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <MdOutlineComment className="text-sm" />
            <span className="text-xs font-medium leading-4">4</span>
          </div>
        </div>
        {/* ritht */}
        <div className="flex flex-row items-center">
          <img src={avatarTwo} alt="" className=" z-20" />
          <img src={avatarThree} alt="" className="-ml-2" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
