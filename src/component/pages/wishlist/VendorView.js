import React from "react";

const VendorView = ({ data }) => {
  return (
    <div className="my-14">
      <li className="text-[18px]">Vendor Name</li>
      <p className="font-semibold text-xl ml-6">{data?.vendorName}</p>
      <li className="text-[18px]">Vendor Author name:</li>
      <p className="font-semibold text-xl ml-6">{data?.author}</p>
    </div>
  );
};

export default VendorView;
