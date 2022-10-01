import React from "react";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
const ModalDetails = ({ data, price }) => {
  const { reload } = useCart();
  const handleRemove = () => {
    fetch(
      `https://e-trade-server.vercel.app/cart/deleteCart-item/${data._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast("Remove items from cart");
        reload();
      });
  };
  return (
    <div>
      <div className="flex gap-3 px-3 justify-between m-2">
        <img src={data.img} className="w-12 h-12 " alt="" />
        <div>
          <h2>{data.name}</h2>
          <p> Price ${data.price}</p>
          <p>Quantity {data.quantity}</p>
        </div>
        <p className="text-xl cursor-pointer" onClick={handleRemove}>
          x
        </p>
      </div>
    </div>
  );
};

export default ModalDetails;
