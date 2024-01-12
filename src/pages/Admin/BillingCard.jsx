import React from "react";
import { LuFileDown } from "../../assets/Icons/Icons";
import { pdfIcon } from "../../assets/images/Images";

const BillingCard = () => {
  return (
    <div className="bg-gray-bg-3 px-4 py-3 rounded-md flex flex-row justify-between">
      <div className="flex flex-row gap-5 items-center">
        <img src={pdfIcon} alt="" className="" />
        <h4 className="text-black-1 text-base font-medium">Invoice #13245</h4>
        <p className="text-xs font-medium text-black-1 leading-normal">
          06/01/2023
        </p>
      </div>
      <button className="">
        <LuFileDown className="text-primary text-xl" />
      </button>
    </div>
  );
};

export default BillingCard;
