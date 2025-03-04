import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCart, getWishlist } from "../Utils";

export default function NavBar({ pathname }) {
  // const navigate = useNavigate()
  // console.log(navigate)

  return (
    <div className="navbar px-8  lg:px-32 py-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow menuBar"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistic"}>Statistic</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className={pathname === "/" ? "logo" : "logo text-secondaryColor"}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 menuBar">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistic"}>Statistic</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 text-secondaryColor">
        <Link
          className={
            pathname === "/"
              ? "bg-white rounded-full p-4"
              : "bg-white rounded-full p-4 border border-secondaryColor/60"
          }
        >
          <IoCartOutline />
        </Link>
        <Link
          className={
            pathname === "/"
              ? "bg-white rounded-full p-4"
              : "bg-white rounded-full p-4 border border-secondaryColor/60"
          }
        >
          <FaRegHeart />
        </Link>
      </div>
    </div>
  );
}
