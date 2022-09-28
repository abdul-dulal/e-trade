import React, { useEffect, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit";
import axios from "axios";

const Setting = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const [storeName, setStoreName] = useState();

  useEffect(() => {
    axios
      .get(`https://eduworld-backend.vercel.app/vendor/user/${user?.email}`)
      .then((res) => setStoreName(res.data));
  }, [user?.email]);

  const imgStoreKey = "62b824b8fcaa7767525638a0ce8e3079";

  const onSubmit = (data) => {
    console.log(data.store);
    const img = data?.img[0];
    const formData = new FormData();
    formData.append("image", img);
    fetch(`https://api.imgbb.com/1/upload?key=${imgStoreKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const store = {
            img: result.data.url,
            name: data.store,
          };

          fetch(
            `https://eduworld-backend.vercel.app/vendor/update-vendorInfo/${storeName.user}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(store),
            }
          )
            .then((response) => {
              toast("Vendor Info successfully Update..");
              response.json();
            })
            .then((data) => {});
        }
      });
  };
  return (
    <div className="container mt-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 mb-16">
          <span className="font-semibold">Store Name :</span>
          <input
            type="text"
            defaultValue={storeName?.name}
            {...register("store")}
            className="h-10 w-60 bg-white ml-3 px-2 focus:ring"
          />
        </div>
        <div className="flex gap-5 mb-5">
          <span className="font-semibold block">Store Image :</span>
          <label class="w-64 flex flex-col items-center px-2 py-4 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white text-black ease-linear transition-all duration-150">
            <BsFillCloudArrowUpFill className="text-5xl" />
            <span className="font-semibold">Upload a Product</span>
            <input type="file" {...register("img")} className="hidden" />
          </label>
        </div>
        <p className="">
          Take an icon from here to match your store :
          <a
            href="https://www.flaticon.com/"
            className="underline ml-2"
            target="blank"
          >
            Click
          </a>
        </p>
        <input
          type="submit"
          value="Update Setting"
          className="h-10 w-64 bg-primary text-white rounded-sm cursor-pointer  block mx-auto mt-5"
        />
      </form>
    </div>
  );
};

export default Setting;
