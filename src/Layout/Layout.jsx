import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader/MainHeader";

const Layout = () => {
  return (
    <div className="flex flex-row w-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <section className="w-full pt-5 px-5 pb-2 h-[calc(100vh-44px)] box-border">
        <div className="">
          <MainHeader />
        </div>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
