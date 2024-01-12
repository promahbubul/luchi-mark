import React from "react";
import { avatar, logo } from "../../assets/images/Images";
import {
  IoIosArrowForward,
  IoNotificationsOutline,
} from "../../assets/Icons/Icons";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <section className="bg-gray-bg-1 w-[320px] h-screen py-10 box-border">
      {/* top */}
      <div className="flex flex-col px-5 gap-10">
        <div className="flex flex-row  gap-2 items-center">
          <img src={logo} alt="" className="" />
          <h3 className="text-primary text-xl font-medium">Lucidmark.</h3>
        </div>
        <button className="bg-primary-soft-2 text-primary text-sm font-medium leading-normal py-3 rounded-full w-full">
          New Environment
        </button>
      </div>
      {/* middle */}
      <div className="h-[calc(100vh-350px)] ">
        <SidebarLinks />
      </div>
      {/* bottom */}
      <div className="px-5 flex flex-col gap-3">
        <div className="flex cursor-pointer flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <img src={avatar} alt="" className="" />
            <h4 className="text-sm text-gray-text-1 font-semibold">
              Liam Trampota
            </h4>
          </div>
          <IoIosArrowForward className="text-gray-text-1" />
        </div>
        <div className="flex cursor-pointer flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-primary p-2 rounded-full">
              <IoNotificationsOutline className="text-white text-xl" />
            </div>
            <h4 className="text-sm font-semibold text-gray-text-1">
              Notifications
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
