import React from "react";
import {
  IoIosArrowBack,
  TiPencil,
  GoShareAndroid,
} from "../../assets/Icons/Icons";
import { avatar, cardDetails } from "../../assets/images/Images";

const Sidebar = ({ setToggleSidebar }) => {
  return (
    <div className="">
      <div
        onClick={() => setToggleSidebar(false)}
        className="fixed  top-0 bottom-0 right-0 left-0 bg-black/60  z-20"
      ></div>
      <div className="w-2/5 scrollbar-hide  overflow-hidden overflow-y-scroll  fixed top-0 right-0 p-5  bg-white h-screen z-30">
        <div className="flex flex-row justify-between items-center">
          <button
            onClick={() => setToggleSidebar(false)}
            className="flex flex-row items-center gap-1 text-dark-gray hover:text-black-1 duration-300"
          >
            <IoIosArrowBack />
            Back
          </button>
          <div className="text-dark-gray flex-row items-center gap-3">
            <button className="">
              <GoShareAndroid className="text-2xl hover:text-primary" />
            </button>
            <button className="">
              <TiPencil className="text-2xl hover:text-primary" />
            </button>
          </div>
        </div>
        <p className="bg-success-soft text-sm w-max mt-3 text-black-soft rounded-md p-2">
          Development
        </p>
        <h1 className="text-black text-3xl font-semibold leading-9 mt-3">
          Comments about Access Management
        </h1>
        <p className="text-gray-dark mt-4 text-sm leading-5 font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="flex flex-row  align-baseline   mt-3 gap-4">
          <p className="text-gray-dark mt-2 w-3/12 text-right">Assigned</p>
          <div className="grid gap-3 grid-cols-12  w-full ">
            <div className=" flex flex-row gap-2 items-center col-span-6">
              <img src={avatar} alt="" className="" />
              <h4 className="">Liam Trampota</h4>
            </div>
            <div className=" flex flex-row gap-2 items-center col-span-6">
              <img src={avatar} alt="" className="" />
              <h4 className="">Liam Trampota</h4>
            </div>
            <div className="flex flex-row gap-2 items-center col-span-6">
              <img src={avatar} alt="" className="" />
              <h4 className="">Liam Trampota</h4>
            </div>{" "}
            <div className="flex flex-row gap-2 items-center col-span-6">
              <img src={avatar} alt="" className="" />
              <h4 className="">Liam Trampota</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3 w-full  gap-4">
          <p className="w-3/12 text-right text-gray-dark">Created</p>
          <p className="w-full  text-black-1 font-medium text-sm">
            Nov 2, 2023
          </p>
        </div>
        <div className="flex flex-row mt-3 w-full  gap-4">
          <p className="w-3/12  text-gray-dark text-right">Status</p>
          <div className="w-full">
            <p className="bg-warning-light w-max text-warning p-2 rounded-md text-sm font-medium leading-normal">
              Review
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-5 items-center border-b">
          <div className=" w-3/12  text-center ">
            <button className="text-primary text-sm active:border-b border-primary focus:border-b py-2  ">
              Preview
            </button>
          </div>
          <div
            className="w-full flex flex-row gap-3 items-center
          "
          >
            <button className="text-gray-dark focus:text-primary hover:border-b border-primary text-sm focus:border-b text-left  py-2">
              Attachments
            </button>
            <div className="bg-gray-200 py-0.5 h-max px-2 rounded-full text-gray-dark w-max text-sm">
              2
            </div>
          </div>
        </div>
        <img
          src={cardDetails}
          alt=""
          className="mt-3 h-48 cursor-pointer duration-300 w-full object-fill "
        />
      </div>
    </div>
  );
};

export default Sidebar;
