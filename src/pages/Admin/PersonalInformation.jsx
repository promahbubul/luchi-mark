import React from "react";
import SectionTittle from "../../components/ui/SectionTittle";

const PersonalInformation = () => {
  return (
    <div className="">
      <SectionTittle>Personal information</SectionTittle>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-gray-text-3 leading-8"
          >
            First Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black-1 placeholder:text-sm placeholder:font-medium border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-gray-text-3 leading-8"
          >
            Password
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black-1 placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-gray-text-3 leading-8"
          >
            Last Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black-1 placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-xs font-medium  text-gray-text-3 leading-8"
          >
            Email
          </label>
          <input
            placeholder="First Name"
            type="text"
            name=""
            className="py-2 px-5 border placeholder:text-black-1 placeholder:text-sm placeholder:font-medium  border-gray-input-border rounded-md focus:border-primary outline-primary"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
