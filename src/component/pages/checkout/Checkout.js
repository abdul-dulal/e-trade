import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit";
import useCart from "../../hooks/useCart";
import Breadcumb from "../../shered/Breadcumb";

const Checkout = () => {
  const { cartInfo } = useCart();
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/get_userInfo/${user?.email}`)
      .then((res) => setUserInfo(res.data));
  }, [user?.email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const price = cartInfo?.map((e) => e.price);
  const totalPrice =
    price?.length > 0 &&
    price.reduce((x, y) => {
      return x + y;
    });

  const onSubmit = (data) => {
    const newUser = {
      phone: data.phone,
      name: data.name,
      user: user.email,
      city: data.city,
      state: data.state,
      country: data.country,
      address: data.address,
      zip: data.zip,
    };
    navigate("/payment", { state: { totalPrice, cartInfo } });
    if (!userInfo) {
      axios.post("http://localhost:3000/user/post-userInfo", {
        newUser,
      });
    }
  };

  return (
    <div>
      <Breadcumb tag="Checkout" />
      <div className="">
        <h2 className="text-2xl  my-8 font-semibold container">
          Billing Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap justify-between  gap-12   container">
            <div>
              <div className="flex gap-5 my-3">
                <div>
                  <label className="block my-2"> Name</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                    {...register("fname", {
                      required: {
                        value: true,
                        message: "Please Enter  name ",
                      },
                    })}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="block my-2">Email</label>
                  <input
                    type="text"
                    required={userInfo}
                    value={user?.email}
                    {...register("email", {})}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">Phone</label>
                  <input
                    type="text"
                    required={userInfo}
                    defaultValue={userInfo?.phone}
                    {...register("phone", {})}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block my-2">Zip Code</label>
                  <input
                    type="text"
                    required={userInfo}
                    defaultValue={userInfo?.zip}
                    {...register("zip", {})}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">City</label>
                  <input
                    type="text"
                    required={userInfo}
                    defaultValue={userInfo?.city}
                    {...register("city", {})}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block my-2">Street Address</label>
                  <input
                    type="text"
                    defaultValue={userInfo?.address}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="flex gap-10 my-3">
                <div>
                  <label className="block my-2">State</label>
                  <input
                    defaultValue={userInfo?.state}
                    {...register("state", {})}
                    type="text"
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div>
                  <label className="block my-2">Country</label>
                  <input
                    type="text"
                    required={userInfo}
                    {...register("country")}
                    defaultValue={userInfo?.country}
                    className=" md:w-96 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <label>
                    {errors.country?.type === "required" && (
                      <p className="label-text-alt text-red-500 text-xl">
                        {errors.country.message}
                      </p>
                    )}
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl    font-semibold"> Your order</h2>
              <div className="bg-gray-200 px-5 py-8 rounded-md ">
                <div className="flex justify-between gap-40 mb-8">
                  <h2 className="text-xl font-semibold">Product</h2>
                  <p className="text-xl font-semibold">Price</p>
                </div>
                <p className="border-solid border-2 border-gray-300 mb-5"></p>
                <div className="">
                  {cartInfo?.map((e) => (
                    <div className="flex items-center justify-between gap-4 space-y-6">
                      <h2 className="mt-6">{e.name}</h2>
                      <p>$ {e.price}</p>
                    </div>
                  ))}
                </div>
                <p className="border-solid border-2 border-gray-300 my-5"></p>

                <div className="flex  justify-between">
                  <p className="">Shiping</p>
                  <p className=" ">Free Shiping</p>
                </div>
                <p className="border-solid border-2 border-gray-300 my-5"></p>
                <div className="flex  justify-between">
                  <p className="text-2xl">Total</p>
                  <p className="text-2xl">
                    $ {location?.state ? location?.state?.total : totalPrice}
                  </p>
                </div>
                <input
                  type="submit"
                  value="Place order"
                  className="uppercase bg-primary mt-6 cursor-pointer h-12 w-full rounded-full text-white hover:bg-gray-600"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
