import React from "react";
import PageTitle from "../ui/PageTitle";
import { IoSettingsOutline } from "../../assets/Icons/Icons";

const MainHeader = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <PageTitle>Environment</PageTitle>
        <span className="text-primary bg-primary-soft-2 p-2 rounded-md cursor-pointer">
          <IoSettingsOutline className=" text-2xl" />
        </span>
      </div>
      <div className="">
        <select
          name=""
          className="text-4xl pr-5 outline-none text-primary font-medium leading-normal bg-transparent"
          id=""
        >
          <option value="" className="">
            Metanote
          </option>
        </select>
      </div>
    </div>
  );
};

export default MainHeader;
