import React from "react";

const Feedback = ({ review }) => {
  // let { review, reviewName, reviewImg } = review;
  return (
    <div>
      <div className="relative">
        <div className="ribbon p-10">
          <h1>{review.review}</h1>
        </div>
      </div>
      <div className="mt-8 flex  gap-6">
        <img src={review.reviewImg} className="h-24 w-24 rounded-full" alt="" />
        <h1 className="text-xl mt-3 font-serif">{review.reviewName}</h1>
      </div>
    </div>
  );
};

export default Feedback;
