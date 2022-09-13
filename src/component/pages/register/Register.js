import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "../../shered/Loading";
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";

import Breadcumb from "../../shered/Breadcumb";
import auth from "../../../FirebaseInit";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);
  const [customer, setcustomer] = useState("customer");
  const [vendor, setvendor] = useState("customer");
  console.log(vendor);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, luser, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
    // if (vendor === "vendor") {
    //   const newUser = {
    //     img: "",
    //     status: vendor,
    //     user: data.email,
    //     name: data.store,
    //   };
    //   fetch("https://gentle-inlet-09370.herokuapp.com/customer", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newUser),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Success:", data);
    //     });
    // }
  };

  if (luser) {
    console.log(user);
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }
  const hadleCapctha = () => {
    setVerified(true);
  };

  return (
    <div className="h-screen">
      <Breadcumb tag="Register" />
      <div className="text-center text-2xl font-bold text-purple-600 py-8 space-x-2">
        <button onClick={() => navigate("/register")}>Register</button>
        <span>|</span>
        <button className="text-black" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>

      <div className="container  w-full flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold uppercase block my-3">Email</label>

          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "add special digit",
                },
              })}
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <label>
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label>
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500 mt-2 text-xl">
                {errors.email.message}
              </span>
            )}
          </label>
          <label>
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500 ">
                {errors.email.message}
              </span>
            )}
          </label>
          <br />
          <label className="font-semibold uppercase my-3">Password</label>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register(
                "password",
                {
                  required: {
                    value: true,
                    message: "Pawssword is Required",
                  },
                },
                {
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                }
              )}
              className="border-2 border-gray-400 w-80 h-12 px-3  my-3 placeholder:text-purple-400 bg-white rounded-md focus:ring"
            />
          </div>
          <label>
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500 text-xl">
                {errors.password?.message}
              </span>
            )}
          </label>
          <label className="block">
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.email?.message}
              </span>
            )}
          </label>

          {customer ? (
            ""
          ) : (
            <p>
              <label className="block">Store Name</label>

              <input
                {...register("store")}
                type="text"
                placeholder="Enter Store Name"
                className="border-2 border-gray-400 w-80 h-12 px-3  my-2 placeholder:text-purple-400 bg-white rounded-md focus:ring"
              />
            </p>
          )}
          <div className="my-4">
            <p className="my-4">RECAPTCHA</p>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={hadleCapctha}
            />
          </div>
          <label className="block cursor-pointer">
            <input
              type="radio"
              onClick={() => [setcustomer(true), setvendor("customer")]}
              checked={customer}
            />
            <span className="ml-3">I am a customer</span>
          </label>
          <label className="block">
            <input
              type="radio"
              onClick={() => [setcustomer(!customer), setvendor("vendor")]}
              checked={!customer}
            />

            <span className="ml-3">I am a vendor</span>
          </label>
          <label>
            <input
              type="checkbox"
              className="my-4"
              onClick={() => setAgree(!agree)}
            />
            <span
              className={`ml-3 ${agree ? "text-green-700" : "text-red-700"}`}
            >
              I agree to the privacy policy
            </span>
          </label>
          <br />
          <input
            disabled={!verified || !agree}
            type="submit"
            value="Register"
            className={`w-80 h-12 bg-purple-600 text-white rounded-md ${
              !verified || !agree ? "cursor-not-allowed" : "cursor-pointer"
            } `}
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
