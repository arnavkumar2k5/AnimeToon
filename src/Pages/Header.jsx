import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="bg-black bg-opacity-80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 p-5 md:p-10">
      <nav className="flex justify-between items-center">
        <div className="text-xl md:text-3xl text-gray-300">
          <Link to="/" smooth={true} duration={500}>
            AnimeToon
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul className={`absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out transform md:transform-none ${isOpen ? 'top-16' : '-top-48'} md:top-0 md:flex md:space-x-8 mt-2`}>
          <li className="hover:text-cyan-400 text-2xl transition-colors duration-300">
            <Link to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-cyan-400 text-2xl transition-colors duration-300">
            <Link to="characters" smooth={true} duration={500}>
              Characters
            </Link>
          </li>
          <li className="hover:text-cyan-400 text-2xl transition-colors duration-300">
            <Link to="readmore" smooth={true} duration={500}>
              Read More
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
