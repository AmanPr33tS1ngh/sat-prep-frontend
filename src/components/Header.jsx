import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <Link to={"/"} className="text-2xl font-bold">SAT-PREP</Link>
      {/* <nav>
        <ul className="flex space-x-4">
          <li className='hover:bg-gray-200'><a href="#home" className="hover:text-black">Home</a></li>
          <li className='hover:bg-gray-200'><a href="#services" className="hover:text-black">Services</a></li>
          <li className='hover:bg-gray-200'><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
          <li className='hover:bg-gray-200'><a href="#guides" className="hover:text-black">Guides</a></li>
          <li className='hover:bg-gray-200'><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>
      </nav> */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-200 p-2 rounded hover:bg-gray-300"
        >
          <span>Profile</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
            <ul>
              <li>
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
              </li>
              <li>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
