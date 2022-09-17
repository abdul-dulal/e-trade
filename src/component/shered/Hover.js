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
  // const [popup, setPopup] = React.useContext(backgroundContext);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalDta, setmodalData] = useState();
  const { refetch } = useWishlist();
  const { reload } = useCart();

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleview = (id) => {
    // console.log(id);
    // fetch(`http://localhost:3000/product/edit-product/${id}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setPopup(true);
    //     setLoading(true);
    //     setmodalData(result);
    //   });
    setPopup(true);
  };
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
    fetch("http://localhost:3000/wishlist/post-wishlistItems", {
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

    fetch("http://localhost:3000/cart/postCart", {
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
      });
  };

  return (
    <div>
      <div
        className={`flex gap-4 justify-center bg-primary  h-10 py-1  w-full    rounded accessories 
        }`}
      >
        <img
          onClick={() => handleview(data._id)}
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

      <Modal
        popup={popup}
        setPopup={setPopup}
        // data={modalDta}
        // loading={loading}
        data={data}
      />
    </div>
  );
};

export default Hover;
