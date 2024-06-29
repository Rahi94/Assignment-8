import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PagesToRead from '../pages/PagesToRead';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-extrabold">BookShop</a>

            </div>
            <div className="navbar-center font-extrabold hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg hidden md:flex items-center gap-5">
                    <NavLink to='/' className={({isActive}) => isActive ? 'font-bold text-green-400 border-2 p-1 px-2 rounded-lg border-green-400' : 'font-bold'}>Home</NavLink>
                    <NavLink to='/pagestoread' className={({isActive}) => isActive ? 'font-bold text-green-400 border-2 p-1 px-2 rounded-lg border-green-400' : 'font-bold'}>Pages to read</NavLink>
                    <NavLink to='/listedbooks' className={({isActive}) => isActive ? 'font-bold text-green-400 border-2 p-1 px-2 rounded-lg border-green-400' : 'font-bold'}>Listed books</NavLink>
                  
                </ul>
            </div>
            <div className="navbar-end mr-4">
                <a className="btn btn-secondary bg-green-500 border-0 mr-4">Sign In</a>
                <a className="btn btn-accent text-white">Sign up</a>
            </div>
            <label className="grid cursor-pointer place-items-center">
                <input
                    type="checkbox"
                    value="luxury"
                    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                <svg
                    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div >
    );
};

export default Nav;