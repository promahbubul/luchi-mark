import React from "react";
import { taskCardImage } from "../../assets/images/Images";
import {
  MdOutlinePhotoCamera,
  HiOutlineVideoCamera,
} from "../../assets/Icons/Icons.jsx";

const ListCard = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 w-full bg-gray-bg-3 py-2 px-3 rounded-md gap-2 items-center">
      <img src={taskCardImage} className="col-span-2 " />
      <p className="col-span-1  text-black-1 font-medium text-base">#1</p>
      <h5 className="col-span-2  text-black-1 font-medium text-base">
        Contact form
      </h5>
      <h5 className="col-span-2 text-black-1 font-medium text-base">
        Contact form
      </h5>
      <div className="col-span-2 flex flex-row gap-4  text-black-1 font-medium text-base">
        <button className="">
          <MdOutlinePhotoCamera className="text-2xl cursor-pointer text-primary" />
        </button>
        <button className="">
          <HiOutlineVideoCamera className="text-2xl  text-gray-text-6" />
        </button>
      </div>
      <div className="col-span-3 flex flex-row justify-between text-black-1 font-medium text-base">
        <span className="py-2 px-4 rounded-full bg-[#F0E7D8] text-[#DF8C10]">
          Review
        </span>
        <div className="flex flex-row gap-4">
          <button className="font-bold text-sm  text-primary">Export</button>
          <button className="font-bold text-sm  text-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
