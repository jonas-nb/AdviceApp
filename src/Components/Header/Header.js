import React from "react";
import { FaRegCompass } from "react-icons/fa";

const Header = () => {
  return (
    <div className="sm:m-auto flex items-center  h-1/6 md:h-2/6 lg:h-1/6 md:w-7/12 lg:w-3/12  sm:w-32 justify-center sm:justify-between w-full text-white text-6xl sm:text-3xl md:text-8xl lg:text-6xl font-medium shadow-sm ">
      <h1 className="pd-5">Advice</h1>
      <FaRegCompass />
    </div>
  );
};

export default Header;
