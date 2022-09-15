import axios from "axios";
import React, { useEffect, useState } from "react";
// import Feedback from "./Feedback";

import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Loading from "../../shered/Loading";

const ClientsFeedback = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://e-trade-server.vercel.app/review/all-review`)
      .then((res) => {
        setReviews(res.data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="container  bg-gray-200 mb-20">
      <h1 className="text-2xl my-16 font-serif pt-8">Users Feedback</h1>
      <div className=" py-10">
        {loading ? (
          <Swiper
            breakpoints={{
              425: {
                width: 425,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              1360: {
                width: 1360,
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div>
                  <div className="relative">
                    <div className="ribbon p-10">
                      <h1>{review.review}</h1>
                    </div>
                  </div>
                  <div className="mt-8 flex  gap-6">
                    <img
                      src={review.reviewImg}
                      className="h-24 w-24 rounded-full"
                      alt=""
                    />
                    <h1 className="text-xl mt-3 font-serif">
                      {review.reviewName}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ClientsFeedback;
