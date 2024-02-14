import React from "react";
import { socials } from "../../config";

const Footer = () => {
  return (
    <div className="my-5 flex cursor-pointer flex-col items-center justify-center gap-y-4 font-mono text-sm ">
      <div className="flex items-center justify-center gap-x-2 md:hidden">
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
      </div>

      <a
        href="https://github.com/pdrohm/v2-portfolio"
        target="_blank"
        className="hover:text-green"
      >
        Feito por Pedro H. Marques
      </a>
    </div>
  );
};

export default Footer;
