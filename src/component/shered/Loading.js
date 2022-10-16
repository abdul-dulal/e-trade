import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center my-10  lg:px-20 md:px-10 px-5 ">
      <ThreeCircles
        height="100"
        width="100"
        color="#FC9135"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loading;
