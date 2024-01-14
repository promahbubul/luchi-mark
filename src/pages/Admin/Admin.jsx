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
        <div className="flex mt-5 flex-col md:flex-row  md:gap-5 lg:gap-10">
          {/* left */}
          <div className=" w-full lg:w-full md:w-7/12">
            <PersonalInformation />
            <PaymentCard />
          </div>
          {/* right */}
          <div className=" w-full lg:w-full md:w-5/12">
            <Intigrations />
            <Billing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
