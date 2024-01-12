import React from "react";
import Sidebar from "../components/Layout/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row w-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Content */}
      <section className="w-full">container</section>
    </div>
  );
};

export default Layout;
