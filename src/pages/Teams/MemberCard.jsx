import React from "react";
import { IoTrashOutline } from "../../assets/Icons/Icons";
import { avatar } from "../../assets/images/Images";

const MemberCard = () => {
  return (
    <div className="bg-gray-bg-3 px-4 py-3 rounded-md flex flex-row justify-between">
      <div className="flex flex-row gap-5 items-center">
        <img src={avatar} alt="" className="" />
        <h4 className="text-black-1 text-base font-medium">Liam Trampota</h4>
      </div>
      <div className="flex flex-row gap-5 ">
        <select
          name=""
          className="text-primary text-sm outline-none bg-primary-soft-2 font-medium cursor-pointer  rounded-md px-5"
          id=""
        >
          <option value="" className="">
            Administrator
          </option>
        </select>

        <button className="">
          <IoTrashOutline className="text-primary text-xl" />
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
