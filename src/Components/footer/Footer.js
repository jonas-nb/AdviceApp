/** @format */

import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full flex items-end justify-end border mb-10">
      <div className="w-32 flex justify-around place-content-end  text-blue-300 text-5xl ">
        <a href="https://www.linkedin.com/in/jonas-batista-b77b24137/">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/jonas-nb">
          <IoLogoGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
