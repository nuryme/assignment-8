import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"

export default function Banner() {
  const heading =
    "Upgrade Your Tech Accessorize with Gadget Heaven Accessories";
  const body =
    "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";
  return (
    <div className="pt-8 bg-primaryColor rounded-b-[32px] relative pb-[200px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <Heading heading={heading} body={body}></Heading>
        <Link>
          <button className="button mt-8">Shop Now</button>
        </Link>
      </div>
      <div className="w-[80%] absolute top-[380px] mx-auto">
        <img className=" rounded-[32px] bg-white/30 border border-white  p-3" src={bannerImg} alt="" />
      </div>
    </div>
  );
}
