import React, { useEffect, useState } from "react";
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
import { backgroundContext } from "../../App";

const Hover = ({ data }) => {
  const [popup, setPopup] = useState(false);
  const [popupWith, setPopupWith] = React.useContext(backgroundContext);
  const { refetch } = useWishlist();
  const { reload } = useCart();

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleWishlit = () => {
    if (!user) {
      navigate("/LoginRegister");
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
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
          toast.success("Successfully added to wishlist");
          refetch();
        } else {
          toast.error("Already exist into wishlist");
        }
      });
  };

  const handleCart = () => {
    if (!user) {
      navigate("/LoginRegister");
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

    if (!user) {
      return null;
    } else {
      fetch("https://e-trade-server.vercel.app/cart/postCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCart),
      })
        .then((response) => {
          return response.json();
        })
        .then((items) => {
          if (items.success === true) {
            toast.success("Successfully added to Cart");
            reload();
          } else {
            toast.error("Already exist into Cart");
          }
        });
    }
  };

  return (
    <div>
      <div
        className={`flex gap-4 justify-center bg-primary  h-10 py-1  w-full    rounded accessories 
        }`}
      >
        <img
          src={view}
          onClick={() => {
            setPopup(true);
            setPopupWith(true);
          }}
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
          onClick={() => handleCart()}
          className={`p-1 bg-white rounded-full cursor-pointer `}
          alt=""
        />
      </div>

      <Modal popup={popup} setPopup={setPopup} data={data} />
    </div>
  );
};

export default Hover;
