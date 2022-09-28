import React, { useState } from "react";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";

const CartTable = ({ info, total, setTotal }) => {
  const [increment, setIncrement] = useState(1);
  const { img, price, price2, name, _id } = info;
  const { reload } = useCart();
  total = increment * price;

  setTotal(total);
  const removeItems = (id) => {
    fetch(`https://eduworld-backend.vercel.app/cart/deleteCart-item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reload();
        toast("Remove item from wishlist");
      });
  };
  return (
    <>
      <tr>
        <th>
          <img src={img} className="w-20 h-20" alt="" />
        </th>
        <td>{name}</td>
        <td className="space-x-2">
          <span>${price}</span>
          <span>-</span>
          <span className="line-through ">${price2}</span>
        </td>
        <td>
          <div className="space-x-4 text-xl font-bold text-[#6B7280] border-2 h-10    w-28  flex items-center justify-center">
            <button
              onClick={() => setIncrement(increment - 1)}
              className={`cursor-pointer  ${
                increment <= 1 ? "cursor-not-allowed" : ""
              }`}
            >
              -
            </button>
            <span className="text-xl">{increment}</span>
            <button
              disabled={increment >= 10}
              onClick={() => setIncrement(increment + 1)}
              className={`cursor-pointer ${
                increment >= 10 ? "cursor-not-allowed" : ""
              }`}
            >
              +
            </button>
          </div>
        </td>
        <td>${total}</td>
        <td
          onClick={() => removeItems(_id)}
          className="text-2xl cursor-pointer"
        >
          X
        </td>
      </tr>
    </>
  );
};

export default CartTable;
