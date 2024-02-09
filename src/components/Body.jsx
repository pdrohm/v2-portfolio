import React from "react";

const Body = ({ children }) => {
  return (
    <div className="md:mx-44">
      <div className="px-6 pt-36 md:px-80">{children}</div>
    </div>
  );
};

export default Body;
