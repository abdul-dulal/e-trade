import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
const VendorReviews = ({ review }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  let textInput = React.createRef();

  let onOnclickHandler = () => {
    const message = textInput.current.value;
    if (message === "") {
      toast("addes reviews");
    }
    textInput.current.value = "";
  };

  return (
    <div className="flex justify-between my-10">
      <div className="  ">
        <div className="flex gap-14">
          {review.reviewImg ? (
            <img
              src={review?.reviewImg}
              className="h-28 w-28 rounded-sm"
              alt=""
            />
          ) : (
            <h1 className="text-3xl mt-20 font-serif lg:mb-96">
              There are no review
            </h1>
          )}
          <div className="">
            <h2>{review?.reviewName}</h2>
            <h2>{review?.review}</h2>
          </div>
        </div>
      </div>
      <div className=" w-96 shadow-lg h-80 px-5 space-y-2">
        <h2 className="text-xl font-semibold">Add a review</h2>
        <div className="flex">
          <p>Your Ratting : </p>
          <div className="flex items-center ml-3 ">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={18}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  className={`cursor-pointer mr-1 ${
                    hoverValue || currentValue > index
                      ? "text-red-700"
                      : "text-gray-500"
                  }`}
                />
              );
            })}
          </div>
        </div>
        <p>Your Review :</p>

        <textarea
          rows="4"
          cols="42"
          className="bg-gray-100 px-3 pt-3 border-2 focus:outline rounded-sm"
          ref={textInput}
          type="text"
        />

        <button
          onClick={onOnclickHandler}
          className="h-10 w-24 bg-primary text-white rounded-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VendorReviews;
