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
    <div className="">
      <MainHeader />
      <div className="mt-5">
        <MainTitle>Admin</MainTitle>
        <div className="flex mt-5 flex-row gap-10">
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
