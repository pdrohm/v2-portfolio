import React from "react";
import logoPh from "../../../assets/ph-logo.png";

const Logo = () => {
  return (
    <div className="relative ml-10 flex h-12 w-12 items-center justify-center border-2 border-green hover:text-green">
      <a href="#home">
        <img src={logoPh} />
      </a>
    </div>
  );
};

export default Logo;
