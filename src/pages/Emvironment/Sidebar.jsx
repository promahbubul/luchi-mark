import React from "react";
import { IoIosArrowBack } from "../../assets/Icons/Icons";

const Sidebar = ({ setToggleSidebar }) => {
  return (
    <div className="">
      <div
        onClick={() => setToggleSidebar(false)}
        className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-20"
      ></div>
      <div className="w-4/12 fixed top-0 right-0 p-5  bg-white h-screen z-30">
        <div className="">
          <button
            onClick={() => setToggleSidebar(false)}
            className="flex flex-row items-center gap-1 text-gray-light hover:text-black-1 duration-300"
          >
            <IoIosArrowBack />
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
