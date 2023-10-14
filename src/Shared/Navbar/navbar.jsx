import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navItems=<>
<li><Link className='' to="/">Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Solutions</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Features</a></li>
      <li className='ms-12'><a>About</a></li>
    </>
    return (
        <div>
            <div className="navbar navbar__container absolute top-0 left-0 px-8 ">
  <div className="navbar-start navbar__container__inner px-5 ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img className='w-full' src="https://i.ibb.co/4p49xyC/image-1.png" alt="image-description"/></a>
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button type="button" class="text-blue-700 mt-1 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Login</button>
  <button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
  </div>
</div>
        </div>
    );
}

export default Navbar;
