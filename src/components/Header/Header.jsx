import React from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Listbar from "./components/Listbar";

const Header = () => {
  return (
    <div className="flex h-24 flex-row items-center justify-between px-6 md:px-14">
      <Logo />
      <Navbar />
      <Listbar />
    </div>
  );
};

export default Header;
