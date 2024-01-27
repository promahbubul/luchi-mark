import React, { useState } from "react";
import Listview from "./Listview";
import Heading from "./Heading";
import GridView from "./GridView";
import Sidebar from "./Sidebar";

const Environment = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [environments, setEnvironments] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [layoutView, setLayoutView] = useState("list");

  const handleLayoutView = (view) => {
    if (view === "grid") {
      setLayoutView("grid");
    } else {
      setLayoutView("list");
    }
  };
  return (
    <div>
      {/* sidebar */}
      {toggleSidebar ? <Sidebar setToggleSidebar={setToggleSidebar} /> : ""}

      <Heading handleLayoutView={handleLayoutView} layoutView={layoutView} />
      {layoutView === "list" ? (
        <Listview
          setToggleSidebar={setToggleSidebar}
          environments={environments}
        />
      ) : (
        <GridView
          setToggleSidebar={setToggleSidebar}
          environments={environments}
        />
      )}
    </div>
  );
};

export default Environment;
