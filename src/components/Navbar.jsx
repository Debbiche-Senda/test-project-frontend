import React from 'react';
import logo from './img/logo.png';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg h-10 flex justify-between">
      <Link to="/">
        <img className="h-10 w-10 ml-6" src={logo} alt="logo" />
      </Link>
      <div className="flex justify-center flex-1">
        <ul className="flex space-x-2 text-sm font-sans items-center ">
          <li>
            <Link to="/" className="flex-1 hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="flex-1 hover:font-bold">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className=" flex-1 hover:font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className=" flex-1 hover:font-bold">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" flex-1 hover:font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <BiMenuAltLeft className="mr-5 mt-3 text-xl hover:text-sky-400" />
    </nav>
  );
};

export default Navbar;
