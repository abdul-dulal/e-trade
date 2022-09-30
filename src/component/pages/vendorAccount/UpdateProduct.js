import React from "react";
import "quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import useUploadproduct from "../../hooks/useUploadProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit";
import { toast } from "react-toastify";
const AddProduct = ({ popup, setPopup, editProduct }) => {
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const { deleteRetch } = useUploadproduct(user);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  const imgStoreKey = "62b824b8fcaa7767525638a0ce8e3079";

  const onSubmit = (data) => {
    const img = data?.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const products = {
            img: result.data.url,
            title: data.name,
            category: data.option,
            user: user.email,
            tags: data.tag,
            price: data.regular,
            price2: data.sale,
          };
          fetch(
            `http://localhost:3000/product/update_product/${editProduct._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(products),
            }
          )
            .then((response) => {
              toast("Prodcut successfully update..");
              deleteRetch();
              return response.json();
            })
            .then((data) => {});
        }
      });

    reset();
  };

  return (
    <div>
      {popup ? (
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-50 mt-12 ">
          <div className="relative my-6 w-11/12 md:w-4/5 m-auto bg-white ">
            <div className=" container border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className=" my-10 flex justify-between">
                <h2 className="text-2xl  font-semibold">Update Product</h2>
                <button
                  className="text-xl font-semibold bg-transparent text-gray-300"
                  onClick={() => setPopup(false)}
                >
                  X
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="border-solid border border-gray-200"></p>
                <div className="flex flex-wrap justify-between my-5">
                  <label class="w-64 flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                    <BsFillCloudArrowUpFill className="text-5xl" />
                    <span className="font-semibold">Upload a Product</span>
                    <input
                      type="file"
                      {...register("img")}
                      className="hidden"
                    />
                  </label>
                  <div>
                    <label className="block">Product Name</label>
                    <input
                      type="text"
                      defaultValue={editProduct?.title}
                      {...register("name")}
                      className=" md:w-72 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-10 my-5">
                  <div>
                    <label className="block">REGULAR PRICE</label>
                    <input
                      type="number"
                      defaultValue={editProduct?.price}
                      {...register("regular")}
                      className=" md:w-72 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block">SALE PRICE</label>
                    <input
                      type="number"
                      defaultValue={editProduct?.price2}
                      {...register("selling")}
                      className=" md:w-72 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between my-5">
                  <div>
                    <label className="block">Category</label>
                    <select
                      defaultValue={editProduct?.category}
                      {...register("option")}
                      className=" md:w-72 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option>cleaning</option>
                      <option>cooking</option>
                      <option>women</option>
                      <option>flower</option>
                      <option>food</option>
                      <option>health &amp; Beauty</option>
                      <option>electronic</option>
                      <option>sport</option>
                      <option>men</option>
                      <option>Home &amp; Lifestyle</option>
                      <option>Toys &amp; Fun</option>
                    </select>
                  </div>
                  <div>
                    <label className="block">Tags</label>
                    <input
                      type="text"
                      defaultValue={editProduct?.tags}
                      {...register("tag")}
                      className=" md:w-72 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>
                </div>
                <div style={{ width: "100%", height: 50 }}>
                  <div ref={quillRef} />
                </div>
                <br />
                <button
                  type="submit"
                  className="bg-purple-600 h-10 w-40 text-white mt-14 mb-10"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddProduct;
