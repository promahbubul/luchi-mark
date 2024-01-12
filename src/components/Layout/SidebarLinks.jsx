import React from "react";
import {
  AiOutlineTeam,
  TfiWindow,
  HiOutlineSquares2X2,
  IoTrashOutline,
  IoIosArrowDown,
  IoSettingsOutline,
} from "../../assets/Icons/Icons";
import { Link } from "react-router-dom";

const SidebarLinks = () => {
  const links = [
    { path: "/dashboard", title: "Dashboard", icons: HiOutlineSquares2X2 },
    { path: "/environment", title: "Environment", icons: TfiWindow },
    { path: "/teams", title: "Teams", icons: AiOutlineTeam },
    { path: "/admin", title: "Admin", icons: IoSettingsOutline },
  ];
  return (
    <div className="mt-20">
      {links.map((item) => (
        <div
          key={item.title}
          className="flex group items-center flex-row mb-5 gap-5 pl-3    text-gray-text-1  font-semibold"
        >
          <item.icons className="text-gray-text-1 group-hover:text-primary duration-300 group-focus:text-primary text-xl" />
          <Link
            to={item.path}
            className="group-hover:text-primary duration-300"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarLinks;
