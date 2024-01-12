import React from "react";
import SectionTittle from "../../components/ui/SectionTittle";
import { visaIcon } from "../../assets/images/Images";

const PaymentCard = () => {
  return (
    <div className="mt-6">
      <SectionTittle>Plan</SectionTittle>
      <div className="mt-4  py-4 px-5 rounded-xl bg-gradient-to-tr from-[#3876FE] to-[#1E4599] text-white ">
        {/* top */}
        <div className="flex flex-row justify-between  items-center">
          <div className="">
            <h2 className="font-medium leading-normal text-xl  ">
              Business PRO
            </h2>
            <p className="mt-2  text-xs font-medium leading-normal">
              Includes up to 20 users
            </p>
          </div>
          <button className="bg-[#5D80CD] h-max py-1.5 px-4 rounded-md">
            Manage plan
          </button>
        </div>
        {/* bottom */}
        <div className="bg-[#5986EC] p-3 mt-4 rounded-xl flex flex-row justify-between">
          <div className="flex flex-col gap-3 items-start">
            <p className="text-sm font-medium leading-4">Payment</p>
            <img src={visaIcon} alt="" className="bg-white p-2 rounded-md" />
            <p className="text-xs leading-normal font-normal">
              Visa ending in <span className="font-bold">5325</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <button className="bg-[#629CEC] h-max py-1.5 px-4 rounded-md">
              Change
            </button>
            <p className="text-xs font-medium">billing@billing.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
