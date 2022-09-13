import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1F2937] container grid lg:grid-cols-4 md:grid-cols-2  w-full py-20  lg:space-y-0 space-y-8 mt-20">
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">About Us</h2>
        <ul className="text-white font-semibold">
          <li>About Us</li>
          <li>Contact</li>
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
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Linkeding</li>
          <li>Twiter</li>
        </ul>
      </div>
      <div className="text-white">
        <h2 className="text-white text-xl font-semibold uppercase">
          SUBSCRIBE
        </h2>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <input type="text" placeholder="hello" className="h-10 w-72" /> <br />
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
