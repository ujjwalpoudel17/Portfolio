import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 to-purple-900 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          
        
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <span className="text-2xl font-semibold text-white">
              Ujjwal Poudel
            </span>
          </Link>

       
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center p-2 text-white hover:bg-white/20 rounded-lg transition"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        
          <div
            className={`${open ? "block" : "hidden"} 
            w-full md:w-auto md:flex md:items-center`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white text-lg font-medium bg-blue-950 md:bg-transparent p-4 md:p-0 rounded-lg">

              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="block py-2 px-3 hover:text-red-400"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : {}
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/About"
                  onClick={closeMenu}
                  className="block py-2 px-3 hover:text-red-400"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : {}
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Services"
                  onClick={closeMenu}
                  className="block py-2 px-3 hover:text-red-400"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : {}
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Project"
                  onClick={closeMenu}
                  className="block py-2 px-3 hover:text-red-400"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : {}
                  }
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  onClick={closeMenu}
                  className="block py-2 px-3 hover:text-red-400"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : {}
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;




























// import React from 'react'
// import { NavLink, Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';


// function Header() {
//   return (
//    <>
  

// <nav className="bg-white border-1 border-white bg-gradient-to-r from-blue-900 to-purple-900  fixed top-0 left-0 w-full">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="https://static-00.iconduck.com/assets.00/u-letter-icon-2048x2048-l4uqlscw.png" className="h-20 rounded-full" alt="Flowbite Logo" />
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ujjwal Poudel</span>
//     </Link>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  " aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
//          <li>
//           <NavLink to="/" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 text-white dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => {
//  return isActive ? { color: "red" } : {};
//  }}>Home</NavLink>
//         </li>
//         <li>
//         <NavLink smooth to="/About" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 text-white dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => {
//  return isActive ? { color: "red" } : {};
//  }}>About</NavLink>
// </li>
     
//         <li>
//           <NavLink to="/Services" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => {
//  return isActive ? { color: "red" } : {};
//  }}>Services</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Project" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => {
//  return isActive ? { color: "red" } : {};
//  }}>Projects</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={({ isActive }) => {
//  return isActive ? { color: "red" } : {};
//  }}>Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//    </>
//   )
// }

// export default Header