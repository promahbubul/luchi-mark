import React from "react";
import SectionTittle from "../../components/ui/SectionTittle";

const PersonalInformation = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center">
        <SectionTittle>Personal information</SectionTittle>
        <button className="text-primary text-sm font-medium">Edit</button>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-dark-gray leading-8"
          >
            First Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black placeholder:text-sm placeholder:font-medium border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-dark-gray leading-8"
          >
            Password
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-dark-gray leading-8"
          >
            Last Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-dark-gray leading-8"
          >
            Email
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
