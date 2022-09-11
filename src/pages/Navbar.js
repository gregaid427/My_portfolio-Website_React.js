import React, { useState } from "react";
import Logo from "../assets/logo.jpg";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Logout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className='fixed w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div> */}

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' offset={-50} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' offset={-50} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' offset={-50} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' offset={-50} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:flex fixed flex-col top-[35%] left-0  hidden">
        <ul >
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-around gap-8 items-center w-full text-gray-300"
              href="/"
            >
              Email <FaMailBulk size={30} /> </a>
          
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-around gap-8 items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />  </a>
          
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex justify-around gap-8 items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} /> </a>
          
          </li>
          
        </ul>
      </div>

      {/* ends here */}
    </div>
  );
};

export default Logout;
