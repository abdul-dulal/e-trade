import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="block mx-auto">
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
