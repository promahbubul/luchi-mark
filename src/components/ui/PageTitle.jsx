import React from "react";

const PageTitle = ({ children }) => {
  return (
    <h2 className="text-gray-text-2 text-sm mb-3 font-medium leading-normal">
      {children}
    </h2>
  );
};

export default PageTitle;
