import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import DrawerNav from "./DrawerNav";
import { animated, useSpring } from "react-spring";

const Listbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 200,
    }),
    [],
  );

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <animated.div className="block md:hidden" style={props}>
      <TbMenuDeep size={40} className="text-green" onClick={toggleDrawer} />
      {isDrawerOpen && <DrawerNav toggleDrawer={toggleDrawer} />}
    </animated.div>
  );
};

export default Listbar;
