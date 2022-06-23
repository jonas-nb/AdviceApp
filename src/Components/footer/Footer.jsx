/** @format */

import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="w-full sm:h-10 flex items-end justify-end">
        <div className="w-32 flex justify-around   text-blue-300  text-4xl md:text-6xl">
          <a
            href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
            target="_blank"
            className="hover:text-blue-400"
          >
            <IoLogoLinkedin className="" />
          </a>
          <a href="https://github.com/jonas-nb" target="_blank">
            <IoLogoGithub className="hover:text-blue-400" />
          </a>
        </div>
      </div>
      <h3 className="text-white/50 p-1">Made with ❤ By Jonas Batista</h3>
    </>
  );
};

export default Footer;
