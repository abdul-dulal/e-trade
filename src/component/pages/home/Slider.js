import React from "react";
import { Pagination, A11y, Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "./main.css";

import slider1 from "../../../assets/slider/slider1.jpg";
import slider2 from "../../../assets/slider/slider3.jpg";
import slider3 from "../../../assets/slider/slider2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className=" my-10 mb-14">
      <div className="">
        <Swiper
          modules={[Pagination, A11y, Autoplay, Lazy]}
          pagination={{ clickable: true }}
          // slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={true}
          lazy={true}
        >
          <SwiperSlide>
            <img
              src={slider1}
              onClick={() => navigate("/shop")}
              className="cursor-pointer"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider2}
              onClick={() => navigate("/shop")}
              className="cursor-pointer"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider3}
              onClick={() => navigate("/shop")}
              className="cursor-pointer"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
