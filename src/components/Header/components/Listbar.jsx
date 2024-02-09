import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import DrawerNav from "./DrawerNav";

const Listbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="block md:hidden">
      <TbMenuDeep size={40} className="text-green" onClick={toggleDrawer} />
      {isDrawerOpen && <DrawerNav toggleDrawer={toggleDrawer} />}
    </div>
  );
};

export default Listbar;
