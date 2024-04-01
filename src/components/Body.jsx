import React from "react";

const Body = ({ children }) => {
  return (
    <div className="xl:mx- lg:mx-32">
      <div className="3xl:px-72 px-6 pt-36 2xl:px-40">{children}</div>
    </div>
  );
};

export default Body;
