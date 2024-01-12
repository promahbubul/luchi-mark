import React, { useState } from "react";
import SectionTittle from "../../components/ui/SectionTittle";
import BillingCard from "./BillingCard";

const Billing = () => {
  const [billings, setBilling] = useState([1, 2, 3, 4]);
  return (
    <div className="mt-6">
      <div className="flex flex-row justify-between">
        <SectionTittle>Billing</SectionTittle>
        <button className="text-primary">Edit</button>
      </div>
      <div className="mt-5 flex flex-col gap-1 h-[calc(100vh-500px)] overflow-y-auto">
        {billings.map((billing, index) => (
          <BillingCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Billing;
