import React from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { navLinks } from "../../../config";
import Button from "../../Button/Button";

const CloseButton = ({ toggleDrawer }) => {
  return (
    <div className="mb-6 flex items-center justify-end">
      <IconButton variant="text" color="blue-gray" onClick={toggleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#64ffda"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </IconButton>
    </div>
  );
};

const DrawerNav = ({ toggleDrawer }) => {
  const handleLinkClick = () => {
    toggleDrawer();
  };
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      className="bg-light-navy p-4"
      placement="right"
    >
      <CloseButton toggleDrawer={toggleDrawer} />
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-10">
        {navLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="rounded-md px-4 py-2 font-mono text-lg text-lightest-slate hover:text-green"
            onClick={handleLinkClick}
          >
            <span className=" text-green">{link.index}.</span>
            <span className="ml-1">{link.name}</span>
          </a>
        ))}
        <Button title={"CV"} />
      </div>
    </Drawer>
  );
};

export default DrawerNav;
