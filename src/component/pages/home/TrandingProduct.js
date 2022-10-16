import React, { useState } from "react";
import { backgroundContext } from "../../../App";
import BestSelling from "./BestSelling";
import Featured from "./Featured";
import NewArrival from "./NewArrival";

const TrandingProduct = () => {
  const [showProduct, setShowproduct] = useState("best");
  const [popup] = React.useContext(backgroundContext);

  return (
    <div className={`my-16 `}>
      <div className="flex justify-between items-center lg:px-20 md:px-10 px-5">
        <div>
          <h1 className="text-2xl font-semibold text-center lg:block md:block hidden md:mt-8 ">
            Trending Products
          </h1>
        </div>
        <div>
          <div className="flex justify-center space-x-4 mt-10 mr-5">
            <button
              onClick={() => setShowproduct("best")}
              className={`uppercase  border-b-2 border-transparenthover:border-b-2  hover:border-primary hover:text-primary    text-black font-semibold ${
                showProduct === "best"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              Best Selling
            </button>
            <button
              onClick={() => setShowproduct("top")}
              className={`uppercase border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary   text-balck font-semibold  ${
                showProduct === "top"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setShowproduct("new")}
              className={`uppercase  border-b-2 border-transparenthover:border-b-2  hover:border-primary hover:text-primary  text-balck font-semibold   ${
                showProduct === "new"
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              New Arrival
            </button>
          </div>
        </div>
      </div>
      {showProduct === "best" && <BestSelling />}
      {showProduct === "top" && <Featured />}
      {showProduct === "new" && <NewArrival />}
    </div>
  );
};

export default TrandingProduct;
