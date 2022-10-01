import axios from "axios";
import React from "react";
import { useState } from "react";

const CompareProduct = ({ setCompare }) => {
  const handleDefault = () => {
    axios
      .get("https://eduworld-backend.vercel.app/get_default")
      .then((res) => setCompare(res.data));
  };

  return (
    <div>
      <div className="flex  justify-between   my-10 ">
        <div>
          <select className="w-64 h-12 px-3 bg-white border">
            <option selected onClick={() => handleDefault()}>
              Default
            </option>
            <option> Price : High to Low </option>
            <option> Price : Low to High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
