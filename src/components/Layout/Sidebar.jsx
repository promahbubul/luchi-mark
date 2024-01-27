import React, { useEffect, useState } from "react";
import { avatar, logo } from "../../assets/images/Images";
import {
  IoIosArrowForward,
  IoNotificationsOutline,
} from "../../assets/Icons/Icons";
import SidebarLinks from "./SidebarLinks";
import OffButton from "../ui/Button/ToggleButton/OffButton";
import OnButton from "../ui/Button/ToggleButton/OnButton";
import { SlMenu } from "react-icons/sl";
import { CgCloseO } from "react-icons/cg";

const Sidebar = ({ menu, setMenu }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {menu ? (
        ""
      ) : (
        <button
          onClick={() => setMenu(!menu)}
          className=" md:hidden text-right flex justify-end static
           mt-5 mr-5"
        >
          <SlMenu className="text-2xl" />
        </button>
      )}
      {menu ? (
        <div
          onClick={() => setMenu(!menu)}
          className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-black-1/70"
        ></div>
      ) : (
        ""
      )}
      <section
        className={`bg-gray-bg-1    z-10 duration-300 transition-transform  md:block md:w-[320px] h-screen py-5 box-border dark:bg-blue-sidebar ${
          menu ? "fixed w-10/12" : "hidden"
        }`}
      >
        <div className="h-full w-full  flex flex-col justify-between ">
          <div className=" ">
            {/* top */}
            <div className="flex flex-col px-5 gap-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row  gap-2 items-center">
                  <img src={logo} alt="" className="" />
                  <h3 className="text-primary dark:text-white text-xl font-medium">
                    Lucidmark.
                  </h3>
                </div>
                {menu ? (
                  <button onClick={() => setMenu(!menu)} className="">
                    <CgCloseO className="text-2xl text-error" />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <button className="bg-primary-soft-2 dark:bg-primary dark:text-white text-primary text-sm font-medium leading-normal py-3 rounded-full w-full">
                New Environment
              </button>
            </div>
            {/* middle */}
            <div className=" ">
              <SidebarLinks setMenu={setMenu} menu={menu} />
            </div>
          </div>
          {/* bottom */}
          <div className=" px-5 flex flex-col gap-3">
            <div className="">
              <button className="" onClick={handleThemeSwitch}>
                {theme === "dark" ? <OnButton /> : <OffButton />}
              </button>
            </div>
            <div className="flex cursor-pointer flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <img src={avatar} alt="" className="" />
                <h4 className="text-sm text-gray-text-1 dark:text-gray-text-dark font-semibold">
                  Liam Trampota
                </h4>
              </div>
              <IoIosArrowForward className="text-gray-text-1 dark:text-gray-text-dark " />
            </div>
            <div className="flex cursor-pointer flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <div className="bg-primary p-2 rounded-full">
                  <IoNotificationsOutline className="text-white text-xl" />
                </div>
                <h4 className="text-sm font-semibold text-gray-text-1 dark:text-gray-text-dark">
                  Notifications
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
