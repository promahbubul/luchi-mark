import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`text-base ${className} rounded-md  py-2 px-6 `}>
      {children}
    </button>
  );
};

export default Button;
