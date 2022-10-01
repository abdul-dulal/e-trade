import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiTwotoneEdit } from "react-icons/ai";
import cancel from "../../../assets/icon/delete.png";
import UpdateProduct from "./UpdateProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import useUploadproduct from "../../hooks/useUploadProduct";
import auth from "../../../FirebaseInit";
import Loading from "../../shered/Loading";
const Producttable = ({ product }) => {
  const [popup, setPopup] = useState(false);
  const [editProduct, setEditproduct] = useState();
  const { img, price, price2, title, _id } = product;
  const [user] = useAuthState(auth);
  const { deleteRetch, isLoading } = useUploadproduct(user);
  const handleEdit = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/edit-product/${id}`)
      .then((res) => res.json())
      .then((data) => setEditproduct(data));
    setPopup(true);
  };

  const handleRemove = () => {
    fetch(`http://localhost:3000/delete-product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        toast("Delete Product");
        deleteRetch();
        return res.json();
      })
      .then((data) => {});
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <tr>
          <th>
            <img src={img} className="w-20 h-20" alt="" />
          </th>
          <td>{title}</td>
          <td className="space-x-2">
            <span>${price}</span>
            <span>-</span>
            <span className="line-through ">${price2}</span>
          </td>
          <td> In Stock</td>

          <td>
            <div className="flex items-center">
              <td
                className="text-2xl cursor-pointer text-purprle-200 font-semibold"
                onClick={() => handleEdit(_id)}
              >
                <AiTwotoneEdit />
              </td>
              <img
                src={cancel}
                className="w-7 h-7 cursor-pointer "
                onClick={() => handleRemove(_id)}
                alt=""
              />
            </div>
          </td>
        </tr>
      )}
      <UpdateProduct
        popup={popup}
        setPopup={setPopup}
        editProduct={editProduct}
      />
    </>
  );
};

export default Producttable;
