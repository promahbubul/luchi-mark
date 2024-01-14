import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [menu, setMenu] = useState(false);

  console.log(menu);
  return (
    <div className="flex md:flex-row flex-col w-screen">
      {/* Sidebar */}
      <Sidebar menu={menu} setMenu={setMenu} />
      {/* Content */}
      <section className="w-full pt-5 px-3 md:px-5 pb-2  md:h-[calc(100vh-44px)] box-border">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
