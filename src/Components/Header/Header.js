import React from "react";
import { FaRegCompass } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center h-40 justify-center w-full">
      <h1 className="text-white text-6xl font-medium shadow-sm">Advice</h1>
      <FaRegCompass className="text-white text-6xl" />
    </div>
  );
};

export default Header;
