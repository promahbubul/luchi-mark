import React from "react";

const RoundedButton = ({ children, className }) => {
  return (
    <button className={`text-base ${className} rounded-full  py-2 px-6 `}>
      {children}
    </button>
  );
};

export default RoundedButton;
