import React from "react";
import ListCard from "./ListCard";

const Listview = ({ environments }) => {
  return (
    <div className="grid grid-cols-12 mt-5">
      {/* List Heading */}
      <div className="col-span-12 mb-3 gap-2 px-2 grid grid-cols-12 w-full ">
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-2 ">
          Preview
        </h5>
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-1 ">
          Number
        </h5>
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-2 ">
          Request/Type
        </h5>
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-2 ">
          Description
        </h5>
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-2 ">
          Media
        </h5>
        <h5 className="text-gray-text-5 text-sm font-medium leading-normal col-span-3 ">
          Status
        </h5>
      </div>
      {/* List */}
      <div className="col-span-12 grid h-[calc(100vh-181.71px)]  overflow-y-auto scrollbar-hide gap-2 grid-cols-12 w-full">
        {environments.map((environment, index) => (
          <ListCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Listview;
