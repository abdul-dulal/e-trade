import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cart from "../../../assets/icon/wishlist.png";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import Breadcumb from "../../shered/Breadcumb";
import Rattings from "../../shered/Ratting";
import Moreinfo from "./MoreInfo";
import Loading from "../../shered/Loading";
import axios from "axios";
const WishlistItemDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [increment, setIncrement] = useState(1);
  const { id } = useParams();
  const fbShare = "https://www.facebook.com/";
  const twShare = "https://twitter.com/";
  const lkShare = "https://www.linkedin.com/feed/";

  useEffect(() => {
    axios
      .get(`https://e-trade-server.vercel.app/wishlist/wishlist-items/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(true);
      });
  }, [id]);
  return (
    <div>
      <Breadcumb tag="Shop-Product" />
      {loading ? (
        <>
          <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-6  container py-10 ">
            <div>
              <img
                src={data?.img}
                className="w-9/12 block mx-auto  rounded-lg border-2 p-4"
                alt=""
              />
            </div>

            <div className="lg:ml-0 md:ml-0 ml-10">
              <h2 className="text-2xl mb-2 ">{data?.name}</h2>
              {data?.ratting ? (
                <Rattings ratting={data?.ratting} />
              ) : (
                <p className="mt-3">★★★★★</p>
              )}
              <br />
              <br />
              <div className="flex  text-2xl text-[#6B7280] ml-0">
                <p>${data?.price}</p>

                <span>-</span>
                <p className="line-through">${data?.price2}</p>
              </div>
              <p className="mb-5">
                Chocolate is a food product made from roasted and ground cacao
                pods, that is available as a liquid, solid or paste, on its own
                or as a flavoring agent in other foods. Chocolate is a food
                product made from roasted and ground cacao pods, that is
                available as a liquid, solid or paste, on its own or as a
                flavoring agent in other foods
              </p>
              <p className="border-solid border-2 bg-gray-100 my-10"></p>
              <div className="flex gap-6 items-center ">
                <div className="space-x-4 text-xl font-bold text-[#6B7280] border-2 h-10    w-28  flex items-center justify-center">
                  <button
                    disabled={increment <= 1}
                    onClick={() => setIncrement(increment - 1)}
                    className="cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xl">{increment}</span>
                  <button
                    disabled={increment >= 10}
                    onClick={() => setIncrement(increment + 1)}
                    className="cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-3 items-center">
                  <button className=" bg-gray-800 text-white text-sm w-36 h-10 uppercase rounded-md hover:bg-purple-600 hover:text-white duration-500">
                    Add to cart
                  </button>
                  <img
                    src={cart}
                    className=" w-8 h-8 cursor-not-allowed"
                    alt=""
                  />
                </div>
              </div>
              <p className=" mt-4">Category: {data?.category}</p>
              <p className="mb-8 ">
                Tags: <span className="font-semibold">{data?.tags}</span>
              </p>
              <div className="flex gap-7 ">
                <FacebookShareButton url={fbShare}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={twShare}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LineShareButton url={lkShare}>
                  <LinkedinIcon size={32} round={true} />
                </LineShareButton>
              </div>
              <p className="border-solid border-2 bg-gray-100 my-10"></p>
              <div>
                <p>Sold by</p>
                <p className="mb-10 text-xl font-semibold">
                  {data?.vendorName}
                </p>
              </div>
            </div>
          </div>

          <Moreinfo data={data} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default WishlistItemDetails;
