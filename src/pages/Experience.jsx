import React, { useState } from "react";

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex h-screen">
      <h1 className="numbered-title">
        <span>02.</span>
        <span>Where Ive Worked</span>
      </h1>
    </div>
  );
};

export default Experience;
