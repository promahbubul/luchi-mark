import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row w-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <section className="w-full pt-5 px-3 md:px-5 pb-2  md:h-[calc(100vh-44px)] box-border">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
