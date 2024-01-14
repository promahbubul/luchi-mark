import React from "react";
import {
  AiOutlineTeam,
  TfiWindow,
  HiOutlineSquares2X2,
  IoTrashOutline,
  IoIosArrowDown,
  IoSettingsOutline,
  LuClipboard,
} from "../../assets/Icons/Icons";
import { Link, NavLink } from "react-router-dom";

const SidebarLinks = () => {
  const links = [
    { path: "/dashboard", title: "Dashboard", icons: HiOutlineSquares2X2 },
    { path: "/environment", title: "Environment", icons: TfiWindow },
    { path: "/Tasks", title: "Tasks", icons: LuClipboard },
    { path: "/teams", title: "Teams", icons: AiOutlineTeam },
    { path: "/admin", title: "Admin", icons: IoSettingsOutline },
  ];
  return (
    <div className="mt-20">
      {links.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className={`flex group items-center flex-row mb-1 gap-5 border-l-4 border-l-transparent pl-3 py-3  text-gray-text-1  dark:text-gray-text-dark  font-semibold focus:border-l-4 hover:border-l-4 hover:border-primary focus:border-l-primary   `}
        >
          <item.icons className="text-gray-text-1  dark:text-gray-text-dark  group-hover:text-primary text-xl group-focus:text-primary" />
          <span className="group-hover:text-primary text-gray-text-1 group-focus:text-primary dark:text-gray-text-dark ">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLinks;
