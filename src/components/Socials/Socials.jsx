import React from "react";
import { socials } from "../../config";
import VerticalLine from "../VerticalLine/VerticalLine";

const Socials = () => {
  return (
    <div className="fixed hidden flex-col items-center gap-y-5 md:bottom-0 md:left-10 md:flex">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:-translate-y-1 hover:text-green"
        >
          <social.icon />
        </a>
      ))}
      <VerticalLine />
    </div>
  );
};

export default Socials;
