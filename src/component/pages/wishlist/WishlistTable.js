import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WishlistTable = ({ data, refetch }) => {
  const { img, price, price2, name, _id } = data;

  const navigate = useNavigate();

  const removeItems = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3000/wishlist/delete-item/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        refetch();
        toast("Remove item from wishlist");
      });
  };
  return (
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
        <button
          onClick={() => navigate(`/product-details/${_id}`)}
          className="uppercase bg-primary h-10 w-40 rounded-full text-sm text-white hover:bg-gray-700"
        >
          Select option
        </button>
      </td>
      <td onClick={() => removeItems(_id)} className="text-2xl cursor-pointer">
        X
      </td>
    </tr>
  );
};

export default WishlistTable;
