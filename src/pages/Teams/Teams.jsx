import React, { useState } from "react";
import Button from "../../components/ui/Button/Button";
import MemberCard from "./MemberCard";
import PendingCard from "./PendingCard";
import MainTitle from "../../components/ui/MainTitle";
import MainHeader from "../../components/MainHeader/MainHeader";
import InviteModal from "./InviteModal";

const Teams = () => {
  const [inviteModal, setInviteModal] = useState(false);
  const [users, setUsers] = useState([1, 2, 3, 4, 5]);
  const [pendingUser, setPendingUser] = useState([1, 2]);
  return (
    <div className="">
      {inviteModal ? <InviteModal setInviteModal={setInviteModal} /> : ""}
      <MainHeader />
      <div className="mt-4 h-[calc(100vh-132.711px)] scrollbar-hide overflow-y-auto">
        {/* Users */}
        <div className="grid grid-cols-12 pb-5 border-b border-gray-input-border ">
          {/* left */}
          <div className="col-span-full md:col-span-5 lg:col-span-3 ">
            <MainTitle>Users</MainTitle>
            <button onClick={() => setInviteModal(true)} className="">
              <Button className={"bg-info mt-3 text-primary"}>
                Invite new user
              </Button>
            </button>
          </div>
          {/* right */}
          <div className=" col-span-full md:col-span-7 lg:col-span-9 md:mt-0 mt-4">
            <div className="flex flex-col gap-2">
              {users.map((user, index) => (
                <MemberCard key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* Pending Users */}
        <div className="grid grid-cols-12 mt-5">
          {/* left */}
          <div className="col-span-full md:col-span-5 lg:col-span-3 ">
            <MainTitle>Pending Invites</MainTitle>
          </div>
          {/* right */}
          <div className="col-span-full md:col-span-7 lg:col-span-9 md:mt-0 mt-4">
            <div className="flex flex-col gap-2">
              {pendingUser.map((user, index) => (
                <PendingCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
