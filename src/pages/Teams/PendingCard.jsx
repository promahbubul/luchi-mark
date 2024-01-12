import React from "react";
import RoundedButton from "../../components/ui/Button/RoundedButton";
import { avatar } from "../../assets/images/Images";
import { IoTrashOutline } from "../../assets/Icons/Icons";
import Button from "../../components/ui/Button/Button";
import OutlineButton from "../../components/ui/Button/OutlineButton";

const PendingCard = () => {
  return (
    <div className="bg-gray-bg-3 px-4 py-3 rounded-md flex flex-row justify-between">
      <div className="flex flex-row gap-5 items-center">
        <img src={avatar} alt="" className="" />
        <h4 className="text-black-1 text-base font-medium">Liam Trampota</h4>
        <RoundedButton className={"bg-primary-soft-2 text-primary"}>
          Pending
        </RoundedButton>
      </div>
      <div className="flex flex-row gap-5 ">
        <Button className={"bg-primary-soft-2 text-primary"}>
          Resend invite
        </Button>
        <OutlineButton className={"border-error text-error"}>
          Revoke invite
        </OutlineButton>
      </div>
    </div>
  );
};

export default PendingCard;
