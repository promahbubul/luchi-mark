import React, { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import {
  IoNotificationsOutline,
  IoSettingsOutline,
  IoMdGrid,
  PiListFill,
} from "../../assets/Icons/Icons";
import RoundedButton from "../../components/ui/Button/RoundedButton";
import Button from "../../components/ui/Button/Button";

const Heading = ({ handleLayoutView, layoutView }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col ">
        <PageTitle>Environment</PageTitle>
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
      <div className="">
        {/* right top */}
        <div className="flex flex-row gap-2">
          <RoundedButton className={"bg-primary h-max  text-white"}>
            + New Evironment
          </RoundedButton>
          <div className="text-primary h-max  bg-gray-bg-3 p-2 rounded-full cursor-pointer">
            <IoSettingsOutline className=" text-2xl" />
          </div>
          <div className="text-primary h-max  bg-gray-bg-3 p-2 rounded-full cursor-pointer">
            <IoNotificationsOutline className=" text-2xl" />
          </div>
        </div>
        {/* right bottom */}
        <div className="mt-3 flex flex-row gap-2 items-center">
          <Button className={"bg-primary-soft-2 text-primary"}>
            Manage fields
          </Button>
          <Button className={"bg-primary-soft-2 text-primary"}>
            Export all
          </Button>
          <button onClick={() => handleLayoutView("list")} className="">
            <PiListFill
              className={`text-2xl ${
                layoutView === "list" ? " text-primary" : " text-gray-text-5"
              }  `}
            />
          </button>
          <button onClick={() => handleLayoutView("grid")} className="">
            <IoMdGrid
              className={`text-2xl ${
                layoutView === "grid" ? " text-primary" : " text-gray-text-5"
              }`}
            />
          </button>
          <p className="text-gray-text-5 text-xs font-medium leading-normal">
            Order by <span className="text-primary font-bold">Last edit</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;