import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import PageTitle from "../../components/ui/PageTitle";
import MainTitle from "../../components/ui/MainTitle";
import PersonalInformation from "./PersonalInformation";
import PaymentCard from "./PaymentCard";
import Intigrations from "./Intigrations";
import Billing from "./Billing";

const Admin = () => {
  return (
    <div className="pt-5 px-5 pb-2 h-[calc(100vh-44px)] box-border">
      <MainHeader />
      <div className="">
        <MainTitle>Admin</MainTitle>
        <div className="flex flex-row gap-10">
          {/* left */}
          <div className="w-full">
            <PersonalInformation />
            <PaymentCard />
          </div>
          {/* right */}
          <div className="w-full">
            <Intigrations />
            <Billing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
