import React, { useState } from "react";
import Moreproduct from "./MoreProduct";
import VendorReviews from "./VendorReviews";
import VendorView from "./VendorView";

const Moreinfo = ({ data }) => {
  const [showdata, setShowdata] = useState("vendor");

  return (
    <div className="container">
      <div className="flex justify-center space-x-4 mt-10 ">
        <button
          onClick={() => setShowdata("vendor")}
          className={`text-xl font-semibold ${
            showdata === "vendor" ? "border-b-4 border-purple-600" : ""
          }`}
        >
          Vendor's Info
        </button>
        <button
          onClick={() => setShowdata("review")}
          className={` text-xl font-semibold text-black ${
            showdata === "review" ? "border-b-4 border-purple-600" : ""
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setShowdata("more")}
          className={` text-xl  font-semibold  ${
            showdata === "more" ? "border-b-4 border-purple-600" : ""
          }`}
        >
          More Product
        </button>
      </div>
      <p className=" border-solid border bg-gray-100 my-5"></p>

      {showdata === "vendor" && <VendorView data={data} />}
      {showdata === "review" && <VendorReviews review={data} />}
      {showdata === "more" && <Moreproduct category={data.category} />}
    </div>
  );
};

export default Moreinfo;
