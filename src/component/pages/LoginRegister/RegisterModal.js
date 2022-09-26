import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit";
import login from "../../../assets/login-vector.png";
import ReCAPTCHA from "react-google-recaptcha";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import remove from "../../../assets/icon/delete.png";
import Loading from "../../shered/Loading";
import Sociallogin from "../../shered/Sociallogin";
const RegisterModal = ({ openRegister, setOpenRegister }) => {
  const [agree, setAgree] = useState(false);
  const [verified, setVerified] = useState(false);
  const [customer, setcustomer] = useState("customer");
  const [vendor, setvendor] = useState("customer");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, luser, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
    if (vendor === "vendor") {
      const newUser = {
        img: "",
        status: vendor,
        follower: 0,
        user: data.email,
        name: data.store,
      };
      fetch("https://e-trade-server.vercel.app/vendor/vendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });
    }
  };

  if (luser) {
    return navigate("/");
  }

  if (loading) {
    return <Loading />;
  }
  const hadleCapctha = () => {
    setVerified(true);
  };

  return (
    <div>
      <div>
        {openRegister ? (
          <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0   z-50 mt-8 ">
              <div className=" lg:w-7/12 md:w-4/5 m-auto mt-10">
                <img
                  src={remove}
                  onClick={() => setOpenRegister(false)}
                  className="cursor-pointer border-2 border-white"
                  alt=""
                />
                <div className=" rounded   bg-white  ">
                  <div className="grid lg:grid-cols-2    ">
                    <div
                      className="bg-[#0D6EFD] p-4 py-20 text-white
                   "
                    >
                      <h1 className="text-3xl font-serif">Register</h1>
                      <p className="text-[18px] mt-2">
                        Enter your personal details and start journey with us
                      </p>
                      <img src={login} className="mt-12" alt="" />
                    </div>
                    <div className="lg:my-20">
                      <div className="">
                        <p className="text-2xl font-serif text-center lg:mt-0 md:mt-5 mt-5">
                          Register with Social Profile
                        </p>
                        <Sociallogin />
                      </div>
                      <div class="divider">Or Email Account</div>

                      <div className="w-full flex items-center justify-center">
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)}>
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
                                onClick={() => [
                                  setcustomer(true),
                                  setvendor("customer"),
                                ]}
                                checked={customer}
                              />
                              <span className="ml-3">I am a customer</span>
                            </label>
                            <label className="block">
                              <input
                                type="radio"
                                onClick={() => [
                                  setcustomer(!customer),
                                  setvendor("vendor"),
                                ]}
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
                                className={`ml-3 ${
                                  agree ? "text-green-700" : "text-red-700"
                                }`}
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
                                !verified || !agree
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              } `}
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
