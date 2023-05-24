import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 text-white md:mt-20 mt-10 ">
        <div className=" bg-[#1F2937] text-center md:py-20 py-10 md:ps-60">
         <div className="space-y-4">
         <h3 className="md:text-3xl text-2xl uppercase">CONTACT US</h3>
          <div>
          <p className="text-xs">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-xs">+88 123456789</p>
          <p className="text-xs">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-xs">Sat - Sun: 10:00 - 23:00</p>
          </div>
         </div>
        </div>
        <div className="space-y-4 bg-[#111827] text-center md:py-20 py-10 md:pe-60">
          <h3 className="md:text-3xl text-2xl">Follow US</h3>
          <p className="text-xs">Join us on social media</p>
          <div className="flex gap-4 justify-center text-2xl">
            <FaFacebookF></FaFacebookF>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] py-4">
        <p className="text-xs text-white text-center">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
