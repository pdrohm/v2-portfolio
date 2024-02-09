import React from "react";

import { navLinks } from "../../../config";
import Button from "../../Button/Button";

const Navbar = () => {
  return (
    <nav className="hidden md:flex md:items-center md:justify-center">
      {navLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          className="rounded-md px-4 py-2 font-mono text-sm text-lightest-slate hover:text-green"
        >
          <span className=" text-green">{link.index}.</span>
          <span className="ml-1">{link.name}</span>
        </a>
      ))}

      <Button title={"Curriculo"} />
    </nav>
  );
};

export default Navbar;
