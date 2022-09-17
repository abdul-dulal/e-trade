import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../shered/Loading";

const Vendorslider = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/vendor/vendor")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="container mt-20">
      <h1 className="text-3xl font-serif text-center mb-10">Our Vendors</h1>

      {loading ? (
        <Swiper
          breakpoints={{
            425: {
              width: 425,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1020: {
              width: 1020,
              slidesPerView: 3,
            },
          }}
          modules={[A11y, Autoplay]}
          slidesPerView={4}
          autoplay={true}
        >
          {vendors.map((vendor) => (
            <SwiperSlide key={vendor._id}>
              <div
                className="border-2  py-2 px-2 cursor-pointer"
                onClick={() => navigate(`/shop/${vendor._id}`)}
              >
                <img src={vendor.img} className="h-14 w-14" alt="" />
                <p className="font-semibold">{vendor.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Vendorslider;
