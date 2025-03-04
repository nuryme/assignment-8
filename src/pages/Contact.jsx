import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Contact() {
  return (
    <div className="pt-8 bg-primaryColor relative pb-[200px] flex flex-col items-center mb-[350px]">
      <div className="w-full flex flex-col items-center">
        <Heading
          heading={"Get In Touch"}
          body={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
      <div className="card card-side bg-white shadow-xl p-4 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center absolute top-[180px] w-[80%] ">
        {/* <figure className="flex max-h-[520px] ">
          <img
            src={detailsData.product_image}
            alt="Movie"
            className="w-full h-auto max-h-full object-cover"
          />
        </figure> */}
        <div className=" rounded-3xl bg-primaryColor p-12 pb-28">
          <h2 className="h2  text-white">Contact Information</h2>
          <p className="bodyText text-lg font-normal my-2  text-white">
            Explore the latest gadgets that will take your experience to the
            next level.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div>
              <FaPhone className="bodyText  text-white" />
            </div>
            <div>
              <p className="bodyText  text-white">+1234567890</p>
              <p className="bodyText  text-white">+1234567890</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div>
              <MdEmail className="bodyText text-2xl text-white" />
            </div>
            <div>
              <p className="bodyText  text-white">hello@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div>
              <MdLocationPin className="bodyText  text-white text-3xl" />
            </div>
            <div>
              <p className="bodyText  text-white">New York, USA</p>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <fieldset className="fieldset  space-y-6">
            <div className="space-y-2">
              <label className="fieldset-label font-medium text-secondaryColor">Your Name</label>
              <input type="text" className="input" placeholder="Name" />
            </div>
            <div className="space-y-2">
              <label className="fieldset-label font-medium text-secondaryColor">Email</label>
              <input type="email" className="input" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <label className="fieldset-label font-medium text-secondaryColor">Password</label>
              <input type="password" className="input" placeholder="Password" />
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral bg-primaryColor border-none mt-4">
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
