import React from "react";

const OutlineButton = ({ children, className }) => {
  return (
    <button className={`text-base ${className} rounded-md border py-2 px-6 `}>
      {children}
    </button>
  );
};

export default OutlineButton;
