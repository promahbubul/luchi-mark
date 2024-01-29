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
    <div className="flex flex-col md:flex-row md:gap-3 justify-between">
      <div className="flex flex-col ">
        <PageTitle>Environment</PageTitle>
        <select
          name=""
          className="text-2xl lg:text-4xl pr-5 outline-none text-primary font-medium leading-normal bg-transparent"
          id=""
        >
          <option value="" className="">
            Metanote
          </option>
        </select>
      </div>
      <div className="">
        {/* right top */}
        <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0 md:justify-end">
          <RoundedButton className={"bg-primary h-max  text-white"}>
            + New Evironment
          </RoundedButton>
          <div className="flex flex-row gap-2 justify-end">
            <div className="text-primary h-max  bg-secondary p-2 rounded-full cursor-pointer">
              <IoSettingsOutline className=" text-2xl" />
            </div>
            <div className="text-primary h-max  bg-secondary p-2 rounded-full cursor-pointer">
              <IoNotificationsOutline className=" text-2xl" />
            </div>
          </div>
        </div>
        {/* right bottom */}
        <div className="mt-3 flex justify-between  flex-wrap  lg:flex-row gap-2 items-center">
          <div className="flex flex-row lg:gap-5  gap-2 md:justify-start justify-between  w-full md:w-max">
            <Button className={"bg-info text-primary"}>Manage fields</Button>
            <Button className={"bg-info text-primary"}>Export all</Button>
          </div>
          <div className="">
            <button onClick={() => handleLayoutView("list")} className="">
              <PiListFill
                className={`text-2xl ${
                  layoutView === "list" ? " text-primary" : " text-dark-gray"
                }  `}
              />
            </button>
            <button onClick={() => handleLayoutView("grid")} className="">
              <IoMdGrid
                className={`text-2xl ${
                  layoutView === "grid" ? " text-primary" : " text-dark-gray"
                }`}
              />
            </button>
          </div>
          <p className="text-dark-gray text-xs font-medium leading-normal">
            Order by <span className="text-primary font-bold">Last edit</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
