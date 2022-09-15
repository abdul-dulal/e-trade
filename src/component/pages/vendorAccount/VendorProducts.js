import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit";
import useUploadproduct from "../../hooks/useUploadProduct";
import AddProduct from "./AddProduct";
import Producttable from "./Producttable";

const VendorProducts = () => {
  const [popup, setPopup] = useState(false);

  const [searchTerm, setsearchTerm] = useState();
  const [user] = useAuthState(auth);

  const { product } = useUploadproduct(user);

  return (
    <div className="container">
      <div className=" my-5 flex flex-wrap justify-between  ">
        <input
          type="text"
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search Product.."
          className="h-10 w-48 bg-white placeholder:text-gray-400 px-3 focus:ring"
        />
        <button
          className="bg-purple-600 text-white font-semibold rounded-sm h-10 w-32 cursor-pointer"
          onClick={() => {
            setPopup(true);
          }}
        >
          Add Product
        </button>
      </div>
      {/* <div className="">
        {uploadProduct
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title?.toLowerCase().includes(searchTerm?.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <Producttable
                key={val._id}
                product={val}
                searchTerm={searchTerm}
              />
            );
          })}
      </div> */}
      <div class="overflow-x-auto mt-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="text-[15px]">IMG</th>
              <th className="text-[15px]">Name</th>
              <th className="text-[15px]">PRICE</th>
              <th className="text-[15px]">Stock</th>
              <th className="text-[15px]">acction</th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product?.map((e) => <Producttable product={e} key={e._id} />)}
          </tbody>
        </table>
      </div>
      <AddProduct popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default VendorProducts;
