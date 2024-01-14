import React from "react";
import { gridCard } from "../../assets/images/Images";
import GridCard from "./GridCard";

const GridView = ({ environments }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 overflow-y-auto  scrollbar-hide mt-8 h-[calc(100vh-151.91px)]">
      {environments.map((environment, index) => (
        <GridCard key={index} />
      ))}
    </div>
  );
};

export default GridView;
