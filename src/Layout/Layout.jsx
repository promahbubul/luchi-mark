import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row w-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <section className="w-full">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
