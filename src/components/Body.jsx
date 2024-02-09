import React from "react";

const Body = ({ children }) => {
  return (
    <div className="lg:mx-32 xl:mx-44">
      <div className="px-6 pt-36 xl:px-80">{children}</div>
    </div>
  );
};

export default Body;
