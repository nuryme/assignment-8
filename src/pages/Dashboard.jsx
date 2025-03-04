import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {

  
  return (
    <div>
      <div className="bg-primaryColor py-8">
        <Heading
          heading={"Dashboard"}
          body={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
        <div className="flex gap-6 justify-center mt-8 dashBoard">
          <NavLink
            to={"cart"}
            end
            className="button bg-transparent border border-white text-white py-3 px-16 "
          >
            Cart
          </NavLink>
          <NavLink
            to={"wishlist"}
            end
            className="button bg-transparent border border-white text-white py-3 px-16 "
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div className="px-8">
        {/* <div className="space-y-6 h-full"> */}
        {/* {btnClick.map((cart) => (
            <Added cart={cart}></Added>
          ))} */}
        {/* </div> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
}
