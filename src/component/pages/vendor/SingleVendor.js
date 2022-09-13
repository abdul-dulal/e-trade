import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Breadcumb from "../../shere/Breadcumb";
import { RiChatFollowUpFill } from "react-icons/ri";

import { toast } from "react-toastify";
import { GrCheckmark } from "react-icons/gr";

import VendorProduct from "./VendorProduct";
import Breadcumb from "../../shered/Breadcumb";
import Profile from "./VendorProfile";
import useFollower from "../../hooks/useFollow";
const Singlevendor = () => {
  const [profile, setprofile] = useState("profile");
  const [follow, setFollow] = useState(false);
  const { id } = useParams();

  const { followers, followerRefetch } = useFollower(id);
  let follower = followers?.follower;
  const handlecFollower = () => {
    const newFollower = parseFloat(follower) + 1;
    const updateFollwer = { follower: newFollower };
    fetch(
      `https://gentle-inlet-09370.herokuapp.com/followers/${followers?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateFollwer),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        followerRefetch();
        toast("following");
      });
    setFollow(!follow);
  };

  const handleunfollow = () => {
    const newFollower = parseFloat(follower) - 1;
    const updateFollwer = { follower: newFollower };
    fetch(
      `https://gentle-inlet-09370.herokuapp.com/followers/${followers?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateFollwer),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        followerRefetch();
        toast("UnFollow");
      });
    setFollow(!follow);
  };

  return (
    <>
      <Breadcumb tag="Vendor" />
      <div className="container">
        <div className="flex justify-between container mt-10 border-2 p-2">
          <div>
            <img
              src={followers?.img}
              className="w-24 h-24 border-2 p-2"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{followers?.name}</h2>
            <p>
              <span>{followers?.follower}</span>
            </p>
          </div>
          <div>
            <div className="h-24 w-24 border-2 p-2 block cursor-pointer ">
              {follow ? (
                <p onClick={handleunfollow}>
                  <GrCheckmark className="text-xl font-bold" />
                  <p className="text-md mt-3 font-semibold text-purple-600">
                    Following
                  </p>
                </p>
              ) : (
                <span className=" text-[#EF4444]" onClick={handlecFollower}>
                  <RiChatFollowUpFill className="text-3xl" />
                  <span className="text-xl ">Follows</span>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-10 ">
          <button
            onClick={() => setprofile("profile")}
            className={`uppercase  py-2 px-6 text-black font-semibold ${
              profile === "profile" ? "bg-purple-600 rounded-md text-white" : ""
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setprofile("product")}
            className={`uppercase  py-2 px-6 text-black font-semibold ${
              profile === "product" ? "bg-purple-600 rounded-md text-white" : ""
            }`}
          >
            Product
          </button>
        </div>
        {profile === "profile" && <Profile user={followers?.user} />}
        {profile === "product" && <VendorProduct user={followers?.user} />}
      </div>
    </>
  );
};

export default Singlevendor;
