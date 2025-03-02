import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 rounded-t-[32px] px-32 py-4 text-white bg-primaryColor">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Statistic</NavLink>
            </li>
            <li>
              <NavLink>Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="logo">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Statistic</NavLink>
          </li>
          <li>
            <NavLink>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 text-secondaryColor">
        <Link className="bg-white rounded-full p-4"><IoCartOutline /></Link>
        <Link className="bg-white rounded-full p-4"><FaRegHeart /></Link>
      </div>
    </div>
  );
}
