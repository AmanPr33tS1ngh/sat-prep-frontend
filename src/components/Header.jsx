import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {isAuthenticated, user} = useSelector(
    (state) => state.reducer.reducer,
  );
  console.log("selector", isAuthenticated, user);

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
        {console.log("selector", isAuthenticated, user)}
        {isAuthenticated  ? <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-200 p-2 rounded hover:bg-gray-300"
        >
          <span>{user?.username}</span>
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
        </button> : <div>
            <Link to={'/sign-in'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</Link>
            <Link to={'/start-journey'} type="button" class="mx-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sign Up</Link>
          </div>}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
            <ul>
              <li>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              </li>
              <li>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
