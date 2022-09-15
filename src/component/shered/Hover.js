import React, { useState } from "react";
import view from "../../assets/icon/view.png";
import wishlist from "../../assets/icon/wishlist.png";
import cart from "../../assets/icon/cart.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "../hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../FirebaseInit";
import Modal from "./Modal";
import useWishlist from "../hooks/useWishlist";

const Hover = ({ data }) => {
  const [popup, setPopup] = useState(false);
  const { refetch } = useWishlist();
  const { reload } = useCart();

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleWishlit = () => {
    if (!user) {
      navigate("/login");
    }
    const dataDeatils = {
      name: data?.title,
      img: data.img,
      price: data.price,
      price2: data.price2,
      vendorName: data.vendorName,
      author: data.author,
      category: data.category,
      tags: data.tags,
      review: data.review,
      reviewImg: data.reviewImg,
      reviewName: data.reviewName,
      ratting: data.ratting,
      user: user.email,
    };
    fetch("https://e-trade-server.vercel.app/wishlist/post-wishlistItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataDeatils),
    })
      .then((response) => {
        toast.success("Successfully added to wishlist");
        refetch();
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
        } else {
          toast.error("Already exist into wishlist");
        }
      });
  };

  const handleCart = () => {
    if (!user) {
      navigate("/login");
    }

    const newCart = {
      user: user?.email,
      name: data?.title,
      price: data?.price,
      quantity: 1,
      img: data?.img,
      tags: data?.tags,
      vendorName: data?.vendorName,
    };

    fetch("https://e-trade-server.vercel.app/cart/postCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        toast.success("Successfully added to cart");
        reload();
        return response.json();
      })
      .then((items) => {
        console.log(items);
        toast.success("Successfully added to cart");
      });
  };

  return (
    <div>
      <div className=" flex gap-4 justify-center bg-primary  h-10 py-1  w-full    rounded accessories  ">
        <img
          onClick={() => setPopup(true)}
          src={view}
          className="p-1 bg-white rounded-full  cursor-pointer"
          alt=""
        />
        <img
          src={wishlist}
          onClick={handleWishlit}
          className="p-1 bg-white rounded-full cursor-pointer "
          alt=""
        />

        <img
          src={cart}
          onClick={handleCart}
          className={`p-1 bg-white rounded-full cursor-pointer `}
          alt=""
        />
      </div>

      <Modal popup={popup} setPopup={setPopup} data={data} />
    </div>
  );
};

export default Hover;
