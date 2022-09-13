import React from "react";
import banner1 from "../../../assets/banner/sub-banner-1.jpg";
import banner2 from "../../../assets/banner/sub-banner-2.jpg";
const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12  my-14 container">
      <div
        className="ImgHover w-full lg:py-16 md:py-16 py-10 lg:my-14 md:mt-10 mt-10 hover:scale-110 duration-1000 "
        style={{
          background: `url(${banner2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between">
          <div></div>
          <div className="px-8">
            <p>Weekend 25% off</p>
            <h1 className="text-2xl font-bold ">Potato crunchy</h1>
            <h1 className="text-2xl font-bold ">chips</h1>
            <button className="w-32 h-10 bg-primary rounded text-white mt-3">
              Show Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:py-16 md:py16 py-10 lg:my-14  hover:scale-110 duration-1000"
        style={{
          background: `url(${banner1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between">
          <div></div>
          <div className="px-8">
            <p>Weekend 25% off</p>
            <h1 className="text-2xl font-bold ">Healthy oatmeal </h1>
            <h1 className="text-2xl font-bold ">waffle</h1>
            <button className="w-32 h-10 bg-primary rounded text-white mt-3">
              Show Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
