import React from "react";
import { IoClose } from "../../assets/Icons/Icons";

const InviteModal = ({ setInviteModal }) => {
  return (
    <div className="">
      <div
        onClick={() => setInviteModal(false)}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-20"
      ></div>
      <div className="w-11/12  md:w-10/12 lg:w-1/2 h-min bg-white z-30 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md p-7">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-[#101213] font-medium text-xl leading-6">
            Invite member
          </h3>
          <button onClick={() => setInviteModal(false)} className="">
            <IoClose className="text-2xl font-bold hover:text-red-500" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-5 ">
          <input
            type="text"
            name=""
            id=""
            className="py-3 px-5 rounded-md border border-gray-300 outline-gray-300 col-span-12 md:col-span-6 placeholder:text-[#101213] text-sm leading-8 font-medium"
            placeholder="First Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="py-3 px-5 rounded-md border border-gray-300 outline-gray-300 col-span-12 md:col-span-6 placeholder:text-[#101213] text-sm leading-8 font-medium"
            placeholder="Last Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="py-3 px-5 rounded-md border border-gray-300 outline-gray-300 col-span-12 md:col-span-6 placeholder:text-[#101213] text-sm leading-8 font-medium"
            placeholder="Email "
          />
          <div className="">
            <h5 className="text-xs font-semibold leading-normal">Role</h5>
            <div className="flex flex-row  gap-2 mt-4">
              <input
                type="radio"
                id="reviewer"
                name="role"
                className=" cursor-pointer"
              />
              <label htmlFor="reviewer" className="mr-3 cursor-pointer">
                Reviewer
              </label>
              <input
                type="radio"
                id="administrator"
                name="role"
                className="cursor-pointer"
              />
              <label htmlFor="administrator" className="cursor-pointer">
                Administrator
              </label>
            </div>
          </div>
        </div>
        <div
          className="mt-8 flex flex-col  md:flex-row gap-3 md:gap-10
        "
        >
          <button
            onClick={() => setInviteModal(false)}
            className="bg-primary text-sm font-medium leading-5 text-white p-4 rounded-full w-full"
          >
            Done
          </button>
          <button
            onClick={() => setInviteModal(false)}
            className="bg-[#10121314] text-sm font-medium leading-5 text-black-1 p-4 rounded-full w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
