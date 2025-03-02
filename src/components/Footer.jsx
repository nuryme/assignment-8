import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-white text-neutral-content p-10">
        <div className="footer text-neutral-content items-center p-4 w-full">
          <div className="flex flex-col items-center mx-auto w-full">
            <h3 className="h3"><Link to={'/'}>Gadget Heaven</Link></h3>
            <p className="bodyText text-base mt-4 mb-8">Copyright © {new Date().getFullYear()} - All right reserved</p>
            <hr className="w-full border border-secondaryColor/10" />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-36 mx-auto">
        <nav className="text-center flex flex-col space-y-3 text-secondaryColor/60">
          <h6 className=" h5">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-center  flex flex-col space-y-3 text-secondaryColor/60">
          <h6 className=" h5">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-center  flex flex-col space-y-3 text-secondaryColor/60">
          <h6 className=" h5">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
}
