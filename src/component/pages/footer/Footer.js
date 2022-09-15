import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1F2937] container grid lg:grid-cols-4 md:grid-cols-2  w-full py-20  lg:space-y-0 space-y-8 ">
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">About Us</h2>
        <ul className="text-white font-semibold">
          <li>About Us</li>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">
          UseFull link
        </h2>
        <ul className="font-semibold">
          <li>Returns</li>
          <li>Support Policy</li>
        </ul>
      </div>
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">
          follow us
        </h2>
        <ul className="font-semibold">
          <a href="https://www.facebook.com/" className="block" target="blank">
            Facebook
          </a>
          <a href="instagram.com" target="blank" className="block">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="blank" className="block">
            Linkeding
          </a>
          <a href="https://twitter.com/" className="block">
            Twiter
          </a>
        </ul>
      </div>
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">
          SUBSCRIBE
        </h2>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <input
          type="text"
          placeholder=" example@gmail.com"
          className="h-10 w-72 px-1"
        />{" "}
        <br />
        <input
          type="submit"
          value="SUBSCRIBE"
          className="bg-primary py-3 px-6 mt-3"
        />
      </div>
    </div>
  );
};

export default Footer;
