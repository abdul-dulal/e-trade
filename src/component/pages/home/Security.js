import React from "react";
import support from "../../../assets/support.png";
import deliveriy from "../../../assets/network.png";
import payment from "../../../assets/payment.png";

const Security = () => {
  return (
    <div className="lg:px-20 md:px-10 px-6 flex flex-wrap mt-16 justify-between space-y-5  items-center ">
      <div className="flex mt-3 ">
        <img src={support} className="w-14" alt="" />
        <div className="ml-6">
          <h2 className="text-xl font-bold">Free Shipping</h2>
          <p>Free shipping on all the order</p>
        </div>
      </div>
      <div className="flex ">
        <img src={deliveriy} className="w-14" alt="" />
        <div className="ml-6">
          <h2 className="text-xl font-bold">Support 24/7</h2>
          <p>Contact us 24 hours a day, 7 days a </p>
        </div>
      </div>
      <div className="flex ">
        <img src={payment} className="w-14" alt="" />
        <div className="ml-6">
          <h2 className="text-xl font-bold">Money Return</h2>
          <p>Return within 30 days for an exchange</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
