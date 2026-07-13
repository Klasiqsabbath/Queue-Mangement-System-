import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------ Left Section ------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Privacy policy</Link></li>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><a href="tel:0546109858" className="hover:text-primary">0546109858</a></li>
            <li><a href="mailto:stephenquanssh@gmail.com" className="hover:text-primary">stephenquanssh@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright Text ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 ElyséeDev - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
