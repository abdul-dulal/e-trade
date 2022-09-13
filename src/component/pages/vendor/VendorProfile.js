import React from "react";
import useVendor from "../../hooks/useVendor";
import Rattings from "../../shered/Ratting";

const Profile = ({ user }) => {
  const { products } = useVendor(user);
  return (
    <div>
      <div className="container flex justify-between flex-wrap mt-10 gap-10">
        <div className="border-2 px-4 py-4  ">
          <h4>Products</h4>
          <p>{products?.length}</p>
        </div>
        <div className="border-2 px-4 py-4  ">
          <h4>Sells</h4>
          <p>1</p>
        </div>
        <div className="border-2 px-4 py-4  ">
          <h4>Reviews</h4>
          <p>1</p>
        </div>
        <div className="border-2 px-4 py-4  ">
          <h4>Positive Rating</h4>
          <p>1</p>
        </div>
        <div className="border-2 px-4 py-4  ">
          <h4>Avarage Ratting</h4>
          <p>1</p>
        </div>
      </div>
      <div className="my-14">
        <h2 className="text-2xl font-semibold">Product Ratting and Reviews</h2>
        {products.map((e) => (
          <div>
            {e.review && (
              <div className="flex gap-20 mt-5 border-2 p-4">
                <div>
                  <img
                    src={e.reviewImg}
                    className="h-20 w-20 rounded-full"
                    alt=""
                  />
                  <p className="mt-3 ml-3">{e.reviewName}</p>
                </div>
                <div>
                  <div className="flex gap-4">
                    <img src={e.img} className="h-32 w-32" alt="" />
                    <span className="mt-5">{e.title}</span>
                  </div>
                  <div className="">
                    <Rattings ratting={e.ratting} /> <br />
                    <span className="ml-[-60px]">{e.review}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
