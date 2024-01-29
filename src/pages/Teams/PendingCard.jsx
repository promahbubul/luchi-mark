import React from "react";
import RoundedButton from "../../components/ui/Button/RoundedButton";
import { avatar } from "../../assets/images/Images";
import { IoTrashOutline } from "../../assets/Icons/Icons";
import Button from "../../components/ui/Button/Button";
import OutlineButton from "../../components/ui/Button/OutlineButton";

const PendingCard = () => {
  return (
    <div className="bg-secondary px-4 py-3 rounded-md flex flex-col lg:flex-row justify-between md:gap-0 gap-5">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <img src={avatar} alt="" className="" />
        <h4 className="text-black-1 text-base font-medium">Liam Trampota</h4>
        <span
          className={
            "bg-info text-primary py-1 lg:py-2 lg:px-6 px-2 rounded-full "
          }
        >
          Pending
        </span>
      </div>
      <div
        className="flex flex-col mt-3 lg:mt-0 lg:flex-row  gap-2 
      lg:gap-5  "
      >
        <Button className={"bg-info text-primary"}>Resend invite</Button>
        <OutlineButton className={"border-error text-error"}>
          Revoke invite
        </OutlineButton>
      </div>
    </div>
  );
};

export default PendingCard;
